import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import LazyImage from '../components/LazyImage';

const attractionsData = [
  {
    title: "Nickelodeon Universe",
    stat: "35 Rides",
    desc: "An indoor theme park built for all-day family traffic, character moments, and record-breaking coasters.",
    img: "https://images.unsplash.com/photo-1513889961551-628c1e5e2ee9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
  },
  {
    title: "Big SNOW",
    stat: "Only Indoor Ski Slope in North America",
    desc: "North America's first and only indoor, real-snow, year-round ski and snowboard resort.",
    img: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
  },
  {
    title: "DreamWorks Water Park",
    stat: "Largest Indoor Water Park in North America",
    desc: "Tropical climate year-round with the world's largest indoor wave pool.",
    img: "https://images.unsplash.com/photo-1582298538104-fe2e74c878f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
  },
  {
    title: "The Rink",
    stat: "NHL-Size",
    desc: "An NHL regulation-size ice rink hosting figure skating, hockey tournaments, and open skating.",
    img: "https://images.unsplash.com/photo-1583921200057-0870954b9f26?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
  },
  {
    title: "Performing Arts Venue",
    stat: "Concerts, Shows, Productions",
    desc: "A state-of-the-art stage for concerts, theatrical performances, and major cultural events.",
    img: "https://images.unsplash.com/photo-1540039155732-68473678d8a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
  }
];

const ParallaxCard = ({ data, index }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <div ref={ref} className="relative w-full h-[60vh] min-h-[500px] overflow-hidden group border-b border-accent">
      <motion.div 
        style={{ y }}
        className="absolute inset-0 w-full h-[140%] -top-[20%] will-change-transform"
      >
        <LazyImage
          src={data.img} 
          alt={data.title} 
          className="h-full w-full"
          imgClassName="opacity-70 grayscale-[0.4]"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
      
      <div className="absolute inset-0 container mx-auto px-6 md:px-12 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="text-accent text-sm md:text-base font-bold uppercase tracking-widest mb-4 flex items-center gap-4">
            <span>{String(index + 1).padStart(2, '0')}</span>
            <div className="w-12 h-[1px] bg-accent" />
            <span>{data.stat}</span>
          </div>
          
          <h3 className="text-4xl md:text-6xl font-serif text-text uppercase tracking-widest mb-6 leading-tight">
            {data.title}
          </h3>
          
          <p className="text-lg md:text-xl text-muted font-light leading-relaxed mb-8">
            {data.desc}
          </p>
          
          <button type="button" aria-label={`Learn more about ${data.title}`} className="luxury-button-secondary px-8 py-3 uppercase tracking-widest text-sm">
            Learn More
          </button>
        </motion.div>
      </div>
    </div>
  );
};

const Attractions = () => {
  return (
    <SectionWrapper id="attractions" title="No Mall on Earth Does This" fullWidth noPadding>
      <div className="w-full border-t border-accent mt-8">
        {attractionsData.map((attr, idx) => (
          <ParallaxCard key={idx} data={attr} index={idx} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Attractions;
