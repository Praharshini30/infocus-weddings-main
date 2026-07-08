import { useEffect, useState } from 'react';
import { testimonials } from '../portfolioData.js';
import Reveal from './Reveal.jsx';

import { getCloudinaryUrl } from '../../utils/cloudinary.js';

export default function Testimonials({ visible }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (!visible) return undefined;

    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % testimonials.length);
    }, 6000);

    return () => window.clearInterval(timer);
  }, [visible]);

  if (!visible) return null;

  return (
    <section className="pf-section pf-testimonials" id="portfolio-testimonials">
      <div className="pf-section-head centered">
        <Reveal>
          <p className="pf-label">Kind Words</p>
          <h2>What Couples Say</h2>
        </Reveal>
      </div>

      <div className="pf-testimonial-carousel">
        {testimonials.map((item, index) => (
          <article
            key={item.couple}
            className={`pf-testimonial-card ${index === active ? 'active' : ''}`}
            aria-hidden={index !== active}
          >
            <img src={getCloudinaryUrl(item.image, 600)} alt={item.couple} loading="lazy" decoding="async" />
            <blockquote>
              <p>&ldquo;{item.quote}&rdquo;</p>
              <footer>
                <strong>{item.couple}</strong>
                <span>{item.location}</span>
              </footer>
            </blockquote>
          </article>
        ))}

        <div className="pf-testimonial-dots" role="tablist" aria-label="Testimonial slides">
          {testimonials.map((item, index) => (
            <button
              key={item.couple}
              type="button"
              className={index === active ? 'active' : ''}
              aria-label={`Show testimonial from ${item.couple}`}
              aria-selected={index === active}
              onClick={() => setActive(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
