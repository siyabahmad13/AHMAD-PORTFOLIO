
import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      className="fixed bottom-6 right-6 z-40 p-3.5 rounded-2xl bg-gradient-to-tr from-neon-blue to-neon-purple text-white shadow-[0_0_20px_rgba(0,191,255,0.4)] hover:shadow-[0_0_25px_rgba(138,43,226,0.6)] hover:-translate-y-1 transition-all duration-300 animate-fade-in-up border border-neon-cyan/40"
    >
      <ArrowUp className="w-5 h-5 stroke-[2.5]" />
    </button>
  );
};

export default ScrollToTop;

