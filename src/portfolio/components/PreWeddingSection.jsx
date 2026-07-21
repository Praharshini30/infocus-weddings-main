import { preWeddingGallery } from '../portfolioData.js';
import LazyImage from '../../components/LazyImage.jsx';
import Reveal from './Reveal.jsx';

export default function PreWeddingSection({ visible, onImageClick }) {
  if (!visible) return null;

  return (
    <section className="pf-section pf-pre-wedding" id="portfolio-pre-wedding">
      <div className="pf-section-head">
        <Reveal>
          <p className="pf-label">Pre-Wedding Shoots</p>
          <h2>Cinematic Pre-Wedding Shoots</h2>
          <p className="pf-section-text">
            A pre-wedding session is more than just a photoshoot—it is a visual celebration of your unique chemistry before your forever begins. From the grand, historic architecture of the city to exclusive luxury resorts, we capture cinematic couple portraits at the best pre-wedding locations in Hyderabad. As a top pre-wedding photographer, our focus is on styling and executing editorial-grade concepts that tell your love story with unparalleled elegance and style.
          </p>
        </Reveal>
      </div>

      <div className="pf-masonry">
        {preWeddingGallery.map((item, index) => (
          <Reveal key={item.src} delay={80 + (index % 3) * 80} className="pf-masonry-item">
            <button
              type="button"
              className="pf-lightbox-trigger"
              onClick={() => onImageClick && onImageClick(preWeddingGallery, index)}
              aria-label={`View pre-wedding moment`}
            >
              <LazyImage src={item.src} alt={item.alt} />
            </button>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

