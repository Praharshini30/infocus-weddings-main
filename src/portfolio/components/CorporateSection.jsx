import React from 'react';
import Reveal from './Reveal.jsx';

export default function CorporateSection({ visible }) {
  if (!visible) return null;

  return (
    <section className="pf-section pf-corporate" id="portfolio-corporate-events" style={{ scrollMarginTop: '110px' }}>
      <div className="pf-section-head">
        <Reveal>
          <p className="pf-label">CORPORATE EVENTS</p>
          <h2 className="font-serif text-[#f7f1e7] text-[clamp(2rem,3vw,2.8rem)] font-normal tracking-[0.02em] mb-6">
            Premium Corporate Events & Galas
          </h2>
          <div 
            className="p-8 md:p-12 rounded-[4px] border border-gold-soft/20 bg-panel/40 shadow-[0_4px_30px_rgba(201,155,86,0.03)] backdrop-blur-sm"
            style={{ marginTop: '2rem' }}
          >
            <p className="pf-section-text" style={{ fontSize: '1rem', lineHeight: '1.85', color: 'var(--pf-muted)' }}>
              In the corporate world, your brand's image is everything. From high-profile business summits and international conferences to luxury corporate galas and award ceremonies, we deliver polished, editorial-grade visual coverage. As a trusted corporate event photographer in Hyderabad, Infocus Weddings captures the essence of your brand—focusing on key keynote moments, high-level networking, grand stage setups, and the dynamic energy of your professional gatherings with sharp, sophisticated precision.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
