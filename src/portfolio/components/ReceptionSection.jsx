import { receptionGallery } from '../portfolioData.js';
import LazyImage from '../../components/LazyImage.jsx';
import Reveal from './Reveal.jsx';

export default function ReceptionSection({ visible, onImageClick }) {
  if (!visible) return null;

  return (
    <section className="pf-section pf-reception" id="portfolio-reception">
      <div className="pf-section-head">
        <Reveal>
          <p className="pf-label">Glamour & Celebration</p>
          <h2>Reception</h2>
          <p className="pf-section-text">
            Grand entry celebrations, evening lights, and candid moments of joy.
          </p>
        </Reveal>
      </div>

      <div className="pf-masonry">
        {receptionGallery.map((item, index) => (
          <Reveal
            key={item.src}
            className="pf-masonry-item"
            delay={index * 80}
            as="article"
          >
            <button
              type="button"
              className="pf-lightbox-trigger"
              onClick={() => onImageClick && onImageClick(receptionGallery, index)}
              aria-label={`View reception moment`}
            >
              <LazyImage src={item.src} alt={item.alt} />
            </button>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

