import { useState } from 'react';
import Navbar from '../Navbar.jsx';
import CategoryFilter from './components/CategoryFilter.jsx';
import Hero from './components/Hero.jsx';
import WeddingSection from './components/WeddingSection.jsx';
import PreWeddingSection from './components/PreWeddingSection.jsx';
import EngagementSection from './components/EngagementSection.jsx';
import BabyShowerSection from './components/BabyShowerSection.jsx';
import HaldiSection from './components/HaldiSection.jsx';
import ReceptionSection from './components/ReceptionSection.jsx';
import DestinationSection from './components/DestinationSection.jsx';
import FilmsSection from './components/FilmsSection.jsx';
import Testimonials from './components/Testimonials.jsx';
import PortfolioCTA from './components/PortfolioCTA.jsx';
import PortfolioFooter from './components/PortfolioFooter.jsx';
import './portfolio-page.css';

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const showCategory = (category) => activeCategory === 'all' || activeCategory === category;
  const showExtras = activeCategory === 'all';

  return (
    <div className="portfolio-page">
      <Navbar />
      <main>
        <Hero />
        <CategoryFilter activeCategory={activeCategory} onChange={setActiveCategory} />
        <WeddingSection visible={showCategory('wedding')} />
        <PreWeddingSection visible={showCategory('pre-wedding')} />
        <EngagementSection visible={showCategory('engagement')} />
        <BabyShowerSection visible={showCategory('baby-shower')} />
        <HaldiSection visible={showCategory('haldi')} />
        <ReceptionSection visible={showCategory('reception')} />
        <FilmsSection visible={showCategory('wedding-films')} />
        {showExtras && <DestinationSection visible />}
        {showExtras && <Testimonials visible />}
        <PortfolioCTA />
      </main>
      <PortfolioFooter />
    </div>
  );
}
