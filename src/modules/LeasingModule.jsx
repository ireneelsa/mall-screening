import { useState } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

const tabs = ['Luxury & Flagship', 'Retail & Mid-Tier', 'F&B', 'Pop-Up & Short Term'];

const tabContent = {
  'Luxury & Flagship': {
    headline: 'Join the Most Prestigious Retail Address in the Americas',
    body: 'Home to an international luxury wing and a dedicated luxury corridor, American Dream gives global houses the scale, service, and theatre to build true destination flagships.',
    points: ['Flagship opportunity description', 'White-glove buildout support', 'Dedicated luxury concierge for shoppers'],
    stat: 'Average luxury tenant sales $2,800+ per sq ft',
    cta: 'Request Flagship Information',
  },
  'Retail & Mid-Tier': {
    headline: 'High Volume. High Visibility. High Growth.',
    body: 'Mainstream retail benefits from destination traffic, long dwell time, and repeat visitation across entertainment, dining, and shopping trips.',
    points: ['40M footfall', 'Avg dwell time 4.5 hours', 'Repeat visitor rate 55%', 'Inline stores, end-caps, anchor positions'],
    stat: '40M annual visitors',
    cta: 'View Available Spaces',
  },
  'F&B': {
    headline: 'Feed the Experience',
    body: 'Dining expansion spans food hall, inline, kiosk, and fine dining opportunities built around an audience that treats food as part of the destination.',
    points: ['Food hall stalls', 'Standalone restaurant pads', 'Ghost kitchen space', 'Fine dining formats'],
    stat: 'F&B spend per visit up 34% YoY',
    cta: 'Explore F&B Opportunities',
  },
  'Pop-Up & Short Term': {
    headline: 'Test. Launch. Activate.',
    body: 'Flexible 30-day to 6-month terms make American Dream a launchpad for DTC brands, product drops, seasonal retail, and experiential concepts.',
    points: ['DTC brands', 'Product launches', 'Seasonal retail', 'Experiential activations'],
    stat: '12 dedicated pop-up zones, avg brand ROI 3.2x vs digital spend',
    cta: 'Book a Pop-Up Space',
  },
};

const inputClass = 'w-full border border-white/10 bg-neutral-950 px-4 py-4 text-sm text-text outline-none transition-colors placeholder:text-muted focus:border-accent';

const LeasingModule = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const content = tabContent[activeTab];

  return (
    <motion.div className="fixed inset-0 z-[100] bg-background/90 backdrop-blur-xl" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <motion.div className="relative h-full overflow-y-auto bg-background" initial={{ y: '100%' }} animate={{ y: 0 }} exit={{ y: '100%' }} transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}>
        <button type="button" onClick={onClose} aria-label="Close leasing module" className="fixed right-5 top-5 z-[9999] flex h-12 w-12 items-center justify-center border border-accent/50 bg-background/90 text-accent backdrop-blur transition-colors hover:bg-accent hover:text-background">
          <X size={22} />
        </button>

        <div className="mx-auto min-h-screen w-full max-w-7xl px-6 py-20 md:px-12">
          <div className="sticky top-0 z-[110] -mx-6 mb-12 overflow-x-auto border-b border-white/10 bg-background/95 px-6 py-4 backdrop-blur md:-mx-12 md:px-12">
            <div className="flex min-w-max gap-3">
              {tabs.map((tab) => (
                <button key={tab} type="button" aria-label={`Show ${tab}`} onClick={() => setActiveTab(tab)} className={`border px-4 py-3 text-xs uppercase tracking-widest transition-colors ${activeTab === tab ? 'border-accent bg-accent text-background' : 'border-white/10 text-muted hover:border-accent/60 hover:text-text'}`}>
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <motion.div key={activeTab} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="space-y-8">
              <p className="text-xs uppercase tracking-[0.4em] text-accent">Leasing Paths</p>
              <h2 className="font-serif text-5xl font-light uppercase leading-tight text-text md:text-7xl">{content.headline}</h2>
              <p className="max-w-3xl text-lg leading-8 text-muted">{content.body}</p>
              <div className="border border-accent/40 bg-neutral-950/70 p-7">
                <p className="font-serif text-3xl text-accent">{content.stat}</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {content.points.map((point) => (
                  <div key={point} className="border border-white/10 bg-neutral-950/70 p-5 text-sm uppercase tracking-widest text-muted">
                    {point}
                  </div>
                ))}
              </div>
              <button type="button" aria-label={content.cta} className="luxury-button-primary px-10 py-5 text-sm font-semibold uppercase tracking-widest">
                {content.cta}
              </button>
            </div>

            <form className="self-start border border-white/10 bg-neutral-950/70 p-6 md:p-8">
              <h3 className="mb-8 font-serif text-3xl uppercase tracking-wide text-text">Start the Conversation</h3>
              <div className="grid gap-5">
                <input className={inputClass} placeholder="Name" />
                <input className={inputClass} placeholder="Brand" />
                <input className={inputClass} placeholder="Category" />
                <textarea className={`${inputClass} min-h-36 resize-none`} placeholder="Message" />
                <button type="button" aria-label="Submit leasing inquiry" className="luxury-button-primary px-8 py-5 text-sm font-semibold uppercase tracking-widest">
                  Submit Leasing Inquiry
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default LeasingModule;
