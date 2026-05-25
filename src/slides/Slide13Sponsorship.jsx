const tiers = [
  ['Presenting', 'Custom Pricing', ['Naming rights', 'Digital + physical placement', 'Dedicated activation zone', 'VIP access']],
  ['Category', 'Starting at $500K/year', ['Category exclusivity', 'Prominent signage', 'Digital integration', 'Event presence']],
  ['Activation', 'Starting at $100K', ['Dedicated space', 'Social amplification', 'Foot traffic access']],
];

const Slide13Sponsorship = () => (
  <section className="deck-slide">
    <div className="slide-content flex flex-col justify-center">
      <p className="eyebrow mb-6">Sponsorship Tiers</p>
      <h2 className="slide-title mb-12 max-w-5xl font-serif text-text">Be Everywhere They Look</h2>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {tiers.map(([name, price, inclusions]) => (
          <div key={name} className="slide-card flex min-h-[430px] flex-col p-8">
            <h3 className="mb-6 font-serif text-4xl uppercase tracking-wide text-text">{name}</h3>
            <ul className="space-y-4">
              {inclusions.map((item) => (
                <li key={item} className="flex gap-3 text-muted">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-auto text-xl font-semibold uppercase tracking-[0.16em] text-accent">{price}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Slide13Sponsorship;
