import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { getCloudinaryUrl } from '../utils/cloudinary.js';

const A = '/assets/';

const slides = [
  {
    image: `${A}NAG01188.webp`,
    objectPosition: 'center 35%',
    title: 'Capturing Love Stories That Last Forever',
    description: 'Timeless wedding photography and films crafted with emotion and elegance.',
    cta1: { text: 'Reserve Your Date', href: '/#contact' },
    cta2: { text: 'Watch Our Story', href: '/#film', icon: Play }
  },
  {
    image: `${A}VSR03823.webp`,
    objectPosition: 'center 30%',
    style: { transform: 'scale(1.15) translateX(7%)' },
    title: 'Every Moment, Beautifully Preserved',
    description: 'From candid smiles to grand celebrations, we capture every detail.',
    cta1: { text: 'View Portfolio', href: '/portfolio' },
    cta2: { text: 'Our Services', href: '/services' }
  },
  {
    image: `${A}VSR03510.webp`,
    objectPosition: 'center 28%',
    title: 'Cinematic Wedding Films',
    description: 'Relive your special day through stunning visual storytelling.',
    cta1: { text: 'Watch Films', href: '/#film', icon: Play },
    cta2: { text: 'Book Consultation', href: '/#contact' }
  },
  {
    image: `${A}SM_31076.webp`,
    objectPosition: 'center 35%',
    style: { transform: 'scale(1.15) translateX(7%)' },
    title: 'Destination Wedding Specialists',
    description: 'Turning breathtaking locations into unforgettable memories.',
    cta1: { text: 'Explore Services', href: '/services' },
    cta2: { text: 'Build Your Crew', href: '/build-your-crew' }
  }
];

export default function HomeHero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]); // reset timer on manual navigation

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const currentSlide = slides[currentIndex];
  const Icon1 = currentSlide.cta1.icon;
  const Icon2 = currentSlide.cta2?.icon;

  return (
    <section className="relative w-full h-[100svh] min-h-[700px] overflow-hidden flex items-center bg-[#050504]">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full overflow-hidden"
        >
          <img
            src={getCloudinaryUrl(slides[currentIndex].image, 1600)}
            alt={slides[currentIndex].title}
            className="w-full h-full object-cover"
            loading={currentIndex === 0 ? "eager" : "lazy"}
            fetchPriority={currentIndex === 0 ? "high" : "low"}
            style={{ 
              objectPosition: slides[currentIndex].objectPosition || 'center 30%',
              ...slides[currentIndex].style
            }}
          />
          {/* Overlays for readability and luxury aesthetic */}
          <div className="absolute inset-0 bg-black/40 z-[1]" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,4,0.98)_0%,rgba(5,5,4,0.85)_35%,rgba(5,5,4,0.2)_70%,transparent_100%)] z-[1]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(5,5,4,0.1)_65%,rgba(5,5,4,0.95)_100%)] z-[1]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(5,5,4,0.6)_100%)] z-[1]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,164,106,0.02)_0%,transparent_80%)] z-[1] pointer-events-none" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-[2] w-full h-[100svh] flex items-center justify-start px-[5vw] lg:px-[8vw]">
        <div className="max-w-[650px] w-[90%] md:w-[60%] lg:w-[42%] mt-[-2rem] max-780:mt-[-1rem] text-left flex flex-col items-start max-780:items-center max-780:text-center max-780:mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={{
                visible: { transition: { staggerChildren: 0.2 } },
                exit: { transition: { staggerChildren: 0.1 } }
              }}
              className="w-full flex flex-col items-start max-780:items-center"
            >
              <motion.h1
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } },
                  exit: { opacity: 0, y: -20, transition: { duration: 0.4 } }
                }}
                className="font-serif font-normal text-[#f7f1e7] leading-[1.08] text-5xl md:text-6xl lg:text-7xl xl:text-[4.5rem] uppercase mb-[1.5rem] text-left max-780:text-center"
              >
                {currentSlide.title}
              </motion.h1>

              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } },
                  exit: { opacity: 0, y: -20, transition: { duration: 0.4 } }
                }}
                className="font-sans text-[rgba(255,246,232,0.8)] text-lg md:text-xl font-light leading-[1.7] mb-[2.5rem] max-w-[580px] text-left max-780:text-center max-780:mx-auto"
              >
                {currentSlide.description}
              </motion.p>

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } },
                  exit: { opacity: 0, y: -20, transition: { duration: 0.4 } }
                }}
                className="flex flex-wrap gap-[1rem] justify-start max-780:justify-center"
              >
                <a
                  href={currentSlide.cta1.href}
                  className="btn btn-lux-primary gap-[0.45rem]"
                >
                  {Icon1 && <Icon1 size={16} fill="currentColor" />}
                  {currentSlide.cta1.text}
                </a>

                {currentSlide.cta2 && (
                  <a
                    href={currentSlide.cta2.href}
                    className="btn btn-lux-secondary gap-[0.45rem]"
                  >
                    {Icon2 && <Icon2 size={16} fill="currentColor" />}
                    {currentSlide.cta2.text}
                  </a>
                )}
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-[clamp(1rem,3vw,3rem)] z-[10] flex items-center justify-center w-[56px] h-[56px] rounded-full bg-[rgba(5,5,5,0.45)] backdrop-blur-sm border border-[rgba(201,155,86,0.25)] text-[var(--gold-soft)] hover:bg-[var(--gold-soft)] hover:text-black hover:border-[var(--gold-soft)] transition-all duration-300 max-780:hidden"
        aria-label="Previous slide"
      >
        <ChevronLeft size={32} strokeWidth={1.5} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-[clamp(1rem,3vw,3rem)] z-[10] flex items-center justify-center w-[56px] h-[56px] rounded-full bg-[rgba(5,5,5,0.45)] backdrop-blur-sm border border-[rgba(201,155,86,0.25)] text-[var(--gold-soft)] hover:bg-[var(--gold-soft)] hover:text-black hover:border-[var(--gold-soft)] transition-all duration-300 max-780:hidden"
        aria-label="Next slide"
      >
        <ChevronRight size={32} strokeWidth={1.5} />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-[2.5rem] left-0 right-0 z-[10] flex justify-center items-center gap-[0.7rem]">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`transition-all duration-500 rounded-full ${currentIndex === idx
                ? 'w-[40px] h-[4px] bg-[var(--gold-soft)] shadow-[0_0_14px_rgba(228,193,126,0.65)]'
                : 'w-[12px] h-[4px] bg-[rgba(201,155,86,0.3)] hover:bg-[rgba(201,155,86,0.6)]'
              }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
