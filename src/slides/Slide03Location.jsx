import { Car, Plane, Train, Waypoints } from 'lucide-react';

const bullets = [
  [Train, 'NJ Transit direct access'],
  [Waypoints, '3 major highways'],
  [Car, '20 min from NYC'],
  [Plane, '2 international airports nearby'],
];

const Slide03Location = () => (
  <section className="deck-slide">
    <div className="grid h-full grid-cols-1 lg:grid-cols-2">
      <div className="relative min-h-[45vh] overflow-hidden">
        <div className="bg-image slow-pan" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1538970272646-f61fabb3a8a2?auto=format&fit=crop&w=1400&q=80)' }} />
        <div className="dark-overlay" />
        <div className="absolute inset-8 border border-accent/30" />
      </div>
      <div className="slide-content flex flex-col justify-center">
        <p className="eyebrow mb-6">Location & Access</p>
        <h2 className="slide-title mb-10 font-serif text-text">Minutes from Manhattan. Millions of Reasons to Visit.</h2>
        <div className="grid gap-5">
          {bullets.map(([Icon, label]) => (
            <div key={label} className="flex items-center gap-5 border border-white/10 bg-[#111]/80 p-5">
              <Icon className="text-accent" size={26} />
              <p className="text-lg text-white">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Slide03Location;
