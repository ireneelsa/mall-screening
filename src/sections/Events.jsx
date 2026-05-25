import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import LazyImage from '../components/LazyImage';

const pastMoments = [
  {
    category: "Brand Launch",
    title: "Global Sneaker Drop",
    desc: "Over 5,000 attendees camped overnight for an exclusive first-to-market collaboration release.",
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    category: "Celebrity Appearance",
    title: "Red Carpet Premiere",
    desc: "A massive multi-level viewing experience for a blockbuster movie premiere, streamed globally.",
    img: "https://images.unsplash.com/photo-1510511459019-5d55ad34c643?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    category: "World Record",
    title: "Mega-Concert Series",
    desc: "A three-day festival inside the theme park, breaking records for indoor concert attendance.",
    img: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

const capabilities = [
  "Brand Activations & Product Launches",
  "Celebrity Appearances & Meet-and-Greets",
  "Concerts & Live Performances",
  "Corporate Events & Conventions",
  "Pop Culture Moments & E-Sports"
];

const Events = ({ onOpenEvents, onOpenSponsorship }) => {
  return (
    <SectionWrapper id="events" title="The World's Stage. Inside a Mall." fullWidth>
      <div className="relative overflow-hidden px-6 md:px-12 pb-24">
        <div className="absolute inset-0 pointer-events-none">
          <LazyImage
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80"
            alt=""
            className="h-full w-full"
            imgClassName="opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/75 to-background/50" />
        </div>

        <div className="relative z-10 container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-xl md:text-2xl font-light text-muted leading-relaxed mb-8">
                American Dream isn't just a venue; it's a <strong className="text-accent font-normal">global broadcasting platform</strong>. With unparalleled foot traffic and infinitely adaptable spaces, we host moments that define culture.
              </p>
              
              <ul className="space-y-4">
                {capabilities.map((cap, idx) => (
                  <motion.li 
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="flex items-center gap-4 text-text uppercase tracking-widest text-sm"
                  >
                    <div className="w-2 h-2 bg-accent rotate-45 shrink-0" />
                    {cap}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[400px] w-full border border-white/10 p-2"
            >
              <LazyImage
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Event Audience" 
                className="h-full w-full"
                imgClassName="grayscale-[0.35]"
              />
            </motion.div>
          </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-32"
      >
        <h3 className="text-3xl font-serif text-text uppercase tracking-widest mb-12 text-center">Past Platform Moments</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pastMoments.map((moment, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="overflow-hidden h-[250px] mb-6 relative border-t-2 border-accent/0 group-hover:border-accent transition-colors duration-500">
                <LazyImage
                  src={moment.img} 
                  alt={moment.title} 
                  className="h-full w-full"
                  imgClassName="opacity-75"
                />
              </div>
              <div className="text-accent text-xs uppercase tracking-widest mb-2">{moment.category}</div>
              <h4 className="text-xl font-serif text-text uppercase tracking-widest mb-3">{moment.title}</h4>
              <p className="text-muted font-light text-sm">{moment.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA BLOCK */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full relative overflow-hidden bg-neutral-950/80 border border-white/10 py-24 px-6 text-center"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/10 to-transparent pointer-events-none" />
        
        <h2 className="text-4xl md:text-5xl font-serif text-text uppercase tracking-widest mb-6">
          Ready to Take the Stage?
        </h2>
        <p className="text-muted font-light mb-12 max-w-2xl mx-auto">
          From full property takeovers to bespoke brand integrations, discover what's possible when you partner with the center of everything.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-6">
          <button type="button" aria-label="Open event booking module" onClick={onOpenEvents} className="luxury-button-primary w-full sm:w-auto px-10 py-5 uppercase tracking-widest text-sm font-medium">
            Book Your Event
          </button>
          <button type="button" aria-label="Open sponsorship module" onClick={onOpenSponsorship} className="luxury-button-secondary w-full sm:w-auto px-10 py-5 uppercase tracking-widest text-sm font-medium">
            Explore Sponsorships
          </button>
        </div>
        
        <p className="text-xs uppercase tracking-widest text-muted font-light italic">
          Our team will respond within 24 hours.
        </p>
      </motion.div>
      
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Events;
