# GeorgeAlbanese.com

Personal portfolio site — Endpoint Automation Engineer.

## Stack

- **Astro 5** with MDX, React islands
- **Tailwind CSS 4**
- **Cloudflare Pages** (hosting)
- **Cloudflare Workers** (contact form — Phase 1b)

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

Connected to Cloudflare Pages via GitHub:

1. Push to `main` → auto-deploys to production
2. Push to any other branch → preview deployment

### Cloudflare Pages Config
- **Build command**: `npm run build`
- **Build output directory**: `dist`
- **Node.js version**: 20

## Project Structure

```
src/
├── components/       # Astro components (Nav, Hero, Skills, etc.)
├── content/
│   ├── case-studies/ # MDX case study files (Phase 2)
│   └── blog/         # MDX blog/KB posts (Phase 3)
├── layouts/          # BaseLayout
├── pages/            # Routes (index, resume, projects, 404)
├── styles/           # Global CSS + Tailwind theme
└── assets/           # Static assets used in components
public/
├── favicon.svg
├── robots.txt
└── George_Albanese_Resume.pdf  # Add your resume PDF here
```

## Content

Case studies and blog posts are written in MDX files with typed frontmatter.
See `src/content.config.ts` for the schema definitions.

## Resume

Place your resume PDF at `public/George_Albanese_Resume.pdf` for the embed and download to work.
