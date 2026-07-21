import React from 'react';
import SharedHero from '../../components/SharedHero.jsx';

export default function Hero() {
  return (
    <SharedHero
      image="/assets/couple back.webp"
      eyebrow="Our Portfolio"
      title="Stories That Last Forever"
      description="A collection of timeless celebrations, emotions, and unforgettable memories captured with cinematic precision."
      actions={
        <a className="btn btn-lux-primary" href="#portfolio-wedding">
          View Portfolio
        </a>
      }
      scrollTarget="#portfolio-nav"
      scrollText="Explore\nCategories"
    />
  );
}
