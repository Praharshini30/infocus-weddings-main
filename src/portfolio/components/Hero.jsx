import React from 'react';
import { Play } from 'lucide-react';
import SharedHero from '../../components/SharedHero.jsx';

export default function Hero() {
  return (
    <SharedHero
      image="/assets/heritage-couple-portrait.png"
      eyebrow="Our Portfolio"
      title="Stories That Last Forever"
      description="A collection of timeless celebrations, emotions, and unforgettable memories captured with cinematic precision."
      actions={
        <>
          <a className="items-center rounded-[4px] inline-flex text-[0.68rem] font-[650] justify-center tracking-[0.14em] px-[1.7rem] py-[0.78rem] uppercase transition-[transform,border-color,background] duration-250 ease-in-out whitespace-nowrap bg-[linear-gradient(135deg,var(--gold-soft),var(--gold-dark))] border border-[rgba(255,225,170,0.48)] text-[#120d07] hover:-translate-y-[2px] min-h-[56px]" href="#portfolio-wedding">
            View Portfolio
          </a>
          <a className="items-center rounded-[4px] inline-flex text-[0.68rem] font-[650] justify-center tracking-[0.14em] px-[1.7rem] py-[0.78rem] uppercase transition-[transform,border-color,background] duration-250 ease-in-out whitespace-nowrap bg-[rgba(255,246,232,0.04)] border border-[rgba(255,246,232,0.28)] text-[var(--text)] hover:-translate-y-[2px] min-h-[56px] gap-[0.45rem]" href="#portfolio-films">
            <span className="items-center border border-[var(--gold)] rounded-full text-[var(--gold)] inline-flex h-[28px] justify-center w-[28px]">
              <Play size={12} fill="currentColor" />
            </span>
            Watch Showreel
          </a>
        </>
      }
      scrollTarget="#portfolio-nav"
      scrollText="Explore\nCategories"
    />
  );
}
