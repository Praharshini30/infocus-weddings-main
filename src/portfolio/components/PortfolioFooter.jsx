import { Link } from 'react-router-dom';
import { Brand } from '../../Navbar.jsx';

const footerLinks = [
  { label: 'Home', href: '/' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Services', href: '/services' },
  { label: 'Build Your Crew', href: '/build-your-crew' },
  { label: 'Contact', href: '/#contact' },
];

const portfolioCategories = [
  'Wedding',
  'Pre-Wedding',
  'Engagement',
  'Baby Shower',
  'Haldi',
  'Reception',
];

export default function PortfolioFooter() {
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
          {portfolioCategories.map((label) => (
            <span key={label}>{label}</span>
          ))}
        </div>
        <div>
          <h4>Follow Us</h4>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer">YouTube</a>
          <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer">WhatsApp</a>
        </div>
      </div>
      <div className="pf-footer-bottom">
        <span>© 2026 Infocus Weddings. All rights reserved.</span>
        <a href="#portfolio-top">Back to top</a>
      </div>
    </footer>
  );
}
