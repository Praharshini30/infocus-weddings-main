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
          <p className="pf-label">Baby Shower Celebrations</p>
          <h2>Luxury Baby Shower Celebrations</h2>
          <p className="pf-section-text">
            Welcoming a new life is one of the most emotional and beautiful phases in a couple's journey. Our premium baby shower photography captures the warmth of family blessings, the vibrant decor, and the radiant glow of the parents-to-be. Combining artistic maternity portraiture with candid family moments, we preserve the joy, laughter, and anticipation of your celebration in timeless, high-end frames.
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

