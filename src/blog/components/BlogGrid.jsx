import React, { useState } from 'react';
import BlogCard from './BlogCard.jsx';

export default function BlogGrid({ posts }) {
  const [visibleCount, setVisibleCount] = useState(6);

  if (!posts || posts.length === 0) return null;

  const visiblePosts = posts.slice(0, visibleCount);
  const hasMore = visibleCount < posts.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  return (
    <div className="flex flex-col gap-[3rem]" id="all-articles">
      <div className="grid grid-cols-2 gap-[2rem] max-780:grid-cols-1">
        {visiblePosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
      
      <div className="flex justify-center items-center mt-[1rem]">
        {hasMore ? (
          <button 
            onClick={handleLoadMore}
            className="items-center rounded-[4px] inline-flex text-[0.68rem] font-[650] justify-center tracking-[0.14em] min-h-[46px] px-[2.5rem] uppercase transition-[transform,border-color,color,background] duration-300 ease-in-out whitespace-nowrap bg-transparent border border-line text-gold hover:bg-gold/10 hover:-translate-y-[2px] cursor-pointer"
          >
            Load More Articles ({posts.length - visibleCount} remaining)
          </button>
        ) : (
          <div className="py-[1rem] px-[2rem] rounded-[4px] border border-line-soft bg-panel/50 text-center">
            <span className="text-[0.72rem] font-[650] tracking-[0.16em] uppercase text-gold/80">
              ✦ You've reached the end of our stories. ✦
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
