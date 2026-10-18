# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Personal portfolio site for Göktürk Çolak, served at https://gokturkcolak.github.io.

## Stack

- Next.js 15 (App Router) with React 19 and TypeScript
- Tailwind CSS v4 (configured in `src/app/globals.css` via `@theme`, no `tailwind.config`)
- shadcn/ui-style components (Radix primitives, `class-variance-authority`, `cn()` in `src/lib/utils.ts`)
- framer-motion for animation, lucide-react for icons, @nivo for charts
- next-themes for light/dark mode

## Commands

```bash
npm run dev     # local dev server at http://localhost:3000
npm run build   # static export to ./out
npm run lint
```

There are no tests. Run `npm run build` to check a change: it type-checks, lints, and runs the static export.

## Structure

- `src/app/` holds routes: `/`, `/about`, `/projects`, `/projects/tidytuesday_analysis`, `/certifications`, `/finance`
- `src/components/sections/` holds the homepage sections (Hero, About, Experience, Projects, Skills, Competitions, TidyTuesday, Contact)
- `src/components/ui/` holds the shared primitives (button, card, badge, sheet, navigation-menu, theme toggle)
- `public/` holds static assets, including `cv.pdf` and the favicons
- `public/photos/` holds the photos for the banner under the hero (`PhotoBanner.tsx`). They're read at build time: the filename sets the order and the caption (`01-Tübingen-Neckar.jpg` becomes "Tübingen Neckar"). Use JPG or WebP about 1600px wide.

## Architecture

- Site content (projects, experience, skills, competitions, TidyTuesday entries, contact links) is hard-coded as arrays at the top of each section component, e.g. `const projects = [...]` in `ProjectsSection.tsx`. To change text, edit those arrays. There's no CMS or data folder.
- The sections are client components (`"use client"`) because they use framer-motion. `PhotoBanner.tsx` is the exception: it's a server component that reads `public/photos/` with `fs` at build time, so it must not get `"use client"`.
- `layout.tsx` wraps every page in `ThemeProvider` (next-themes, `attribute="class"`) and renders `Navbar`, with `MobileNav` for small screens. Dark mode works through the `.dark` class: `globals.css` overrides the tokens under `.dark` and declares `@custom-variant dark`.
- Imports use the `@/*` alias, which points to `src/*`. `components.json` is the shadcn config (new-york style), so add new primitives to `src/components/ui/`.
- The theme switch is `src/components/ui/theme-toggle.tsx`, used by `Navbar`. `README.md` only links to the live site, on purpose. Don't add repo docs there.

## Deployment

- The site is a static export (`output: 'export'`, `trailingSlash: true`, unoptimized images). Don't use features that need a server: no API routes, no server actions, no middleware, no runtime `next/image` optimization.
- `.github/workflows/deploy.yml` builds and deploys `./out` to GitHub Pages on every push to `main`, using Node 18. It also runs on pull requests to `main`, including the deploy step.
- `next.config.js` and `next.config.ts` both exist. Next.js loads the `.js` one, so keep the two in sync or remove one.

## Design

**All UI work must follow `DESIGN.md`.** It defines the color tokens, typography, spacing, components, and the do's and don'ts. Read it before touching styles.

- Implement its tokens as CSS variables in `src/app/globals.css` and expose them through Tailwind's `@theme`. Don't hard-code hex values in components.
- Fonts (all loaded in `src/app/layout.tsx`):
  - Noto Serif JP for headings (`font-serif`, weight 600) and Noto Sans JP for body text (`font-sans`, the default). These are the fonts from the site's first version. They replace DESIGN.md's fonts on purpose: Instrument Serif and all-mono paragraphs were hard to read.
  - IBM Plex Mono (`font-mono`) for buttons only. Badges and `eyebrow` labels use the heading serif (Noto Serif JP). Nav links and all other text use the sans font. The user rejected JetBrains Mono and Instrument Serif.
- Colors: `primary` is Off-Black, and `accent` is Lake Blue, used only through `<Button variant="accent">` for the one main action per screen (Download CV in the hero, Send Email in Contact). Use the `eyebrow` utility for small bold meta labels. Labels and tags are bold in normal case, not all caps (user preference); only buttons are uppercase.
- `DESIGN.md` describes a light theme only. The site has a dark mode toggle, so derive any dark values from the same palette, keeping its warm neutrals.
