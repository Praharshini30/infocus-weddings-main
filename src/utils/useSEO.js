import { useEffect } from 'react';

export default function useSEO({
  title,
  description,
  keywords,
  canonical,
  ogTitle,
  ogDescription,
  ogImage,
  ogUrl,
  ogType = 'website',
  twitterCard = 'summary_large_image'
}) {
  useEffect(() => {
    // 1. Title
    if (title) {
      document.title = title;
    }

    // Helper to get or create tag
    const getOrCreateMeta = (attr, value, content) => {
      let element = document.head.querySelector(`meta[${attr}="${value}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, value);
        document.head.appendChild(element);
      }
      if (content) {
        element.setAttribute('content', content);
      }
      return element;
    };

    const getOrCreateLink = (rel) => {
      let element = document.head.querySelector(`link[rel="${rel}"]`);
      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        document.head.appendChild(element);
      }
      return element;
    };

    // 2. Meta tags
    if (description) getOrCreateMeta('name', 'description', description);
    if (keywords) getOrCreateMeta('name', 'keywords', keywords);

    // 3. Canonical URL
    if (canonical) {
      const link = getOrCreateLink('canonical');
      link.setAttribute('href', canonical);
    }

    // 4. Open Graph Tags
    if (ogTitle || title) getOrCreateMeta('property', 'og:title', ogTitle || title);
    if (ogDescription || description) getOrCreateMeta('property', 'og:description', ogDescription || description);
    if (ogImage) getOrCreateMeta('property', 'og:image', ogImage);
    if (ogUrl || canonical) getOrCreateMeta('property', 'og:url', ogUrl || canonical);
    getOrCreateMeta('property', 'og:type', ogType);

    // 5. Twitter Card Tags
    getOrCreateMeta('name', 'twitter:card', twitterCard);
    if (ogTitle || title) getOrCreateMeta('name', 'twitter:title', ogTitle || title);
    if (ogDescription || description) getOrCreateMeta('name', 'twitter:description', ogDescription || description);
    if (ogImage) getOrCreateMeta('name', 'twitter:image', ogImage);

  }, [title, description, keywords, canonical, ogTitle, ogDescription, ogImage, ogUrl, ogType, twitterCard]);
}
