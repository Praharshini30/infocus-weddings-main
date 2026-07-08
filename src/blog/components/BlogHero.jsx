import React from 'react';
import SharedHero from '../../components/SharedHero.jsx';

export default function BlogHero() {
  return (
    <SharedHero
      image="/assets/engagement/infocus - weddings - hyderabad - engagement rings - couple - luxury - photography.webp"
      imagePosition="object-[center_35%]"
      eyebrow="THE JOURNAL"
      title={
        <>
          Stories, Tips & <br />
          <span className="text-gold-soft italic pr-[1rem] lowercase capitalize">Timeless Inspiration</span>
        </>
      }
      description="Explore our latest stories, tips, and real weddings. From behind the scenes to planning advice, we share insights to make your celebration extraordinary."
      metadata={
        <>
          <span className="text-gold font-serif text-[1.2rem] tracking-[0.1em] leading-none mb-[-0.25rem]">Edition II</span>
          <span className="text-[0.65rem] font-[650] tracking-[0.18em] uppercase text-[rgba(255,246,232,0.48)]">Curated For 2024</span>
        </>
      }
      scrollTarget="#latest-posts"
      scrollText="Explore\nJournal"
    />
  );
}
