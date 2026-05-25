import { Droplets, Snowflake, Star, Trophy } from 'lucide-react';

const attractions = [
  [Star, 'Nickelodeon Universe'],
  [Snowflake, 'Big SNOW'],
  [Droplets, 'DreamWorks Water Park'],
  [Trophy, 'Ice Rink'],
];

const Slide08Attractions = () => (
  <section className="deck-slide">
    <div className="slide-content flex flex-col justify-center">
      <p className="eyebrow mb-6">Attractions Overview</p>
      <h2 className="slide-title mb-14 max-w-5xl font-serif text-text">No Mall on Earth Does This</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        {attractions.map(([Icon, title]) => (
          <div key={title} className="slide-card flex min-h-60 flex-col justify-between p-8">
            <Icon className="text-accent" size={42} />
            <h3 className="font-serif text-3xl uppercase tracking-wide text-text">{title}</h3>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Slide08Attractions;
