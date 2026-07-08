import { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { getCloudinaryUrl } from '../../utils/cloudinary.js';

export default function Lightbox({ images, currentIndex, onClose, onPrev, onNext }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    
    // Prevent background scrolling while the lightbox is open
    document.body.style.overflow = 'hidden';
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose, onPrev, onNext]);

  if (!images || images.length === 0 || currentIndex < 0 || currentIndex >= images.length) {
    return null;
  }

  const currentItem = images[currentIndex];
  const src = typeof currentItem === 'string' ? currentItem : currentItem.src;
  const alt = typeof currentItem === 'string' ? '' : (currentItem.alt || '');
  const tag = typeof currentItem === 'string' ? null : currentItem.tag;

  return (
    <div className="pf-lightbox-modal" onClick={onClose}>
      <button 
        className="pf-lightbox-close" 
        type="button" 
        onClick={onClose} 
        aria-label="Close lightbox"
      >
        <X size={28} />
      </button>

      {images.length > 1 && (
        <button
          className="pf-lightbox-nav pf-lightbox-nav-left"
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          aria-label="Previous image"
        >
          <ChevronLeft size={36} />
        </button>
      )}

      <div className="pf-lightbox-content" onClick={(e) => e.stopPropagation()}>
        <img src={getCloudinaryUrl(src, 1600)} alt={alt} className="pf-lightbox-img" />
        {tag && <span className="pf-lightbox-tag-badge">{tag}</span>}
      </div>

      {images.length > 1 && (
        <button
          className="pf-lightbox-nav pf-lightbox-nav-right"
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          aria-label="Next image"
        >
          <ChevronRight size={36} />
        </button>
      )}
    </div>
  );
}
