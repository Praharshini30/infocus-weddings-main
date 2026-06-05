import {
  Award,
  Camera,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Diamond,
  Film,
  Gem,
  Heart,
  Play,
  Sparkles,
  Trophy,
  UserRoundCheck,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import './services-page.css';

const A = '/assets/';

const stats = [
  [Award, '10+', 'Years of Experience'],
  [Camera, '500+', 'Weddings Captured'],
  [Trophy, '35+', 'Awards Won'],
  [Heart, '100%', 'Client Satisfaction'],
];

const collections = [
  {
    name: 'The Essential',
    price: '₹2,50,000',
    features: ['Photography Coverage', 'Cinematic Highlights', 'Online Gallery'],
  },
  {
    name: 'The Signature',
    price: '₹4,50,000',
    featured: true,
    features: ['Photography & Cinematic Film', 'Premium Album (40 Pages)', 'Highlights + Teaser Film', 'Online Gallery'],
  },
  {
    name: 'The Legacy',
    price: '₹7,50,000',
    features: ['Photography & Cinematic Film', 'Premium Album (100 Pages)', 'Teaser + Highlight + Full Film', 'Free Art Albums & Box', 'Drone Coverage'],
  },
];

const serviceCards = [
  ['Pre Wedding', 'Stories of love, captured beautifully.', Heart, `${A}heritage-couple-portrait.png`],
  ['Weddings', 'Timeless coverage of your big day.', Gem, `${A}reception-walk.jpeg`],
  ['Destination Weddings', 'For celebrations across the world.', Film, `${A}temple-ceremony-couple.webp`],
  ['Cinematic Films', 'Wedding films that feel like cinema.', Sparkles, `${A}sample-wedding-reel.mp4`],
  ['Albums & Prints', 'Heirloom artwork for generations.', Camera, `${A}bridal-details-collage.png`],
];

const portfolioImages = [
  `${A}heritage-stair-portrait.webp`,
  `${A}royal-bride-window.png`,
  `${A}heritage-couple-portrait.png`,
  `${A}hero-temple-couple.png`,
  `${A}bridal-window-red.webp`,
];

const values = [
  [Diamond, 'Luxury Experience', 'A seamless, personalized experience tailored to your celebration.'],
  [Camera, 'Artistic Excellence', 'A perfect blend of candid storytelling and fine art photography.'],
  [UserRoundCheck, 'Dedicated Support', "From planning to final delivery, we're with you every step of the way."],
  [Clock3, 'Timeless Quality', 'Heirloom-quality imagery crafted to be cherished for generations.'],
  [Sparkles, 'Exclusive Services', 'Bespoke collections for discerning clients who value excellence.'],
];

function ServicesFooter() {
  return (
    <footer className="services-footer">
      <div className="services-footer-inner">
        <span />
        <strong>I</strong>
        <span />
      </div>
    </footer>
  );
}

export default function ServicesPage() {
  return (
    <div className="services-page">
      <Navbar />

      <main>
        <section className="services-hero" id="top">
          <div className="services-hero-copy">
            <p className="services-eyebrow">Timeless Moments. Beautifully Yours.</p>
            <h1>
              Crafting
              <br />
              Timeless
              <br />
              <span>Wedding Stories</span>
            </h1>
            <span className="services-hero-rule" />
            <p>
              We don't just take photographs, we create cinematic heirlooms that preserve emotion, elegance and legacy.
            </p>
            <div className="services-hero-actions">
              <a className="services-gold-btn" href="/#contact">Reserve Your Date</a>
              <a className="services-story-btn" href="/#film">
                <span><Play size={15} fill="currentColor" /></span>
                Watch Our Story
              </a>
            </div>
          </div>
          <div className="services-hero-photo" aria-hidden="true" />
        </section>

        <section className="services-stats" aria-label="Studio statistics">
          {stats.map(([Icon, value, label]) => (
            <article key={label}>
              <Icon size={42} strokeWidth={1.4} />
              <div>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            </article>
          ))}
        </section>

        <section className="services-collections">
          <p className="services-eyebrow centered">Our Signature Collections</p>
          <h2>Curated Experiences. Timeless Memories.</h2>

          <div className="services-pricing-grid">
            {collections.map((collection) => (
              <article className={`services-pricing-card ${collection.featured ? 'featured' : ''}`} key={collection.name}>
                {collection.featured && <div className="services-card-ribbon">Most Loved</div>}
                <h3>{collection.name}</h3>
                <span className="services-small-rule" />
                <p>Starting from</p>
                <strong>{collection.price}</strong>
                <ul>
                  {collection.features.map((feature) => (
                    <li key={feature}><CheckCircle size={15} /> {feature}</li>
                  ))}
                </ul>
                <a className="services-gold-btn small" href="/#contact">Inquire Now</a>
              </article>
            ))}
          </div>

          <p className="services-bespoke">Bespoke packages available for destination & intimate weddings</p>
          <div className="services-build-crew-cta">
            <Link className="services-gold-btn services-build-crew-btn" to="/build-your-crew">
              Build Your Crew
            </Link>
          </div>
          <span className="services-ornament">◆</span>
        </section>

        <section className="services-other">
          <h2>Pre Wedding, Birthday, Corporate &amp; Other Services</h2>
          <div>
            <a className="services-gold-btn mini" href="/#contact">Enquire Now</a>
            <Link className="services-gold-btn mini" to="/build-your-crew">Build Your Crew</Link>
          </div>
        </section>

        <section className="services-carousel">
          <button className="services-arrow left" type="button" aria-label="Previous service"><ChevronLeft size={52} /></button>
          <p className="services-eyebrow centered">More Than Weddings</p>
          <h2>Our Services</h2>
          <div className="services-card-row">
            {serviceCards.map(([title, text, Icon, src]) => (
              <article className="services-offer-card" key={title}>
                {src.endsWith('.mp4') ? (
                  <video src={src} poster={`${A}reception-walk.jpeg`} autoPlay muted loop playsInline />
                ) : (
                  <img src={src} alt="" />
                )}
                <div className="services-offer-shade" />
                <div className="services-offer-copy">
                  <Icon size={34} strokeWidth={1.35} />
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
          <button className="services-arrow right" type="button" aria-label="Next service"><ChevronRight size={52} /></button>
        </section>

        <section className="services-portfolio">
          <p className="services-eyebrow centered">A Glimpse of Our Work</p>
          <h2>Visual Stories That Speak</h2>
          <div className="services-gallery">
            {portfolioImages.map((src) => (
              <img src={src} alt="" key={src} />
            ))}
          </div>
          <a className="services-outline-btn" href="/#portfolio">Explore Portfolio</a>
        </section>

        <section className="services-trust">
          <div>
            <p className="services-eyebrow centered">Trusted by Couples. Recognized by Industry.</p>
            <div className="services-logos" aria-label="Industry recognition">
              <span>Vogue<small>Weddings</small></span>
              <span>Wedding<small>Sutra</small></span>
              <span>WedMeGood</span>
              <span>Brides<small>Today</small></span>
            </div>
          </div>
          <article className="services-testimonial">
            <span>“</span>
            <p>From the first frame to the last, they captured our story with such grace and emotion.</p>
            <strong>- Ananya &amp; Rahul</strong>
          </article>
        </section>

        <section className="services-values">
          {values.map(([Icon, title, text]) => (
            <article key={title}>
              <Icon size={34} strokeWidth={1.35} />
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </section>
      </main>

      <ServicesFooter />
    </div>
  );
}
