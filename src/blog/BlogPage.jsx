import React, { useEffect } from 'react';
import Navbar from '../Navbar.jsx';
import BlogHero from './components/BlogHero.jsx';
import FeaturedArticle from './components/FeaturedArticle.jsx';
import BlogGrid from './components/BlogGrid.jsx';
import CategoriesSidebar from './components/CategoriesSidebar.jsx';
import FeaturedPost from './components/FeaturedPost.jsx';
import NewsletterCard from './components/NewsletterCard.jsx';
import ValueSection from './components/ValueSection.jsx';
import BlogCTA from './components/BlogCTA.jsx';
import Footer from '../Footer.jsx';

import { blogPosts, blogCategories } from './blogData.js';

export default function BlogPage() {
  const featuredPost = blogPosts.find(p => p.featured) || blogPosts[0];
  const gridPosts = blogPosts.filter(p => p.id !== featuredPost.id).slice(0, 6);
  const sidebarFeaturedPost = blogPosts.find(p => p.id === 9) || blogPosts[1];

  useEffect(() => {
    document.title = 'The Journal | Infocus Weddings';
  }, []);

  return (
    <div className="bg-bg min-h-screen text-text font-sans">
      <Navbar />
      
      <main id="top">
        <BlogHero />
        
        <section className="py-[6rem] max-780:py-[4rem]">
          <div className="blog-main-container max-w-[1240px] mx-auto px-[max(5%,calc((100%-1240px)/2))]">
            <div className="flex justify-between items-end border-b border-line/50 pb-[1rem] mb-[4rem]">
              <h2 className="font-serif text-[#f7f1e7] text-[1.8rem] tracking-[0.05em] uppercase">
                Latest Stories
              </h2>
              <a href="#all-articles" className="flex items-center text-[0.7rem] font-[650] tracking-[0.14em] uppercase text-gold hover:text-gold-soft transition-colors max-560:hidden">
                View all articles &rarr;
              </a>
            </div>

            <div className="flex gap-[5rem] max-1080:flex-col">
              {/* Main Content Area (72%) */}
              <div className="flex-[0_0_72%] max-w-[72%] max-1080:max-w-full">
                <div className="mb-[5rem]">
                  <FeaturedArticle post={featuredPost} />
                </div>
                
                <BlogGrid posts={gridPosts} />
              </div>

              {/* Sidebar (28%) */}
              <aside className="flex-[0_0_24%] max-w-[24%] max-1080:max-w-[600px] max-1080:mx-auto max-1080:w-full">
                <CategoriesSidebar categories={blogCategories} />
                <FeaturedPost post={sidebarFeaturedPost} />
                <NewsletterCard />
              </aside>
            </div>
          </div>
        </section>

        <ValueSection />
        
        <BlogCTA />
      </main>

      <Footer />
    </div>
  );
}
