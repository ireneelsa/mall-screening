import { useEffect, useRef, useState } from 'react';

const placeholder =
  'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxMCI+PHJlY3Qgd2lkdGg9IjE2IiBoZWlnaHQ9IjEwIiBmaWxsPSIjMTExIi8+PC9zdmc+';

const LazyImage = ({ src, alt, className = '', imgClassName = '', overlayClassName = '', ...props }) => {
  const ref = useRef(null);
  const [currentSrc, setCurrentSrc] = useState(placeholder);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCurrentSrc(src);
          observer.disconnect();
        }
      },
      { rootMargin: '350px' },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [src]);

  return (
    <div ref={ref} className={`image-frame group ${className}`}>
      <img
        src={currentSrc}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={`image-treatment ${loaded ? 'blur-0' : 'blur-xl'} ${imgClassName}`}
        {...props}
      />
      <div className={`image-overlay ${overlayClassName}`} />
    </div>
  );
};

export default LazyImage;
