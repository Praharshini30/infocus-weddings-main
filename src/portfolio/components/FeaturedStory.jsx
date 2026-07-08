  import { ArrowUpRight } from 'lucide-react';
  import { featuredStory } from '../portfolioData.js';
  import Reveal from './Reveal.jsx';
  import { getCloudinaryUrl } from '../../utils/cloudinary.js';

  export default function FeaturedStory() {
    return (
      <section className="pf-featured" id="portfolio-featured">
        <div className="pf-featured-copy">
          <Reveal>
            <p className="pf-label">Featured Story</p>
            <h2>{featuredStory.couple}</h2>
            <p className="pf-location">{featuredStory.location}</p>
            <p className="pf-section-text">{featuredStory.summary}</p>
            <a className="btn btn-lux-secondary compact mt-6" href="#portfolio-wedding">
              View Full Story
              <ArrowUpRight size={16} />
            </a>
          </Reveal>
        </div>
        <Reveal className="pf-featured-media" delay={120}>
          <figure>
            <img src={getCloudinaryUrl(featuredStory.image, 1200)} alt={featuredStory.alt} loading="lazy" decoding="async" />
          </figure>
        </Reveal>
      </section>
    );
  }
