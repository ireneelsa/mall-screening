import React, { useState, useEffect } from 'react';

const Nav = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);

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
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/90 backdrop-blur-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <div 
          className="cursor-pointer" 
          onClick={() => scrollToSection('hero')}
        >
          <span className="font-serif text-xl tracking-widest uppercase font-light text-text hover:text-accent transition-colors">
            American Dream
          </span>
        </div>
        
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-sm tracking-wider uppercase transition-colors duration-300 ${
                activeSection === item.id ? 'text-accent font-medium' : 'text-muted hover:text-text'
              }`}
            >
              {item.label}
            </button>
          ))}
          <button className="text-sm tracking-wider uppercase text-text border border-text px-4 py-2 hover:bg-text hover:text-background transition-colors duration-300 ml-4">
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
