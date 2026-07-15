import React, { useRef, useEffect } from 'react';
import { categories } from '../portfolioData.js';

export default function CategoryFilter({ activeCategory, onChange }) {
  const navInnerRef = useRef(null);

  useEffect(() => {
    if (!navInnerRef.current) return;
    const activeBtn = navInnerRef.current.querySelector('button.active');
    if (activeBtn) {
      activeBtn.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      });
    }
  }, [activeCategory]);

  const handleSelect = (id) => {
    onChange(id);
    if (id !== 'all') {
      const target = document.getElementById(`portfolio-${id}`);
      target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="pf-category-nav" id="portfolio-nav" aria-label="Portfolio categories">
      <div ref={navInnerRef} className="pf-category-nav-inner">
        {categories.map(({ id, label }) => (
          <button
            key={id}
            type="button"
            className={activeCategory === id ? 'active' : ''}
            onClick={() => handleSelect(id)}
          >
            {label}
          </button>
        ))}
      </div>
    </nav>
  );
}
