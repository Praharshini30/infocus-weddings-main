import { receptionGallery } from '../portfolioData.js';
import LazyImage from '../../components/LazyImage.jsx';
import Reveal from './Reveal.jsx';

export default function ReceptionSection({ visible, onImageClick }) {
  if (!visible) return null;

  return (
    <section className="pf-section pf-reception" id="portfolio-reception">
      <div className="pf-section-head">
        <Reveal>
          <p className="pf-label">Wedding Receptions & Sangeet</p>
          <h2>High-Energy Wedding Receptions & Sangeet Nights</h2>
          <p className="pf-section-text">
            From the high-octane dance performances of the Sangeet to the glamorous, sophisticated air of the grand Wedding Reception, these nights are all about celebration. We specialize in dynamic Sangeet photography in Hyderabad, capturing every epic dance move, grand couple entrance, and candid party moment under dramatic event lighting. Our cinematic approach ensures the glamour, scale, and electric energy of your evening are preserved forever.
          </p>
        </Reveal>
      </div>

      <div className="pf-masonry">
        {receptionGallery.map((item, index) => (
          <Reveal
            key={item.src}
            className="pf-masonry-item"
            delay={index * 80}
            as="article"
          >
            <button
              type="button"
              className="pf-lightbox-trigger"
              onClick={() => onImageClick && onImageClick(receptionGallery, index)}
              aria-label={`View reception moment`}
            >
              <LazyImage src={item.src} alt={item.alt} />
            </button>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

