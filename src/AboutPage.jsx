import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, Camera, Film, Mic, Users, Heart, Star, Award, Scissors, Glasses, MapPin, Sparkles, Infinity as InfinityIcon } from 'lucide-react';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import './about.css';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function AboutPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderImages = [
    "/assets/royal-bride-window.png",
    "/assets/bride-groom-1.png",
    "/assets/wedding-dance.png"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [sliderImages.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? sliderImages.length - 1 : prev - 1));

  return (
    <div className="about-page-bg min-h-screen">
      <div className="nav-overlay-gradient"></div>
      <Navbar />

      <main className="pt-32 pb-16">
        
        {/* SECTION 1 - OUR PHILOSOPHY */}
        <motion.section 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="max-w-[1240px] mx-auto px-6 mb-32"
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="text-gold-soft text-sm tracking-widest uppercase font-semibold">Our Philosophy</span>
            <div className="h-px w-16 bg-gold-soft opacity-50"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="about-display text-5xl md:text-6xl text-[#f7f1e7] leading-tight mb-8">
                We Don't Just Take Photos.<br />
                <span className="text-gold-soft italic">We Capture Feelings.</span>
              </h1>
              
              <div className="text-muted space-y-6 text-lg font-light leading-relaxed">
                <p>
                  At Infocus Weddings, we believe that the most powerful photographs aren't technically perfect — they're emotionally true. A blurred background that lets laughter shine through. A fleeting glance that speaks volumes. The nervous squeeze of hands before the vows.
                </p>
                <p>
                  Our cinematic approach blends documentary instinct with artistic vision. We observe, we anticipate, and we capture — ensuring your gallery is a rich, authentic narrative of your most cherished day.
                </p>
                <p>
                  Every photo we deliver is an invitation to travel back in time, to feel what you felt, to live it again.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="philosophy-slider-container">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentSlide}
                    src={sliderImages[currentSlide]}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    alt="Wedding Philosophy"
                  />
                </AnimatePresence>
                

                
                {/* Indicators */}
                <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2">
                  {sliderImages.map((_, idx) => (
                    <div key={idx} className={`h-1 rounded-full transition-all duration-300 ${idx === currentSlide ? 'w-8 bg-gold-soft' : 'w-4 bg-gold-soft/30'}`} />
                  ))}
                </div>
              </div>

              {/* Quote Card */}
              <div className="absolute -bottom-10 -left-4 lg:-left-8 philosophy-quote-card p-8 rounded-lg max-w-sm z-10">
                <span className="text-gold-soft text-4xl leading-none font-serif block mb-2">"</span>
                <p className="text-white about-serif text-xl italic mb-4 leading-snug">
                  Every frame is a doorway back to the moment you felt most alive.
                </p>
                <p className="text-gold-soft text-sm uppercase tracking-wider">— Rahul Sharma, Founder</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* SECTION 2 - FOUNDERS */}
        <motion.section 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-[1240px] mx-auto px-6 mb-32 space-y-24"
        >
          {/* Founder 1 */}
          <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="founder-image-wrapper aspect-[3/4]">
              <img src="/assets/founder-1.png" onError={(e) => { e.target.src = "/assets/royal-bride-window.png"; e.target.style.filter = "grayscale(1)"; }} alt="Pushkar Krishan Kakde" className="w-full h-full object-cover" />
            </div>
            <div className="founder-card p-8">
              <h2 className="signature-font mb-2">Pushkar Krishan Kakde</h2>
              <p className="text-gold-soft tracking-widest uppercase text-sm font-semibold mb-6">Lead Cinematographer & Founder</p>
              
              <div className="text-muted space-y-4 mb-8">
                <p>Since 2017, Pushkar has been capturing extraordinary love stories with a vision rooted in emotion, art and authenticity.</p>
                <p>His cinematic approach and attention to detail have redefined the way weddings are experienced on film. For him, every frame is not just a shot, it's a timeless memory in the making.</p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center mt-2">
                <div className="flex items-center gap-2">
                  <Award className="text-gold-soft" size={20} />
                  <span className="text-[11px] uppercase text-gold-soft tracking-wider font-semibold">Canvera Award</span>
                </div>
                <div className="hidden sm:block text-gold-soft/40">|</div>
                <div className="flex items-center gap-2">
                  <Award className="text-gold-soft" size={20} />
                  <span className="text-[11px] uppercase text-gold-soft tracking-wider font-semibold">Wedding Sutra Influencer</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Founder 2 */}
          <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="founder-card p-8 order-2 md:order-1">
              <h2 className="signature-font mb-2">Sana Shaik</h2>
              <p className="text-gold-soft tracking-widest uppercase text-sm font-semibold mb-6">Managing Director</p>
              
              <div className="text-muted space-y-4 mb-8">
                <p>Sana leads Infocus Weddings with a commitment to elegance, client experience and seamless execution.</p>
                <p>Her innate sense of aesthetics is handled with care, creativity and perfection — from the first conversation to the final delivery.</p>
              </div>
              
              <h2 className="signature-font mt-8">Sana Shaik</h2>
            </div>
            <div className="founder-image-wrapper aspect-[3/4] order-1 md:order-2">
              <img src="/assets/founder-2.png" onError={(e) => { e.target.src = "/assets/royal-bride-window.png"; e.target.style.filter = "grayscale(1)"; }} alt="Sana Shaik" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </motion.section>

        {/* SECTION 3 - ARTISTS */}
        <motion.section 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-[1240px] mx-auto px-6 mb-32"
        >
          <div className="text-center mb-16 flex items-center justify-center gap-6">
            <div className="h-px w-24 bg-gold-soft opacity-30"></div>
            <h2 className="about-serif text-3xl text-gold-soft uppercase tracking-widest">Meet The Artists Behind The Stories</h2>
            <div className="h-px w-24 bg-gold-soft opacity-30"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { role: "Cinematographers", icon: Film, desc: "Crafting cinematic visuals that bring stories to life." },
              { role: "Photographers", icon: Camera, desc: "Capturing emotions with artistry and precision." },
              { role: "Editors", icon: Scissors, desc: "Turning raw moments into timeless masterpieces." },
              { role: "Sound Designers", icon: Mic, desc: "Creating immersive sound that enhances every frame." },
              { role: "Client Experience", icon: Users, desc: "Building relationships and curating unforgettable experiences." }
            ].map((item, idx) => (
              <motion.div key={idx} variants={fadeUp} className="artist-card">
                <img src={`/assets/artist-${idx + 1}.png`} alt={item.role} onError={(e) => { e.target.src = "/assets/royal-bride-window.png"; e.target.style.filter = "grayscale(1) contrast(1.2)"; }} />
                <div className="artist-content">
                  <item.icon className="text-gold-soft mb-3" size={24} />
                  <h3 className="text-white text-sm font-bold tracking-widest uppercase mb-2">{item.role}</h3>
                  <p className="text-muted text-xs leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* SECTION 4 - AWARDS */}
        <motion.section 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
          className="max-w-[1240px] mx-auto px-6 mb-32"
        >
          <div className="bg-[#050504] border border-[#D4AF37]/30 py-6 px-4 md:px-8 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 shadow-[0_0_30px_rgba(212,175,55,0.05)] rounded-sm">
            <div className="flex items-center gap-3">
              <Award className="text-[#D4AF37]" size={28} strokeWidth={1.5} />
              <span className="text-[#D4AF37] uppercase whitespace-nowrap" style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '18px', letterSpacing: '2px', lineHeight: '1', paddingTop: '3px' }}>CANVERA AWARD</span>
            </div>
            
            <div className="text-[#D4AF37]/50 hidden md:block" style={{ letterSpacing: '2px' }}>
              ─── ✦ ───
            </div>
            
            <div className="text-[#D4AF37]/50 block md:hidden">
              ✦
            </div>
            
            <div className="flex items-center gap-3">
              <Award className="text-[#D4AF37]" size={28} strokeWidth={1.5} />
              <span className="text-[#D4AF37] uppercase whitespace-nowrap" style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '18px', letterSpacing: '2px', lineHeight: '1', paddingTop: '3px' }}>WEDDING SUTRA INFLUENCER</span>
            </div>
          </div>
        </motion.section>

        {/* SECTION 5 - GALLERY */}
        <motion.section 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="max-w-[1240px] mx-auto px-6 mb-32"
        >
          <div className="text-center mb-12 flex items-center justify-center gap-6">
            <div className="h-px w-24 bg-gold-soft opacity-30"></div>
            <h2 className="about-serif text-3xl text-gold-soft uppercase tracking-widest">A Glimpse Of Our Work</h2>
            <div className="h-px w-24 bg-gold-soft opacity-30"></div>
          </div>

          <div className="about-gallery-grid mb-12">
            <div className="about-gallery-item"><img src="/assets/gallery-1.png" onError={(e) => e.target.src="/assets/royal-bride-window.png"} alt="Gallery" /></div>
            <div className="about-gallery-item"><img src="/assets/gallery-2.png" onError={(e) => e.target.src="/assets/royal-bride-window.png"} alt="Gallery" /></div>
            <div className="about-gallery-item col-span-2"><img src="/assets/gallery-3.png" onError={(e) => e.target.src="/assets/royal-bride-window.png"} alt="Gallery" /></div>
            <div className="about-gallery-item col-span-2"><img src="/assets/gallery-4.png" onError={(e) => e.target.src="/assets/royal-bride-window.png"} alt="Gallery" /></div>
            <div className="about-gallery-item"><img src="/assets/gallery-5.png" onError={(e) => e.target.src="/assets/royal-bride-window.png"} alt="Gallery" /></div>
            <div className="about-gallery-item"><img src="/assets/gallery-6.png" onError={(e) => e.target.src="/assets/royal-bride-window.png"} alt="Gallery" /></div>
          </div>

          <div className="text-center">
            <Link to="/portfolio" className="btn btn-lux-secondary">View Full Gallery</Link>
          </div>
        </motion.section>

        {/* SECTION 6 - TIMELINE */}
        <motion.section 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="max-w-[1240px] mx-auto px-6 mb-32"
        >
          <div className="text-center mb-8 flex items-center justify-center gap-6">
            <div className="h-px w-24 bg-gold-soft opacity-30"></div>
            <h2 className="about-serif text-3xl text-gold-soft uppercase tracking-widest">How We Got Here</h2>
            <div className="h-px w-24 bg-gold-soft opacity-30"></div>
          </div>

          <div className="timeline-container">
            <div className="timeline-line"></div>
            {[
              { year: "2017", icon: Camera, desc: "An idea born from passion to tell love stories." },
              { year: "2018", icon: Glasses, desc: "Took the first step with a vision and a dream." },
              { year: "2019", icon: Users, desc: "Built a team of passionate storytellers." },
              { year: "2020", icon: Award, desc: "Gained recognition from couples across India." },
              { year: "2021", icon: MapPin, desc: "Expanded to destination weddings globally." },
              { year: "2022", icon: Sparkles, desc: "Bigger milestones and award winnings." },
              { year: "2023", icon: Film, desc: "New stories, new emotions, memories created." },
              { year: "2024", icon: Heart, desc: "Elevating experiences, setting new benchmarks." },
              { year: "2025", icon: Star, desc: "Evolving with time while staying true." },
              { year: "2026", icon: InfinityIcon, desc: "The journey continues with endless dreams." }
            ].map((item, idx) => (
              <div key={idx} className="timeline-item">
                <div className="timeline-icon"><item.icon size={20} /></div>
                <h4 className="text-gold-soft font-serif text-xl mb-2">{item.year}</h4>
                <p className="text-muted text-[10px] leading-relaxed uppercase max-w-[100px] mx-auto">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* SECTION 7 - BTS */}
        <motion.section 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="max-w-[1240px] mx-auto px-6 mb-32"
        >
           <div className="text-center mb-8 flex items-center justify-center gap-6">
            <div className="h-px w-16 bg-gold-soft opacity-30"></div>
            <h2 className="about-serif text-xl text-gold-soft uppercase tracking-widest">Behind The Scenes</h2>
            <div className="h-px w-16 bg-gold-soft opacity-30"></div>
          </div>

          <div className="bts-card relative group">
            <img src="/assets/bts-cover.png" onError={(e) => e.target.src="/assets/royal-bride-window.png"} alt="Behind the scenes" />
            <div className="bts-overlay">
              <button className="bts-play-button mb-6">
                <Play size={32} fill="currentColor" className="ml-1" />
              </button>
              <p className="text-white text-sm uppercase tracking-widest mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-center">
                It's not just what you see.<br/>It's the passion, hard work, and heart behind every frame.
              </p>
              <a href="#" className="btn btn-lux-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 text-xs py-2 px-6">Watch BTS</a>
            </div>
          </div>
        </motion.section>

        {/* SECTION 8 - CTA */}
        <motion.section 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
          className="cta-section-bg py-24"
        >
          <div className="max-w-[1240px] mx-auto px-6 flex justify-center">
            <div className="cta-card lg:w-1/2 text-center">
              <h2 className="about-display text-4xl lg:text-5xl text-[#f7f1e7] mb-6 uppercase tracking-widest">
                Let's Create<br/>Your Legacy
              </h2>
              <p className="text-muted text-lg mb-10 font-light">
                Private consultations for<br/>luxury celebrations.
              </p>
              <Link to="/contact" className="btn btn-lux-primary inline-flex items-center gap-3 py-4 px-8 text-sm">
                Book A Consultation <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </motion.section>

      </main>

      <Footer />
    </div>
  );
}
