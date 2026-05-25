import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';

const images = [
  'https://images.unsplash.com/photo-1519566335946-e6f65f0f4fdf?auto=format&fit=crop&w=1800&q=80',
  'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1800&q=80',
  'https://images.unsplash.com/photo-1540039155732-68473678d8a2?auto=format&fit=crop&w=1800&q=80',
];

const IntroGate = ({ soundOn, onToggleSound, onComplete }) => {
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    const frameTimer = setInterval(() => {
      setFrame((value) => (value + 1) % images.length);
    }, 1300);

    const completeTimer = setTimeout(onComplete, 4800);

    return () => {
      clearInterval(frameTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <section className="deck-slide">
      {images.map((image, index) => (
        <motion.div
          key={image}
          className="bg-image ken-burns"
          style={{ backgroundImage: `url(${image})` }}
          animate={{ opacity: frame === index ? 1 : 0 }}
          transition={{ duration: 0.9 }}
        />
      ))}
      <div className="absolute inset-0 bg-black/45" />

      <button
        type="button"
        onClick={onComplete}
        className="absolute right-8 top-8 z-10 text-xs uppercase tracking-[0.28em] text-white/80 transition-colors hover:text-accent"
        aria-label="Skip intro"
      >
        Skip Intro
      </button>

      <div className="absolute inset-x-0 bottom-10 z-10 flex justify-center">
        <button
          type="button"
          onClick={onToggleSound}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-black/30 text-white backdrop-blur transition-colors hover:border-accent hover:text-accent"
          aria-label={soundOn ? 'Turn sound off' : 'Turn sound on'}
        >
          {soundOn ? <Volume2 size={20} /> : <VolumeX size={20} />}
        </button>
      </div>
    </section>
  );
};

export default IntroGate;
