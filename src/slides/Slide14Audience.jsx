import CounterNumber from './CounterNumber';

const stats = [
  [40, 'M', 'Visitors'],
  [92, 'K', 'Avg HHI', '$'],
  [68, '%', 'Ages 18-45'],
];

const bars = [
  ['18-24', 22],
  ['25-34', 31],
  ['35-45', 15],
  ['$75K-$125K', 38],
  ['$125K+', 28],
];

const Slide14Audience = () => (
  <section className="deck-slide">
    <div className="slide-content flex flex-col justify-center">
      <p className="eyebrow mb-6">Audience Data</p>
      <h2 className="slide-title mb-12 max-w-5xl font-serif text-text">40 Million Reasons to Partner With Us</h2>
      <div className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-3">
        {stats.map(([value, suffix, label, prefix]) => (
          <div key={label} className="slide-card p-8 text-center">
            <div className="stat-number">
              <CounterNumber value={value} prefix={prefix} suffix={suffix} />
            </div>
            <p className="mt-4 uppercase tracking-[0.22em] text-white">{label}</p>
          </div>
        ))}
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        {bars.map(([label, value]) => (
          <div key={label} className="border border-white/10 bg-[#111]/80 p-5">
            <div className="mb-3 flex justify-between text-xs uppercase tracking-[0.22em] text-muted">
              <span>{label}</span>
              <span className="text-accent">{value}%</span>
            </div>
            <div className="h-3 bg-black">
              <div className="h-full bg-accent" style={{ width: `${value}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Slide14Audience;
