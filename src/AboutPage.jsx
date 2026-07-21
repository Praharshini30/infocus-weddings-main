import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Camera, Film, Video, Users, Heart, Star, Award, Scissors, Glasses, MapPin, Sparkles, X, Infinity as InfinityIcon } from 'lucide-react';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import LazyImage from './components/LazyImage.jsx';
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

const teamDepartments = [
  {
    role: "Cinematographers",
    icon: Film,
    desc: "Crafting cinematic visuals that bring stories to life.",
    img: "/assets/WMD08878_gallery.webp",
    gallery: [
      "/assets/WMD08878_gallery.webp",
      "/assets/VSR02946.webp",
      "/assets/file30216_services.webp",
      "/assets/DSC01542_about.webp"
    ]
  },
  {
    role: "Candid Photographer",
    icon: Camera,
    desc: "Capturing authentic unscripted moments with fine-art precision.",
    img: "/assets/DSC03986_gallery.webp",
    gallery: [
      "/assets/DSC03986_gallery.webp",
      "/assets/SM_30585_gallery.webp",
      "/assets/DSC00378_about.webp",
      "/assets/VSR03510.webp"
    ]
  },
  {
    role: "Photographers",
    icon: Camera,
    desc: "Capturing emotions with artistry and precision.",
    img: "/assets/DSC01464_gallery.webp",
    gallery: [
      "/assets/DSC01464_gallery.webp",
      "/assets/0A5A8042_about.webp",
      "/assets/SM_30974_about.webp",
      "/assets/WMD07537_about.webp"
    ]
  },
  {
    role: "Videographer",
    icon: Video,
    desc: "Recording every sacred ritual and celebration in high definition.",
    img: "/assets/SM_31002_services.webp",
    gallery: [
      "/assets/SM_31002_services.webp",
      "/assets/reception-walk.jpeg",
      "/assets/yjhsqa_about.webp",
      "/assets/DSC06152_about.webp"
    ]
  },
  {
    role: "Editors",
    icon: Scissors,
    desc: "Turning raw moments into timeless masterpieces.",
    img: "/assets/bridal-details-collage.png",
    gallery: [
      "/assets/bridal-details-collage.png",
      "/assets/DSC00378_gallery.webp",
      "/assets/DSC01542_about.webp",
      "/assets/WMD08878_gallery.webp"
    ]
  }
];

export default function AboutPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedDepartment, setSelectedDepartment] = useState(null);

  const sliderImages = [
    "/assets/DSC01542_about.webp",
    "/assets/DSC00378_about.webp"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [sliderImages.length]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedDepartment(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

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
                <p className="text-gold-soft text-sm uppercase tracking-wider">— PUSHPA KRISHNA KADALI, Founder</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* SECTION 2 - FOUNDER */}
        <motion.section 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-[1240px] mx-auto px-6 mb-32"
        >
          {/* Founder */}
          <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="founder-image-wrapper aspect-[3/4]">
              <img src="/assets/founder-1.png" onError={(e) => { e.target.src = "/assets/VSR02946.webp"; e.target.style.filter = "grayscale(1)"; }} alt="PUSHPA KRISHNA KADALI" className="w-full h-full object-cover" />
            </div>
            <div className="founder-card p-8">
              <h2 className="signature-font mb-2">PUSHPA KRISHNA KADALI</h2>
              <p className="text-gold-soft tracking-widest uppercase text-sm font-semibold mb-6">Lead Cinematographer & Founder</p>
              
              <div className="text-muted space-y-4 mb-8">
                <p>Since 2012, PUSHPA has been capturing extraordinary love stories with a vision rooted in emotion, art and authenticity.</p>
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
            {teamDepartments.map((item, idx) => (
              <motion.div
                key={item.role}
                variants={fadeUp}
                className="artist-card cursor-pointer group"
                onClick={() => setSelectedDepartment(item)}
              >
                <img src={`/assets/artist-${idx + 1}.png`} alt={item.role} onError={(e) => { e.target.src = item.img; e.target.style.filter = "grayscale(1) contrast(1.2)"; }} />
                <div className="artist-content">
                  <item.icon className="text-gold-soft mb-3 group-hover:scale-110 transition-transform" size={24} />
                  <h3 className="text-white text-sm font-bold tracking-widest uppercase mb-2">{item.role}</h3>
                  <p className="text-muted text-xs leading-relaxed">{item.desc}</p>
                  <span className="inline-block mt-3 text-[10px] uppercase tracking-wider text-[var(--gold-soft)] underline underline-offset-4 opacity-0 group-hover:opacity-100 transition-opacity">View Work →</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* TEAM GALLERY MODAL */}
        <AnimatePresence>
          {selectedDepartment && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/85 backdrop-blur-md z-50 flex items-center justify-center p-4 md:p-8"
              onClick={() => setSelectedDepartment(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                className="bg-[#0c0c0b] border border-[rgba(201,155,86,0.3)] rounded-lg p-6 md:p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  type="button"
                  className="absolute top-4 right-4 text-white/70 hover:text-[var(--gold-soft)] p-2 rounded-full bg-black/40 border border-white/10 transition-colors"
                  onClick={() => setSelectedDepartment(null)}
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>

                <div className="flex items-center gap-3 mb-2">
                  <selectedDepartment.icon className="text-[var(--gold-soft)]" size={26} />
                  <h3 className="font-serif text-2xl md:text-3xl text-[#f7f1e7] uppercase tracking-wider">{selectedDepartment.role} Portfolio</h3>
                </div>
                <p className="text-muted text-sm mb-6">{selectedDepartment.desc}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {selectedDepartment.gallery.map((imgSrc, index) => (
                    <div key={index} className="aspect-[4/3] rounded-md overflow-hidden border border-[rgba(201,155,86,0.2)] bg-black">
                      <LazyImage src={imgSrc} alt={`${selectedDepartment.role} work ${index + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* SECTION 4 - AWARDS */}
        <motion.section 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
          className="max-w-[1240px] mx-auto px-3 md:px-6 mb-20 md:mb-32"
        >
          <div className="bg-[#050504] border border-[#D4AF37]/30 py-4 px-3 md:py-6 md:px-8 flex flex-col md:flex-row items-center justify-center gap-3 md:gap-8 shadow-[0_0_30px_rgba(212,175,55,0.05)] rounded-sm w-full">
            <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
              <Award className="text-[#D4AF37] shrink-0" size={24} strokeWidth={1.5} />
              <span className="text-[#D4AF37] uppercase whitespace-nowrap" style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 'clamp(14px, 4vw, 18px)', letterSpacing: '1.5px', lineHeight: '1', paddingTop: '2px' }}>CANVERA AWARD</span>
            </div>
            
            <div className="text-[#D4AF37]/50 hidden md:block" style={{ letterSpacing: '2px' }}>
              ─── ✦ ───
            </div>
            
            <div className="text-[#D4AF37]/50 block md:hidden text-[10px]">
              ✦
            </div>
            
            <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
              <Award className="text-[#D4AF37] shrink-0" size={24} strokeWidth={1.5} />
              <span className="text-[#D4AF37] uppercase whitespace-nowrap" style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 'clamp(14px, 4vw, 18px)', letterSpacing: '1.5px', lineHeight: '1', paddingTop: '2px' }}>WEDDING SUTRA INFLUENCER</span>
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
            <div className="about-gallery-item"><LazyImage src="/assets/DSC01464_about.webp" alt="Gallery" /></div>
            <div className="about-gallery-item"><LazyImage src="/assets/0A5A8042_about.webp" alt="Gallery" /></div>
            <div className="about-gallery-item col-span-2"><LazyImage src="/assets/SM_30974_about.webp" alt="Gallery" /></div>
            <div className="about-gallery-item col-span-2"><LazyImage src="/assets/yjhsqa_about.webp" alt="Gallery" /></div>
            <div className="about-gallery-item"><LazyImage src="/assets/WMD07537_about.webp" alt="Gallery" /></div>
            <div className="about-gallery-item"><LazyImage src="/assets/DSC06152_about.webp" alt="Gallery" /></div>
          </div>

          <div className="text-center">
            <Link to="/portfolio#portfolio-nav" className="btn btn-lux-secondary">View Full Gallery</Link>
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
              { year: "2012", icon: Camera, desc: "An idea born from passion to tell love stories." },
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

          <div className="bts-card relative group w-full md:w-[90%] max-w-[1150px] mx-auto">
            <video 
              src="https://res.cloudinary.com/dtfbshx24/video/upload/f_auto,q_auto/v1784560941/infocus_weddings_home_page_video_1_1_qjip1x.mp4"
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            />
            <div className="bts-overlay">
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
