import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './styles.css';

// Global tracker to handle loaded states on all images dynamically
if (typeof window !== 'undefined') {
  const handleImageLoad = (e) => {
    if (e.target && e.target.tagName === 'IMG') {
      e.target.classList.add('loaded');
    }
  };

  document.addEventListener('load', handleImageLoad, true);

  const checkImg = (img) => {
    if (img.complete) {
      img.classList.add('loaded');
    } else {
      img.classList.remove('loaded');
    }
  };

  const checkAllImages = () => {
    document.querySelectorAll('img').forEach(checkImg);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', checkAllImages);
  } else {
    checkAllImages();
  }

  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === 'childList') {
        mutation.addedNodes.forEach((node) => {
          if (node.tagName === 'IMG') {
            checkImg(node);
          } else if (node.querySelectorAll) {
            node.querySelectorAll('img').forEach(checkImg);
          }
        });
      } else if (mutation.type === 'attributes' && mutation.attributeName === 'src') {
        const img = mutation.target;
        if (img.tagName === 'IMG') {
          checkImg(img);
        }
      }
    });
  });

  observer.observe(document.documentElement, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ['src']
  });
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

