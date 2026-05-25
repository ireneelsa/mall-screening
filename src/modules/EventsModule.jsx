import { useState } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

const tabs = ['Venue Capabilities', 'Past Events Highlights', 'Book Your Event'];

const venues = [
  {
    name: 'Main Stage',
    stat: 'Cap. 5,000',
    desc: 'Concerts, productions, award shows, premieres, and broadcast moments.',
  },
  {
    name: 'Exposition Hall',
    stat: '150,000 sq ft',
    desc: 'Conventions, trade shows, brand launches, and large-scale showcases.',
  },
  {
    name: 'Outdoor Activation Zones',
    stat: 'High-visibility frontage',
    desc: 'Brand pop-ups, experiential marketing, seasonal installations, and arrivals.',
  },
  {
    name: 'VIP Event Spaces',
    stat: 'Private formats',
    desc: 'Private dinners, corporate retreats, intimate showcases, and hospitality.',
  },
];

const timeline = [
  ['2026', 'Major Label Concert Series', 'Three-night live music run', 'Sold-out indoor audience flow'],
  ['2025', 'Fortune 500 Product Launch', 'Immersive reveal and press day', '12M earned media impressions'],
  ['2025', 'International Fashion Activation', 'Runway, retail, and creator studio', '38% lift in store visits'],
  ['2024', 'Celebrity Appearance & Signing', 'Fan moment across multiple levels', '7,500 visitors in six hours'],
  ['2024', 'World Record Attempt Event', 'Public challenge with live broadcast', 'Global social pickup'],
  ['2023', 'Holiday Brand Takeover', 'Seasonal property-wide installation', '4-week family traffic surge'],
];

const inputClass = 'w-full border border-white/10 bg-neutral-950 px-4 py-4 text-sm text-text outline-none transition-colors placeholder:text-muted focus:border-accent';

const EventsModule = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-background/90 backdrop-blur-xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="relative h-full overflow-y-auto bg-background"
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        exit={{ y: '100%' }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close events module"
          className="fixed right-5 top-5 z-[9999] flex h-12 w-12 items-center justify-center border border-accent/50 bg-background/90 text-accent backdrop-blur transition-colors hover:bg-accent hover:text-background"
        >
          <X size={22} />
        </button>

        <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 py-20 md:px-12">
          <div className="sticky top-0 z-[110] -mx-6 mb-12 overflow-x-auto border-b border-white/10 bg-background/95 px-6 py-4 backdrop-blur md:-mx-12 md:px-12">
            <div className="flex min-w-max gap-3">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  aria-label={`Show ${tab}`}
                  className={`border px-4 py-3 text-xs uppercase tracking-widest transition-colors ${
                    activeTab === tab
                      ? 'border-accent bg-accent text-background'
                      : 'border-white/10 text-muted hover:border-accent/60 hover:text-text'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {activeTab === 'Venue Capabilities' && (
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className="space-y-12">
              <header className="max-w-4xl">
                <p className="mb-4 text-xs uppercase tracking-[0.4em] text-accent">Events Booking</p>
                <h2 className="font-serif text-5xl font-light uppercase leading-tight text-text md:text-7xl">
                  World-Class Venues. One Address.
                </h2>
              </header>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {venues.map((venue) => (
                  <div key={venue.name} className="border border-white/10 border-t-accent bg-neutral-950/70 p-8">
                    <p className="mb-5 text-sm uppercase tracking-widest text-accent">{venue.stat}</p>
                    <h3 className="mb-4 font-serif text-3xl uppercase tracking-wide text-text">{venue.name}</h3>
                    <p className="text-sm leading-7 text-muted">{venue.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'Past Events Highlights' && (
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className="space-y-12">
              <header className="max-w-4xl">
                <p className="mb-4 text-xs uppercase tracking-[0.4em] text-accent">Platform History</p>
                <h2 className="font-serif text-5xl font-light uppercase leading-tight text-text md:text-7xl">
                  Moments Built for Movement
                </h2>
              </header>

              <div className="overflow-x-auto pb-6">
                <div className="flex min-w-max gap-5">
                  {timeline.map(([year, type, headline, outcome]) => (
                    <div key={`${year}-${type}`} className="w-[310px] border border-white/10 bg-neutral-950/70 p-7">
                      <p className="mb-6 text-4xl font-serif text-accent">{year}</p>
                      <p className="mb-3 text-xs uppercase tracking-widest text-muted">{type}</p>
                      <h3 className="mb-4 font-serif text-2xl uppercase tracking-wide text-text">{headline}</h3>
                      <p className="text-sm text-accent">{outcome}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'Book Your Event' && (
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
              <header>
                <p className="mb-4 text-xs uppercase tracking-[0.4em] text-accent">Inquiry</p>
                <h2 className="mb-6 font-serif text-5xl font-light uppercase leading-tight text-text md:text-7xl">
                  Book Your Event
                </h2>
                <p className="max-w-lg text-lg leading-8 text-muted">
                  Share the shape of the moment. Our events team responds within 24 hours at events@americandream.com.
                </p>
              </header>

              <form className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <select className={inputClass} defaultValue="">
                  <option value="" disabled>Event Type</option>
                  <option>Concert</option>
                  <option>Brand Activation</option>
                  <option>Corporate</option>
                  <option>Other</option>
                </select>
                <input className={inputClass} placeholder="Estimated attendance" />
                <input className={inputClass} placeholder="Preferred dates" />
                <input className={inputClass} placeholder="Company name" />
                <input className={`${inputClass} md:col-span-2`} placeholder="Contact email" type="email" />
                <button type="button" aria-label="Submit event inquiry" className="luxury-button-primary px-8 py-5 text-sm font-semibold uppercase tracking-widest md:col-span-2">
                  Submit Inquiry
                </button>
              </form>
            </motion.div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default EventsModule;
