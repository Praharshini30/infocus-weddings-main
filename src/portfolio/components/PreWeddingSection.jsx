import { preWeddingGallery } from '../portfolioData.js';
import LazyImage from '../../components/LazyImage.jsx';
import Reveal from './Reveal.jsx';

export default function PreWeddingSection({ visible, onImageClick }) {
  if (!visible) return null;

// Forcing HMR reload to clear stale object cache
  console.log('DEBUG preWeddingGallery:', preWeddingGallery, typeof preWeddingGallery, Array.isArray(preWeddingGallery));
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
      </div>
    </section>
  );
}

