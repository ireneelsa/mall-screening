const Slide09Nickelodeon = () => (
  <section className="deck-slide flex items-center">
    <div className="bg-image ken-burns" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1513889961551-628c1e5e2ee9?auto=format&fit=crop&w=2000&q=80)' }} />
    <div className="dark-overlay" />
    <div className="slide-content flex w-full flex-col justify-center">
      <div className="max-w-3xl">
        <p className="eyebrow mb-6">Nickelodeon Universe</p>
        <h2 className="slide-title mb-6 font-serif text-text">35 Rides. One Indoor Theme Park.</h2>
        <p className="mb-9 text-xl leading-9 text-white/75">
          The family traffic engine: coasters, character worlds, and year-round indoor entertainment built directly into the property.
        </p>
        <button type="button" className="gold-button px-10 py-5 text-sm font-semibold uppercase tracking-[0.24em]" aria-label="Learn more about Nickelodeon Universe">
          Learn More
        </button>
      </div>
    </div>
  </section>
);

export default Slide09Nickelodeon;
