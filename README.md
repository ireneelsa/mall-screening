# American Dream Mall - Interactive Sales Deck

A cinematic, browser-based interactive sales tool for American Dream Mall.
Built for prospective retail tenants, sponsors, and event partners.

## Live Demo
[Pending Vercel deployment URL]

## Tech Stack
- React 18 + Vite
- Tailwind CSS
- Framer Motion (animations)
- Lenis (smooth scroll)
- React.lazy + Suspense (code splitting)

## AI Tools Used
- DALL-E / Midjourney: AI-generated hero and section imagery
- Claude (Anthropic): architecture planning, prompt engineering, content copy generation
- ChatGPT: supplementary copy and stat research

## Project Structure
```text
src/
  components/     # Nav, Hero, SectionWrapper, CustomCursor, AnimatedLine
  sections/       # WhyThisProperty, Retail, Dining, Attractions, Events
  modules/        # EventsModule, SponsorshipModule, LeasingModule
  App.jsx         # Root, scroll tracking, module state, Lenis init
  index.css       # Design tokens, global styles
```

## Setup & Run Locally
```bash
git clone [your-repo-url]
cd american-dream-sales-deck
npm install
npm run dev
```

Open http://localhost:5173

## Deploy to Vercel
```bash
npm i -g vercel
vercel
```

Follow prompts:
- Framework: Vite
- Build command: npm run build
- Output directory: dist

Or push to GitHub and import at https://vercel.com/new.

## Design Decisions
- Dark luxury aesthetic (#0a0a0a) inspired by Apple, Hermes, Tesla
- Cormorant Garamond for headlines, creating an editorial high-fashion feel
- Non-linear navigation so the viewer controls their own journey
- Video-first hero with particle fallback
- Sub-modules as full-screen overlays to maintain immersion
- Lenis smooth scroll + Framer Motion for a cinematic feel
- React.lazy ensures fast initial load despite rich content

## What I Would Improve With More Time
- Real video assets from American Dream's official media library
- Live backend for inquiry form submissions (Resend / Supabase)
- More granular analytics per section (Plausible or Posthog)
- 3D elements using Three.js for attractions section
- CMS integration so sales team can update stats/content without code
