import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Services', href: '/services' },
  { label: 'Build Your Crew', href: '/build-your-crew' },
  { label: 'About', href: '/#about' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'Blog', href: '/#blog' },
  { label: 'Contact', href: '/#contact' },
];

function localHref(href, pathname) {
  if (pathname !== '/') {
    return href;
  }

  if (href === '/') {
    return '#top';
  }

  return href.startsWith('/#') ? href.slice(1) : href;
}

function isActiveLink(href, pathname, activeHash) {
  if (href === pathname) {
    return true;
  }

  if (href.includes('#') && activeHash) {
    return href.endsWith(activeHash);
  }

  return false;
}

export function Brand() {
  return (
    <a className="brand" href="/" aria-label="Infocus Weddings home">
      <span>Infocus</span>
      <small>Weddings</small>
    </a>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState(window.location.hash);
  const navigate = useNavigate();
  const pathname = window.location.pathname;
  const closeMenu = () => setMenuOpen(false);
  const ctaHref = localHref('/#contact', pathname);

  useEffect(() => {
    const target = document.getElementById('build-your-crew');

    const handleHashChange = () => setActiveHash(window.location.hash);

    window.addEventListener('hashchange', handleHashChange);

    if (!target) {
      return () => window.removeEventListener('hashchange', handleHashChange);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setActiveHash(entry.isIntersecting ? '#build-your-crew' : window.location.hash === '#build-your-crew' ? '' : window.location.hash);
      },
      { rootMargin: '-42% 0px -45% 0px', threshold: 0 },
    );

    observer.observe(target);

    return () => {
      observer.disconnect();
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [pathname]);

  const handleNavClick = (event, href) => {
    closeMenu();

    const resolvedHref = localHref(href, pathname);

    if (!resolvedHref.startsWith('#')) {
      event.preventDefault();
      navigate(resolvedHref);
      return;
    }

    const target = document.getElementById(resolvedHref.slice(1));

    if (!target) {
      return;
    }

    event.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    window.history.pushState(null, '', resolvedHref);
    setActiveHash(resolvedHref);
  };

  return (
    <>
      <header className={`site-header ${menuOpen ? 'site-header-open' : ''}`}>
        <Brand />

        <nav className="main-nav" aria-label="Primary navigation">
          {navLinks.map(({ label, href }) => (
            <a
              className={isActiveLink(href, pathname, activeHash) ? 'active' : ''}
              href={localHref(href, pathname)}
              key={label}
              onClick={(event) => handleNavClick(event, href)}
            >
              {label}
            </a>
          ))}
        </nav>

        <a className="nav-cta" href={ctaHref}>Book Consultation</a>
        <button
          className="mobile-menu-toggle"
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      <div className={`mobile-menu ${menuOpen ? 'mobile-menu-open' : ''}`}>
        <nav aria-label="Mobile navigation">
          {navLinks.map(({ label, href }) => (
            <a
              className={isActiveLink(href, pathname, activeHash) ? 'active' : ''}
              href={localHref(href, pathname)}
              key={label}
              onClick={(event) => handleNavClick(event, href)}
            >
              {label}
            </a>
          ))}
          <a className="btn btn-primary" href={ctaHref} onClick={closeMenu}>Book Consultation</a>
        </nav>
      </div>
    </>
  );
}
