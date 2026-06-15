import React from 'react';
import { Play } from 'lucide-react';

export default function BlogCTA() {
  return (
    <section className="relative w-full min-h-[300px] flex items-center justify-center overflow-hidden py-[6rem]">
      {/* Background */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src="/assets/reception-walk.jpeg" 
          alt="Wedding celebration" 
          className="w-full h-full object-cover opacity-30 blur-[2px]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/90 to-bg" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1240px] mx-auto px-[max(5%,calc((100%-1240px)/2))] flex items-center justify-between gap-[4rem] max-1080:flex-col max-1080:text-center max-1080:gap-[3rem]">
        <div className="flex items-center gap-[3rem] max-780:flex-col max-780:gap-[2rem]">
          <div className="relative w-[180px] h-[120px] rounded-[4px] overflow-hidden flex-none max-780:w-[200px] max-780:h-[130px]">
            <img 
              src="/assets/reception-1.png" 
              alt="Video thumbnail" 
              className="w-full h-full object-cover filter grayscale"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/40">
              <span className="w-[42px] h-[42px] rounded-full border border-gold flex items-center justify-center text-gold">
                <Play size={16} fill="currentColor" className="ml-[2px]" />
              </span>
            </div>
          </div>
          
          <div>
            <h2 className="font-serif text-[#f7f1e7] text-[clamp(2.2rem,3.5vw,2.8rem)] leading-[1.1] font-normal mb-[0.5rem]">
              Your story deserves to be told beautifully.
            </h2>
            <p className="text-muted text-[1.15rem] font-light">
              Let's create something timeless together.
            </p>
          </div>
        </div>

        <a 
          href="/#contact" 
          className="flex-none items-center rounded-[4px] inline-flex text-[0.68rem] font-[650] justify-center tracking-[0.14em] px-[2rem] py-[1.1rem] uppercase transition-[transform,border-color,background] duration-250 ease-in-out whitespace-nowrap bg-[rgba(255,246,232,0.04)] border border-line text-gold-soft hover:-translate-y-[2px] hover:border-gold"
        >
          Book A Consultation
        </a>
      </div>
    </section>
  );
}
