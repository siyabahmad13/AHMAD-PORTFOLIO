
import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, children, className = '' }) => {
  return (
    <section id={id} className={`py-20 md:py-28 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-5xl font-black text-center mb-16 relative text-slate-900 dark:text-white tracking-tight uppercase">
          {title}
          <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-cyan rounded-full"></span>
        </h2>
        {children}
      </div>
    </section>
  );
};

export default Section;
