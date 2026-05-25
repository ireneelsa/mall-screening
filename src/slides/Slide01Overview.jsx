import { motion } from 'framer-motion';

const Slide01Overview = () => (
  <section className="deck-slide flex items-center justify-center text-center">
    <div
      className="bg-image ken-burns"
      style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1519566335946-e6f65f0f4fdf?auto=format&fit=crop&w=2000&q=80)' }}
    />
    <div className="dark-overlay" />
    <div className="relative z-10 max-w-6xl px-6">
      <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="deck-headline font-serif text-text">
        The Center of Everything
      </motion.h1>
      <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.18, duration: 0.7 }} className="mt-8 text-lg uppercase tracking-[0.28em] text-white/75 md:text-xl">
        40M Visitors. 3M Sq Ft. One Destination.
      </motion.p>
      <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.45, duration: 0.7 }} className="mx-auto mt-10 h-px w-28 bg-accent" />
    </div>
  </section>
);

export default Slide01Overview;
