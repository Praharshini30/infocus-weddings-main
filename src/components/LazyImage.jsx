import React, { useState, memo } from 'react';
import { getCloudinaryUrl } from '../utils/cloudinary.js';

const LazyImage = memo(function LazyImage({ src, alt, className = '', style = {}, width = 1200, ...props }) {
  const [loaded, setLoaded] = useState(false);
  const imageUrl = getCloudinaryUrl(src, width);
  return (
    <img
      src={imageUrl}
      alt={alt}
      loading="lazy"
      decoding="async"
      className={`fade-in-image ${loaded ? 'loaded' : ''} ${className}`}
      style={style}
      onLoad={() => setLoaded(true)}
      {...props}
    />
  );
});

export default LazyImage;
