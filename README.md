# American Dream Mall - Interactive Sales Deck

A Digideck-style interactive presentation for American Dream Mall.
Built for prospective retail tenants, sponsors, event partners, and leasing conversations.

## Live Demo
[Pending Vercel deployment URL]

## Tech Stack
- React + Vite
- Tailwind CSS
- Framer Motion for slide transitions and cinematic motion
- Lucide React for presentation icons

## Experience Format
- Screen 1: cinematic intro gate with slideshow, skip button, and sound toggle
- Screen 2: centered American Dream enter screen
- Main deck: fixed-height slide presentation with no page scroll
- Left sidebar: section navigation with icons and active state
- Bottom controls: previous/next arrows and slide counter
- Keyboard navigation: left/right arrow keys
- In-slide leasing tabs on the leasing slide

## Project Structure
```text
src/
  components/
    IntroGate.jsx
    EnterScreen.jsx
    Sidebar.jsx
    SlideControls.jsx
    CustomCursor.jsx
  slides/
    Slide01Overview.jsx
    Slide02Stats.jsx
    Slide03Location.jsx
    Slide04RetailOverview.jsx
    Slide05RetailCategories.jsx
    Slide06Luxury.jsx
    Slide07Dining.jsx
    Slide08Attractions.jsx
    Slide09Nickelodeon.jsx
    Slide10SnowWater.jsx
    Slide11Events.jsx
    Slide12Venues.jsx
    Slide13Sponsorship.jsx
    Slide14Audience.jsx
    Slide15Leasing.jsx
    Slide16Contact.jsx
  App.jsx
  index.css
```

## Setup & Run Locally
```bash
git clone [your-repo-url]
cd american-dream-sales-deck
npm install
npm run dev
```

Open http://localhost:5173

## Build
```bash
npm run build
npm run preview
```

## Deploy to Vercel
```bash
npm i -g vercel
vercel
```

Use Vite defaults:
- Build command: npm run build
- Output directory: dist

Or push to GitHub and import at https://vercel.com/new.

## Design Decisions
- True presentation model instead of a scrolling website
- Dark luxury aesthetic (#0a0a0a) with restrained gold accents
- Cormorant Garamond headlines for an editorial, premium sales-deck feel
- Sidebar navigation mirrors enterprise pitch-deck products like Digideck
- One slide at a time keeps the sales story controlled and immersive
- Framer Motion direction-aware transitions make navigation feel cinematic
- Fixed viewport layout prevents scroll drift during live presentations

## AI Tools Used
- DALL-E / Midjourney: AI-generated hero and section imagery
- Claude (Anthropic): architecture planning, prompt engineering, content copy generation
- ChatGPT: supplementary copy and stat research
