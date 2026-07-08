import LazyImage from '../../components/LazyImage.jsx';
import Reveal from './Reveal.jsx';

const A = '/assets/';

export default function PortfolioCTA() {
  return (
    <section className="pf-cta" id="portfolio-contact">
      <LazyImage src={`${A}VSR03896.webp`} alt="" aria-hidden="true" />
      <div className="pf-cta-shade" />
      <div className="pf-cta-content">
        <Reveal>
          <p className="pf-label">Let&apos;s Create Something Timeless</p>
          <h2>
            Your Story Deserves
            <br />
            To Be Told Beautifully
          </h2>
          <p className="pf-section-text">
            Let&apos;s create timeless memories together — from the first look to the final dance.
          </p>
          <a className="btn btn-lux-primary py-4 px-8 mt-6" href="mailto:hello@infocusweddings.com">
            ENQUIRE NOW
          </a>
        </Reveal>
      </div>
    </section>
  );
}
