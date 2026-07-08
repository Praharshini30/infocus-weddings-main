import { babyShowerGallery } from '../portfolioData.js';
import Reveal from './Reveal.jsx';
import { getCloudinaryUrl } from '../../utils/cloudinary.js';

export default function BabyShowerSection({ visible, onImageClick }) {
  if (!visible) return null;

  const babyShowerImages = [babyShowerGallery.hero, ...babyShowerGallery.images];

  return (
    <section className="pf-section pf-baby-shower" id="portfolio-baby-shower">
      <div className="pf-soft-story">
        <Reveal className="pf-soft-copy">
          <p className="pf-label">Celebrating New Beginnings</p>
          <h2>Baby Shower</h2>
          <p className="pf-section-text">
            Warm, lifestyle-focused storytelling that captures joy, anticipation, and family love.
          </p>

        </Reveal>

        <div className="pf-soft-grid">
          <Reveal className="pf-soft-hero">
            <button
              type="button"
              className="pf-lightbox-trigger"
              onClick={() => onImageClick && onImageClick(babyShowerImages, 0)}
              aria-label={`View baby shower moment`}
            >
              <img src={getCloudinaryUrl(babyShowerGallery.hero.src, 1200)} alt={babyShowerGallery.hero.alt} loading="lazy" decoding="async" />
            </button>
          </Reveal>
          {babyShowerGallery.images.map((item, index) => (
            <Reveal key={item.src} className="pf-soft-side" delay={90 + index * 70}>
              <button
                type="button"
                className="pf-lightbox-trigger"
                onClick={() => onImageClick && onImageClick(babyShowerImages, index + 1)}
                aria-label={`View baby shower detail`}
              >
                <img src={getCloudinaryUrl(item.src, 1200)} alt={item.alt} loading="lazy" decoding="async" />
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

