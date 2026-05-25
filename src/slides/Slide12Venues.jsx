const venues = [
  ['Main Stage', '5,000 cap', 'Concerts, productions, award shows'],
  ['Expo Hall', '150K sq ft', 'Conventions, trade shows, launches'],
  ['Outdoor Activation Zones', 'High visibility', 'Pop-ups and experiential marketing'],
  ['VIP Spaces', 'Private formats', 'Dinners, retreats, intimate showcases'],
];

const Slide12Venues = () => (
  <section className="deck-slide">
    <div className="slide-content flex flex-col justify-center">
      <p className="eyebrow mb-6">Venue Capabilities</p>
      <h2 className="slide-title mb-12 max-w-5xl font-serif text-text">World-Class Venues. One Address.</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {venues.map(([name, stat, desc]) => (
          <div key={name} className="slide-card p-8">
            <p className="mb-5 text-sm uppercase tracking-[0.24em] text-accent">{stat}</p>
            <h3 className="mb-4 font-serif text-3xl uppercase tracking-wide text-text">{name}</h3>
            <p className="text-muted">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Slide12Venues;
