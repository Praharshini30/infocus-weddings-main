import { engagementGallery } from '../portfolioData.js?v=2';
import LazyImage from '../../components/LazyImage.jsx';
import Reveal from './Reveal.jsx';

export default function EngagementSection({ visible, onImageClick }) {
  if (!visible) return null;

  return (
    <section className="pf-section pf-engagement" id="portfolio-engagement">
      <div className="pf-section-head pf-section-head-row">
        <Reveal>
          <p className="pf-label">The Beginning Of Forever</p>
          <h2>Engagement</h2>
          <p className="pf-section-text">
            Ring exchanges, intimate portraits, and family blessings captured with editorial elegance.
          </p>

        </Reveal>
      </div>

      <div className="pf-masonry">
        {engagementGallery.map((item, index) => (
          <Reveal key={item.src} className="pf-masonry-item" delay={index * 70}>
            <button
              type="button"
              className="pf-lightbox-trigger"
              onClick={() => onImageClick && onImageClick(engagementGallery, index)}
              aria-label={`View engagement moment`}
            >
              <LazyImage src={item.src} alt={item.alt} />
            </button>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

