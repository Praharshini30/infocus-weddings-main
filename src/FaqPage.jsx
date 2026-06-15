import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Plus, Minus, ChevronRight } from 'lucide-react';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import './faq.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const faqs = [
  {
    question: "Do you travel for destination weddings?",
    answer: "Yes. We document weddings across India and international destinations. From intimate celebrations to grand multi-day events, our team is available for destination wedding coverage."
  },
  {
    question: "What services do you offer?",
    answer: "We offer luxury wedding photography, cinematic wedding films, pre-wedding shoots, destination wedding coverage, bridal portraits, reels, teaser films, albums, and complete visual storytelling experiences."
  },
  {
    question: "How far in advance should we book?",
    answer: "We recommend booking at least 3–6 months in advance, especially for destination weddings and peak season dates, as we accept a limited number of projects each year."
  },
  {
    question: "How many photographers and cinematographers will cover our wedding?",
    answer: "The team size depends on the scale of your celebration. Coverage is carefully curated to ensure every important moment is captured seamlessly."
  },
  {
    question: "What is your photography style?",
    answer: "Our approach blends cinematic storytelling, editorial aesthetics, and authentic emotions, creating timeless imagery with a luxury feel."
  },
  {
    question: "Will we receive raw files?",
    answer: "Raw files are generally not part of the final delivery. Every image and film is carefully curated and professionally edited to reflect our signature style and quality standards."
  },
  {
    question: "How long does delivery take?",
    answer: "Delivery timelines vary based on the project scope, but couples typically receive teasers first, followed by final films and photographs."
  },
  {
    question: "Can we customize packages?",
    answer: "Absolutely. Every wedding is unique, and we create bespoke collections tailored to your celebration, events, and destination."
  },
  {
    question: "Do you help with shoot planning?",
    answer: "Yes. We assist with timelines, locations, lighting suggestions, creative concepts, and production planning for smooth execution."
  },
  {
    question: "How do we reserve our date?",
    answer: "A consultation call and booking confirmation process secure your date."
  }
];

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState(0);

  useEffect(() => {
    document.title = "FAQs | Infocus Weddings";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.content = "Frequently asked questions about wedding photography, cinematography, destination weddings, booking, delivery timelines, and luxury wedding coverage by Infocus Weddings.";
    } else {
      const meta = document.createElement('meta');
      meta.name = "description";
      meta.content = "Frequently asked questions about wedding photography, cinematography, destination weddings, booking, delivery timelines, and luxury wedding coverage by Infocus Weddings.";
      document.head.appendChild(meta);
    }
  }, []);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="faq-page-bg">
      <Navbar />

      <main className="pt-40 pb-24 relative z-10">
        {/* SECTION 1 — FAQ Header */}
        <motion.section 
          initial="hidden" 
          animate="visible" 
          variants={fadeUp}
          className="max-w-[1000px] mx-auto px-6 mb-20 text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-gold-soft opacity-40"></div>
            <span className="text-gold-soft text-xs tracking-[0.2em] uppercase font-semibold">Client Questions</span>
            <div className="h-px w-12 bg-gold-soft opacity-40"></div>
          </div>

          <h1 className="font-serif text-5xl md:text-[4rem] text-[#f7f1e7] leading-tight mb-8 font-normal mx-auto">
            Frequently Asked Questions
          </h1>
          
          <div className="flex justify-center mb-10">
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-gold-soft to-transparent"></div>
          </div>
          
          <p className="text-muted text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
            Everything couples ask before booking their wedding photography and cinematography experience with Infocus Weddings.
          </p>
        </motion.section>

        {/* SECTION 2 — Premium Accordion FAQ */}
        <motion.section 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-[850px] mx-auto px-6 mb-32"
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div 
                key={index}
                variants={fadeUp}
                className={`faq-accordion-item ${isOpen ? 'active' : ''}`}
              >
                <button 
                  className="faq-question-btn group"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isOpen}
                >
                  <span className="flex gap-4 items-baseline text-left">
                    <span className="text-gold-soft text-lg font-semibold">{index + 1}.</span>
                    <span>{faq.question}</span>
                  </span>
                  <div className="faq-icon-wrapper group-hover:text-gold-soft transition-colors duration-300">
                    {isOpen ? <Minus size={22} strokeWidth={1.5} /> : <Plus size={22} strokeWidth={1.5} />}
                  </div>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="faq-answer-container"
                    >
                      <div className="faq-answer-content">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.section>

        {/* SECTION 3 — Luxury CTA Block */}
        <motion.section 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
          className="max-w-[1100px] mx-auto px-6"
        >
          <div className="faq-cta-wrapper group">
            <div className="faq-cta-grid">
              {/* Left Side */}
              <div className="faq-cta-content">
                <p className="text-gold-soft text-xs tracking-[0.2em] uppercase font-semibold mb-6">Let's Work Together</p>
                
                <h2 className="font-serif text-4xl md:text-5xl text-[#f7f1e7] leading-tight mb-6">
                  Let's Create<br />Your <span className="text-gold-soft italic">Legacy</span>
                </h2>
                
                <div className="h-px w-16 bg-gold-soft opacity-40 mb-8"></div>
                
                <p className="text-muted text-lg font-light leading-relaxed mb-10 max-w-md">
                  Every love story deserves to be preserved beautifully. Let's discuss your celebration and create timeless memories together.
                </p>
                
                <div>
                  <Link to="/contact" className="btn btn-lux-primary inline-flex items-center gap-3 py-4 px-8 text-sm">
                    Book a Consultation <ChevronRight size={16} />
                  </Link>
                </div>
              </div>
              
              {/* Right Side */}
              <div className="h-full relative overflow-hidden">
                <img 
                  src="/assets/faq-cta.png" 
                  alt="Luxury Wedding Album and Candles" 
                  className="faq-cta-image transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                  onError={(e) => { e.target.src = "/assets/royal-bride-window.png"; }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] to-transparent opacity-80 md:w-32"></div>
              </div>
            </div>
          </div>
        </motion.section>

      </main>

      <Footer />
    </div>
  );
}
