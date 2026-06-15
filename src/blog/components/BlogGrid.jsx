import React from 'react';
import BlogCard from './BlogCard.jsx';

export default function BlogGrid({ posts }) {
  if (!posts || posts.length === 0) return null;

  return (
    <div className="flex flex-col gap-[3rem]">
      <div className="grid grid-cols-2 gap-[2rem] max-780:grid-cols-1">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
      
      <div className="flex justify-center mt-[1rem]">
        <button className="items-center rounded-[4px] inline-flex text-[0.68rem] font-[650] justify-center tracking-[0.14em] min-h-[46px] px-[2rem] uppercase transition-[transform,border-color,color,background] duration-300 ease-in-out whitespace-nowrap bg-transparent border border-line text-gold hover:bg-gold/10 hover:-translate-y-[2px]">
          Load More Articles
        </button>
      </div>
    </div>
  );
}
