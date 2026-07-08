import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Play, Clapperboard, Film, MapPin, Trophy, Camera, Zap, Video, Smartphone, Ear, CalendarCheck, Package, CirclePlay } from 'lucide-react';
import CountUp from './components/CountUp.jsx';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import './wedding-films.css';

const A = '/assets/';

const stats = [
  { icon: Clapperboard, value: '9+', label: 'Years of\nExperience' },
  { icon: Film, value: '350+', label: 'Wedding Films\nCreated' },
  { icon: MapPin, value: '25+', label: 'Destinations\nCovered' },
  { icon: Trophy, value: 'AWARD', label: 'Winning\nStudio' },
];

const collections = [
  { image: `${A}wedding-1.png`, icon: Camera, title: 'Cinematic Film', desc: 'A complete cinematic experience that brings your wedding day to life like a movie.' },
  { image: `${A}reception-2.png`, icon: Film, title: 'Highlight Film', desc: "A beautifully edited highlight of your best moments set to music you'll love forever." },
  { image: `${A}heritage-couple-portrait.png`, icon: CirclePlay, title: 'Teaser Film', desc: 'A short and impactful teaser that gives a glimpse of the story we create.' },
  { image: `${A}wedding-3.png`, icon: Zap, title: 'Same Day Edit', desc: 'Relive your day, the same day. A cinematic edit played at your wedding.' },
  { image: `${A}reception-walk.jpeg`, icon: Video, title: 'Behind The Scenes', desc: 'The moments behind the moments, the laughter, the chaos, the magic.' },
];

const featuredFilms = {
  large: { title: 'NIDHI & KARAN', location: 'Lake Como, Italy', image: `${A}hero-temple-couple.png` },
  small: [
    { title: 'AAHANA & VED', location: 'Udaipur', image: `${A}wedding-4.png` },
    { title: 'NIDHI & KARAN', location: 'Lake Como, Italy', image: `${A}reception-3.png` },
    { title: 'AAHANA & VED', location: 'Udaipur', image: `${A}pre-wedding-beach.png` },
    { title: 'NIDHI & KARAN', location: 'Lake Como, Italy', image: `${A}wedding-5.png` },
  ]
};

const timeline = [
  { icon: Clapperboard, title: 'Wedding Teaser', desc: 'High-energy 60 second teaser perfect for Instagram, WhatsApp and social sharing.', time: 'DELIVERED WITHIN 25-30 DAYS' },
  { icon: Film, title: 'Highlight Film', desc: 'The centrepiece 6 - 7 minutes film beautifully edited with music and moments that matter.', time: 'DELIVERED WITHIN 40-60 DAYS' },
  { icon: Smartphone, title: 'Instagram Reels', desc: 'One 60 second reel per major event optimised for Instagram & WhatsApp.', time: 'DELIVERED WITHIN 10-15 DAYS' },
  { icon: Video, title: 'Traditional Film', desc: 'A 1 to 2 hour complete film covering every ritual, performance and emotional moment.', time: 'DELIVERED WITHIN 30 DAYS' },
];

const processSteps = [
  { num: '01', icon: Ear, title: 'WE LISTEN', desc: 'We get to know you, your story, your vision and what matters most.' },
  { num: '02', icon: CalendarCheck, title: 'WE PLAN', desc: 'Conceptualising, scouting locations and planning every detail with precision.' },
  { num: '03', icon: Camera, title: 'WE CREATE', desc: 'Our team captures your day with creativity, emotion and cinematic artistry.' },
  { num: '04', icon: Package, title: 'WE DELIVER', desc: "Reliving your story with films you'll treasure forever." },
];

export default function WeddingFilmsPage() {
  useEffect(() => {
    document.title = 'Wedding Films | Infocus Weddings';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.content = 'Experience premium cinematic wedding videography and emotional storytelling by Infocus Weddings.';
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="wf-page">
      <Navbar />

      <main>
        {/* HERO SECTION */}
        <section className="wf-hero">
          <div className="wf-hero-left">
            <p className="wf-tagline">CINEMATIC. EMOTIVE. TIMELESS.</p>
            <h1>WEDDING<br/>FILMS</h1>
            <p className="wf-hero-desc">We don't just film weddings, we create cinematic stories that you will feel for a lifetime.</p>
            <button className="wf-play-btn">
              <span className="wf-play-icon-wrap"><Play size={14} fill="currentColor" /></span>
              <span><strong>WATCH SHOWREEL</strong><br/>Our Story in Motion</span>
            </button>
          </div>
          
          <div className="wf-hero-center">
            <div className="wf-hero-image-wrapper">
              <img src={`${A}VSR02742.webp`} alt="Wedding Films Hero" style={{ objectPosition: 'center 25%' }} />
              <div className="wf-hero-fade"></div>
            </div>
          </div>
          
          <div className="wf-hero-right">
            {stats.map((stat, idx) => (
              <div key={idx} className="wf-stat">
                <stat.icon size={28} className="wf-stat-icon" strokeWidth={1} />
                <div className="wf-stat-text">
                  <strong className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-none"><CountUp value={stat.value} /></strong>
                  <span className="text-sm md:text-base tracking-[0.15em]">{stat.label}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FILM COLLECTION SECTION */}
        <section className="wf-section wf-collection">
          <div className="wf-section-head">
            <h2 className="wf-gold-heading">OUR FILM COLLECTION</h2>
            <p className="wf-subheading">Every love story is unique. We tell it your way.</p>
          </div>
          
          <div className="wf-collection-grid">
            {collections.map((item, idx) => (
              <div key={idx} className="wf-collection-card">
                <div className="wf-coll-img-wrap">
                  <img src={item.image} alt={item.title} />
                  <div className="wf-coll-play"><Play size={18} fill="currentColor" /></div>
                </div>
                <div className="wf-coll-body">
                  <h3><item.icon size={16} strokeWidth={1.5} /> {item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="wf-explore-wrap">
            <Link to="/portfolio" className="btn btn-lux-secondary mt-8">EXPLORE ALL FILMS</Link>
          </div>
        </section>

        {/* FEATURED FILMS SECTION */}
        <section className="wf-section wf-featured">
          <div className="wf-section-head">
            <h2 className="wf-gold-heading">FEATURED FILMS</h2>
            <p className="wf-subheading">Stories that stay with you forever.</p>
          </div>
          
          <div className="wf-featured-grid">
            <div className="wf-featured-large">
              <img src={featuredFilms.large.image} alt={featuredFilms.large.title} />
              <div className="wf-feat-overlay">
                <div className="wf-feat-info">
                  <h3>{featuredFilms.large.title}</h3>
                  <p>{featuredFilms.large.location}</p>
                </div>
                <button className="wf-feat-play"><Play size={20} fill="currentColor" /></button>
              </div>
            </div>
            <div className="wf-featured-small-grid">
              {featuredFilms.small.map((film, idx) => (
                <div key={idx} className="wf-featured-small">
                  <img src={film.image} alt={film.title} />
                  <div className="wf-feat-overlay">
                    <div className="wf-feat-info">
                      <h3>{film.title}</h3>
                      <p>{film.location}</p>
                    </div>
                    <button className="wf-feat-play small"><Play size={14} fill="currentColor" /></button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DELIVERY TIMELINE SECTION */}
        <section className="wf-section wf-timeline">
          <div className="wf-section-head">
            <h2 className="wf-gold-heading">OUR DELIVERY TIMELINE</h2>
            <p className="wf-subheading">Reliving your moments, one story at a time.</p>
          </div>
          
          <div className="wf-timeline-grid">
            {timeline.map((item, idx) => (
              <div key={idx} className="wf-timeline-item">
                <div className="wf-tl-top">
                  <item.icon size={32} className="wf-tl-icon" strokeWidth={1} />
                  <h3>{item.title}</h3>
                </div>
                <p className="wf-tl-desc">{item.desc}</p>
                <p className="wf-tl-time">{item.time}</p>
              </div>
            ))}
          </div>
        </section>

        {/* OUR PROCESS SECTION */}
        <section className="wf-section wf-process">
          <div className="wf-section-head">
            <h2 className="wf-gold-heading">OUR PROCESS</h2>
            <p className="wf-subheading">Turning your story into a timeless film.</p>
          </div>
          
          <div className="wf-process-steps">
            {processSteps.map((step, idx) => (
              <div key={idx} className="wf-process-step">
                <div className="wf-proc-num-wrap">
                  <span className="wf-proc-num">{step.num}</span>
                  <div className="wf-proc-icon-box">
                    <step.icon size={28} strokeWidth={1} />
                  </div>
                </div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* BRAND STORY SECTION */}
        <section className="wf-brand-story">
          <div className="wf-bs-left">
            <h2>CRAFTING EMOTIONS<br/><span>Creating Legacies.</span></h2>
          </div>
          <div className="wf-bs-center">
            <img src={`${A}reception-4.png`} alt="Behind the scenes" />
          </div>
          <div className="wf-bs-right">
            <p>We believe every wedding is a masterpiece waiting to be told. Our films are a blend of storytelling, artistry and timeless emotions.</p>
            <div className="wf-signature">Infocus Weddings</div>
          </div>
        </section>

        {/* FINAL CTA SECTION */}
        <section className="wf-section wf-cta">
          <h2 className="wf-gold-heading">LET'S TELL YOUR STORY</h2>
          <p className="wf-subheading">Ready to create something timeless?</p>
          <Link to="/#contact" className="btn btn-lux-primary py-4 px-8 mt-8 text-sm">BOOK A CONSULTATION</Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}
