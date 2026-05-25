import CounterNumber from './CounterNumber';

const stats = [
  { value: 3000000, label: 'sq ft', suffix: '' },
  { value: 40, label: 'annual visitors', suffix: 'M+' },
  { value: 500, label: 'brands', suffix: '+' },
  { value: 5, label: 'total investment', prefix: '$', suffix: 'B' },
  { value: 16, label: 'regional population', suffix: 'M' },
];

const Slide02Stats = () => (
  <section className="deck-slide">
    <div className="slide-content flex flex-col justify-center">
      <p className="eyebrow mb-6">By the Numbers</p>
      <h2 className="slide-title mb-14 max-w-5xl font-serif text-text">Scale That Changes the Conversation</h2>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-5">
        {stats.map((stat) => (
          <div key={stat.label} className="slide-card p-7 text-center">
            <div className="stat-number">
              <CounterNumber value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
            </div>
            <p className="mt-4 text-sm uppercase tracking-[0.24em] text-white">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Slide02Stats;
