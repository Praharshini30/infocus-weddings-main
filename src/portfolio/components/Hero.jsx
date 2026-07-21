import React from 'react';
import SharedHero from '../../components/SharedHero.jsx';

export default function Hero({ onCategorySelect }) {
  const handleViewPortfolio = (e) => {
    e.preventDefault();
    if (onCategorySelect) {
      onCategorySelect('all');
    }
    const navElem = document.querySelector('#portfolio-nav');
    if (navElem) {
      navElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <SharedHero
      image="/assets/couple back.webp"
      eyebrow="Our Portfolio"
      title="Stories That Last Forever"
      description="A collection of timeless celebrations, emotions, and unforgettable memories captured with cinematic precision."
      actions={
        <a className="btn btn-lux-primary" href="#portfolio-nav" onClick={handleViewPortfolio}>
          View Portfolio
        </a>
      }
      scrollTarget="#portfolio-nav"
      scrollText="Explore\nCategories"
    />
  );
}
