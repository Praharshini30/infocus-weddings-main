import { preWeddingGallery } from '../portfolioData.js';
import Reveal from './Reveal.jsx';

export default function PreWeddingSection({ visible }) {
  if (!visible) return null;

  return (
    <section className="pf-section pf-pre-wedding" id="portfolio-pre-wedding">
      <div className="pf-magazine">
        <Reveal className="pf-magazine-copy">
          <p className="pf-label">Romance In Every Frame</p>
          <h2>Pre-Wedding</h2>
          <p className="pf-section-text">
            Destination shoots, travel-inspired compositions, and intimate couple portraits
            crafted for the modern romantic.
          </p>

        </Reveal>

        <div className="pf-magazine-grid">
          <Reveal className="pf-magazine-hero" delay={80}>
            <img src={preWeddingGallery.hero.src} alt={preWeddingGallery.hero.alt} loading="lazy" />
          </Reveal>
          <div className="pf-magazine-stack">
            {preWeddingGallery.side.map((item, index) => (
              <Reveal key={item.src} delay={120 + index * 80}>
                <img src={item.src} alt={item.alt} loading="lazy" />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
