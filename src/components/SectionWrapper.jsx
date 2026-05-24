import React from 'react';

const SectionWrapper = ({ id, title, children }) => {
  return (
    <section 
      id={id} 
      className="w-full min-h-screen flex flex-col items-center justify-center bg-background border-t border-white/5 relative overflow-hidden px-6"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-900/40 via-background to-background pointer-events-none" />
      
      <div className="container mx-auto z-10 text-center">
        <h2 className="text-4xl md:text-6xl font-serif font-light text-text uppercase tracking-widest mb-8">
          {title}
        </h2>
        
        {children}
        
        <div className="mt-12 inline-block px-6 py-3 border border-accent/30 bg-accent/5 backdrop-blur-sm">
          <p className="text-accent text-sm tracking-widest uppercase font-light">
            Coming in next phase
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper;
