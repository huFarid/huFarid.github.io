// useScrollOpacity.js
import { useState, useEffect } from 'react';

const useScrollOpacity = () => {
  const [opacity, setOpacity] = useState(1);
  useEffect(() => {
    let rafId;
    const handleScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        const fadeStart = windowHeight * 0.0;
        const fadeEnd = windowHeight * 0.4;
        if (scrollPosition <= fadeStart) {
          setOpacity(1);
        } else if (scrollPosition >= fadeEnd) {
          setOpacity(0);
        } else {
          setOpacity(1 - (scrollPosition - fadeStart) / (fadeEnd - fadeStart));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);
  return opacity;
};

export default useScrollOpacity;
