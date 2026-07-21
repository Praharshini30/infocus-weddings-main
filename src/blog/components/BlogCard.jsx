import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Share2 } from 'lucide-react';

export default function BlogCard({ post }) {
  const [liked, setLiked] = useState(false);
  const [shareText, setShareText] = useState('Share');

  const handleLike = (e) => {
    e.preventDefault();
    setLiked(!liked);
  };

  const handleShare = async (e) => {
    e.preventDefault();
    const shareUrl = `${window.location.origin}/blog/${post.slug}`;
    const shareData = {
      title: post.title,
      text: post.excerpt,
      url: shareUrl,
    };

    if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.error('Error sharing:', err);
      }
    } else {
      try {
        await navigator.clipboard.writeText(shareUrl);
        setShareText('Link copied!');
        setTimeout(() => {
          setShareText('Share');
        }, 2000);
      } catch (err) {
        console.error('Could not copy text:', err);
      }
    }
  };

  return (
    <article className="group flex flex-col bg-panel border border-line-soft rounded-[4px] overflow-hidden transition-all duration-300 hover:border-gold hover:shadow-[0_0_20px_rgba(201,155,86,0.1)] hover:-translate-y-[4px]">
      <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-line-soft">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-105"
        />
        <div className="absolute top-[1rem] left-[1rem]">
          <span className="bg-bg/80 backdrop-blur-md border border-line text-gold text-[0.55rem] font-[700] tracking-[0.12em] uppercase px-[0.6rem] py-[0.3rem]">
            {post.category}
          </span>
        </div>
      </div>
      
      <div className="p-[1.5rem] flex flex-col flex-grow">
        <span className="text-muted text-[0.65rem] font-bold tracking-[0.1em] uppercase block mb-[0.6rem]">
          {post.date}
        </span>
        <h3 className="font-serif text-[#f7f1e7] text-[1.35rem] leading-[1.25] font-normal mb-[0.75rem] line-clamp-2">
          {post.title}
        </h3>
        <p className="text-muted text-[0.85rem] leading-[1.6] line-clamp-2 mb-[1.5rem]">
          {post.excerpt}
        </p>
        
        <div className="mt-auto flex items-center justify-between gap-[1rem] flex-wrap">
          <Link to={`/blog/${post.slug}`} className="inline-flex items-center text-[0.65rem] font-[700] tracking-[0.14em] uppercase text-gold transition-colors hover:text-[#f7f1e7]">
            READ MORE <ArrowRight size={14} className="ml-[0.4rem] transition-transform duration-300 group-hover:translate-x-[4px]" />
          </Link>

          <div className="flex items-center gap-[0.9rem] text-muted">
            <button 
              onClick={handleLike}
              className={`flex items-center gap-[0.35rem] text-[0.62rem] font-[600] tracking-[0.08em] uppercase transition-colors duration-300 hover:text-gold ${liked ? 'text-gold' : 'text-muted'}`}
              aria-label={liked ? "Unlike article" : "Like article"}
            >
              <Heart size={12} className={`transition-transform duration-300 ${liked ? 'fill-gold text-gold scale-110' : 'text-muted group-hover:scale-105'}`} />
              <span>{liked ? 'Liked' : 'Like'}</span>
            </button>
            
            <button 
              onClick={handleShare}
              className="flex items-center gap-[0.35rem] text-[0.62rem] font-[600] tracking-[0.08em] uppercase transition-colors duration-300 hover:text-gold text-muted"
              aria-label="Share article link"
            >
              <Share2 size={12} />
              <span>{shareText}</span>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
