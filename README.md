# Eversunny Technologies

Official website and marketing platform for **Eversunny Technologies**.

## Project Structure

```
Eversunny1/
├── frontend/             # Vite + React 19 + TypeScript application
│   ├── public/           # Static assets, logos, and brand icons
│   ├── src/
│   │   ├── components/   # UI components and layout sections
│   │   ├── data/         # Site copy, services, company details, navigation
│   │   ├── hooks/        # Custom hooks (page meta, titles)
│   │   ├── lib/          # Utilities and contact form submission
│   │   ├── pages/        # Route views
│   │   └── styles/       # Design tokens and global CSS
│   ├── package.json
│   ├── tsconfig.json
│   ├── vercel.json
│   └── vite.config.ts
└── .gitignore
```

## Quick Start

The website application is located in the `frontend` directory:

```bash
cd frontend
npm install
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) in your browser.

## Available Scripts

Run these commands inside the `frontend` folder:

- `npm run dev` — Start the local Vite development server
- `npm run build` — Type-check with TypeScript and build for production into `dist/`
- `npm run preview` — Locally preview the production build
- `npm run lint` — Run ESLint across the codebase

## Deployment

When connecting this repository to **Vercel**, **Netlify**, or **Cloudflare Pages**:
- Set **Root Directory** to `frontend`.
- Build Command: `npm run build`
- Output Directory: `dist`
