import { lazy, Suspense, useEffect, useState } from 'react';
import Lenis from '@studio-freight/lenis';
import { AnimatePresence } from 'framer-motion';
import Nav from './components/Nav';
import Hero from './components/Hero';
import WhyThisProperty from './sections/WhyThisProperty';
import Retail from './sections/Retail';
import Dining from './sections/Dining';
import Attractions from './sections/Attractions';
import Events from './sections/Events';
import CustomCursor from './components/CustomCursor';
import PageLoader from './components/PageLoader';

const EventsModule = lazy(() => import('./modules/EventsModule'));
const SponsorshipModule = lazy(() => import('./modules/SponsorshipModule'));
const LeasingModule = lazy(() => import('./modules/LeasingModule'));

function App() {
  const [openModule, setOpenModule] = useState(null);
  const [loading, setLoading] = useState(() => !sessionStorage.getItem('american-dream-loaded'));

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08,
      duration: 1.4,
      smoothWheel: true,
    });

    let frameId;
    const raf = (time) => {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    };
    frameId = requestAnimationFrame(raf);

    if (openModule) {
      lenis.stop();
    } else {
      lenis.start();
    }

    window.lenis = lenis;

    return () => {
      cancelAnimationFrame(frameId);
      lenis.destroy();
      delete window.lenis;
    };
  }, [openModule]);

  useEffect(() => {
    if (!loading) return undefined;

    const timer = setTimeout(() => {
      sessionStorage.setItem('american-dream-loaded', 'true');
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, [loading]);

  useEffect(() => {
    document.body.style.overflow = openModule ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [openModule]);

  return (
    <div className="bg-background min-h-screen font-sans text-text antialiased selection:bg-accent/30 selection:text-white">
      <AnimatePresence>{loading && <PageLoader />}</AnimatePresence>
      <CustomCursor />
      <Nav />
      <main>
        <Hero />
        <WhyThisProperty />
        <Retail onOpenLeasing={() => setOpenModule('leasing')} />
        <Dining />
        <Attractions />
        <Events
          onOpenEvents={() => setOpenModule('events')}
          onOpenSponsorship={() => setOpenModule('sponsorship')}
        />
      </main>

      <AnimatePresence>
        {openModule && (
          <Suspense fallback={null}>
            {openModule === 'events' && <EventsModule onClose={() => setOpenModule(null)} />}
            {openModule === 'sponsorship' && <SponsorshipModule onClose={() => setOpenModule(null)} />}
            {openModule === 'leasing' && <LeasingModule onClose={() => setOpenModule(null)} />}
          </Suspense>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
