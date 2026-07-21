import React, { memo } from 'react';
import { ArrowDown } from 'lucide-react';
import { getCloudinaryUrl } from '../utils/cloudinary.js';

const SharedHero = memo(function SharedHero({
  image,
  eyebrow,
  title,
  description,
  metadata,
  actions,
  scrollTarget,
  scrollText,
  contentBottomPadding = "pb-0",
  titleClassName = "text-[clamp(2.5rem,4vw,4.2rem)]",
  imagePosition = "object-[center_30%]"
}) {
  return (
    <section className="relative w-full h-[100svh] min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image & Overlays */}
      <div className="absolute inset-0 w-full h-full">
        {/* True Background Image */}
        <img
          src={getCloudinaryUrl(image, 1600)}
          alt="Luxury wedding inspiration"
          className={`w-full h-full object-cover ${imagePosition}`}
          loading="eager"
          fetchPriority="high"
        />
        {/* Dark base overlay for readability */}
        <div className="absolute inset-0 bg-black/30 z-[1]" />
        {/* Subtle warm gold tint */}
        <div className="absolute inset-0 bg-[rgba(201,155,86,0.08)] mix-blend-overlay z-[1]" />
        {/* Cinematic left-to-right fade */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,4,0.98)_0%,rgba(5,5,4,0.88)_35%,rgba(5,5,4,0.3)_65%,transparent_100%)] z-[1]" />
        {/* Bottom fade for smooth transition to content below */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(5,5,4,0.18)_65%,rgba(5,5,4,0.98)_100%)] z-[1]" />
        {/* Soft edge vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(5,5,4,0.6)_100%)] z-[1]" />
      </div>

      {/* Content */}
      <div className={`shared-hero-container relative z-[2] w-full max-w-[1240px] mx-auto px-[max(5%,calc((100%-1240px)/2))] pt-[90px] ${contentBottomPadding}`}>
        <div className="max-w-[650px] pr-[2rem] max-780:pr-0">
          {eyebrow && (
            <div className="flex items-center gap-[1.1rem] mb-[1.8rem]">
              <span className="h-[1px] w-[46px] bg-gold flex-none"></span>
              <p className="text-gold-soft text-[0.74rem] font-[650] tracking-[0.22em] uppercase">{eyebrow}</p>
            </div>
          )}

          <h1 className={`font-display text-[#f7f1e7] ${titleClassName} leading-[1.08] font-normal mb-[2rem] uppercase`}>
            {title}
          </h1>

          {description && (
            <p className="text-muted text-[1.1rem] font-light leading-[1.8] max-w-[480px]">
              {description}
            </p>
          )}

          {actions && (
            <div className="flex flex-wrap gap-[0.9rem] max-780:justify-center mt-[2.6rem]">
              {actions}
            </div>
          )}

          {metadata && (
            <div className="items-center flex gap-[0.65rem] mt-[2.6rem] max-780:mt-[3.2rem]">
              {metadata}
            </div>
          )}
        </div>
      </div>

      {scrollTarget && scrollText && (
        <a className="absolute bottom-[2.5rem] right-[clamp(1.5rem,5vw,5rem)] items-center text-[0.58rem] font-[650] tracking-[0.2em] uppercase flex gap-[0.8rem] transition-colors hover:text-gold z-[4] max-780:hidden" href={scrollTarget}>
          <span className="text-right" dangerouslySetInnerHTML={{ __html: scrollText.replace(/\\n/g, '<br />').replace(/\n/g, '<br />') }} />
          <span className="items-center border border-gold rounded-full text-gold inline-flex h-[42px] justify-center relative w-[42px] before:bg-gold before:content-[''] before:h-[1px] before:absolute before:left-full before:w-[32px]"><ArrowDown size={18} /></span>
        </a>
      )}
    </section>
  );
});

export default SharedHero;
