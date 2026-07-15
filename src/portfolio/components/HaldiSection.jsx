import { haldiGallery } from '../portfolioData.js';
import LazyImage from '../../components/LazyImage.jsx';
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

      <div className="pf-masonry">
        {haldiGallery.map((item, index) => (
          <Reveal
            key={item.src}
            className="pf-masonry-item"
            delay={index * 60}
            as="article"
          >
            <button
              type="button"
              className="pf-lightbox-trigger"
              onClick={() => onImageClick && onImageClick(haldiGallery, index)}
              aria-label={`View haldi moment`}
            >
              <LazyImage src={item.src} alt={item.alt} />
            </button>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

