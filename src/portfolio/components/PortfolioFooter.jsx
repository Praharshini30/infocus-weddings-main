import React from 'react';
import { Link } from 'react-router-dom';
import { Brand } from '../../Navbar.jsx';

const footerLinks = [
  { label: 'Home', href: '/' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Wedding Films', href: '/wedding-films' },
  { label: 'Services', href: '/services' },
  { label: 'Build Your Crew', href: '/build-your-crew' },
  { label: 'About', href: '/about' },
  { label: 'Journal', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

const portfolioCategories = [
  { label: 'Wedding', key: 'wedding', anchor: '#portfolio-wedding' },
  { label: 'Pre-Wedding', key: 'pre-wedding', anchor: '#portfolio-pre-wedding' },
  { label: 'Engagement', key: 'engagement', anchor: '#portfolio-engagement' },
  { label: 'Baby Shower', key: 'baby-shower', anchor: '#portfolio-baby-shower' },
  { label: 'Haldi', key: 'haldi', anchor: '#portfolio-haldi' },
  { label: 'Reception', key: 'reception', anchor: '#portfolio-reception' },
];

export default function PortfolioFooter({ onCategorySelect }) {
  const handleCategoryClick = (e, cat) => {
    if (onCategorySelect) {
      onCategorySelect(cat.key);
    }
    const elem = document.querySelector(cat.anchor);
    if (elem) {
      e.preventDefault();
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="pf-footer">
      <div className="pf-footer-grid">
        <div>
          <Brand />
          <p>Luxury wedding photography and cinematography for couples who value timeless storytelling.</p>
        </div>
        <div>
          <h4>Quick Links</h4>
          {footerLinks.map(({ label, href }) => (
            <Link key={label} to={href}>{label}</Link>
          ))}
        </div>
        <div>
          <h4>Portfolio</h4>
          {portfolioCategories.map((cat) => (
            <a
              key={cat.key}
              href={cat.anchor}
              onClick={(e) => handleCategoryClick(e, cat)}
            >
              {cat.label}
            </a>
          ))}
        </div>
        <div>
          <h4>Follow Us</h4>
          <a
            href="https://www.instagram.com/infocus.weddings/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow Infocus Weddings on Instagram"
          >
            Instagram
          </a>
          <a
            href="https://www.youtube.com/@infocusweddings"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Subscribe to Infocus Weddings on YouTube"
          >
            YouTube
          </a>
          <a
            href="https://wa.me/918333000094"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with Infocus Weddings on WhatsApp"
          >
            WhatsApp
          </a>
        </div>
      </div>
      <div className="pf-footer-bottom">
        <span>© 2026 Infocus Weddings. All rights reserved.</span>
        <a
          href="#portfolio-top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          Back to top
        </a>
      </div>
    </footer>
  );
}
