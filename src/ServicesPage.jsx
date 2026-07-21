import { useState } from 'react';
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
  Plus,
  Minus,
  Sparkles,
  Trophy,
  UserRoundCheck,
  Briefcase,
  Cake,
  Gift,
  Baby,
} from 'lucide-react';
import CountUp from './components/CountUp.jsx';
import { Link } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import LazyImage from './components/LazyImage.jsx';
import useSEO from './utils/useSEO.js';
import './services-page.css';

const A = '/assets/';

const stats = [
  [Award, '14+', 'Years of Experience'],
  [Camera, '700+', 'Weddings Captured'],
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
  ['Corporate Events', 'High-end coverage for brand summits & galas.', Briefcase, `${A}file30216_services.webp`],
  ['Birthday Party', 'Joyful candid moments for milestone celebrations.', Cake, `${A}SM_30585_gallery.webp`],
  ['Saree Ceremony', 'Traditional elegance & ceremonial rituals.', Gift, `${A}DSC03986_gallery.webp`],
  ['Baby Shower', 'Welcoming new life with warm memories.', Baby, `${A}bridal-details-collage.png`],
];

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
    question: "Can we customize packages?",
    answer: "Absolutely. Every celebration is unique, and we create bespoke collections tailored to your event requirements, venue, and scale."
  }
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
  useSEO({
    title: 'Luxury Wedding Services & Packages | Infocus Weddings Hyderabad',
    description: 'Explore luxury wedding photography pricing packages, pre-wedding shoots, destination films, corporate events, and custom crew building by Infocus Weddings.',
    keywords: 'Wedding Packages Hyderabad, Wedding Photography Pricing, Pre Wedding Shoot, Destination Weddings, Infocus Weddings Services',
    canonical: 'https://infocusweddings.com/services',
    ogImage: 'https://infocusweddings.com/assets/SM_31002_services.webp'
  });

  const [openFaq, setOpenFaq] = useState(null);

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

        {/* Services FAQ Section */}
        <section className="services-faq-section py-16 px-6 max-w-4xl mx-auto border-t border-[rgba(201,155,86,0.2)]">
          <p className="services-eyebrow centered text-center text-[var(--gold-soft)] text-xs tracking-[0.2em] uppercase mb-2">Got Questions?</p>
          <h2 className="font-serif text-center text-3xl md:text-4xl text-[#ded7cb] mb-10">Frequently Asked Questions</h2>
          <div className="flex flex-col gap-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={faq.question}
                  className="border border-[rgba(201,155,86,0.3)] bg-[rgba(255,246,232,0.02)] rounded-sm overflow-hidden transition-colors duration-300"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 font-serif text-lg text-[#f7f1e7] hover:text-[var(--gold-soft)] transition-colors"
                  >
                    <span>{faq.question}</span>
                    {isOpen ? <Minus size={18} className="text-[var(--gold)] shrink-0" /> : <Plus size={18} className="text-[var(--gold)] shrink-0" />}
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 font-sans text-sm text-[rgba(255,246,232,0.75)] leading-relaxed border-t border-[rgba(201,155,86,0.15)] pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
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
          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <a className="btn btn-lux-primary" href="/#contact">Enquire Now</a>
            <Link className="btn btn-lux-secondary" to="/build-your-crew">Build Your Crew</Link>
          </div>
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
