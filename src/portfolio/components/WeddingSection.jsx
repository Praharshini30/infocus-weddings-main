import { weddingGallery } from '../portfolioData.js';
import LazyImage from '../../components/LazyImage.jsx';
import Reveal from './Reveal.jsx';

export default function WeddingSection({ visible, onImageClick }) {
  if (!visible) return null;

  return (
    <section className="pf-section pf-wedding" id="portfolio-wedding">
      <div className="pf-section-head">
        <Reveal>
          <p className="pf-label">Timeless Celebrations</p>
          <h2>Wedding</h2>
          <p className="pf-section-text">
            Bridal portraits, ceremony rituals, and family moments woven into an editorial narrative.
          </p>
        </Reveal>
      </div>

      <div className="pf-masonry">
        {weddingGallery.map((item, index) => (
          <Reveal
            key={item.src}
            className={`pf-masonry-item pf-masonry-${item.size}`}
            delay={index * 70}
            as="article"
          >
            <button 
              type="button" 
              className="pf-lightbox-trigger" 
              aria-label="View wedding moment"
              onClick={() => onImageClick && onImageClick(weddingGallery, index)}
            >
              <LazyImage src={item.src} alt={item.alt} />
            </button>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

