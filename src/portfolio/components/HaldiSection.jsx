import { haldiGallery } from '../portfolioData.js';
import LazyImage from '../../components/LazyImage.jsx';
import Reveal from './Reveal.jsx';

export default function HaldiSection({ visible, onImageClick }) {
  if (!visible) return null;

  return (
    <section className="pf-section pf-haldi" id="portfolio-haldi">
      <div className="pf-section-head">
        <Reveal>
          <p className="pf-label">Haldi Moments</p>
          <h2>Vibrant Haldi Moments</h2>
          <p className="pf-section-text">
            The Haldi ceremony is where the true energy, color, and chaotic joy of an Indian wedding come alive. Our portfolio showcases vibrant Haldi photography in Hyderabad, freezing the laughter, the playful splashes of yellow, and the deep family bonds in striking contrast. Our candid wedding photographers focus on capturing these unscripted, high-energy emotions, creating a lively visual chapter that bursts with color and life.
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

