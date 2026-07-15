import { babyShowerGallery } from '../portfolioData.js';
import LazyImage from '../../components/LazyImage.jsx';
import Reveal from './Reveal.jsx';

export default function BabyShowerSection({ visible, onImageClick }) {
  if (!visible) return null;

  const babyShowerImages = [babyShowerGallery.hero, ...babyShowerGallery.images];

  return (
    <section className="pf-section pf-baby-shower" id="portfolio-baby-shower">
      <div className="pf-section-head">
        <Reveal>
          <p className="pf-label">Celebrating New Beginnings</p>
          <h2>Baby Shower</h2>
          <p className="pf-section-text">
            Warm, lifestyle-focused storytelling that captures joy, anticipation, and family love.
          </p>
        </Reveal>
      </div>

      <div className="pf-masonry">
        {babyShowerImages.map((item, index) => (
          <Reveal
            key={item.src}
            className="pf-masonry-item"
            delay={index * 70}
            as="article"
          >
            <button
              type="button"
              className="pf-lightbox-trigger"
              onClick={() => onImageClick && onImageClick(babyShowerImages, index)}
              aria-label={`View baby shower moment`}
            >
              <LazyImage src={item.src} alt={item.alt} />
            </button>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

