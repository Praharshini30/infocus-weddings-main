import Reveal from './Reveal.jsx';

const A = '/assets/';

export default function PortfolioCTA() {
  return (
    <section className="pf-cta" id="portfolio-contact">
      <img src={`${A}reception-walk.jpeg`} alt="" aria-hidden="true" />
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
          <a className="pf-btn pf-btn-gold" href="mailto:hello@infocusweddings.com">
            Book Consultation
          </a>
        </Reveal>
      </div>
    </section>
  );
}
