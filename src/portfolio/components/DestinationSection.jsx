import { ArrowUpRight } from 'lucide-react';
import { destinations } from '../portfolioData.js';
import Reveal from './Reveal.jsx';

export default function DestinationSection({ visible, onImageClick }) {
  if (!visible) return null;

  const destinationImages = destinations.map((d) => ({
    src: d.image,
    alt: `${d.name} destination wedding`,
    tag: `${d.name}, ${d.country}`
  }));

  return (
    <section className="pf-section pf-destinations" id="portfolio-destinations">
      <div className="pf-section-head">
        <Reveal>
          <p className="pf-label">Destination Weddings</p>
          <h2>Celebrations Across The World</h2>
          <p className="pf-section-text">
            From palace cities to coastal escapes — luxury weddings captured wherever love takes you.
          </p>
          <a className="pf-text-link" href="#portfolio-destinations">
            View Destinations
            <ArrowUpRight size={15} />
          </a>
        </Reveal>
      </div>

      <div className="pf-destination-track">
        {destinations.map((place, index) => (
          <Reveal key={place.name} className="pf-destination-card" delay={index * 60} as="article">
            <button
              type="button"
              className="pf-lightbox-trigger"
              onClick={() => onImageClick && onImageClick(destinationImages, index)}
              aria-label={`View ${place.name} wedding`}
            >
              <img src={place.image} alt={`${place.name} destination wedding`} loading="lazy" />
            </button>
            <div className="pf-destination-meta">
              <strong>{place.name}</strong>
              <span>{place.country}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

