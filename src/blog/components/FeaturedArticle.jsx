import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function FeaturedArticle({ post }) {
  if (!post) return null;

  return (
    <article className="group relative w-full h-[500px] max-1080:h-[400px] max-780:h-[450px] overflow-hidden rounded-[4px] border border-line-soft bg-panel">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/60 to-transparent" />
        <div className="absolute inset-0 bg-bg/20 group-hover:bg-transparent transition-colors duration-500" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-[3rem] max-780:p-[2rem]">
        <div className="self-start mb-auto pt-[1rem]">
          <span className="bg-bg/60 backdrop-blur-md border border-line text-gold text-[0.62rem] font-[700] tracking-[0.12em] uppercase px-[0.65rem] py-[0.35rem]">
            {post.category}
          </span>
        </div>
        
        <div className="max-w-[600px]">
          <span className="text-muted text-[0.7rem] font-bold tracking-[0.1em] uppercase block mb-[0.75rem]">
            {post.date}
          </span>
          <h3 className="font-serif text-[#f7f1e7] text-[clamp(1.8rem,3vw,2.5rem)] leading-[1.1] font-normal mb-[1rem]">
            {post.title}
          </h3>
          <div className="flex items-center justify-between gap-[2rem] max-560:flex-col max-560:items-start max-560:gap-[1.5rem]">
            <p className="text-muted text-[0.95rem] leading-[1.7] line-clamp-2">
              {post.excerpt}
            </p>
            <a href={`/blog/${post.slug}`} className="flex-none items-center flex text-[0.68rem] font-[650] tracking-[0.14em] uppercase text-text border border-line-soft px-[1.5rem] py-[0.8rem] transition-colors hover:border-gold hover:text-gold">
              READ MORE <ArrowRight size={14} className="ml-[0.5rem]" />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
