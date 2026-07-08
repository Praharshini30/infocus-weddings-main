import React, { useState, memo } from 'react';

const LazyImage = memo(function LazyImage({ src, alt, className = '', style = {}, ...props }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <img
      src={src}
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
