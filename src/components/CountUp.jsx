import React, { useEffect, useState, useRef } from 'react';

const easeOutQuart = (t) => 1 - (--t) * t * t * t;

export default function CountUp({ value, duration = 2500 }) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef(null);

  // Parse string for prefix, number, and suffix
  // e.g., "$1,234.56+" -> prefix="$", number=1234.56, suffix="+"
  const stringValue = String(value);
  const match = stringValue.match(/^([^0-9.-]*)([0-9.,-]+)([^0-9.]*)$/);
  
  const prefix = match ? match[1] : '';
  const numStr = match ? match[2].replace(/,/g, '') : stringValue;
  const suffix = match ? match[3] : '';
  
  const target = parseFloat(numStr) || 0;
  const isFloat = numStr.includes('.');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime = null;
    let animationFrame;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      const easedProgress = easeOutQuart(percentage);
      const currentCount = easedProgress * target;

      setCount(currentCount);

      if (progress < duration) {
        animationFrame = requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    animationFrame = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrame);
  }, [hasStarted, target, duration]);

  const displayValue = isFloat ? count.toFixed(1) : Math.floor(count);

  return (
    <span ref={ref}>
      {prefix}{displayValue}{suffix}
    </span>
  );
}
