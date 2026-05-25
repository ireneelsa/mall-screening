import { motion } from 'framer-motion';

const PageLoader = () => (
  <motion.div
    className="fixed inset-0 z-[10000] flex items-center justify-center bg-background"
    initial={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.55, ease: 'easeOut' }}
  >
    <motion.div
      className="font-serif text-3xl uppercase tracking-[0.35em] text-accent md:text-5xl"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: [0, 1, 1, 0], y: [16, 0, 0, -12] }}
      transition={{ duration: 1.8, ease: 'easeInOut' }}
    >
      American Dream
    </motion.div>
  </motion.div>
);

export default PageLoader;
