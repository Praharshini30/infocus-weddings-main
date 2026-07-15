import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const IMAGES = [
  'https://res.cloudinary.com/dtfbshx24/image/upload/v1783570663/DSC00378_dcp9xf.webp',
  'https://res.cloudinary.com/dtfbshx24/image/upload/v1783570662/WMD08878_sgwkt4.webp',
  'https://res.cloudinary.com/dtfbshx24/image/upload/v1783570808/infocus_-_weddings_-_hyderabad_-engagement_-_couple_-_luxury_-_photography_jooetn.webp',
  'https://res.cloudinary.com/dtfbshx24/image/upload/v1783570707/VSU00708_compressed_qudbnd.webp',
  'https://res.cloudinary.com/dtfbshx24/image/upload/v1783570666/SM_30585_kmbxho.webp',
  'https://res.cloudinary.com/dtfbshx24/image/upload/v1783570663/DSC03986_qchoyl.webp',
  'https://res.cloudinary.com/dtfbshx24/image/upload/v1783570764/239A5784_lrikes.webp',
  'https://res.cloudinary.com/dtfbshx24/image/upload/v1783570763/239A5069_ky6ds7.webp',
  'https://res.cloudinary.com/dtfbshx24/image/upload/v1783570809/infocus_weddings_-_prewedding_photoshot_-_1_yyii90.webp',
  'https://res.cloudinary.com/dtfbshx24/image/upload/v1783570810/infocus_weddings_-_reception_-_bride_glnroc.webp'
];

export default function StackedCardsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const autoplayTimerRef = useRef(null);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % IMAGES.length);
  }, []);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + IMAGES.length) % IMAGES.length);
  }, []);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev]);

  // Autoplay
  useEffect(() => {
    if (!isHovered) {
      autoplayTimerRef.current = setInterval(handleNext, 4500);
    }
    return () => {
      if (autoplayTimerRef.current) {
        clearInterval(autoplayTimerRef.current);
      }
    };
  }, [isHovered, handleNext]);

  const getCardProps = (index) => {
    let diff = index - activeIndex;
    const len = IMAGES.length;
    // Wrap diff around for infinite circular layout
    if (diff < -len / 2) diff += len;
    if (diff > len / 2) diff -= len;

    const absDiff = Math.abs(diff);
    const isActive = diff === 0;

    // Check responsiveness settings via custom css variables or logic
    // We will apply viewport-dependent values using CSS variables set in styles.css
    // but we can also set them as inline styles. Let's make it fully responsive.
    const isVisible = absDiff <= 2;

    return {
      diff,
      absDiff,
      isActive,
      isVisible
    };
  };

  // Drag handlers
  const handleDragEnd = (event, info) => {
    const swipeThreshold = 50;
    if (info.offset.x < -swipeThreshold) {
      handleNext();
    } else if (info.offset.x > swipeThreshold) {
      handlePrev();
    }
  };

  return (
    <div
      className="stacked-carousel-wrapper"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Navigation Buttons (Desktop) */}
      <button
        onClick={handlePrev}
        className="stacked-carousel-btn stacked-carousel-btn-left"
        aria-label="Previous image"
      >
        <ChevronLeft size={28} className="text-[var(--lux-gold-warm)]" />
      </button>

      {/* Stacked Cards Area */}
      <div className="stacked-carousel-container">
        {IMAGES.map((src, index) => {
          const { diff, absDiff, isActive, isVisible } = getCardProps(index);

          // Eager load active, prev, and next. Lazy load the rest.
          const isPreload = isActive || absDiff === 1;

          return (
            <motion.div
              key={src}
              className={`stacked-carousel-card ${isActive ? 'active-card' : ''} ${!isVisible ? 'hidden-card' : ''}`}
              style={{
                zIndex: 10 - absDiff,
                pointerEvents: isActive ? 'auto' : 'none',
              }}
              animate={{
                x: `calc(var(--card-offset-x) * ${diff})`,
                scale: 1 - absDiff * 0.08,
                rotate: diff * 6,
                opacity: isVisible ? (isActive ? 1 : 0.45) : 0,
                filter: isActive ? 'brightness(1)' : 'brightness(0.55)',
              }}
              transition={{
                type: 'spring',
                stiffness: 260,
                damping: 28,
                mass: 1,
              }}
              drag={isActive ? 'x' : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={handleDragEnd}
            >
              <img
                src={src}
                alt={`Wedding photograph ${index + 1}`}
                className="stacked-carousel-img"
                loading={isPreload ? 'eager' : 'lazy'}
                decoding="async"
              />
            </motion.div>
          );
        })}
      </div>

      <button
        onClick={handleNext}
        className="stacked-carousel-btn stacked-carousel-btn-right"
        aria-label="Next image"
      >
        <ChevronRight size={28} className="text-[var(--lux-gold-warm)]" />
      </button>

      {/* Indicators */}
      <div className="stacked-carousel-dots">
        {IMAGES.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`stacked-carousel-dot ${index === activeIndex ? 'active-dot' : ''}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
