import { weddingGallery } from '../portfolioData.js';
import LazyImage from '../../components/LazyImage.jsx';
import Reveal from './Reveal.jsx';

export default function WeddingSection({ visible, onImageClick }) {
  if (!visible) return null;

  return (
    <section className="pf-section pf-wedding" id="portfolio-wedding">
      <div className="pf-section-head">
        <Reveal>
          <p className="pf-label">Wedding Portfolios</p>
          <h2>Capturing Timeless Luxury Weddings in Hyderabad</h2>
          <p className="pf-section-text">
            Every grand celebration deserves to be preserved as a work of art. As a premier choice for luxury wedding photography in Hyderabad, INFOCUS WEDDINGS specializes in capturing the raw emotions, timeless rituals, and magnificent scale of your big day. We seamlessly blend high-end candid wedding photography with premium wedding videography to turn your fleeting moments into a cinematic legacy. Explore our gallery to see how we bring out the true heartbeat of luxury Indian weddings.
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

