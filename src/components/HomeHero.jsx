import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { getCloudinaryUrl } from '../utils/cloudinary.js';

const A = '/assets/';

const slides = [
  {
    image: `${A}NAG01188.webp`,
    objectPosition: '62% 35%',
    eyebrow: 'LUXURY CANDID PHOTOGRAPHY & WEDDING FILMS',
    title: 'We Create Heirloom Wedding Films\nfor Extraordinary Celebrations.',
    description: 'Capturing every emotion, ritual, and timeless moment through cinematic storytelling and elegant photography—creating memories that will be cherished for generations.',
    cta1: { text: 'Reserve Your Date', href: '/#contact' },
    cta2: { text: 'Watch Our Story', href: '/#film', icon: Play }
  },
  {
    image: `${A}VSR03823.webp`,
    objectPosition: '68% 30%',
    style: { transform: 'scale(1.08) translateX(3%)' },
    eyebrow: 'TELUGU WEDDING STORIES',
    title: 'Capturing Timeless\nTelugu Wedding Stories',
    description: 'Inspired by the beauty of Telugu traditions, we preserve every ritual, every emotion, and every celebration through timeless photography and cinematic storytelling.',
    cta1: { text: 'View Portfolio', href: '/portfolio' },
    cta2: { text: 'Our Services', href: '/services' }
  },
  {
    image: `${A}VSR03510.webp`,
    objectPosition: 'center 28%',
    eyebrow: 'DESTINATION WEDDINGS',
    title: 'Destination Weddings,\nBeautifully Told.',
    description: 'From royal palaces to sun-kissed beaches, we capture destination weddings with cinematic artistry, preserving every breathtaking moment in timeless elegance.',
    cta1: { text: 'Watch Films', href: '/#film', icon: Play },
    cta2: { text: 'Book Consultation', href: '/#contact' }
  },
  {
    image: `${A}SM_31076.webp`,
    objectPosition: 'center 35%',
    style: { transform: 'scale(1.15) translateX(7%)' },
    eyebrow: 'GLOBAL COVERAGE',
    title: 'Available Across\nIndia & Worldwide',
    description: 'From the timeless temples of South India to breathtaking destinations around the world, we travel wherever your love story takes us.',
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

  // Preload first slide with correct Cloudinary URL
  useEffect(() => {
    const url = getCloudinaryUrl(slides[0].image, 1600);
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = url;
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);

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

      <div className="relative z-[2] w-full h-[100svh] flex items-center justify-start px-[5vw] lg:px-[8vw] pt-[90px] md:pt-[110px]">
        <div className="max-w-[560px] xl:max-w-[650px] w-full text-left flex flex-col items-start max-780:items-center max-780:text-center max-780:mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={{
                visible: { transition: { staggerChildren: 0.12 } },
                exit: { transition: { staggerChildren: 0.08 } }
              }}
              className="w-full flex flex-col items-start max-780:items-center"
            >
              <motion.span
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
                  exit: { opacity: 0, y: -15, transition: { duration: 0.25 } }
                }}
                className="text-[var(--gold-soft)] font-sans text-xs md:text-sm font-semibold tracking-[0.25em] uppercase mb-3.5 md:mb-4"
              >
                {currentSlide.eyebrow}
              </motion.span>

              <motion.h1
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } },
                  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
                }}
                className="font-serif font-normal text-[#f7f1e7] leading-[1.22] md:leading-[1.25] uppercase mb-5 md:mb-6 text-left max-780:text-center max-780:whitespace-normal whitespace-pre-line max-w-[560px] text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-[3.1rem] min-[1440px]:text-[3.5rem]"
              >
                {currentSlide.title}
              </motion.h1>

              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } },
                  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
                }}
                className="font-sans text-[rgba(255,246,232,0.8)] text-sm md:text-base lg:text-[1.05rem] font-light leading-[1.68] mb-6 md:mb-8 max-w-[490px] text-left max-780:text-center max-780:mx-auto"
              >
                {currentSlide.description}
              </motion.p>

              {/* Shared Unified CTA Row across all viewports */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                  exit: { opacity: 0, y: -15, transition: { duration: 0.25 } }
                }}
                className="flex flex-wrap gap-4 items-center justify-start max-780:justify-center w-full mt-1 md:mt-2"
              >
                <a
                  href={currentSlide.cta1.href}
                  className="btn btn-lux-primary gap-2 min-h-[48px] px-6 text-xs md:text-sm font-semibold uppercase tracking-wider whitespace-nowrap"
                >
                  {Icon1 && <Icon1 size={16} fill="currentColor" />}
                  {currentSlide.cta1.text}
                </a>

                {currentSlide.cta2 && (
                  <a
                    href={currentSlide.cta2.href}
                    className="btn btn-lux-secondary gap-2 min-h-[48px] px-6 text-xs md:text-sm font-semibold uppercase tracking-wider whitespace-nowrap"
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

      {/* Desktop Trust Badge (Opposite side of Hero content) */}
      <div className="absolute right-[5vw] lg:right-[8vw] bottom-[4rem] z-[10] hidden md:flex flex-col items-end text-right text-[rgba(255,246,232,0.85)] font-sans text-xs tracking-[0.15em] uppercase pointer-events-none">
        <span className="text-[var(--gold-soft)] tracking-[0.1em] text-base mb-1">★★★★★</span>
        <span className="font-light opacity-80">Trusted by</span>
        <span className="font-semibold text-sm text-[#f7f1e7] mt-0.5">300+ Reviews</span>
      </div>
    </section>
  );
}
