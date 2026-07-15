import React from 'react';
import { allGallery } from '../portfolioData.js';
import LazyImage from '../../components/LazyImage.jsx';
import Reveal from './Reveal.jsx';

export default function AllGallerySection({ visible, onImageClick }) {
  if (!visible) return null;

  return (
    <section className="pf-section pf-all-gallery" id="portfolio-all">
      <div className="pf-masonry">
        {allGallery.map((item, index) => (
          <Reveal
            key={item.src}
            className={`pf-masonry-item pf-masonry-${item.size}`}
            delay={index * 40}
            as="article"
          >
            <button 
              type="button" 
              className="pf-lightbox-trigger" 
              aria-label="View gallery image"
              onClick={() => onImageClick && onImageClick(allGallery, index)}
            >
              <LazyImage src={item.src} alt={item.alt} />
            </button>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
