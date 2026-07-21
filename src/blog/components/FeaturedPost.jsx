import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Share2 } from 'lucide-react';

export default function FeaturedPost({ post }) {
  const [liked, setLiked] = useState(false);
  const [shareText, setShareText] = useState('Share');

  if (!post) return null;

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
            <p className="text-muted text-[0.88rem] leading-[1.65] line-clamp-2 mb-[1.2rem]">
              {post.excerpt}
            </p>
            
            <div className="flex items-center justify-between gap-[1rem] flex-wrap mt-[1.2rem]">
              <Link to={`/blog/${post.slug}`} className="inline-flex items-center text-[0.65rem] font-[700] tracking-[0.14em] uppercase text-gold transition-colors hover:text-[#f7f1e7]">
                READ MORE <ArrowRight size={14} className="ml-[0.4rem] transition-transform duration-300 group-hover:translate-x-[4px]" />
              </Link>

              <div className="flex items-center gap-[0.7rem] text-muted">
                <button 
                  onClick={handleLike}
                  className={`flex items-center justify-center p-1.5 border border-line-soft rounded-full transition-colors duration-300 hover:text-gold hover:border-gold ${liked ? 'text-gold border-gold bg-gold/5' : 'text-muted'}`}
                  aria-label={liked ? "Unlike article" : "Like article"}
                  title={liked ? "Liked" : "Like"}
                >
                  <Heart size={12} className={`transition-transform duration-300 ${liked ? 'fill-gold text-gold scale-110' : 'text-muted'}`} />
                </button>
                
                <button 
                  onClick={handleShare}
                  className="flex items-center justify-center p-1.5 border border-line-soft rounded-full transition-colors duration-300 hover:text-gold hover:border-gold text-muted"
                  aria-label="Share article link"
                  title={shareText}
                >
                  <Share2 size={12} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
