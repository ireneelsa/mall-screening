import { motion } from 'framer-motion';
import AnimatedLine from './AnimatedLine';

const eyebrowLabels = {
  'why-this-property': 'The Property',
  retail: 'Retail',
  dining: 'Dining & Lifestyle',
  attractions: 'Attractions',
  events: 'Events Platform',
};

const SectionWrapper = ({ id, title, children, fullWidth = false, noPadding = false }) => {
  return (
    <section 
      id={id} 
      className={`w-full min-h-screen flex flex-col bg-background border-t border-white/5 relative overflow-hidden ${noPadding ? '' : 'py-24'}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-900/40 via-background to-background pointer-events-none" />
      
      <div className={`relative z-10 w-full h-full flex flex-col ${fullWidth ? '' : 'container mx-auto px-6 md:px-12'}`}>
        {title && (
          <motion.div
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`text-center will-change-transform ${fullWidth ? 'container mx-auto px-6 md:px-12' : ''}`}
          >
            <div className="mb-5 flex flex-col items-center gap-4">
              <AnimatedLine />
              <p className="section-eyebrow">{eyebrowLabels[id] || id}</p>
            </div>
            <h2 className="section-headline font-serif font-light text-text uppercase leading-tight mb-16 mt-8">
              {title}
            </h2>
          </motion.div>
        )}
        
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
