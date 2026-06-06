import PortfolioPage from './portfolio/PortfolioPage.jsx';
import ServicesPage from './ServicesPage.jsx';
import BuildYourCrew from './BuildYourCrew.jsx';
import Navbar, { Brand } from './Navbar.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
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
  { className: 'story-card-one', src: `${A}temple-ceremony-couple.webp`, alt: 'Traditional temple wedding couple' },
  { className: 'story-card-two', src: `${A}haldi-laughter.webp`, alt: 'Bride laughing during haldi ceremony' },
  { className: 'story-card-three', src: `${A}heritage-stair-portrait.webp`, alt: 'Heritage wedding portrait on palace stairs' },
  { className: 'story-card-four', src: `${A}bridal-window-red.webp`, alt: 'Bridal portrait in red lehenga by a window' },
  { className: 'story-card-five', src: `${A}reception-walk.jpeg`, alt: 'Couple walking through a reception hall' },
];

const values = [
  ['Rooted In', 'Tradition', `${A}temple-ceremony-couple.webp`, 'Temple wedding tradition'],
  ['Focused On', 'Details', `${A}bridal-details-collage.png`, 'Bridal jewellery details'],
  ['Driven By', 'Emotion', `${A}haldi-laughter.webp`, 'Joyful haldi emotion'],
  ['Defined By', 'Excellence', `${A}heritage-stair-portrait.webp`, 'Elegant heritage portrait composition'],
];

const services = [
  {
    icon: Camera,
    name: 'Wedding Photography',
    text: 'Candid and traditional photography to capture every memorable moment.',
    src: `${A}hero-temple-couple.png`,
  },
  {
    icon: Film,
    name: 'Cinematic Films',
    text: 'Beautifully crafted wedding films that tell your story with emotion.',
    src: `${A}pre-wedding-beach.png`,
  },
  {
    icon: Heart,
    name: 'Pre-Wedding Shoots',
    text: 'Romantic and elegant portraits in memorable locations.',
    src: `${A}heritage-couple-portrait.png`,
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
    <div className="section-heading centered">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
    </div>
  );
}

function HomePage() {
  return (
    <>
      <Navbar />

      <main id="top">
        <section className="hero-section">
          <div className="hero-slideshow" aria-hidden="true">
            {heroSlides.map((slide, index) => (
              <img
                className="hero-image"
                src={slide.src}
                alt=""
                key={slide.src}
                style={{ '--slide-index': index }}
              />
            ))}
          </div>
          <div className="hero-overlay" />

          <div className="hero-content page-shell">
            <div className="hero-copy">
              <p className="eyebrow hero-eyebrow">Timeless Moments. Beautifully Yours.</p>
              <h1>
                <span>Crafting</span>
                <br />
                <span>Timeless</span>
                <br />
                <span className="hero-title-gold">Wedding</span>
                <br />
                <span className="hero-title-gold">Stories</span>
              </h1>
              <p className="hero-text">
                We don't just take photographs, we create cinematic heirlooms
                that preserve emotion, elegance and legacy.
              </p>

              <div className="hero-actions">
                <a className="btn btn-primary" href="#contact">Reserve Your Date</a>
                <a className="btn btn-ghost" href="#film">
                  <Play size={16} fill="currentColor" /> Watch Our Story
                </a>
              </div>

              <div className="trust-row" aria-label="Trusted by 200 plus couples">
                <span className="stars">*****</span>
                <span>Trusted by 200+ couples</span>
              </div>
            </div>
          </div>

          <a className="watch-reel" href="#film">
            <span className="play-ring"><Play size={18} fill="currentColor" /></span>
            <span>Watch<br />Reel</span>
          </a>
        </section>

        <section className="section featured-section" id="portfolio">
          <div className="page-shell">
            <SectionHeading eyebrow="Featured Moments" title="Stories We've Captured" />

            <div className="story-grid">
              {stories.map((story) => (
                <article className={`story-card ${story.className}`} key={story.className}>
                  <img src={story.src} alt={story.alt} />
                </article>
              ))}
            </div>

            <div className="center-action">
              <Link className="btn btn-outline" to="/portfolio">View Full Portfolio</Link>
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
              <a className="btn btn-primary compact" href="#about">Our Journey</a>
            </div>

            <div className="value-cards">
              {values.map(([label, title, src, alt]) => (
                <article key={title}>
                  <img src={src} alt={alt} />
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
            <img src={`${A}royal-bride-window.png`} alt="Bride sitting in warm palace light" />
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
                  <div key={label}><strong>{value}</strong><span>{label}</span></div>
                ))}
              </div>
              <a className="btn btn-outline" href="#about">Know More About Us</a>
            </div>
          </div>
        </section>

        <section className="section services-section" id="services">
          <div className="page-shell">
            <SectionHeading eyebrow="What We Offer" title="Our Services" />

            <div className="services-grid">
              {services.map(({ icon: Icon, name, text, src }, index) => (
                <article key={name}>
                  <img src={src} alt={`${name} service`} />
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
              <Link className="services-explore-btn" to="/services">Explore More</Link>
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

            <div className="testimonials-grid">
              {testimonials.map(([quote, name, place, src]) => (
                <article key={name}>
                  <span className="quote-mark">"</span>
                  <p>{quote}</p>
                  <div><img src={src} alt={name} /><span><strong>{name}</strong>{place}</span></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="final-cta" id="contact">
          <img src={`${A}reception-walk.jpeg`} alt="Wedding reception couple" />
          <div className="final-shade" />
          <div className="page-shell final-layout">
            <div>
              <h2>Let's Create Your Forever Story</h2>
              <p>Your love story deserves to be told beautifully. Let's make magic together.</p>
            </div>
            <div className="final-actions">
              <a className="btn btn-primary" href="mailto:hello@infocusweddings.com">Book Consultation</a>
              <a className="btn btn-ghost" href="https://wa.me/919999999999">
                <MessageCircle size={16} /> Chat on WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="page-shell footer-layout">
          <div>
            <Brand />
            <p>We capture timeless weddings with emotion, elegance and cinematic storytelling.</p>
          </div>
          <div>
            <h4>Quick Links</h4>
            <a href="#top">Home</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#services">Services</a>
            <a href="#about">About</a>
          </div>
          <div>
            <h4>Services</h4>
            <a href="#services">Wedding Photography</a>
            <a href="#services">Cinematic Films</a>
            <a href="#services">Pre-Wedding Shoots</a>
            <a href="#services">Albums & Prints</a>
          </div>
          <div>
            <h4>Contact</h4>
            <p>+91 99999 99999</p>
            <p>hello@infocusweddings.com</p>
            <p>Hyderabad, Andhra Pradesh</p>
          </div>
        </div>
        <div className="footer-bottom page-shell">
          <span>© 2026 Infocus Weddings. All rights reserved.</span>
          <span>Designed for timeless memories</span>
        </div>
      </footer>
    </>
  );
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/build-your-crew" element={<BuildYourCrew />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </>
  );
}
