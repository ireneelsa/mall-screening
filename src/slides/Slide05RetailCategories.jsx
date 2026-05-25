import { Building, Gem, Globe2, Sparkles } from 'lucide-react';

const categories = [
  [Gem, 'Luxury Flagships', "Statement spaces for the world's most coveted houses."],
  [Globe2, 'International Brands', 'Global concepts entering the region with scale.'],
  [Sparkles, 'Pop-Ups', 'Fast-moving launch pads for cultural retail moments.'],
  [Building, 'Department Anchors', 'Large-format retail with built-in destination traffic.'],
];

const Slide05RetailCategories = () => (
  <section className="deck-slide">
    <div className="slide-content flex flex-col justify-center">
      <p className="eyebrow mb-6">Retail Categories</p>
      <h2 className="slide-title mb-12 max-w-4xl font-serif text-text">Every Format. One Address.</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {categories.map(([Icon, title, desc]) => (
          <div key={title} className="slide-card p-8">
            <Icon className="mb-8 text-accent" size={34} />
            <h3 className="mb-4 font-serif text-3xl uppercase tracking-wide text-text">{title}</h3>
            <p className="text-base leading-7 text-muted">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Slide05RetailCategories;
