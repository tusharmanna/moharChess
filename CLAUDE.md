# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

MoharChess is a chess education platform website built with Next.js 15, React 19, and TypeScript. The site provides information about chess classes, tournaments, summer camps, workshops, and other programs offered by MoharChess.

## Technology Stack

- **Framework**: Next.js 15.5.0 with App Router
- **UI Library**: React 19.1.0
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 3.4.17
- **Icons**: React Icons 5.5.0
- **Fonts**: Inter (primary), Playfair Display, Manrope (via next/font/google)

## Build Configuration

The project is configured for **static site generation** (SSG):
- `output: 'export'` in next.config.ts
- Builds to `out/` directory
- Images are unoptimized for static hosting
- Trailing slashes enabled for compatibility

## Development Commands

```bash
# Start development server (http://localhost:3000)
npm run dev

# Build for production (outputs to /out directory)
npm run build

# Start production server (requires build first)
npm start

# Run linter
npm run lint
```

## Deployment

Static site deployment to AWS S3 is configured via deployment scripts:
- `deploy-s3.sh` (Linux/Mac)
- `deploy-s3.bat` (Windows)

These scripts:
1. Run `npm run build`
2. Sync `/out` directory to S3 bucket
3. Set proper content types for HTML/CSS/JS files

**Note**: Update `BUCKET_NAME` in deployment scripts before use.

## Project Structure

```
src/
├── app/                          # Next.js App Router pages
│   ├── layout.tsx               # Root layout with Header/Footer
│   ├── page.tsx                 # Home page
│   ├── about-us/
│   ├── tournaments/
│   ├── summer-camp/
│   ├── workshops/
│   ├── after-school-program/
│   ├── browse-sessions/
│   ├── events/
│   ├── our-gallery/
│   ├── careers/
│   ├── contact-us/
│   ├── private-class-registration/
│   ├── forms-and-links/
│   └── globals.css              # Global styles and Tailwind imports
└── components/
    ├── Header.tsx               # Site header with navigation and top bar
    └── Footer.tsx               # Site footer with contact info
```

## Architecture

### Layout System

The application uses Next.js App Router with a consistent layout:
- **Root Layout** (`src/app/layout.tsx`): Wraps all pages with Header and Footer
- **Header** (`src/components/Header.tsx`): Client component with responsive navigation, dropdown menus, and mobile menu toggle
- **Footer** (`src/components/Footer.tsx`): Static footer with company info, quick links, and contact details

### Styling Approach

- **Tailwind CSS**: Utility-first styling throughout
- **Custom CSS Variables**: Defined in `globals.css` for theming
- **Color Scheme**:
  - Primary: Teal 800 (#115E59)
  - Accent: Orange (#DA8F27)
  - Used consistently across all components
- **Custom Fonts**:
  - `--font-playfair` for headings
  - `--font-manrope` available as alternative
  - Inter as default body font

### Page Architecture

All pages follow a consistent pattern:
1. Full-width sections with gradient or solid backgrounds
2. Container-based content (responsive max-width)
3. Hero sections with imagery and CTAs
4. Card-based layouts for program/feature listings
5. Responsive grid layouts (1-column mobile → multi-column desktop)

### Client Components

Only the Header component uses `'use client'` directive for:
- Mobile menu state management
- Interactive dropdown menus
- Responsive navigation toggle

All other components are Server Components by default.

## TypeScript Configuration

- **Module Resolution**: Bundler mode
- **Path Aliases**: `@/*` maps to `./src/*`
- **Target**: ES2017
- **Strict Mode**: Enabled

## Contact Information

Contact details hardcoded throughout the site:
- Email: mohar.chess@gmail.com
- Phone: 7708158221
- WhatsApp: https://wa.me/17708158221
- Facebook: https://facebook.com/moharchess
- Instagram: https://www.instagram.com/moharchess_official

## Image Assets

All images stored in `/public/images/`:
- Logo: `mohar.jpg`
- Hero images: `chess-hero.jpg`, `section-bg-2.jpg`
- Program banners: `SummerCampJuly2025.jpg`, `rated-banner.jpg`, etc.
- Instructor photos and event thumbnails

Images use Next.js Image component with `unoptimized: true` for static export compatibility.
