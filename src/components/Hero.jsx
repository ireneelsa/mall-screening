import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import AnimatedLine from './AnimatedLine';

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '28%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '14%']);
  const textOpacity = useTransform(scrollYProgress, [0, 0.72], [1, 0]);
  const textScale = useTransform(scrollYProgress, [0, 0.72], [1, 0.94]);

  const scrollToNext = () => {
    const nextSection = document.getElementById('why-this-property');
    if (nextSection) {
      if (window.lenis) {
        window.lenis.scrollTo(nextSection);
      } else {
        nextSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section ref={ref} id="hero" className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-background">
      <motion.div className="absolute inset-0 z-0 will-change-transform" style={{ y: backgroundY }}>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background z-10 opacity-90" />
        <div className="absolute inset-0 bg-background/40 z-10" />
        <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-800 via-background to-background" />
        <div className="hero-gradient-shift absolute inset-0 z-10 bg-[linear-gradient(120deg,transparent,rgba(201,168,76,0.24),transparent)] mix-blend-screen" />
        <motion.div 
          className="absolute inset-0 opacity-20 pointer-events-none mix-blend-screen"
          animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          style={{ backgroundImage: 'radial-gradient(circle, #c9a84c 1px, transparent 1px)', backgroundSize: '50px 50px' }}
        />
      </motion.div>

      <div className="relative z-20 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="max-w-5xl mx-auto will-change-transform"
          style={{ y: textY, opacity: textOpacity, scale: textScale }}
        >
          <div className="mb-6 flex flex-col items-center gap-4">
            <AnimatedLine />
            <p className="section-eyebrow">American Dream</p>
          </div>
          <h1 className="font-serif font-thin text-text mb-6 leading-[0.9] uppercase" style={{ fontSize: 'clamp(4rem, 8vw, 9rem)', letterSpacing: '-0.02em' }}>
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
              type="button"
              onClick={scrollToNext}
              aria-label="Explore the property section"
              className="luxury-button-primary px-8 py-4 uppercase tracking-widest text-sm font-medium w-full sm:w-auto"
            >
              Explore the Property
            </button>
            <a 
              href="#events" 
              aria-label="Jump to event booking section"
              className="luxury-button-secondary px-8 py-4 bg-transparent uppercase tracking-widest text-sm w-full sm:w-auto text-center"
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
        role="button"
        aria-label="Scroll to property section"
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
