import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 150, damping: 22, mass: 0.35 });
  const ringY = useSpring(y, { stiffness: 150, damping: 22, mass: 0.35 });

  useEffect(() => {
    const media = window.matchMedia('(pointer: fine)');
    const updateEnabled = () => setEnabled(media.matches);
    updateEnabled();
    media.addEventListener('change', updateEnabled);

    const handleMove = (event) => {
      x.set(event.clientX);
      y.set(event.clientY);
    };

    const handleOver = (event) => {
      setHovering(Boolean(event.target.closest('button, a, input, select, textarea')));
    };

    window.addEventListener('pointermove', handleMove);
    document.addEventListener('mouseover', handleOver);

    return () => {
      media.removeEventListener('change', updateEnabled);
      window.removeEventListener('pointermove', handleMove);
      document.removeEventListener('mouseover', handleOver);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9998] h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white mix-blend-difference"
        style={{ x, y, willChange: 'transform' }}
      />
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9997] -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent"
        style={{ x: ringX, y: ringY, willChange: 'transform' }}
        animate={{
          width: hovering ? 60 : 40,
          height: hovering ? 60 : 40,
          backgroundColor: hovering ? 'rgba(201,168,76,0.12)' : 'rgba(201,168,76,0)',
        }}
        transition={{ duration: 0.2 }}
      />
    </>
  );
};

export default CustomCursor;
