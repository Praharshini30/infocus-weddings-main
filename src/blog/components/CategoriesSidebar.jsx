import React from 'react';
import { Camera, Clapperboard, Heart, Image as ImageIcon, MapPin, Sparkles, Video } from 'lucide-react';

const categoryIcons = {
  'Wedding Inspiration': Heart,
  'Photography Tips': Camera,
  'Wedding Films': Clapperboard,
  'Behind The Scenes': Video,
  'Real Weddings': ImageIcon,
  'Wedding Planning': MapPin,
  'Equipment & Gear': Sparkles,
};

export default function CategoriesSidebar({ categories }) {
  if (!categories || categories.length === 0) return null;

  return (
    <div className="mb-[3.5rem]">
      <h4 className="font-serif text-[#f7f1e7] text-[1.4rem] tracking-[0.05em] mb-[1.8rem] uppercase">
        Categories
      </h4>
      <ul className="flex flex-col gap-[1rem]">
        {categories.map((category) => {
          const Icon = categoryIcons[category.name] || Sparkles;
          
          return (
            <li key={category.name}>
              <a 
                href={`/blog/category/${category.name.toLowerCase().replace(/ /g, '-')}`} 
                className="group flex items-center justify-between text-muted hover:text-gold transition-colors duration-300"
              >
                <div className="flex items-center gap-[1rem]">
                  <Icon size={18} className="text-line group-hover:text-gold transition-colors" />
                  <span className="text-[0.92rem] font-light tracking-[0.02em]">{category.name}</span>
                </div>
                <span className="text-[0.8rem] font-mono tracking-[0.1em]">({category.count.toString().padStart(2, '0')})</span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
