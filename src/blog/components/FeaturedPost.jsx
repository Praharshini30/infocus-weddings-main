import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function FeaturedPost({ post }) {
  if (!post) return null;

  return (
    <div className="mb-[3.5rem]">
      <h4 className="font-serif text-[#f7f1e7] text-[1.4rem] tracking-[0.05em] mb-[1.8rem] uppercase">
        Featured Post
      </h4>
      <article className="group relative w-full aspect-[3/4] overflow-hidden rounded-[4px] border border-line-soft bg-panel">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-transparent" />
        
        <div className="absolute inset-0 flex flex-col justify-end p-[2rem]">
          <div className="mb-auto">
            <span className="bg-bg/60 backdrop-blur-md border border-line text-gold text-[0.55rem] font-[700] tracking-[0.12em] uppercase px-[0.6rem] py-[0.3rem]">
              {post.category}
            </span>
          </div>
          
          <div>
            <span className="text-muted text-[0.65rem] font-bold tracking-[0.1em] uppercase block mb-[0.6rem]">
              {post.date}
            </span>
            <h3 className="font-serif text-[#f7f1e7] text-[1.5rem] leading-[1.15] font-normal mb-[0.8rem]">
              {post.title}
            </h3>
            <p className="text-muted text-[0.88rem] leading-[1.65] line-clamp-2 mb-[1.5rem]">
              {post.excerpt}
            </p>
            <a href={`/blog/${post.slug}`} className="inline-flex items-center text-[0.65rem] font-[700] tracking-[0.14em] uppercase text-gold transition-colors hover:text-[#f7f1e7]">
              READ MORE <ArrowRight size={14} className="ml-[0.4rem] transition-transform duration-300 group-hover:translate-x-[4px]" />
            </a>
          </div>
        </div>
      </article>
    </div>
  );
}
