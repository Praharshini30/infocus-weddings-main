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
import CountUp from './components/CountUp.jsx';
import { Link } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import LazyImage from './components/LazyImage.jsx';
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
    name: 'Essential',
    price: '₹35,000',
    features: [
      '1 Photographer',
      '6 Hours Coverage',
      '200+ Edited Photos',
      'Online Gallery',
      'Basic Color Grading',
    ],
  },
  {
    name: 'Signature',
    price: '₹75,000',
    featured: true,
    badge: 'Most Popular',
    features: [
      '2 Photographers',
      'Full Day Coverage',
      '500+ Edited Photos',
      'Cinematic Highlights Film',
      'Drone Coverage',
      'Premium Album',
    ],
  },
  {
    name: 'Luxury',
    price: '₹1,50,000',
    features: [
      'Multi-Day Coverage',
      'Bridal Story Film',
      'Drone + Reel Team',
      'Luxury Albums',
      'Priority Editing',
      'Instagram Reels',
    ],
  },
];

const serviceCards = [
  ['Pre Wedding', 'Stories of love, captured beautifully.', Heart, `${A}VSR03510.webp`],
  ['Weddings', 'Timeless coverage of your big day.', Gem, `${A}SM_31002_services.webp`],
  ['Destination Weddings', 'For celebrations across the world.', Film, `${A}VSR02946_services.webp`],
  ['Cinematic Films', 'Wedding films that feel like cinema.', Sparkles, `${A}file30216_services.webp`],
  ['Albums & Prints', 'Heirloom artwork for generations.', Camera, `${A}bridal-details-collage.png`],
];

const portfolioImages = [
  `${A}WMD08878_gallery.webp`,
  `${A}DSC03986_gallery.webp`,
  `${A}DSC01464_gallery.webp`,
  `${A}SM_30585_gallery.webp`,
  `${A}DSC00378_gallery.webp`,
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

      <main className="pt-[clamp(80px,10vw,120px)]">
        <section className="services-stats" aria-label="Studio statistics">
          {stats.map(([Icon, value, label]) => (
            <article key={label}>
              <Icon size={42} strokeWidth={1.4} />
              <div>
                <strong className="text-3xl md:text-4xl"><CountUp value={value} /></strong>
                <span className="text-sm md:text-base">{label}</span>
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
                {collection.featured && <div className="services-card-ribbon">{collection.badge || 'Most Popular'}</div>}
                <h3>{collection.name}</h3>
                <span className="services-small-rule" />
                <p>Starting from</p>
                <strong>{collection.price}</strong>
                <ul>
                  {collection.features.map((feature) => (
                    <li key={feature}><CheckCircle size={15} /> {feature}</li>
                  ))}
                </ul>
                <a className="btn btn-lux-primary" href="/#contact">Inquire Now</a>
              </article>
            ))}
          </div>

          <p className="services-bespoke">Bespoke packages available for destination & intimate weddings</p>
          <div className="services-build-crew-cta">
            <Link className="btn btn-lux-primary" to="/build-your-crew">
              Build Your Crew
            </Link>
          </div>
          <span className="services-ornament">◆</span>
        </section>

        <section className="services-other">
          <h2>Pre Wedding, Birthday, Corporate &amp; Other Services</h2>
          <div>
            <a className="btn btn-lux-primary text-[10px] px-4" href="/#contact">Enquire Now</a>
            <Link className="btn btn-lux-secondary text-[10px] px-4" to="/build-your-crew">Build Your Crew</Link>
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
                  <LazyImage src={src} alt="" />
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
              <LazyImage src={src} alt="" key={src} />
            ))}
          </div>
          <Link className="btn btn-lux-secondary" to="/portfolio">Explore Portfolio</Link>
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
