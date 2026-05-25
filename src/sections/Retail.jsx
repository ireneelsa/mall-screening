import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import LazyImage from '../components/LazyImage';

const categories = [
  {
    title: "Luxury Flagships",
    desc: "The world's most coveted houses, presenting their most ambitious spaces.",
    img: "https://images.unsplash.com/photo-1549439602-43ebca2327af?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "International Brands",
    desc: "Global trendsetters bringing exclusive collections to North America.",
    img: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Pop-Up Spaces",
    desc: "High-velocity, experiential retail rotating the next big thing.",
    img: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Department Anchors",
    desc: "Reimagined, grand-scale department stores offering curated luxury.",
    img: "https://images.unsplash.com/photo-1580795478844-5ed99ae4874c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Streetwear & Culture",
    desc: "The epicenter of drop culture, sneakers, and hype.",
    img: "https://images.unsplash.com/photo-1520006403909-838d6b92c22e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

const Retail = ({ onOpenLeasing }) => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    const updateWidth = () => {
      if (!carousel.current) return;
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  return (
    <SectionWrapper id="retail" title="A Retail Environment Unlike Any Other" fullWidth>
      <div className="pl-6 md:pl-12 py-12 overflow-hidden">
        <motion.div ref={carousel} className="cursor-grab active:cursor-grabbing overflow-hidden">
          <motion.div 
            drag="x" 
            dragConstraints={{ right: 0, left: -width }} 
            className="flex gap-8"
          >
            {categories.map((cat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="min-w-[82vw] sm:min-w-[360px] md:min-w-[400px] aspect-[4/5] relative border-t-2 border-accent bg-neutral-900 group overflow-hidden will-change-transform"
              >
                <div className="absolute inset-0">
                  <LazyImage
                    src={cat.img} 
                    alt={cat.title} 
                    className="h-full w-full"
                    imgClassName="opacity-70"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
                </div>
                
                <div className="absolute bottom-0 left-0 p-8 w-full flex flex-col justify-end">
                  <h4 className="text-2xl font-serif uppercase tracking-widest text-text mb-3">
                    {cat.title}
                  </h4>
                  <p className="text-muted font-light text-sm leading-relaxed">
                    {cat.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="container mx-auto px-6 md:px-12 mt-20 text-center mb-16"
      >
        <p className="text-3xl md:text-5xl font-serif text-text font-light leading-tight italic">
          "From first-to-market flagships to high-velocity pop-ups &mdash; every format, one address."
        </p>
        <button
          type="button"
          onClick={onOpenLeasing}
          aria-label="Open leasing options module"
          className="luxury-button-primary mt-12 border border-accent px-10 py-5 text-sm font-medium uppercase tracking-widest"
        >
          View Leasing Options
        </button>
      </motion.div>
    </SectionWrapper>
  );
};

export default Retail;
