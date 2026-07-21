import { engagementGallery } from '../portfolioData.js?v=2';
import LazyImage from '../../components/LazyImage.jsx';
import Reveal from './Reveal.jsx';

export default function EngagementSection({ visible, onImageClick }) {
  if (!visible) return null;

  return (
    <section className="pf-section pf-engagement" id="portfolio-engagement">
      <div className="pf-section-head">
        <Reveal>
          <p className="pf-label">Engagement & Ring Ceremonies</p>
          <h2>Elegant Engagement & Ring Ceremonies</h2>
          <p className="pf-section-text">
            The exchange of rings marks the beautiful beginning of a shared lifetime. Our engagement photography in Hyderabad captures the intimate glances, the nervous excitement, and the grand family unions that define this special milestone. From the perfect close-up of the ring exchange to elegant, candid couple portraits, we ensure that the prologue to your wedding day is documented with the luxury and sophistication it deserves.
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

