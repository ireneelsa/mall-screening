import { Megaphone, Music, Users } from 'lucide-react';

const columns = [
  [Music, 'Concert Series', 'Multi-night programming with destination attendance.'],
  [Megaphone, 'Brand Activations', 'Product launches, pop culture moments, and takeovers.'],
  [Users, 'Corporate Events', 'Conventions, meetings, retreats, and private showcases.'],
];

const Slide11Events = () => (
  <section className="deck-slide">
    <div className="slide-content flex flex-col justify-center">
      <p className="eyebrow mb-6">Events Platform</p>
      <h2 className="slide-title mb-14 max-w-5xl font-serif text-text">The World's Stage. Inside a Mall.</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {columns.map(([Icon, title, desc]) => (
          <div key={title} className="slide-card p-8">
            <Icon className="mb-10 text-accent" size={38} />
            <h3 className="mb-5 font-serif text-3xl uppercase tracking-wide text-text">{title}</h3>
            <p className="leading-7 text-muted">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Slide11Events;
