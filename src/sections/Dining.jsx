import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import LazyImage from '../components/LazyImage';

const Dining = () => {
  return (
    <SectionWrapper id="dining" title="Dining as a Destination">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start mb-24">
        
        {/* Left Column: Large Image */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 relative aspect-[4/5] w-full"
        >
          <LazyImage
            src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
            alt="Fine Dining Experience" 
            className="h-full w-full"
            imgClassName="grayscale-[0.25]"
          />
          <div className="absolute inset-0 border border-accent/20 m-4 pointer-events-none" />
          <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/20 to-transparent blur-2xl pointer-events-none" />
        </motion.div>

        {/* Right Column: Stacked Text and Small Images */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 }
            }
          }}
          className="lg:col-span-5 flex flex-col justify-center space-y-12"
        >
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
            <p className="text-muted font-light leading-relaxed text-lg">
              Dining is designed as a lifestyle engine, not an afterthought. With over <strong className="text-accent font-medium">100+ dining options</strong>, American Dream caters to every palate, from Michelin-adjacent fine dining establishments to innovative fast-casual concepts.
            </p>
          </motion.div>

          <motion.div 
            variants={{ hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1 } }}
            className="border-l-2 border-accent pl-8 py-2 my-8"
          >
            <p className="text-2xl md:text-3xl font-serif text-text italic font-light leading-snug">
              "Food is no longer a break from shopping. It's the reason people come."
            </p>
          </motion.div>

          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="space-y-6">
            <h3 className="text-xl font-serif uppercase tracking-widest text-text">Signature Highlights</h3>
            
            <div className="flex gap-4 items-start">
              <div className="w-12 h-[1px] bg-accent mt-3 shrink-0" />
              <div>
                <h4 className="text-sm uppercase tracking-widest text-text mb-1">The Funplex Food Hall Concept</h4>
                <p className="text-sm text-muted font-light">Immersive, chef-driven spaces blending culture, speed, and cuisine.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-12 h-[1px] bg-accent mt-3 shrink-0" />
              <div>
                <h4 className="text-sm uppercase tracking-widest text-text mb-1">Rooftop Dining</h4>
                <p className="text-sm text-muted font-light">Elevated atmospheres offering panoramic views of the NYC skyline.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-12 h-[1px] bg-accent mt-3 shrink-0" />
              <div>
                <h4 className="text-sm uppercase tracking-widest text-text mb-1">International Diversity</h4>
                <p className="text-sm text-muted font-light">Global flavors brought to life by authentic international brands.</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="grid grid-cols-2 gap-4 mt-8">
            <div className="h-32 w-full overflow-hidden">
              <LazyImage src="https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Cocktail" className="h-full w-full" imgClassName="opacity-90" />
            </div>
            <div className="h-32 w-full overflow-hidden">
              <LazyImage src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Restaurant Interior" className="h-full w-full" imgClassName="opacity-90" />
            </div>
          </motion.div>
          
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Dining;
