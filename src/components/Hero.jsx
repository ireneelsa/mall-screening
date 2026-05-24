import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToNext = () => {
    const nextSection = document.getElementById('why-this-property');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background Video or Fallback Gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background z-10 opacity-90" />
        <div className="absolute inset-0 bg-background/40 z-10" />
        
        {/* Placeholder for Particle Gradient since YouTube embed is not specified */}
        <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-800 via-background to-background" />
        {/* Animated particles fallback (pure CSS pseudo elements or simple motion divs could go here) */}
        <motion.div 
          className="absolute inset-0 opacity-20 pointer-events-none mix-blend-screen"
          animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          style={{ backgroundImage: 'radial-gradient(circle, #c9a84c 1px, transparent 1px)', backgroundSize: '50px 50px' }}
        />
      </div>

      <div className="relative z-20 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-thin text-text mb-6 leading-tight tracking-wide uppercase">
            The Center of<br/>
            <span className="text-accent italic font-light">Everything</span>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-lg md:text-xl text-muted font-light tracking-widest mb-12 uppercase"
          >
            40M+ annual visitors. 3M sq ft. One destination.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <button 
              onClick={scrollToNext}
              className="px-8 py-4 bg-accent text-background uppercase tracking-widest text-sm font-medium hover:bg-white transition-colors duration-300 w-full sm:w-auto"
            >
              Explore the Property
            </button>
            <a 
              href="#contact" 
              className="px-8 py-4 bg-transparent border border-muted text-text uppercase tracking-widest text-sm hover:border-accent hover:text-accent transition-colors duration-300 w-full sm:w-auto text-center"
            >
              Book a Venue
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center cursor-pointer"
        onClick={scrollToNext}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <span className="text-xs text-muted tracking-widest uppercase mb-2">Scroll</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-[1px] h-12 bg-gradient-to-b from-accent to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
