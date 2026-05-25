import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import CustomCursor from './components/CustomCursor';
import EnterScreen from './components/EnterScreen';
import IntroGate from './components/IntroGate';
import Sidebar from './components/Sidebar';
import SlideControls from './components/SlideControls';
import Slide01Overview from './slides/Slide01Overview';
import Slide02Stats from './slides/Slide02Stats';
import Slide03Location from './slides/Slide03Location';
import Slide04RetailOverview from './slides/Slide04RetailOverview';
import Slide05RetailCategories from './slides/Slide05RetailCategories';
import Slide06Luxury from './slides/Slide06Luxury';
import Slide07Dining from './slides/Slide07Dining';
import Slide08Attractions from './slides/Slide08Attractions';
import Slide09Nickelodeon from './slides/Slide09Nickelodeon';
import Slide10SnowWater from './slides/Slide10SnowWater';
import Slide11Events from './slides/Slide11Events';
import Slide12Venues from './slides/Slide12Venues';
import Slide13Sponsorship from './slides/Slide13Sponsorship';
import Slide14Audience from './slides/Slide14Audience';
import Slide15Leasing from './slides/Slide15Leasing';
import Slide16Contact from './slides/Slide16Contact';

const slides = [
  { section: 'Overview', component: Slide01Overview },
  { section: 'Overview', component: Slide02Stats },
  { section: 'Why This Property', component: Slide03Location },
  { section: 'Retail', component: Slide04RetailOverview },
  { section: 'Retail', component: Slide05RetailCategories },
  { section: 'Luxury', component: Slide06Luxury },
  { section: 'Dining', component: Slide07Dining },
  { section: 'Attractions', component: Slide08Attractions },
  { section: 'Attractions', component: Slide09Nickelodeon },
  { section: 'Attractions', component: Slide10SnowWater },
  { section: 'Events', component: Slide11Events },
  { section: 'Events', component: Slide12Venues },
  { section: 'Sponsorship', component: Slide13Sponsorship },
  { section: 'Sponsorship', component: Slide14Audience },
  { section: 'Leasing', component: Slide15Leasing },
  { section: 'Contact', component: Slide16Contact },
];

const sections = [
  'Overview',
  'Why This Property',
  'Retail',
  'Luxury',
  'Dining',
  'Attractions',
  'Events',
  'Sponsorship',
  'Leasing',
  'Contact',
];

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction > 0 ? '-100%' : '100%',
    opacity: 0,
  }),
};

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [soundOn, setSoundOn] = useState(false);
  const [introComplete, setIntroComplete] = useState(false);
  const [entered, setEntered] = useState(false);
  const [direction, setDirection] = useState(1);

  const activeSection = slides[currentSlide].section;

  const sectionStarts = useMemo(
    () => sections.map((section) => slides.findIndex((slide) => slide.section === section)),
    [],
  );

  const goToSlide = (index) => {
    const next = Math.min(Math.max(index, 0), slides.length - 1);
    setDirection(next >= currentSlide ? 1 : -1);
    setCurrentSlide(next);
  };

  const goToSection = (section) => {
    const index = slides.findIndex((slide) => slide.section === section);
    if (index >= 0) goToSlide(index);
  };

  const nextSlide = () => goToSlide(currentSlide + 1);
  const prevSlide = () => goToSlide(currentSlide - 1);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!entered) return;
      if (event.key === 'ArrowRight') nextSlide();
      if (event.key === 'ArrowLeft') prevSlide();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  const ActiveSlide = slides[currentSlide].component;

  if (!introComplete) {
    return (
      <IntroGate
        soundOn={soundOn}
        onToggleSound={() => setSoundOn((value) => !value)}
        onComplete={() => setIntroComplete(true)}
      />
    );
  }

  if (!entered) {
    return (
      <>
        <CustomCursor />
        <EnterScreen onEnter={() => setEntered(true)} />
      </>
    );
  }

  return (
    <div className="deck-root bg-background font-sans text-text selection:bg-accent/30 selection:text-white">
      <CustomCursor />
      <Sidebar
        open={sidebarOpen}
        sections={sections}
        sectionStarts={sectionStarts}
        activeSection={activeSection}
        onToggle={() => setSidebarOpen((value) => !value)}
        onNavigate={goToSection}
      />

      <main className={`deck-main ${sidebarOpen ? 'deck-main-with-sidebar' : 'deck-main-focus'}`}>
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <ActiveSlide />
          </motion.div>
        </AnimatePresence>

        <SlideControls
          currentSlide={currentSlide}
          totalSlides={slides.length}
          onPrev={prevSlide}
          onNext={nextSlide}
        />
      </main>
    </div>
  );
}

export default App;
