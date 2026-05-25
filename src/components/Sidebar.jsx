import {
  BadgeDollarSign,
  Building2,
  ChefHat,
  ChevronLeft,
  ChevronRight,
  CircleDollarSign,
  Gem,
  Handshake,
  MapPinned,
  Send,
  Sparkles,
  Store,
  Ticket,
} from 'lucide-react';

const iconMap = {
  Overview: Sparkles,
  'Why This Property': MapPinned,
  Retail: Store,
  Luxury: Gem,
  Dining: ChefHat,
  Attractions: Ticket,
  Events: Building2,
  Sponsorship: Handshake,
  Leasing: BadgeDollarSign,
  Contact: Send,
};

const Sidebar = ({ open, sections, sectionStarts, activeSection, onNavigate, onToggle }) => (
  <>
    <aside className={`fixed left-0 top-0 z-40 h-screen w-[220px] border-r border-white/10 bg-[#111] transition-transform duration-300 ${open ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className="flex h-full flex-col px-5 py-7">
        <div className="mb-10">
          <p className="font-serif text-2xl uppercase tracking-[0.18em] text-text">American</p>
          <p className="font-serif text-2xl uppercase tracking-[0.18em] text-accent">Dream</p>
        </div>

        <nav className="flex flex-1 flex-col gap-1">
          {sections.map((section, index) => {
            const Icon = iconMap[section] || CircleDollarSign;
            const active = activeSection === section;
            return (
              <button
                key={section}
                type="button"
                onClick={() => onNavigate(section)}
                className={`flex items-center gap-3 border-l px-3 py-3 text-left text-xs uppercase tracking-widest transition-colors ${
                  active ? 'border-accent bg-accent/10 text-accent' : 'border-transparent text-muted hover:border-accent/50 hover:text-text'
                }`}
                aria-label={`Go to ${section}, slide ${sectionStarts[index] + 1}`}
              >
                <Icon size={16} />
                <span>{section}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </aside>

    <button
      type="button"
      onClick={onToggle}
      className={`fixed top-6 z-50 flex h-10 w-10 items-center justify-center border border-accent/50 bg-[#111] text-accent transition-all duration-300 hover:bg-accent hover:text-background ${
        open ? 'left-[200px]' : 'left-4'
      }`}
      aria-label={open ? 'Collapse sidebar' : 'Open sidebar'}
    >
      {open ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
    </button>
  </>
);

export default Sidebar;
