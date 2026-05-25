import { ArrowLeft, ArrowRight } from 'lucide-react';

const SlideControls = ({ currentSlide, totalSlides, onPrev, onNext }) => (
  <div className="pointer-events-none absolute inset-x-0 bottom-6 z-30 flex items-center justify-center">
    <div className="text-sm uppercase tracking-[0.24em] text-white/70">
      {currentSlide + 1} / {totalSlides}
    </div>
    <div className="pointer-events-auto absolute right-6 flex gap-3">
      <button
        type="button"
        onClick={onPrev}
        disabled={currentSlide === 0}
        className="flex h-12 w-12 items-center justify-center border border-white/20 bg-black/40 text-white backdrop-blur transition-colors hover:border-accent hover:text-accent disabled:cursor-not-allowed disabled:opacity-30"
        aria-label="Previous slide"
      >
        <ArrowLeft size={18} />
      </button>
      <button
        type="button"
        onClick={onNext}
        disabled={currentSlide === totalSlides - 1}
        className="flex h-12 w-12 items-center justify-center border border-white/20 bg-black/40 text-white backdrop-blur transition-colors hover:border-accent hover:text-accent disabled:cursor-not-allowed disabled:opacity-30"
        aria-label="Next slide"
      >
        <ArrowRight size={18} />
      </button>
    </div>
  </div>
);

export default SlideControls;
