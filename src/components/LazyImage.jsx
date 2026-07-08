import React, { useState } from 'react';

export default function LazyImage({ src, alt, className = '', style = {}, ...props }) {
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
}
