# Design Rationale & Approach

## The Problem
Sales reps pitch a $5B mixed-use destination by flipping between YouTube, PDFs, and spreadsheets. This tool eliminates that friction.

## My Approach
Built as a cinematic experience - not a website, not a slide deck. The viewer controls the journey. Every section pushes toward a business action: leasing inquiry, sponsorship conversation, or event booking.

## How I Used AI
- Asset generation: DALL-E for section imagery where real assets unavailable
- Architecture: Claude for component planning and prompt structure
- Copy: AI-assisted stat framing and section narrative
- Speed: AI allowed building in hours what would take days

## Architecture Decisions
- React + Vite for fast builds and clean component architecture
- Framer Motion chosen over GSAP for React integration and readability
- Lenis for buttery smooth scroll - critical for luxury feel
- Module pattern (overlays) keeps main deck clean while enabling depth
- Code splitting on modules keeps initial bundle under 200kb

## What I Would Build Next
- Real CRM integration (HubSpot) on inquiry forms
- Sales rep mode: guided walkthrough vs self-explore toggle
- Analytics dashboard showing which sections prospects spend most time on
- Personalization: deck auto-adjusts based on visitor type (tenant / sponsor / event partner)
