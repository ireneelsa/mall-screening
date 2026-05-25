const pills = ['500+ Brands', '3M Sq Ft', '$2,800+ Sales Per Sq Ft'];

const Slide04RetailOverview = () => (
  <section className="deck-slide flex items-center justify-center text-center">
    <div className="bg-image ken-burns" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=2000&q=80)' }} />
    <div className="dark-overlay" />
    <div className="relative z-10 px-6">
      <p className="eyebrow mb-6">Retail Overview</p>
      <h2 className="slide-title mx-auto mb-12 max-w-5xl font-serif text-text">A Retail Environment Unlike Any Other</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {pills.map((pill) => (
          <div key={pill} className="border border-accent/50 bg-black/40 px-6 py-4 text-sm uppercase tracking-[0.24em] text-accent backdrop-blur">
            {pill}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Slide04RetailOverview;
