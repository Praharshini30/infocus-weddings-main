import React from 'react';
import { Camera, Clapperboard, Lightbulb, HeartHandshake } from 'lucide-react';

export default function ValueSection() {
  const values = [
    {
      icon: Camera,
      title: 'Expert Insights',
      desc: 'Tips and guides from our creative team',
    },
    {
      icon: HeartHandshake,
      title: 'Real Stories',
      desc: 'Beautiful weddings from around the world',
    },
    {
      icon: Clapperboard,
      title: 'Behind The Scenes',
      desc: 'From our lens to your hearts',
    },
    {
      icon: Lightbulb,
      title: 'Timeless Inspiration',
      desc: 'Ideas to make your day uniquely yours',
    },
  ];

  return (
    <section className="py-[3rem] pb-[5rem]">
      <div className="max-w-[1240px] mx-auto px-[max(5%,calc((100%-1240px)/2))]">
        <div className="flex justify-between border border-line-soft rounded-[4px] px-[4rem] py-[3rem] max-1080:flex-col max-1080:gap-[2rem] max-1080:px-[2rem] max-1080:py-[2rem]">
          {values.map(({ icon: Icon, title, desc }, idx) => (
            <React.Fragment key={title}>
              <div className="flex items-center gap-[1.5rem] flex-1">
                <div className="flex-none w-[54px] h-[54px] rounded-full border border-gold/30 flex items-center justify-center text-gold">
                  <Icon size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-serif text-[#f7f1e7] text-[1.1rem] mb-[0.25rem]">{title}</h4>
                  <p className="text-muted text-[0.85rem] leading-[1.5]">{desc}</p>
                </div>
              </div>
              
              {idx < values.length - 1 && (
                <div className="w-[1px] bg-line-soft mx-[3rem] max-1080:w-full max-1080:h-[1px] max-1080:mx-0" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
