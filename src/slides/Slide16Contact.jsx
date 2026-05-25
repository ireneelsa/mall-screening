import { Camera, Mail, Network } from 'lucide-react';

const Slide16Contact = () => (
  <section className="deck-slide flex items-center justify-center text-center">
    <div className="bg-image slow-pan opacity-35" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=2000&q=80)' }} />
    <div className="dark-overlay" />
    <div className="relative z-10 px-6">
      <p className="eyebrow mb-6">Contact</p>
      <h2 className="slide-title mb-10 font-serif text-text">Let's Build Something Together</h2>
      <div className="mb-10 flex flex-col justify-center gap-4 sm:flex-row">
        <button type="button" className="gold-button px-10 py-5 text-sm font-semibold uppercase tracking-[0.24em]" aria-label="Book a venue">
          Book a Venue
        </button>
        <button type="button" className="outline-button px-10 py-5 text-sm font-semibold uppercase tracking-[0.24em]" aria-label="Start a leasing conversation">
          Start a Leasing Conversation
        </button>
      </div>
      <p className="mb-12 flex items-center justify-center gap-3 text-white/75">
        <Mail size={18} className="text-accent" />
        partnerships@americandream.com
      </p>
      <div className="flex justify-center gap-6 text-white/70">
        <a href="https://www.linkedin.com" aria-label="LinkedIn" className="hover:text-accent"><Network /></a>
        <a href="https://www.instagram.com" aria-label="Instagram" className="hover:text-accent"><Camera /></a>
      </div>
    </div>
  </section>
);

export default Slide16Contact;
