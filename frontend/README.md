# Eversunny Technologies — Website

Marketing website for Eversunny Technologies, built with React 19, TypeScript and Vite
(the same stack as the Kovalty site).

## Getting started

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # type-check + production build into dist/
npm run preview   # serve the production build locally
npm run lint
```

## Pages

| Route              | Page                                                              |
| ------------------ | ----------------------------------------------------------------- |
| `/`                | Home — hero, services, why us, process, industries, models, FAQ   |
| `/services`        | All services, process and engagement models                       |
| `/services/:slug`  | Service detail — offerings, outcomes, toolkit, FAQ, related       |
| `/about`           | Story, mission & vision, values, commitments                      |
| `/careers`         | Life at Eversunny, hiring areas, hiring process                   |
| `/contact`         | Contact details and enquiry form (`?service=<slug>` preselects)   |
| `*`                | 404                                                               |

## Editing content

All copy lives in `src/data/` — no component changes are needed for routine updates.

- `site.ts` — company name, emails, phone, address, LinkedIn. **Confirm the email
  addresses before launch.** Phone, address and LinkedIn are hidden while empty.
- `services.ts` — the six services and everything on their detail pages. Adding an
  entry automatically adds it to the header menu, footer, home page and routes.
- `company.ts` — pillars, process steps, industries, engagement models, technologies,
  FAQs, values and commitments.
- `careers.ts` — perks, hiring areas and hiring steps.

## Contact form

Set `VITE_CONTACT_ENDPOINT` (see `.env.example`) to any URL that accepts a JSON POST —
for example a Formspree/Getform form or your own API. Without it, the form opens the
visitor's email app with the enquiry pre-filled and addressed to `site.email`.

## Brand assets

`public/brand/` holds the logo generated from the original artwork
(`public/brand/source/`): a transparent version for light backgrounds, a light
version for dark backgrounds, and a social-share image. `public/favicon.svg` and
`public/apple-touch-icon.png` use the sunrise mark, which is also available as the
`<SunMark />` component. Brand colours are defined as CSS variables in
`src/styles/global.css`.

## Project structure

```
src/
  components/
    layout/     Header (mega menu + mobile drawer), Footer, Layout
    sections/   Page sections reused across pages (Hero, Process, ...)
    ui/         Small building blocks (Logo, SunMark, Reveal, FaqList, ...)
  data/         All site content
  hooks/        usePageMeta — per-page <title> and meta description
  lib/          Contact form submission
  pages/        One component per route
  styles/       Design tokens and global styles
```

## Deployment

`vercel.json` rewrites every path to `index.html` so client-side routes work on
refresh. Any static host works with an equivalent SPA fallback.
