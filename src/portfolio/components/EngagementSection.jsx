import { engagementGallery } from '../portfolioData.js';
import Reveal from './Reveal.jsx';

export default function EngagementSection({ visible }) {
  if (!visible) return null;

  return (
    <section className="pf-section pf-engagement" id="portfolio-engagement">
      <div className="pf-section-head pf-section-head-row">
        <Reveal>
          <p className="pf-label">The Beginning Of Forever</p>
          <h2>Engagement</h2>
          <p className="pf-section-text">
            Ring exchanges, intimate portraits, and family blessings captured with editorial elegance.
          </p>

        </Reveal>
      </div>

      <div className="pf-asym-grid">
        {engagementGallery.map((item, index) => (
          <Reveal key={item.src} className={`pf-asym-item pf-asym-${item.span}`} delay={index * 70}>
            <img src={item.src} alt={item.alt} loading="lazy" />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
