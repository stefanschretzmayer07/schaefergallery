
# Schaefer's Gallery Barbershop — Premium Website

A calm, luxury barbershop site with a high-end NYC aesthetic. Multi-page TanStack Start architecture, smooth animations, and an interactive booking flow. The provided HTML/CSS/JS reference is rebuilt as a polished React + Tailwind v4 implementation using shadcn components.

## Real Business Info (from your snippet)
- **Name**: Schaefer's Gallery Barbershop
- **Address**: 984 NY-25A, Miller Place, NY
- **Phone**: (631) 452-1992
- **Services**: Haircut, Beard Trim, Buzz Cut, Styling

## Design Direction
- **Palette**: deep black (#0a0a0a), warm beige (#d6c5a8 / #f5efe6), soft off-white, muted gray
- **Typography**: Playfair Display serif headings, Inter sans body
- **Feel**: generous whitespace, slow fades, refined hover states — luxury spa minimalism

## Site Structure (separate routes for SEO)
- `/` — Home: hero, brief intro, featured services, testimonial highlight, CTA
- `/about` — Story, 10+ years experience, family-friendly, kids welcome
- `/services` — Full service list with pricing & descriptions
- `/reviews` — 5.0 ★ display + testimonial grid
- `/book` — Interactive booking flow
- `/contact` — Phone, address, hours, map

Each route gets its own `head()` metadata.

## Key Components
- **Sticky nav** (`__root.tsx`): translucent on scroll, logo left, links right, "Book" CTA
- **Hero**: full-bleed, large serif name, tagline "Precision. Style. Experience.", Book / Services CTAs
- **About**: split layout with stat highlights (10+ years, 5.0 rating, family-friendly)
- **Service cards**: Haircut, Beard Trim, Buzz Cut, Styling — price, duration, hover lift
- **Reviews**: large 5.0 ★★★★★, testimonial grid with fade-in
- **Booking flow** (`/book`), 4 steps:
  1. Select service
  2. Calendar (shadcn `Calendar`, disable past dates + Sundays, `pointer-events-auto`)
  3. Time slot grid (9am–6pm, 30-min intervals)
  4. Name + phone form → success toast + summary card (front-end only)
- **Footer**: address, phone, hours, copyright

## Interactions & Animations
- IntersectionObserver fade-in-on-scroll
- Site-wide smooth scroll
- Hover lift on cards, animated nav underlines
- Subtle button scale on hover

## Tech Notes
- TanStack Start file-based routes under `src/routes/`
- Tailwind v4 design tokens updated in `src/styles.css` for the neutral palette
- shadcn `Calendar`, `Button`, `Card`, `Input`, `Form`, `Sonner`
- Replaces the placeholder in `src/routes/index.tsx`
- Front-end only — no backend persistence
