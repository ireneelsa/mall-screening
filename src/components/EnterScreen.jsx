import { Camera, Network } from 'lucide-react';

const EnterScreen = ({ onEnter }) => (
  <section className="deck-slide flex items-center justify-center">
    <div
      className="bg-image slow-pan opacity-35"
      style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=1800&q=80)' }}
    />
    <div className="dark-overlay" />
    <div className="relative z-10 flex flex-col items-center text-center">
      <p className="eyebrow mb-5">Interactive Sales Deck</p>
      <h1 className="mb-12 font-serif text-5xl uppercase tracking-[0.18em] text-text md:text-7xl">
        American Dream
      </h1>
      <button
        type="button"
        onClick={onEnter}
        className="gold-button px-16 py-5 text-sm font-semibold uppercase tracking-[0.32em]"
        aria-label="Enter the American Dream presentation deck"
      >
        Enter
      </button>
    </div>
    <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-5 text-white/70">
      <a href="https://www.linkedin.com" aria-label="LinkedIn" className="transition-colors hover:text-accent">
        <Network size={20} />
      </a>
      <a href="https://www.instagram.com" aria-label="Instagram" className="transition-colors hover:text-accent">
        <Camera size={20} />
      </a>
    </div>
  </section>
);

export default EnterScreen;
