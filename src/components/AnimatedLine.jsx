import { motion } from 'framer-motion';

const AnimatedLine = ({ className = '' }) => (
  <motion.div
    className={`h-px w-[60px] bg-accent ${className}`}
    initial={{ scaleX: 0, transformOrigin: 'left' }}
    whileInView={{ scaleX: 1 }}
    viewport={{ once: true, margin: '-80px' }}
    transition={{ duration: 0.7, ease: 'easeOut' }}
  />
);

export default AnimatedLine;
