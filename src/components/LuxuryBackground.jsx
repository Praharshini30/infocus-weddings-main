import React, { useEffect, useRef } from 'react';
import './LuxuryBackground.css';

export default function LuxuryBackground() {
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        containerRef.current.style.setProperty('--x', `${e.clientX}px`);
        containerRef.current.style.setProperty('--y', `${e.clientY}px`);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <div className="luxury-bg-container">
        {/* Generated Subdued Texture Layer */}
        <div className="luxury-bg-texture"></div>
        
        {/* Heavy vignette to enforce dark center and gold edges */}
        <div className="luxury-center-vignette"></div>

        {/* Flowing Gold Particles Layer */}
        <div className="luxury-particles"></div>
      </div>

      {/* Interactive Mouse Glow Layer floats over everything */}
      <div className="luxury-interactive-glow" ref={containerRef}></div>
    </>
  );
}
