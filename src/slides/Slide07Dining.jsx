const highlights = ['100+ dining options', 'Fine dining to fast-casual', 'Food hall, rooftop, and international cuisine', 'Dining as the reason to visit'];

const Slide07Dining = () => (
  <section className="deck-slide">
    <div className="grid h-full grid-cols-1 lg:grid-cols-[60%_40%]">
      <div className="relative min-h-[45vh] overflow-hidden">
        <div className="bg-image ken-burns" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1600&q=80)' }} />
        <div className="dark-overlay" />
      </div>
      <div className="slide-content flex flex-col justify-center">
        <p className="eyebrow mb-6">Dining & Lifestyle</p>
        <h2 className="slide-title mb-9 font-serif text-text">100+ Dining Experiences. Zero Afterthoughts.</h2>
        <div className="space-y-4">
          {highlights.map((item) => (
            <div key={item} className="border-l border-accent bg-[#111]/80 px-5 py-4 text-white/80">
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Slide07Dining;
