import { useState } from 'react';

const tabs = {
  Luxury: ['Join the Most Prestigious Retail Address in the Americas', 'Flagship opportunities, white-glove buildout support, and dedicated luxury concierge.', '$2,800+ sales per sq ft'],
  Retail: ['High Volume. High Visibility. High Growth.', 'Inline stores, end-caps, and anchor positions fed by 40M annual visitors.', '4.5 hour average dwell time'],
  'F&B': ['Feed the Experience', 'Food hall stalls, standalone pads, ghost kitchen space, kiosks, and fine dining.', 'F&B spend up 34% YoY'],
  'Pop-Up': ['Test. Launch. Activate.', 'Flexible 30-day to 6-month terms for DTC, launches, seasonal retail, and experiential.', '12 dedicated pop-up zones'],
};

const Slide15Leasing = () => {
  const [active, setActive] = useState('Luxury');
  const [headline, body, stat] = tabs[active];

  return (
    <section className="deck-slide">
      <div className="slide-content flex flex-col justify-center">
        <p className="eyebrow mb-6">Leasing Paths</p>
        <h2 className="slide-title mb-10 max-w-5xl font-serif text-text">Choose the Path. Own the Moment.</h2>
        <div className="mb-10 flex flex-wrap gap-3">
          {Object.keys(tabs).map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActive(tab)}
              className={`px-6 py-3 text-xs uppercase tracking-[0.22em] transition-colors ${active === tab ? 'gold-button' : 'outline-button'}`}
              aria-label={`Show ${tab} leasing path`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="slide-card max-w-5xl p-10">
          <p className="mb-5 font-serif text-4xl uppercase leading-tight text-text md:text-6xl">{headline}</p>
          <p className="mb-8 max-w-3xl text-xl leading-9 text-muted">{body}</p>
          <p className="text-2xl font-semibold uppercase tracking-[0.16em] text-accent">{stat}</p>
        </div>
      </div>
    </section>
  );
};

export default Slide15Leasing;
