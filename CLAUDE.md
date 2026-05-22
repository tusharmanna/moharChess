# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

MoharChess is a chess education platform website built with Next.js 16, React 19, and TypeScript. The site provides information about chess classes, tournaments, summer camps, workshops, and other programs offered by MoharChess.

## Technology Stack

- **Framework**: Next.js 16.1.1 (with Turbopack) and App Router
- **UI Library**: React 19.1.0
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 3.4.17
- **Icons**: React Icons 5.5.0
- **Fonts**: Inter (primary), Playfair Display, Manrope (via next/font/google)
- **Testing**: Vitest 3.2.4 with React Testing Library
- **Code Quality**: ESLint 9 with Next.js core rules, Prettier 3.6.2, Husky with lint-staged

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

# Run linter (with --fix to auto-correct issues)
npm run lint
npm run lint -- --fix

# Run tests
npm test

# Run tests with UI
npm test:ui

# Generate test coverage report
npm test:coverage

# Analyze bundle size
ANALYZE=true npm run build
```

## Linting & Formatting

- **ESLint**: Uses Next.js core-web-vitals config. Common rules include:
  - `react/no-unescaped-entities`: Escape HTML entities in JSX text (use `&apos;` for apostrophes, etc.)
  - `react-hooks/rules-of-hooks`: Enforce React Hooks rules
- **Prettier**: Auto-formats code on commit via Husky
- **Pre-commit Hooks**: Lint-staged runs ESLint on staged files before commit

## Metadata & SEO

All pages use centralized metadata generation via `@/lib/metadata.ts`:

```typescript
import { generateMetadata as generateMeta } from '@/lib/metadata';

export const metadata = generateMeta({
  title: 'Page Title',
  description: 'Page description for meta and OG tags',
  keywords: 'optional, keywords, for, seo',
  ogImage: '/images/custom-image.jpg', // optional, defaults to mohar.jpg
});
```

Features:

- Automatic page title formatting with site name suffix
- Open Graph (OG) tags for social sharing
- Twitter card metadata
- Robots directive with Google-specific bot rules
- Structured data for search engines

## Project Structure

```
src/
├── app/                          # Next.js App Router pages
│   ├── layout.tsx               # Root layout with Header/Footer
│   ├── page.tsx                 # Home page
│   ├── about-us/page.tsx
│   ├── event-calendar/page.tsx
│   ├── summer-camp/
│   │   ├── registration/page.tsx
│   │   └── week[1-4]/page.tsx
│   ├── tournaments/page.tsx
│   ├── [other pages]/
│   └── globals.css              # Global styles and Tailwind imports
├── components/
│   ├── Header.tsx               # Site header with navigation and dropdowns
│   └── Footer.tsx               # Site footer with contact info
└── lib/
    ├── metadata.ts              # Centralized metadata generation
    ├── env.ts                   # Environment variable validation
    └── errorTracking.ts         # Error handling utilities
```

## Architecture

### Layout System

The application uses Next.js App Router with a consistent layout:

- **Root Layout** (`src/app/layout.tsx`): Wraps all pages with Header and Footer
- **Header** (`src/components/Header.tsx`): Client component (`'use client'`) with responsive navigation, nested dropdown menus (using Tailwind `group` classes), and mobile menu toggle with focus trap and keyboard navigation
- **Footer** (`src/components/Footer.tsx`): Server component with company info and contact details

### Navigation Patterns

The Header component demonstrates complex navigation patterns:

**Desktop Navigation**:

- Main nav items use hover-triggered dropdowns with `group-hover:opacity-100 group-hover:visible`
- Nested menus use `group/name` variants (e.g., `group/summercamp`) for parent-child hover relationships
- External links use `target="_blank" rel="noopener noreferrer"`

**Mobile Navigation**:

- Uses React state (`useState`) to manage collapsible menu sections
- Implements keyboard focus trapping (Tab key wraps focus within menu)
- Escape key closes the menu
- `aria-` attributes for accessibility (aria-label, aria-expanded, aria-controls)

### Styling Approach

- **Tailwind CSS**: Utility-first styling with responsive breakpoints (mobile-first)
- **Color Scheme**:
  - Primary: Teal 800 (`text-teal-800`, `#115E59`)
  - Accent: Orange 400/500 (`text-orange-400`, `#DA8F27`)
- **Custom Fonts** (from `next/font/google`):
  - `--font-playfair`: Used for headings and prominent text
  - `--font-manrope`: Alternative font
  - Inter: Default body font
- **Common Patterns**:
  - Sections use `py-16 px-4` for vertical padding and horizontal gutters
  - Container: `container mx-auto max-w-6xl` for content width
  - Responsive grids: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8`

### Page Architecture

All pages follow a consistent structure:

1. **Header Section**: Breadcrumb navigation (`Home » Page Name`)
2. **Hero/Title Section**: Large heading with optional subtitle/description
3. **Main Content**: Sections with varied layouts (cards, grids, embeds)
4. **Call-to-Action Section**: Typically a button linking to `/contact-us`

### Schema Markup & Structured Data

Home page (`page.tsx`) includes JSON-LD schema for local business:

```javascript
const schemaData = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'EducationalOrganization'],
  // ... structured data
};
```

This appears in a `<script type="application/ld+json">` tag for search engine indexing.

### Client Components

Only the Header uses `'use client'` directive:

- Mobile menu state management
- Interactive dropdown menus
- Event handlers for menu toggle and keyboard navigation
- Focus trap implementation

All page components and Footer are Server Components by default.

## TypeScript Configuration

- **Module Resolution**: Bundler mode
- **Path Aliases**: `@/*` maps to `./src/*`
- **Target**: ES2017
- **Strict Mode**: Enabled
- **JSX Runtime**: Automatic (via Next.js)

## Deployment

Static site deployment to AWS S3 is configured via deployment scripts:

- `deploy-s3.sh` (Linux/Mac)
- `deploy-s3.bat` (Windows)

These scripts:

1. Run `npm run build`
2. Sync `/out` directory to S3 bucket
3. Set proper content types for HTML/CSS/JS files

**Note**: Update `BUCKET_NAME` in deployment scripts before use.

## Contact Information

Contact details hardcoded throughout the site:

- Email: chess@mohar.org
- Phone: (770) 815-8221
- WhatsApp: https://wa.me/17708158221
- Facebook: https://facebook.com/moharchess
- Instagram: https://www.instagram.com/moharchess_official
- YouTube: https://www.youtube.com/@MoharChess

## Image Assets

All images stored in `/public/images/`:

- Logo: `mohar.jpg`
- Hero images: `chess-hero.jpg`, `section-bg-2.jpg`
- Program banners: `SummerCampJuly2025.jpg`, `rated-banner.jpg`, etc.
- Instructor/event photos

Images use Next.js Image component with `unoptimized: true` for static export compatibility.

## Accessibility Considerations

- Header menu implements keyboard navigation: Tab for focus, Escape to close
- Focus is trapped within mobile menu when open
- ARIA attributes used for screen readers: `aria-label`, `aria-expanded`, `aria-controls`
- Color contrast meets WCAG standards (Teal 800 + Orange have sufficient contrast with text)
