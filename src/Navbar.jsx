import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Wedding Films', href: '/wedding-films' },
  { label: 'Services', href: '/services' },
  { label: 'Build Your Crew', href: '/build-your-crew' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
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
    <a className="grid leading-none uppercase" href="/" aria-label="Infocus Weddings home">
      <span className="font-serif text-[clamp(1.4rem,3vw,1.72rem)] font-medium tracking-[0.12em]">Infocus</span>
      <small className="text-gold-soft text-[clamp(0.5rem,1.2vw,0.62rem)] tracking-[0.42em] mt-[0.18rem] text-center">Weddings</small>
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
    const handleHashChange = () => setActiveHash(window.location.hash);
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
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
      <header className={`items-center flex justify-between gap-[clamp(28px,2vw,36px)] w-full h-[90px] inset-x-0 top-0 bottom-auto px-[max(5%,calc((100%-1680px)/2))] absolute z-20 transition-colors bg-[linear-gradient(180deg,rgba(5,5,4,0.86),rgba(5,5,4,0))] max-1080:bg-[linear-gradient(180deg,rgba(5,5,4,0.95),rgba(5,5,4,0.35))] max-780:px-[18px] max-780:bg-[linear-gradient(180deg,rgba(5,5,4,0.88),rgba(5,5,4,0.2))] max-560:h-[75px] ${menuOpen ? '!bg-[rgba(5,5,4,0.96)] max-780:!bg-[rgba(5,5,4,0.98)]' : ''}`}>
        
        {/* Zone 1: Logo Section (Left) */}
        <div className="flex-none">
          <Brand />
        </div>

        {/* Zone 2: Navigation Links (Centered) */}
        <nav className="items-center flex flex-1 justify-center gap-[clamp(28px,2vw,36px)] max-1080:hidden" aria-label="Primary navigation">
          {navLinks.map(({ label, href }) => (
            <a
              className={`text-[rgba(255,246,232,0.74)] text-[clamp(0.6rem,1vw,0.7rem)] font-semibold tracking-[0.08em] uppercase whitespace-nowrap hover:text-gold-soft transition-colors ${isActiveLink(href, pathname, activeHash) ? 'text-gold-soft' : ''}`}
              href={localHref(href, pathname)}
              key={label}
              onClick={(event) => handleNavClick(event, href)}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Zone 3: CTA Button (Right) */}
        <div className="flex-none flex justify-end items-center">
          <a className="btn btn-lux-primary max-1080:hidden px-[1.1rem] py-[0.65rem] text-[0.65rem] min-h-[38px] tracking-[0.08em]" href={ctaHref}>Book Consultation</a>
          
          <button
            className="items-center bg-[rgba(255,246,232,0.07)] border border-line-soft rounded-[4px] text-text hidden h-[42px] justify-center w-[42px] max-1080:flex"
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <div className={`bg-[rgba(5,5,4,0.96)] backdrop-blur-[16px] inset-0 pt-[120px] px-[2rem] pb-[3rem] fixed z-[18] ${menuOpen ? 'block' : 'hidden'}`}>
        <nav aria-label="Mobile navigation" className="flex flex-col gap-[1.25rem]">
          {navLinks.map(({ label, href }) => (
            <a
              className={`text-[rgba(255,246,232,0.82)] text-[clamp(1.2rem,4vw,1.45rem)] font-medium transition-colors ${isActiveLink(href, pathname, activeHash) ? 'text-gold-soft' : ''}`}
              href={localHref(href, pathname)}
              key={label}
              onClick={(event) => handleNavClick(event, href)}
            >
              {label}
            </a>
          ))}
          <a className="btn btn-lux-primary mt-[1.5rem] w-full" href={ctaHref} onClick={closeMenu}>Book Consultation</a>
        </nav>
      </div>
    </>
  );
}
