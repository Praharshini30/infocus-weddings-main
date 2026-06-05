import { receptionGallery } from '../portfolioData.js';
import Reveal from './Reveal.jsx';

export default function ReceptionSection({ visible }) {
  if (!visible) return null;

  return (
    <section className="pf-section pf-reception" id="portfolio-reception">
      <div className="pf-section-head pf-section-head-row">
        <Reveal>
          <p className="pf-label">Evening Of Elegance</p>
          <h2>Reception</h2>
          <p className="pf-section-text">
            Grand entries, dance floor energy, and romantic portraits under cinematic night light.
          </p>

        </Reveal>
      </div>

      <div className="pf-cinema-row">
        {receptionGallery.map((item, index) => (
          <Reveal key={item.src} className="pf-cinema-card" delay={index * 80} as="article">
            <img src={item.src} alt={item.alt} loading="lazy" />
            <span className="pf-cinema-tag">{item.tag}</span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
