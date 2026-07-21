import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Share2 } from 'lucide-react';

export default function FeaturedArticle({ post }) {
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
        
        <div className="max-w-[600px] w-full">
          <span className="text-muted text-[0.7rem] font-bold tracking-[0.1em] uppercase block mb-[0.75rem]">
            {post.date}
          </span>
          <h3 className="font-serif text-[#f7f1e7] text-[clamp(1.8rem,3vw,2.5rem)] leading-[1.1] font-normal mb-[1rem]">
            {post.title}
          </h3>
          <div className="flex flex-col gap-[1rem]">
            <p className="text-muted text-[0.95rem] leading-[1.7] line-clamp-2">
              {post.excerpt}
            </p>
            
            <div className="flex items-center justify-between gap-[1rem] flex-wrap mt-[0.5rem]">
              <Link to={`/blog/${post.slug}`} className="flex-none items-center flex text-[0.68rem] font-[650] tracking-[0.14em] uppercase text-text border border-line-soft px-[1.5rem] py-[0.8rem] transition-colors hover:border-gold hover:text-gold">
                READ MORE <ArrowRight size={14} className="ml-[0.5rem]" />
              </Link>

              <div className="flex items-center gap-[1.2rem] text-muted">
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
        </div>
      </div>
    </article>
  );
}
