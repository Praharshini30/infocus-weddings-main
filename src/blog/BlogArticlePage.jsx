import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Navbar from '../Navbar.jsx';
import Footer from '../Footer.jsx';
import { blogPosts } from './blogData.js';
import { blogArticlesContent } from './blogArticlesContent.js';
import { ArrowLeft, ArrowRight, Heart, Share2 } from 'lucide-react';

export default function BlogArticlePage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [liked, setLiked] = useState(false);
  const [shareText, setShareText] = useState('Copy Link');

  // Find the post metadata
  const post = blogPosts.find(p => p.slug === slug);
  // Find the post rich content
  const article = blogArticlesContent[slug];

  useEffect(() => {
    if (post) {
      document.title = `${post.title} | The Journal | Infocus Weddings`;
      
      // Update SEO Meta Description dynamically
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.name = 'description';
        document.head.appendChild(metaDescription);
      }
      metaDescription.content = post.excerpt;

      // Scroll to top on navigation
      window.scrollTo(0, 0);
    }
  }, [slug, post]);

  if (!post || !article) {
    return (
      <div className="bg-bg min-h-screen text-text flex flex-col justify-between font-sans">
        <Navbar />
        <div className="flex-grow flex flex-col items-center justify-center py-[10rem] px-8 text-center">
          <h2 className="font-serif text-[#f7f1e7] text-[2rem] mb-4">Article Not Found</h2>
          <p className="text-muted mb-8 max-w-[400px]">The journal article you are looking for has moved or does not exist.</p>
          <Link to="/blog" className="btn btn-lux-primary">Return to Journal</Link>
        </div>
        <Footer />
      </div>
    );
  }

  // Related posts
  const relatedPosts = blogPosts
    .filter(p => p.slug !== slug && (p.category === post.category || p.featured))
    .slice(0, 3);

  // Prev / Next posts
  const currentIndex = blogPosts.findIndex(p => p.slug === slug);
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  // Share handlers
  const shareUrl = window.location.href;
  const handleLike = () => setLiked(!liked);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setShareText('Link Copied!');
      setTimeout(() => setShareText('Copy Link'), 2000);
    } catch (err) {
      console.error('Could not copy link:', err);
    }
  };

  const handleNativeShare = async () => {
    const shareData = {
      title: post.title,
      text: post.excerpt,
      url: shareUrl,
    };
    if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.error('Native share failed:', err);
      }
    } else {
      copyToClipboard();
    }
  };

  return (
    <div className="bg-bg min-h-screen text-text font-sans selection:bg-gold selection:text-bg">
      <Navbar />

      <main className="pt-[80px]">
        {/* Article Hero */}
        <section className="relative w-full h-[65svh] min-h-[450px] flex items-end overflow-hidden">
          <div className="absolute inset-0 w-full h-full">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-full object-cover object-center"
              loading="eager"
            />
            <div className="absolute inset-0 bg-black/40 z-[1]" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_40%,rgba(5,5,4,0.98)_100%)] z-[1]" />
          </div>

          <div className="relative z-[2] w-full max-w-[900px] mx-auto px-6 pb-[3rem]">
            <Link to="/blog" className="inline-flex items-center text-[0.68rem] font-[650] tracking-[0.18em] uppercase text-gold hover:text-[#f7f1e7] transition-colors mb-[2rem]">
              <ArrowLeft size={14} className="mr-[0.5rem]" /> Back to Journal
            </Link>

            <div className="flex items-center gap-[1rem] mb-[1.2rem]">
              <span className="bg-gold/20 border border-gold/40 text-gold text-[0.58rem] font-[700] tracking-[0.14em] uppercase px-[0.6rem] py-[0.3rem]">
                {post.category}
              </span>
              <span className="text-muted text-[0.7rem] font-[600] tracking-[0.1em] uppercase">
                {post.date}
              </span>
              <span className="h-[3px] w-[3px] rounded-full bg-line-soft"></span>
              <span className="text-muted text-[0.7rem] font-[600] tracking-[0.1em] uppercase">
                {article.readingTime}
              </span>
            </div>

            <h1 className="font-serif text-[#f7f1e7] text-[clamp(2.2rem,4.5vw,3.6rem)] leading-[1.12] font-normal mb-[1.5rem] uppercase">
              {post.title}
            </h1>
          </div>
        </section>

        {/* Content Layout */}
        <section className="py-[4rem] px-6">
          <div className="max-w-[900px] mx-auto">
            <div className="grid grid-cols-[1fr_220px] gap-[4rem] max-900:grid-cols-1">
              
              {/* Main Article Content */}
              <article className="prose prose-invert max-w-none">
                <p className="text-muted text-[1.15rem] leading-[1.85] font-light italic mb-[2.5rem] border-l-2 border-gold/30 pl-6">
                  {article.intro}
                </p>

                {/* Render Paragraph Sections */}
                {article.sections && article.sections.map((sec, idx) => (
                  <div key={idx} className="mb-[3rem]">
                    <h2 className="font-serif text-[#f7f1e7] text-[1.6rem] tracking-[0.03em] font-normal mb-[1.2rem] uppercase">
                      {sec.title}
                    </h2>
                    {sec.paragraphs.map((p, pIdx) => (
                      <p key={pIdx} className="text-muted/90 text-[0.98rem] leading-[1.8] font-light mb-[1.2rem]">
                        {p}
                      </p>
                    ))}
                  </div>
                ))}

                {/* Elegant Pull Quote */}
                {article.quote && (
                  <blockquote className="my-[4rem] py-[1.5rem] border-t border-b border-line-soft/40 text-center">
                    <p className="font-serif text-[#f7f1e7] text-[1.38rem] leading-[1.5] italic font-light max-w-[620px] mx-auto">
                      "{article.quote}"
                    </p>
                  </blockquote>
                )}
              </article>

              {/* Sidebar Interactions */}
              <aside className="h-fit sticky top-[120px] max-900:relative max-900:top-0 max-900:border-t max-900:border-line-soft/30 max-900:pt-8">
                {/* Author Info */}
                <div className="mb-8">
                  <h4 className="text-muted text-[0.62rem] font-[700] tracking-[0.16em] uppercase mb-3">Written By</h4>
                  <p className="font-serif text-[#f7f1e7] text-[1.05rem]">InFocus Editorial Team</p>
                  <p className="text-muted text-[0.8rem] font-light mt-1">Curators of Fine Weddings</p>
                </div>

                {/* Likes Panel */}
                <div className="mb-8 flex items-center gap-[1rem]">
                  <button 
                    onClick={handleLike}
                    className={`flex items-center gap-[0.5rem] px-4 py-2 border rounded-full text-[0.68rem] font-semibold tracking-[0.08em] uppercase transition-all duration-300 ${liked ? 'border-gold text-gold bg-gold/5' : 'border-line-soft hover:border-gold hover:text-gold text-muted'}`}
                  >
                    <Heart size={14} className={liked ? 'fill-gold text-gold scale-110' : ''} />
                    <span>{liked ? 'Liked' : 'Like'}</span>
                  </button>
                  <span className="text-[0.74rem] text-muted font-light">{liked ? '1 Like' : '0 Likes'}</span>
                </div>

                {/* Social Share Widgets */}
                <div className="border-t border-line-soft/30 pt-6">
                  <h4 className="text-muted text-[0.62rem] font-[700] tracking-[0.16em] uppercase mb-4">Share This Article</h4>
                  <div className="flex flex-wrap gap-[0.6rem]">
                    <a 
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="p-2 border border-line-soft rounded-full text-muted hover:text-gold hover:border-gold transition-all duration-300 flex items-center justify-center w-8 h-8"
                      aria-label="Share on Facebook"
                    >
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
                      </svg>
                    </a>
                    <a 
                      href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post.title)}`} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="p-2 border border-line-soft rounded-full text-muted hover:text-gold hover:border-gold transition-all duration-300 flex items-center justify-center w-8 h-8"
                      aria-label="Share on Twitter"
                    >
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </a>
                    <a 
                      href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="p-2 border border-line-soft rounded-full text-muted hover:text-gold hover:border-gold transition-all duration-300 flex items-center justify-center w-8 h-8"
                      aria-label="Share on LinkedIn"
                    >
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                    <button 
                      onClick={handleNativeShare}
                      className="p-2 border border-line-soft rounded-full text-muted hover:text-gold hover:border-gold transition-all duration-300 flex items-center justify-center w-8 h-8"
                      aria-label="System Share or Copy Link"
                    >
                      <Share2 size={14} />
                    </button>
                  </div>
                  <button 
                    onClick={copyToClipboard} 
                    className="inline-flex items-center gap-[0.4rem] mt-4 text-[0.62rem] font-semibold tracking-[0.08em] uppercase text-gold hover:text-gold-soft transition-colors"
                  >
                    <svg className="w-3 h-3 fill-none stroke-current stroke-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    {shareText}
                  </button>
                </div>
              </aside>

            </div>
          </div>
        </section>

        {/* Previous / Next Article Navigation */}
        {(prevPost || nextPost) && (
          <section className="border-t border-b border-line-soft/30 py-8 px-6 bg-panel/30">
            <div className="max-w-[900px] mx-auto flex items-center justify-between gap-[2rem] max-560:flex-col">
              {prevPost ? (
                <Link to={`/blog/${prevPost.slug}`} className="flex flex-col items-start gap-1 group text-left max-w-[45%] max-560:max-w-full">
                  <span className="text-[0.62rem] font-bold tracking-[0.16em] uppercase text-muted group-hover:text-gold transition-colors inline-flex items-center">
                    <ArrowLeft size={10} className="mr-1" /> Previous Article
                  </span>
                  <span className="font-serif text-[#f7f1e7] text-[0.98rem] font-medium leading-[1.3] line-clamp-1 transition-colors group-hover:text-gold-soft">
                    {prevPost.title}
                  </span>
                </Link>
              ) : <div />}

              {nextPost ? (
                <Link to={`/blog/${nextPost.slug}`} className="flex flex-col items-end gap-1 group text-right max-w-[45%] max-560:max-w-full">
                  <span className="text-[0.62rem] font-bold tracking-[0.16em] uppercase text-muted group-hover:text-gold transition-colors inline-flex items-center">
                    Next Article <ArrowRight size={10} className="ml-1" />
                  </span>
                  <span className="font-serif text-[#f7f1e7] text-[0.98rem] font-medium leading-[1.3] line-clamp-1 transition-colors group-hover:text-gold-soft">
                    {nextPost.title}
                  </span>
                </Link>
              ) : <div />}
            </div>
          </section>
        )}

        {/* Related Articles Section */}
        {relatedPosts.length > 0 && (
          <section className="py-[6rem] px-6">
            <div className="max-w-[900px] mx-auto">
              <h3 className="font-serif text-[#f7f1e7] text-[1.6rem] tracking-[0.05em] mb-[3rem] uppercase text-center">
                Related Stories
              </h3>
              <div className="grid grid-cols-3 gap-6 max-780:grid-cols-1">
                {relatedPosts.map((post, idx) => (
                  <Link 
                    key={idx} 
                    to={`/blog/${post.slug}`}
                    className="group flex flex-col bg-panel border border-line-soft rounded-[4px] overflow-hidden transition-all duration-300 hover:border-gold"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4 flex flex-col flex-grow">
                      <span className="text-gold text-[0.55rem] font-bold tracking-[0.1em] uppercase mb-2">
                        {post.category}
                      </span>
                      <h4 className="font-serif text-[#f7f1e7] text-[0.95rem] leading-[1.3] font-normal line-clamp-2 group-hover:text-gold-soft transition-colors mb-3">
                        {post.title}
                      </h4>
                      <span className="mt-auto text-[0.62rem] text-muted tracking-[0.1em] uppercase">
                        {post.date}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Consultation CTA */}
        <section className="py-[6rem] px-6 border-t border-t-line-soft/30 text-center relative overflow-hidden bg-panel/20">
          <div className="relative z-10 max-w-[600px] mx-auto">
            <span className="text-gold text-[0.74rem] font-[750] tracking-[0.2em] uppercase block mb-[1.2rem]">
              Let's Co-Create
            </span>
            <h2 className="font-serif text-[#f7f1e7] text-[2.2rem] leading-[1.2] font-normal mb-4 uppercase">
              Capture Your Forever Story
            </h2>
            <p className="text-muted text-[0.98rem] leading-[1.7] font-light mb-[2.5rem]">
              Every wedding is unique, and your memories deserve a curated touch. Contact our team to design a customized photography & filming package.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a href="mailto:hello@infocusweddings.com" className="btn btn-lux-primary">Book Consultation</a>
              <a href="https://wa.me/918333000094" className="btn btn-lux-secondary">Chat on WhatsApp</a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
