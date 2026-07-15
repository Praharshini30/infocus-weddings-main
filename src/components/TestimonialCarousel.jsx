import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useAnimationFrame } from 'framer-motion';
import LazyImage from './LazyImage.jsx';

export default function TestimonialCarousel({ testimonials }) {
  const containerRef = useRef(null);
  const scrollRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  // Width of a single loop of testimonials
  const [loopWidth, setLoopWidth] = useState(0);

  // Refs to avoid stale closure state in useAnimationFrame loop
  const isHoveredRef = useRef(false);
  const isDraggingRef = useRef(false);
  const inViewRef = useRef(false);
  const loopWidthRef = useRef(0);

  // Keep refs in sync with state changes
  useEffect(() => {
    isHoveredRef.current = isHovered;
  }, [isHovered]);

  useEffect(() => {
    isDraggingRef.current = isDragging;
  }, [isDragging]);

  useEffect(() => {
    inViewRef.current = inView;
  }, [inView]);

  useEffect(() => {
    loopWidthRef.current = loopWidth;
  }, [loopWidth]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
    const listener = (e) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, []);

  useEffect(() => {
    if (!scrollRef.current) return;
    const resizeObserver = new ResizeObserver(() => {
      if (scrollRef.current) {
        // Total scrollable width is double the single loop size
        setLoopWidth(scrollRef.current.scrollWidth / 2);
      }
    });
    resizeObserver.observe(scrollRef.current);
    return () => resizeObserver.disconnect();
  }, [testimonials]);

  // Intersection Observer
  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.01 }
    );
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const x = useMotionValue(0);
  const lastTimeRef = useRef(0);

  useAnimationFrame((time) => {
    if (reducedMotion || isDraggingRef.current || isHoveredRef.current || !inViewRef.current || loopWidthRef.current === 0) {
      lastTimeRef.current = time;
      return;
    }

    if (lastTimeRef.current === 0) {
      lastTimeRef.current = time;
    }

    const deltaTime = (time - lastTimeRef.current) / 1000;
    lastTimeRef.current = time;

    // Speed: complete one loop (loopWidth px) in 30 seconds
    const speed = loopWidthRef.current / 30;
    let nextX = x.get() - speed * deltaTime;

    // Wrap around for seamless infinite loop
    if (nextX <= -loopWidthRef.current) {
      nextX += loopWidthRef.current;
    }
    x.set(nextX);
  });

  const handlePointerDown = () => {
    setIsDragging(true);
  };

  const handleDragEnd = (event, info) => {
    setIsDragging(false);
    let currentX = x.get();
    if (currentX > 0) {
      currentX -= loopWidthRef.current;
    } else if (currentX <= -loopWidthRef.current) {
      currentX += loopWidthRef.current;
    }
    x.set(currentX);
  };

  // Static fallback if user prefers reduced motion
  if (reducedMotion) {
    return (
      <div className="testimonials-grid manual-scroll">
        {testimonials.map(([quote, name, place, src], index) => (
          <article key={`${name}-${index}`} className="testimonial-card">
            <span className="quote-mark">"</span>
            <p>{quote}</p>
            <div>
              <LazyImage src={src} alt={name} />
              <span>
                <strong>{name}</strong>
                {place}
              </span>
            </div>
          </article>
        ))}
      </div>
    );
  }

  // Duplicate the list of testimonials to create an infinite loop
  const doubledList = [...testimonials, ...testimonials];

  return (
    <div
      ref={containerRef}
      className="testimonials-carousel-wrapper"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        ref={scrollRef}
        className="testimonials-carousel-track"
        style={{ x }}
        drag="x"
        dragConstraints={{ left: -loopWidth * 1.8, right: loopWidth * 0.8 }}
        onPointerDown={handlePointerDown}
        onDragEnd={handleDragEnd}
        dragElastic={0.15}
      >
        {doubledList.map(([quote, name, place, src], index) => (
          <article key={`${name}-${index}`} className="testimonial-card">
            <span className="quote-mark">"</span>
            <p>{quote}</p>
            <div>
              <LazyImage src={src} alt={name} />
              <span>
                <strong>{name}</strong>
                {place}
              </span>
            </div>
          </article>
        ))}
      </motion.div>
    </div>
  );
}
