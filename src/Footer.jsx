import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const contactLinks = {
    instagram: "https://www.instagram.com/infocus.weddings/",
    youtube: "https://www.youtube.com/@infocusweddings",
    whatsapp: "https://wa.me/918333000094",
    email: "mailto:hello@infocusweddings.com",
    phone: "tel:+918333000094"
  };

  return (
    <footer className="site-footer">
      <div className="footer-layout page-shell">
        <div className="footer-col">
          <div className="footer-brand">
            Infocus Weddings
          </div>
          <div className="footer-subtitle" style={{ color: 'var(--lux-gold-warm)', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.75rem', fontWeight: 600 }}>
            Luxury Wedding Photography & Cinematography
          </div>
          <p className="footer-bio">
            Based in Malakpet, Hyderabad, India.<br />
            Available for destination weddings worldwide.
          </p>
          <p className="footer-seo-info" style={{ fontSize: '0.75rem', color: 'rgba(255, 246, 232, 0.45)', lineHeight: '1.6', maxWidth: '360px', marginTop: '0.75rem' }}>
            Luxury Telugu Wedding Photography & Cinematic Films. Capturing love stories and candid moments across Hyderabad, Vijayawada, Tirupati, Telangana, Andhra Pradesh, and destination celebrations worldwide.
          </p>
        </div>

        <div className="footer-col">
          <h4>Connect With Us</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            <a 
              href={contactLinks.instagram} 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Follow Infocus Weddings on Instagram"
              style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', transition: 'color 0.3s ease' }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--lux-gold-warm)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }} aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              <span>Instagram</span>
            </a>
            <a 
              href={contactLinks.youtube} 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Subscribe to Infocus Weddings on YouTube"
              style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', transition: 'color 0.3s ease' }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--lux-gold-warm)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }} aria-hidden="true"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
              <span>YouTube</span>
            </a>
            <a 
              href={contactLinks.whatsapp} 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Chat with Infocus Weddings on WhatsApp"
              style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', transition: 'color 0.3s ease' }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--lux-gold-warm)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }} aria-hidden="true"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
              <span>WhatsApp</span>
            </a>
            <a 
              href={contactLinks.email} 
              aria-label="Send an email to Infocus Weddings"
              style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', transition: 'color 0.3s ease' }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--lux-gold-warm)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }} aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              <span>hello@infocusweddings.com</span>
            </a>
            <a 
              href={contactLinks.phone} 
              aria-label="Call Infocus Weddings"
              style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', transition: 'color 0.3s ease' }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--lux-gold-warm)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }} aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              <span>Call Us</span>
            </a>
          </div>
        </div>

        <div className="footer-col footer-links">
          <h4>Quick Links</h4>
          <Link to="/about" aria-label="Learn more about us">About Us</Link>
          <Link to="/portfolio" aria-label="View our portfolio gallery">Portfolio</Link>
          <Link to="/wedding-films" aria-label="Watch our cinematic wedding films">Wedding Films</Link>
          <Link to="/services" aria-label="Browse our wedding services">Services</Link>
          <Link to="/build-your-crew" aria-label="Build your custom photography crew">Build Your Crew</Link>
          <Link to="/blog" aria-label="Read our wedding stories and journal">Journal</Link>
          <Link to="/faqs" aria-label="Read frequently asked questions">FAQs</Link>
          <Link to="/contact" aria-label="Get in touch with Infocus Weddings">Contact</Link>
        </div>
      </div>
      <div className="footer-bottom page-shell">
        <span>© 2026 Infocus Weddings. All rights reserved.</span>
        <span>Crafting timeless memories.</span>
      </div>
    </footer>
  );
}
