import React, { lazy, Suspense } from 'react';
import Navbar, { Brand } from './Navbar.jsx';
import Footer from './Footer.jsx';
import FaqPage from './FaqPage.jsx';
import { motion } from 'framer-motion';


const PortfolioPage = lazy(() => import('./portfolio/PortfolioPage.jsx'));
const ServicesPage = lazy(() => import('./ServicesPage.jsx'));
const BuildYourCrew = lazy(() => import('./BuildYourCrew.jsx'));
const BlogPage = lazy(() => import('./blog/BlogPage.jsx'));
const BlogArticlePage = lazy(() => import('./blog/BlogArticlePage.jsx'));
const AboutPage = lazy(() => import('./AboutPage.jsx'));
const ContactPage = lazy(() => import('./ContactPage.jsx'));
const WeddingFilmsPage = lazy(() => import('./WeddingFilmsPage.jsx'));
import ScrollToTop from './components/ScrollToTop.jsx';
import HomeHero from './components/HomeHero.jsx';
import CountUp from './components/CountUp.jsx';
import LuxuryBackground from './components/LuxuryBackground.jsx';
import { Link, Route, Routes } from 'react-router-dom';
import {
  CalendarCheck,
  Camera,
  CheckCircle,
  ClipboardList,
  Film,
  Heart,
  Images,
  MessageCircle,
  Play,
  Sparkles,
} from 'lucide-react';

import LazyImage from './components/LazyImage.jsx';
import StackedCardsCarousel from './components/StackedCardsCarousel.jsx';
import TestimonialCarousel from './components/TestimonialCarousel.jsx';

const A = '/assets/';

const heroSlides = [
  { src: `${A}hero-temple-couple.png`, alt: 'South Indian wedding couple in a temple setting' },
  { src: `${A}pre-wedding-beach.png`, alt: 'Luxury beach wedding mandap at sunset' },
  { src: `${A}heritage-couple-portrait.png`, alt: 'Couple portrait in a candlelit heritage wedding setting' },
  { src: `${A}royal-bride-window.png`, alt: 'Royal bridal portrait near a palace window' },
  { src: `${A}temple-ceremony-couple.webp`, alt: 'Traditional temple ceremony couple portrait' },
  { src: `${A}heritage-stair-portrait.webp`, alt: 'Heritage stair portrait of a wedding couple' },
  { src: `${A}haldi-laughter.webp`, alt: 'Bride laughing during a joyful haldi ceremony' },
  { src: `${A}bridal-window-red.webp`, alt: 'Bride in red lehenga beside a palace window' },
];

const stories = [
  { className: 'story-card-one', src: `${A}239A6337.webp`, alt: 'Top left wedding story card' },
  { className: 'story-card-two', src: `${A}WMD08878.webp`, alt: 'Center close-up emotional wedding moment' },
  { className: 'story-card-three', src: `${A}VSR02674.webp`, alt: 'Top right wedding couple story card' },
  { className: 'story-card-four', src: `${A}couple back.webp`, alt: 'Bottom left couple from behind story card' },
  { className: 'story-card-five', src: `${A}VSR03896.webp`, alt: 'Bottom right wedding story card' },
];

const values = [
  ['Rooted In', 'Tradition', `${A}DSC09939.webp`, 'Traditional South Indian wedding ritual'],
  ['Focused On', 'Details', `${A}infocus_engagement_ring_detail.webp`, 'Luxury engagement rings'],
  ['Driven By', 'Emotion', `${A}VSR07404.webp`, 'Joyful proposal and emotion'],
  ['Defined By', 'Excellence', `${A}VSR07504.webp`, 'Premium portrait excellence'],
];

const services = [
  {
    icon: Film,
    name: 'Destination Weddings',
    text: 'Bespoke cinematic coverage for extraordinary celebrations across the globe.',
    src: 'https://res.cloudinary.com/dtfbshx24/image/upload/v1783570708/VSR02946_ll0bjh.webp',
  },
  {
    icon: Camera,
    name: 'Event Photography',
    text: 'Documenting grand celebrations and intimate wedding rituals with artistic precision.',
    src: `${A}DSC00986.webp`,
  },
  {
    icon: Sparkles,
    name: 'Portraits & Headshots',
    text: 'Premium fine-art portraits and editorial headshots crafted with sophisticated elegance.',
    src: `${A}VSR07504.webp`,
  },
  {
    icon: Images,
    name: 'Lifestyle & Brand Photography',
    text: 'Creative visual narratives and custom content tailored to tell your unique brand story.',
    src: `${A}bridal-details-collage.png`,
  },
];

const process = [
  [ClipboardList, '01', 'Consultation', 'We understand your story, preferences and vision.'],
  [CalendarCheck, '02', 'Planning', 'We plan every detail so the day feels effortless.'],
  [Camera, '03', 'Capture', 'We capture candid moments you will cherish forever.'],
  [Sparkles, '04', 'Edit & Deliver', 'Carefully edited and delivered with love and emotion.'],
];

const stats = [
  ['14+', 'Years of Masterful Storytelling'],
  ['1,200+', 'Celebrations Captured'],
  ['80+', 'Breathtaking Cities Covered Worldwide'],
  ['100%', 'Heartfelt Couple Satisfaction'],
];

const testimonials = [
  ['Infocus Weddings captured every emotion so beautifully. We relive our wedding every time we look at the pictures.', 'Srija & Tejaswi', 'Hyderabad', `${A}haldi-smile.jpeg`],
  ['The team is super friendly and professional. Our wedding film brought tears to our eyes.', 'Rahul & Niharika', 'Vijayawada', `${A}reception-walk.jpeg`],
  ['From our pre-wedding to the big day, everything was perfect. Highly recommended.', 'Manoj & Harini', 'Visakhapatnam', `${A}pre-wedding-beach.png`],
  ['They knew when to guide us and when to disappear into the moment. The album feels elegant, personal and alive.', 'Ananya & Varun', 'Hyderabad', `${A}heritage-stair-portrait.webp`],
  ['Every ritual, every laugh and every quiet glance was captured with so much warmth. Our families loved the film.', 'Meghana & Karthik', 'Guntur', `${A}bridal-window-red.webp`],
  ['The planning support made a huge difference. Nothing felt rushed, and the final photos look like a dream.', 'Keerthi & Arjun', 'Rajahmundry', `${A}temple-ceremony-couple.webp`],
];

const reels = [
  ['Wedding Film', 'A cinematic highlight from a warm, candlelit celebration.'],
  ['Teaser Cut', 'A short editorial preview for couples and families.'],
  ['Social Reel', 'A vertical-friendly moment reel for sharing the day.'],
];

function SectionHeading({ eyebrow, title }) {
  return (
    <div className="text-center mb-[3.5rem] max-780:mb-[2.5rem]">
      <p className="text-[var(--lux-gold-warm)] text-[0.74rem] font-[650] tracking-[0.22em] uppercase mb-[1rem]">{eyebrow}</p>
      <h2 className="font-serif font-normal tracking-0 leading-[1.08] text-[clamp(2rem,3.5vw,2.8rem)]">{title}</h2>
    </div>
  );
}

function HomePage() {
  return (
    <>
      <Navbar />

      <main id="top">
        <HomeHero />

        <section className="py-[clamp(3.5rem,5vw,5rem)] bg-black" id="portfolio">
          <div className="mx-auto w-[min(calc(100%-64px),1240px)] max-780:w-[min(calc(100%-32px),1240px)]">
            <SectionHeading eyebrow="Featured Moments" title="Stories We've Captured" />

            <p className="text-center font-sans text-[rgba(255,246,232,0.7)] text-base md:text-lg font-light leading-[1.7] max-w-[700px] mx-auto mb-[2.5rem] mt-[-1.5rem]">
              Every Telugu wedding is a sacred tapestry of ancient rituals, vibrant laughter, and deep-felt emotions. We artfully document these timeless narratives, preserving the authentic essence and luxury of your divine union in frames that echo with sentiment for a lifetime.
            </p>

            <StackedCardsCarousel />

            <div className="flex justify-center mt-[2rem]">
              <Link className="btn btn-lux-secondary items-center rounded-[4px] inline-flex text-[0.68rem] font-[650] justify-center tracking-[0.14em] min-h-[42px] px-[1.32rem] py-[0.78rem] uppercase transition-[transform,border-color,background] duration-250 ease-in-out whitespace-nowrap bg-[rgba(255,246,232,0.04)] border border-[var(--lux-line)] text-[var(--lux-gold-warm)] hover:-translate-y-[2px]" to="/portfolio">View Full Portfolio</Link>
            </div>
          </div>
        </section>

        <section className="py-[clamp(3.5rem,5vw,5rem)] bg-[#050504] border-t border-b border-[rgba(255,246,232,0.08)]" id="srinivasa-kalyanam">
          <div className="mx-auto w-[min(calc(100%-64px),1240px)] max-780:w-[min(calc(100%-32px),1240px)]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Left Column: Image */}
              <div className="relative aspect-[4/5] lg:aspect-[3/4] w-full overflow-hidden rounded-[4px] border border-[rgba(201,155,86,0.15)]">
                <LazyImage 
                  src="https://res.cloudinary.com/dtfbshx24/image/upload/v1783570708/VSR02946_ll0bjh.webp" 
                  alt="Sacred Telugu wedding ceremony representing Srinivasa Kalyanam" 
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,164,106,0.02)_0%,transparent_80%)] pointer-events-none" />
              </div>

              {/* Right Column: Content */}
              <div className="flex flex-col justify-center text-left">
                <span className="text-[var(--lux-gold-warm)] text-[0.74rem] font-[650] tracking-[0.22em] uppercase mb-[1rem]">
                  Sacred Traditions
                </span>
                <h2 className="font-serif font-normal tracking-normal leading-[1.15] text-[clamp(2rem,3.5vw,2.8rem)] text-[#f7f1e7] mb-[2rem] uppercase">
                  The Divine Union
                </h2>
                <div className="font-sans text-[rgba(255,246,232,0.75)] text-base md:text-lg font-light leading-[1.8] space-y-6">
                  <p>
                    In the heart of Telugu wedding traditions, marriage is not merely a social contract, but a reflection of the celestial wedding of Lord Srinivasa and Goddess Padmavathi. Every ritual is imbued with cosmic significance, transforming the mandapam into a sacred haven.
                  </p>
                  <p>
                    Within this sanctified space, the groom is welcomed and revered as a representation of Lord Vishnu, while the bride embodies the grace and abundance of Goddess Lakshmi. The mandapam itself symbolizes heaven on earth, where two souls merge in eternal harmony.
                  </p>
                  <p>
                    Surrounded by the warmth of family and loved ones, every guest plays a part in this divine celebration, offering blessings that mirror those of the celestial deities witnessing the union.
                  </p>
                </div>
                
                <div className="mt-8 pt-8 border-t border-[rgba(255,246,232,0.1)]">
                  <blockquote className="font-serif italic text-lg md:text-xl text-[var(--lux-gold-warm)] font-light leading-relaxed">
                    "A sacred bond woven in heaven, celebrated on earth, echoing the eternal divine union."
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>

        <motion.section 
          className="film-banner max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-12" 
          id="film"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="film-frame w-full max-w-[1240px] mx-auto aspect-video rounded-xl overflow-hidden shadow-2xl border border-[rgba(201,155,86,0.3)]">
            <video
              src="https://res.cloudinary.com/dtfbshx24/video/upload/f_auto,q_auto/v1784560941/infocus_weddings_home_page_video_1_1_qjip1x.mp4"
              autoPlay
              muted
              loop
              controls
              playsInline
              preload="metadata"
              aria-label="Cinematic Wedding Film"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-center font-sans text-[rgba(255,246,232,0.75)] text-base md:text-lg font-light leading-[1.7] max-w-[850px] mx-auto mt-8 px-4">
            Our cinematic storytelling captures the subtle glances, the unscripted tears, and the grand symphony of your celebrations. Every wedding film is a custom heirloom, handcrafted to evoke the authentic emotions of your love story for generations to come.
          </p>
        </motion.section>

        <section className="section values-section">
          <div className="page-shell values-layout">
            <div className="values-copy">
              <p className="eyebrow left">Crafting Stories. Preserving Emotions.</p>
              <h2>Your Story, Beautifully Told.</h2>
              <p>
                We are a premier luxury wedding photography and cinema studio specializing in South Indian weddings. By blending natural light, fine-art composition, and the rich heritage of Telugu traditions, we craft authentic visual narratives that preserve the emotional heartbeat of your celebration for generations to come.
              </p>
              <a className="btn btn-lux-primary compact" href="#about">Our Journey</a>
            </div>

            <div className="value-cards">
              {values.map(([label, title, src, alt]) => (
                <article key={title}>
                  <LazyImage src={src} alt={alt} />
                  <div>
                    <span>{label}</span>
                    <h3>{title}</h3>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="about-image">
            <LazyImage src={`${A}file30140.webp`} alt="Couple portrait in warm light" />
          </div>

          <div className="page-shell about-layout">
            <div />
            <div className="about-copy">
              <p className="eyebrow left">Our Story</p>
              <h2>More Than Just Photos, We Capture Emotions.</h2>
              <p>
                Based in Hyderabad, InFocus Weddings is an elite collective of visual poets dedicated to documenting the grandeur and intimacy of South Indian celebrations. For over 14 years, we have travelled across the globe to tell the unique love stories of our couples, ensuring every laugh, ritual, and tear is preserved in a timeless, cinematic aesthetic.
              </p>
              <div className="stats-row">
                {stats.map(([value, label]) => (
                  <div key={label} className="flex flex-col gap-2">
                    <strong className="text-2xl lg:text-3xl"><CountUp value={value} /></strong>
                    <span className="text-sm lg:text-base">{label}</span>
                  </div>
                ))}
              </div>
              <a className="btn btn-lux-secondary" href="#about">Know More About Us</a>
            </div>
          </div>
        </section>

        <section className="section services-section" id="services">
          <div className="page-shell">
            <SectionHeading eyebrow="What We Offer" title="Our Services" />

            <div className="text-center mt-[-2.25rem] mb-[2.75rem]">
              <p className="font-sans text-[var(--lux-gold-warm)] text-[0.95rem] tracking-[0.12em] font-[550] uppercase">
                Wedding Collections Starting from <span className="text-white">₹149,000</span>
              </p>
              <p className="font-sans text-[rgba(255,246,232,0.5)] text-xs tracking-[0.1em] uppercase mt-[0.25rem]">
                Custom Quotes Available
              </p>
            </div>

            <div className="services-grid">
              {services.map(({ icon: Icon, name, text, src }, index) => (
                <article key={name}>
                  <LazyImage src={src} alt={`${name} service`} />
                  <div className="service-body">
                    <span className="service-icon"><Icon size={18} /></span>
                    <h3>{name}</h3>
                    <p>{text}</p>
                    <a href="#services">Explore</a>
                  </div>
                  <span className="service-number">0{index + 1}</span>
                </article>
              ))}
            </div>

            <div className="services-cta">
              <Link className="btn btn-lux-secondary" to="/services">Explore More</Link>
            </div>
          </div>
        </section>

        <section className="section process-section">
          <div className="page-shell">
            <SectionHeading eyebrow="The Infocus Experience" title="Your Journey, Beautifully Planned" />

            <div className="process-line">
              {process.map(([Icon, number, title, text]) => (
                <article key={title}>
                  <span className="process-icon"><Icon size={18} /></span>
                  <span className="process-number">{number}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="reel-strip">
          <div className="page-shell reel-layout">
            {reels.map(([title, text], index) => (
              <article className={index === 1 ? 'active' : ''} key={title}>
                <video
                  src={`${A}sample-wedding-reel.mp4`}
                  poster={index === 0 ? `${A}bridal-details-collage.png` : index === 1 ? `${A}reception-walk.jpeg` : `${A}royal-bride-window.png`}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-label={`${title} sample video`}
                />
                <div>
                  <span className="play-dot">{index === 1 ? <Play size={18} fill="currentColor" /> : <CheckCircle size={18} />}</span>
                  <p><strong>{title}</strong>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section testimonials-section">
          <div className="page-shell">
            <SectionHeading eyebrow="Kind Words" title="What Our Couples Say" />
          </div>
          <TestimonialCarousel testimonials={testimonials} />
        </section>

        <section className="final-cta" id="contact">
          <LazyImage src={`${A}VSR03896.webp`} alt="Wedding couple in front of lit palace" />
          <div className="final-shade" />
          <div className="page-shell final-layout">
            <div>
              <h2>Let's Create Your Forever Story</h2>
              <p>Your love story deserves to be told beautifully. Let's make magic together.</p>
            </div>
            <div className="final-actions">
              <a className="btn btn-lux-primary" href="mailto:hello@infocusweddings.com">Book Consultation</a>
              <a className="btn btn-lux-secondary" href="https://wa.me/918333000094">
                <MessageCircle size={16} /> Chat on WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default function App() {
  return (
    <>
      <LuxuryBackground />
      <ScrollToTop />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/wedding-films" element={<WeddingFilmsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/build-your-crew" element={<BuildYourCrew />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogArticlePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faqs" element={<FaqPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Suspense>
    </>
  );
}
