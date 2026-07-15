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
import Lightbox from './components/Lightbox.jsx';
import AllGallerySection from './components/AllGallerySection.jsx';
import './portfolio-page.css';

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightbox, setLightbox] = useState({ isOpen: false, images: [], currentIndex: 0 });

  const showCategory = (category) => activeCategory !== 'all' && activeCategory === category;
  const showExtras = activeCategory === 'all';

  const handleImageClick = (imagesList, index) => {
    setLightbox({
      isOpen: true,
      images: imagesList,
      currentIndex: index,
    });
  };

  const handleClose = () => {
    setLightbox((prev) => ({ ...prev, isOpen: false }));
  };

  const handlePrev = () => {
    setLightbox((prev) => ({
      ...prev,
      currentIndex: (prev.currentIndex - 1 + prev.images.length) % prev.images.length,
    }));
  };

  const handleNext = () => {
    setLightbox((prev) => ({
      ...prev,
      currentIndex: (prev.currentIndex + 1) % prev.images.length,
    }));
  };

  return (
    <div className="portfolio-page">
      <Navbar />
      <main>
        <Hero />
        <CategoryFilter activeCategory={activeCategory} onChange={setActiveCategory} />
        <AllGallerySection visible={activeCategory === 'all'} onImageClick={handleImageClick} />
        <WeddingSection visible={showCategory('wedding')} onImageClick={handleImageClick} />
        <PreWeddingSection visible={showCategory('pre-wedding')} onImageClick={handleImageClick} />
        <EngagementSection visible={showCategory('engagement')} onImageClick={handleImageClick} />
        <BabyShowerSection visible={showCategory('baby-shower')} onImageClick={handleImageClick} />
        <HaldiSection visible={showCategory('haldi')} onImageClick={handleImageClick} />
        <ReceptionSection visible={showCategory('reception')} onImageClick={handleImageClick} />
        <FilmsSection visible={showCategory('wedding-films')} />
        {showExtras && <DestinationSection visible onImageClick={handleImageClick} />}
        {showExtras && <Testimonials visible />}
        <PortfolioCTA />
      </main>
      <PortfolioFooter />

      {lightbox.isOpen && (
        <Lightbox
          images={lightbox.images}
          currentIndex={lightbox.currentIndex}
          onClose={handleClose}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </div>
  );
}

