const halves = [
  {
    title: 'Big SNOW',
    stat: 'Only Indoor Ski Slope in North America',
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&w=1400&q=80',
  },
  {
    title: 'DreamWorks Water Park',
    stat: 'Largest Indoor Water Park in North America',
    image: 'https://images.unsplash.com/photo-1582298538104-fe2e74c878f4?auto=format&fit=crop&w=1400&q=80',
  },
];

const Slide10SnowWater = () => (
  <section className="deck-slide grid grid-cols-1 md:grid-cols-2">
    {halves.map((half) => (
      <div key={half.title} className="relative flex items-end overflow-hidden">
        <div className="bg-image ken-burns" style={{ backgroundImage: `url(${half.image})` }} />
        <div className="dark-overlay" />
        <div className="relative z-10 p-10 md:p-14">
          <p className="eyebrow mb-5">{half.title}</p>
          <h2 className="font-serif text-4xl uppercase leading-none text-text md:text-6xl">{half.stat}</h2>
        </div>
      </div>
    ))}
  </section>
);

export default Slide10SnowWater;
