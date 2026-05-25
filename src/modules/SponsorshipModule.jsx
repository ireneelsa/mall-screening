import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { X } from 'lucide-react';

const tabs = ['Partnership Tiers', 'Audience & Reach'];

const tiers = [
  {
    name: 'Presenting Partner',
    label: 'Custom Pricing',
    includes: ['Naming rights on venue/activation', 'Digital + physical placement', 'Dedicated activation zone', 'VIP access', 'Co-branded content'],
  },
  {
    name: 'Category Partner',
    label: 'Starting at $500K/year',
    includes: ['Category exclusivity', 'Prominent signage', 'Digital integration', 'Event presence'],
  },
  {
    name: 'Activation Partner',
    label: 'Starting at $100K',
    includes: ['Dedicated activation space', 'Social amplification', 'Foot traffic access'],
  },
];

const audienceStats = [
  ['40M', 'Annual visitors'],
  ['$92K', 'Average household income'],
  ['68%', 'Ages 18-45'],
  ['55%', 'Visit 3+ times per year'],
  ['16M', 'Population within 25-mile radius'],
];

const CountStat = ({ value, label }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [shown, setShown] = useState('0');

  useEffect(() => {
    if (!inView) return;
    const match = value.match(/^(\$?)(\d+)(.*)$/);
    if (!match) return;

    const [, prefix, number, suffix] = match;
    const target = Number(number);
    let frame = 0;
    const frames = 50;
    const timer = setInterval(() => {
      frame += 1;
      const next = Math.round((target * frame) / frames);
      setShown(`${prefix}${next}${suffix}`);
      if (frame >= frames) clearInterval(timer);
    }, 24);

    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <div ref={ref} className="border border-white/10 bg-neutral-950/70 p-6">
      <p className="mb-2 font-serif text-5xl text-accent">{shown}</p>
      <p className="text-xs uppercase tracking-widest text-muted">{label}</p>
    </div>
  );
};

const barData = [
  ['18-24', 22],
  ['25-34', 31],
  ['35-45', 15],
  ['$75K-$125K', 38],
  ['$125K+', 28],
];

const SponsorshipModule = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <motion.div className="fixed inset-0 z-[100] bg-background/90 backdrop-blur-xl" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <motion.div className="relative h-full overflow-y-auto bg-background" initial={{ y: '100%' }} animate={{ y: 0 }} exit={{ y: '100%' }} transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}>
        <button type="button" onClick={onClose} aria-label="Close sponsorship module" className="fixed right-5 top-5 z-[9999] flex h-12 w-12 items-center justify-center border border-accent/50 bg-background/90 text-accent backdrop-blur transition-colors hover:bg-accent hover:text-background">
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

          {activeTab === 'Partnership Tiers' && (
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className="space-y-12">
              <header className="max-w-4xl">
                <p className="mb-4 text-xs uppercase tracking-[0.4em] text-accent">Sponsorships</p>
                <h2 className="font-serif text-5xl font-light uppercase leading-tight text-text md:text-7xl">Be Everywhere They Look</h2>
              </header>
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                {tiers.map((tier) => (
                  <div key={tier.name} className="flex min-h-[520px] flex-col border border-white/10 border-t-accent bg-neutral-950/70 p-8">
                    <h3 className="mb-8 font-serif text-3xl uppercase tracking-wide text-text">{tier.name}</h3>
                    <ul className="space-y-4">
                      {tier.includes.map((item) => (
                        <li key={item} className="flex gap-3 text-sm leading-6 text-muted">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-accent" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-auto pt-10 text-xl font-semibold uppercase tracking-widest text-accent">{tier.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'Audience & Reach' && (
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className="space-y-12">
              <header className="max-w-4xl">
                <p className="mb-4 text-xs uppercase tracking-[0.4em] text-accent">Audience</p>
                <h2 className="font-serif text-5xl font-light uppercase leading-tight text-text md:text-7xl">40 Million Reasons to Partner With Us</h2>
              </header>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-5">
                {audienceStats.map(([value, label]) => (
                  <CountStat key={label} value={value} label={label} />
                ))}
              </div>
              <div className="grid gap-6 lg:grid-cols-2">
                {barData.map(([label, value]) => (
                  <div key={label} className="border border-white/10 bg-neutral-950/70 p-6">
                    <div className="mb-3 flex justify-between text-xs uppercase tracking-widest text-muted">
                      <span>{label}</span>
                      <span className="text-accent">{value}%</span>
                    </div>
                    <div className="h-3 bg-neutral-900">
                      <motion.div className="h-full bg-accent" initial={{ width: 0 }} whileInView={{ width: `${value}%` }} viewport={{ once: true }} transition={{ duration: 0.9 }} />
                    </div>
                  </div>
                ))}
              </div>
              <button type="button" aria-label="Request a media kit" className="luxury-button-primary px-10 py-5 text-sm font-semibold uppercase tracking-widest">
                Request a Media Kit
              </button>
            </motion.div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SponsorshipModule;
