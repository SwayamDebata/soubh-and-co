# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Soubh & Co. marketing website for a real estate positioning consultancy targeting Australian boutique agencies. Built with React + Vite + Tailwind CSS.

## Commands

```bash
npm run dev      # Start dev server (Vite)
npm run build    # Production build
npm run preview  # Preview production build locally
```

## Architecture

**Routing** (React Router v6 in `src/main.jsx`):
- `/` - Main landing page (`App.jsx`)
- `/book` - Calendly booking page (`BookPage.jsx`)
- `/booked` - Post-booking confirmation (`BookedPage.jsx`)
- `/intake` - Pre-work intake form (`IntakePage.jsx`)

**Key Files**:
- `src/config.js` - External service config (Calendly URL, Web3Forms key via `VITE_WEB3FORMS_ACCESS_KEY` env var)
- `src/lib/utils.js` - `cn()` utility for Tailwind class merging
- `src/bookingTimelineShared.js` - Shared timeline marker styling for booking flow

**Components**:
- `src/components/ui/` - shadcn/ui-style primitives (Button, Card, Badge, Accordion, etc.)
- `src/components/FadeIn.jsx` - Framer Motion scroll-triggered fade animation
- `src/components/TestimonialCarousel.jsx` - Infinite marquee testimonials

**Styling**:
- Tailwind CSS with custom theme in `tailwind.config.js`
- CSS variables for theming defined in `src/index.css`
- Primary color: `#08608f` (teal/blue, named `orange` in config for legacy reasons)
- Path alias: `@` resolves to `src/` (configured in `vite.config.js` and `jsconfig.json`)

## Environment

Create `.env` with:
```
VITE_WEB3FORMS_ACCESS_KEY=your_key_here
```
