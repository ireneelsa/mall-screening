import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Nav = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { id: 'why-this-property', label: 'Property' },
    { id: 'retail', label: 'Retail' },
    { id: 'dining', label: 'Dining' },
    { id: 'attractions', label: 'Attractions' },
    { id: 'events', label: 'Events' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const sections = document.querySelectorAll('section');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      setMenuOpen(false);
      if (window.lenis) {
        window.lenis.scrollTo(element);
      } else {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[90] transition-all duration-300 ${
        scrolled || menuOpen ? 'bg-[rgba(10,10,10,0.95)] backdrop-blur-xl py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <button 
          type="button"
          aria-label="Scroll to hero"
          className="cursor-pointer text-left" 
          onClick={() => scrollToSection('hero')}
        >
          <span className="font-serif text-xl tracking-widest uppercase font-light text-text hover:text-accent transition-colors">
            American Dream
          </span>
        </button>
        
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              aria-label={`Scroll to ${item.label}`}
              onClick={() => scrollToSection(item.id)}
              className={`group relative text-sm tracking-wider uppercase transition-colors duration-300 ${
                activeSection === item.id ? 'text-accent font-medium' : 'text-muted hover:text-text'
              }`}
            >
              <span className={`absolute -left-3 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-accent transition-opacity duration-300 ${activeSection === item.id ? 'opacity-100' : 'opacity-0'}`} />
              {item.label}
              <span className={`absolute -bottom-2 left-0 h-px bg-accent transition-all duration-300 ${activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'}`} />
            </button>
          ))}
          <button type="button" aria-label="Open contact section" onClick={() => scrollToSection('events')} className="luxury-button-secondary text-sm tracking-wider uppercase px-4 py-2 ml-4">
            Contact
          </button>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setMenuOpen((value) => !value)}
          className="flex h-11 w-11 items-center justify-center border border-accent/40 text-accent md:hidden"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <div className={`overflow-hidden border-t border-white/10 bg-background/95 transition-all duration-300 md:hidden ${menuOpen ? 'max-h-[420px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="flex flex-col px-6 py-5">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              aria-label={`Scroll to ${item.label}`}
              onClick={() => scrollToSection(item.id)}
              className={`border-b border-white/10 py-4 text-left text-sm uppercase tracking-widest ${activeSection === item.id ? 'text-accent' : 'text-muted'}`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
