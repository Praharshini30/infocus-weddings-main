import React, { lazy, Suspense } from 'react';
import Navbar, { Brand } from './Navbar.jsx';
import Footer from './Footer.jsx';
import FaqPage from './FaqPage.jsx';

const PortfolioPage = lazy(() => import('./portfolio/PortfolioPage.jsx'));
const ServicesPage = lazy(() => import('./ServicesPage.jsx'));
const BuildYourCrew = lazy(() => import('./BuildYourCrew.jsx'));
const BlogPage = lazy(() => import('./blog/BlogPage.jsx'));
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
    icon: Camera,
    name: 'Wedding Photography',
    text: 'Candid and traditional photography to capture every memorable moment.',
    src: `${A}DSC00986.webp`,
  },
  {
    icon: Film,
    name: 'Cinematic Films',
    text: 'Beautifully crafted wedding films that tell your story with emotion.',
    src: `${A}VSR03896.webp`,
  },
  {
    icon: Heart,
    name: 'Pre-Wedding Shoots',
    text: 'Romantic and elegant portraits in memorable locations.',
    src: `${A}VSR03510.webp`,
  },
  {
    icon: Images,
    name: 'Albums & Prints',
    text: 'Premium albums and prints to cherish forever.',
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
  ['5+', 'Years Experience'],
  ['200+', 'Happy Couples'],
  ['300+', 'Weddings Captured'],
  ['5', 'Cities Covered'],
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

            <StackedCardsCarousel />

            <div className="flex justify-center mt-[2rem]">
              <Link className="btn btn-lux-secondary items-center rounded-[4px] inline-flex text-[0.68rem] font-[650] justify-center tracking-[0.14em] min-h-[42px] px-[1.32rem] py-[0.78rem] uppercase transition-[transform,border-color,background] duration-250 ease-in-out whitespace-nowrap bg-[rgba(255,246,232,0.04)] border border-[var(--lux-line)] text-[var(--lux-gold-warm)] hover:-translate-y-[2px]" to="/portfolio">View Full Portfolio</Link>
            </div>
          </div>
        </section>

        <section className="film-banner" id="film">
          <div className="film-frame">
            <video
              src={`${A}sample-wedding-reel.mp4`}
              poster={`${A}pre-wedding-beach.png`}
              autoPlay
              muted
              loop
              playsInline
              aria-label="Sample cinematic wedding reel"
            />
            <div className="film-shade" />
            <div className="film-label">
              <span className="play-large"><Play size={26} fill="currentColor" /></span>
              <p>Experience<br />The Emotion</p>
            </div>
          </div>
        </section>

        <section className="section values-section">
          <div className="page-shell values-layout">
            <div className="values-copy">
              <p className="eyebrow left">Crafting Stories. Preserving Emotions.</p>
              <h2>Your Story, Beautifully Told.</h2>
              <p>
                Infocus Weddings is a luxury wedding photography and film studio,
                specializing in South Indian weddings. We blend artistry, elegance
                and tradition to create timeless visual stories.
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
                We are a team of passionate storytellers who believe every wedding
                is a beautiful story worth telling. From candid laughs to happy
                tears, we capture it all in the most natural and cinematic way.
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
              <a className="btn btn-lux-secondary" href="https://wa.me/919999999999">
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
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faqs" element={<FaqPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Suspense>
    </>
  );
}
