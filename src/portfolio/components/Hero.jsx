import { ArrowDown, Play } from 'lucide-react';
import Reveal from './Reveal.jsx';

const A = '/assets/';

export default function Hero() {
  return (
    <section className="pf-hero" id="portfolio-top">
      <div className="pf-hero-copy">
        <Reveal>
          <p className="pf-label">Our Portfolio</p>
          <h1>
            Stories That
            <br />
            <span>Last Forever</span>
          </h1>
          <p className="pf-hero-text">
            A collection of timeless celebrations, emotions, and unforgettable memories
            captured with cinematic precision.
          </p>
          <div className="pf-hero-actions">
            <a className="pf-btn pf-btn-gold" href="#portfolio-wedding">
              View Portfolio
            </a>
            <a className="pf-btn pf-btn-ghost" href="#portfolio-films">
              <span className="pf-play-ring">
                <Play size={15} fill="currentColor" />
              </span>
              Watch Showreel
            </a>
          </div>
        </Reveal>
      </div>

      <div className="pf-hero-media" aria-hidden="true">
        <img
          className="pf-hero-image"
          src={`${A}heritage-couple-portrait.png`}
          alt=""
        />
      </div>

      <a className="pf-scroll-hint" href="#portfolio-nav" aria-label="Scroll to portfolio categories">
        <ArrowDown size={18} />
      </a>
    </section>
  );
}
