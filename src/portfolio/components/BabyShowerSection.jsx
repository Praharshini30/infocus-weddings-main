import { babyShowerGallery } from '../portfolioData.js';
import Reveal from './Reveal.jsx';

export default function BabyShowerSection({ visible }) {
  if (!visible) return null;

  return (
    <section className="pf-section pf-baby-shower" id="portfolio-baby-shower">
      <div className="pf-soft-story">
        <Reveal className="pf-soft-copy">
          <p className="pf-label">Celebrating New Beginnings</p>
          <h2>Baby Shower</h2>
          <p className="pf-section-text">
            Warm, lifestyle-focused storytelling that captures joy, anticipation, and family love.
          </p>

        </Reveal>

        <div className="pf-soft-grid">
          <Reveal className="pf-soft-hero">
            <img src={babyShowerGallery.hero.src} alt={babyShowerGallery.hero.alt} loading="lazy" />
          </Reveal>
          {babyShowerGallery.images.map((item, index) => (
            <Reveal key={item.src} className="pf-soft-side" delay={90 + index * 70}>
              <img src={item.src} alt={item.alt} loading="lazy" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
