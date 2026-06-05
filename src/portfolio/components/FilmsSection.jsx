import { weddingFilms } from '../portfolioData.js';
import Reveal from './Reveal.jsx';

export default function FilmsSection({ visible }) {
  if (!visible) return null;

  return (
    <section className="pf-section pf-films" id="portfolio-films">
      <div className="pf-section-head">
        <Reveal>
          <p className="pf-label">Wedding Films</p>
          <h2>Cinematic Love Stories</h2>
          <p className="pf-section-text">
            Premium wedding films with emotional pacing, rich color grading, and timeless storytelling.
          </p>
        </Reveal>
      </div>

      <div className="pf-films-grid">
        {weddingFilms.map((film, index) => (
          <Reveal key={index} className="pf-film-card" delay={index * 90} as="article">
            <div className="pf-film-thumb">
              <video autoPlay muted loop playsInline controls preload="auto">
                <source src={film.video} type="video/mp4" />
              </video>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
