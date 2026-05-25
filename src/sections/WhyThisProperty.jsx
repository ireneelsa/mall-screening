import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import LazyImage from '../components/LazyImage';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const AnimatedStat = ({ end, label, prefix = '', suffix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(start));
        }
      }, 16);
      
      return () => clearInterval(timer);
    }
  }, [isInView, end]);

  return (
    <motion.div 
      ref={ref}
      variants={fadeUp}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center text-center p-6 border border-white/5 bg-neutral-950/60"
    >
      <div className="text-4xl md:text-5xl font-serif text-accent mb-2">
        {prefix}{end > 0 ? count.toLocaleString() : count}{suffix}
      </div>
      <div className="text-sm uppercase tracking-widest text-muted font-light">
        {label}
      </div>
    </motion.div>
  );
};

const WhyThisProperty = () => {
  return (
    <SectionWrapper id="why-this-property" title="Where 40 Million People Come to Experience Everything">
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={stagger}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
      >
        <AnimatedStat end={3000000} label="Square Feet" />
        <AnimatedStat end={40} suffix="M+" label="Annual Visitors" />
        <AnimatedStat end={500} suffix="+" label="Brands" />
        <AnimatedStat end={16} suffix="M" label="Regional Pop. within 25 miles" />
        <AnimatedStat end={1} prefix="#" label="Tourist Destination in the US" />
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1 }}
        className="w-full aspect-[16/9] md:aspect-[21/8] mb-20 relative overflow-hidden border border-white/10"
      >
        <LazyImage
          src="https://images.unsplash.com/photo-1519566335946-e6f65f0f4fdf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80" 
          alt="Luxury shopping concourse" 
          className="h-full w-full"
          imgClassName="opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/25 to-transparent pointer-events-none" />
        <div className="absolute bottom-8 left-8 right-8 flex items-center gap-5">
          <div className="h-[1px] flex-1 bg-accent/60" />
          <p className="text-xs uppercase tracking-[0.4em] text-accent">Scale meets spectacle</p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h3 className="text-3xl font-serif text-text uppercase tracking-widest">
            Perfectly Positioned
          </h3>
          <p className="text-muted font-light leading-relaxed text-lg">
            Located in East Rutherford, New Jersey, American Dream is just minutes from the heart of New York City. With direct transit access and unrivaled highway connectivity, it sits at the epicenter of the most lucrative retail market in the world.
          </p>
          <p className="text-muted font-light leading-relaxed text-lg">
            This isn't just a mall; it's a global landmark where culture, commerce, and entertainment converge.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative aspect-[4/3] w-full p-2 border border-white/10"
        >
          <LazyImage
            src="https://images.unsplash.com/photo-1519999482648-25049ddd37b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
            alt="Mall Exterior" 
            className="h-full w-full"
            imgClassName="grayscale"
          />
          <div className="absolute inset-0 bg-accent/10 mix-blend-overlay pointer-events-none" />
        </motion.div>
      </div>
      
    </SectionWrapper>
  );
};

export default WhyThisProperty;
