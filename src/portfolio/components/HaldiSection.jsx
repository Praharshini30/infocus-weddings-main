import { haldiGallery } from '../portfolioData.js';
import Reveal from './Reveal.jsx';

export default function HaldiSection({ visible, onImageClick }) {
  if (!visible) return null;

  return (
    <section className="pf-section pf-haldi" id="portfolio-haldi">
      <div className="pf-section-head">
        <Reveal>
          <p className="pf-label">Color, Ritual & Joy</p>
          <h2>Haldi</h2>
          <p className="pf-section-text">
            Energetic candid moments, vibrant rituals, and laughter-filled family celebrations.
          </p>

        </Reveal>
      </div>

      <div className="pf-collage">
        {haldiGallery.map((item, index) => (
          <Reveal key={item.src} className={`pf-collage-item pf-collage-${item.size}`} delay={index * 60}>
            <button
              type="button"
              className="pf-lightbox-trigger"
              onClick={() => onImageClick && onImageClick(haldiGallery, index)}
              aria-label={`View haldi moment`}
            >
              <img src={item.src} alt={item.alt} loading="lazy" />
            </button>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

