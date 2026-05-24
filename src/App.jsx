import React from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import WhyThisProperty from './sections/WhyThisProperty';
import Retail from './sections/Retail';
import Dining from './sections/Dining';
import Attractions from './sections/Attractions';
import Events from './sections/Events';

function App() {
  return (
    <div className="bg-background min-h-screen font-sans text-text antialiased selection:bg-accent/30 selection:text-white">
      <Nav />
      <main>
        <Hero />
        <WhyThisProperty />
        <Retail />
        <Dining />
        <Attractions />
        <Events />
      </main>
    </div>
  );
}

export default App;
