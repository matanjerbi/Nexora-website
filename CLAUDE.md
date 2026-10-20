# CLAUDE.md — Nexora Website

Persistent rules for this repository. Follow them in every session and every task.
For the initial build spec, see `docs/PROJECT_BRIEF.md`.

## Project

Bilingual (Hebrew/English) marketing site for **Nexora — Websites & Tech Support**, a web studio serving small businesses in Israel. The site is a business card AND a showcase of top-tier craftsmanship: it must look world-class and be fast.

## Tech stack

- Next.js (App Router, latest stable), TypeScript `strict`, Tailwind CSS
- `next-intl`: routes `/he` (default) and `/en`; `<html lang dir>` set per locale
- Framer Motion via `LazyMotion` + `domAnimation` only
- `zod` for content schemas; `next/font` for self-hosted fonts
- ESLint + Prettier. No test suite.
- `output: 'standalone'` (Docker)

## Architecture

```
src/
  app/[locale]/        → routes, layouts, metadata
  features/<section>/  → self-contained section components (hero, services, portfolio…)
  components/ui/       → primitives (Button, Card, Section, Container, Icon, GradientText)
  components/motion/   → animation primitives (Reveal, Stagger, MagneticButton, SpotlightCard)
  domain/              → TypeScript types + zod schemas
  content/             → typed content data (he/en) — single source of truth
  lib/                 → pure helpers (whatsapp link builder, seo builders, cn)
  config/site.ts       → brand, contact, socials, site URL (from env)
  i18n/                → next-intl config, messages/he.json, messages/en.json
```

Rules:

- Components never hardcode copy. All content lives in `content/` or message files.
- Localized fields are typed `Localized<string> = { he: string; en: string }`.
- Adding a service, project, or FAQ item = editing exactly one data file.
- Server Components by default; `"use client"` only where interaction requires it.
- Use Tailwind logical properties (`ms-`, `pe-`, `start-`, `end-`) so RTL/LTR both work. Never use `ml-`/`mr-`/`left-`/`right-` for directional layout.

## Domain model (`src/domain/`)

- `SiteConfig`: name, tagline, phone, whatsapp, email, siteUrl
- `Service`: id, slug, title, shortDescription, description, features[], icon, idealFor, whatsappMessage
- `Capability`: the 4 brand pillars
- `ProcessStep`, `Faq`, `Differentiator`
- `Project`: title, client, category, description, techStack[], image, liveUrl?, status: `'live' | 'demo'`

## Brand & design system

Derived strictly from the logo:

- **Mark:** a geometric folded-ribbon "N" with a cyan→blue gradient, plus a code-bracket `‹|›` motif.
- **Wordmark:** bold, wide, geometric uppercase.
- **Tagline:** thin, widely tracked uppercase.
- **Icons:** thin cyan line icons on near-black navy.

The site is dark-only: this is the brand.

**Tokens** (CSS variables + Tailwind theme):

| Token              | Value                                                          |
| ------------------ | -------------------------------------------------------------- |
| `--bg`             | #050A18                                                        |
| `--bg-elevated`    | #0A1228                                                        |
| `--surface`        | #0E1834                                                        |
| `--border`         | rgba(63,217,245,0.12)                                          |
| `--cyan`           | #3FD9F5                                                        |
| `--blue`           | #2F7BF5                                                        |
| `--deep-blue`      | #1D3FD6                                                        |
| `--gradient-brand` | linear-gradient(135deg, #3FD9F5 0%, #2F7BF5 50%, #1D3FD6 100%) |
| `--text`           | #FFFFFF                                                        |
| `--text-muted`     | #9AA8C7                                                        |

**Typography:**

| Use                 | Font                                                                 |
| ------------------- | -------------------------------------------------------------------- |
| EN display          | wide geometric sans matching the wordmark (e.g. Michroma), uppercase |
| EN body             | Inter                                                                |
| Hebrew              | Heebo for display and body, bold weights for headings                |
| Taglines / eyebrows | uppercase, letter-spacing 0.3em, thin weight                         |

**Visual language:**

- Icons: 1.5px cyan line icons (lucide-react, styled to match).
- Dividers: thin vertical cyan lines.
- Textures: subtle grid or noise.
- Glow: soft glows.
- Cards: glassy elevated cards with gradient borders.
- Logo: the "N" mark exists as an inline SVG component for animation. Brand files live in `public/brand/`.

## Performance — hard requirement

Targets:

- Lighthouse 95+ in all categories, on mobile
- LCP < 2s
- CLS ≈ 0
- Minimal first-load JS

Rules:

- Animate only `transform`/`opacity`. No three.js; hero effects use lightweight canvas or CSS.
- Lazy-load everything below the fold.
- Respect `prefers-reduced-motion` everywhere.
- Disable heavy effects (spotlight, magnetic, parallax) on touch and low-power devices.

## Contact

All leads go to WhatsApp. There are no forms and no address displayed.

| Channel  | Value                                                                                                |
| -------- | ---------------------------------------------------------------------------------------------------- |
| Phone    | 053-361-5428 · `tel:+972533615428`                                                                   |
| WhatsApp | +972533615428, via `lib/whatsapp.ts` → `https://wa.me/972533615428?text=<encoded localized message>` |
| Email    | jerbimatan@gmail.com                                                                                 |

Every CTA opens WhatsApp with a context-aware prefilled message in the current locale.

## Copy

- Hebrew: natural Israeli Hebrew. Never translated-sounding.
- English: polished.
- Audience: small business owners.
- Tone: confident, clear, no buzzword soup.

## Accessibility

Target Israeli standard IS 5568 / WCAG 2.1 AA:

- Semantic HTML and a skip link
- Visible cyan focus rings
- Fully keyboard navigable
- AA contrast
- `aria-label`s on icon buttons
- Correct `lang`/`dir`

## Git workflow

- Branches:
  - `main`: production, always deployable
  - `develop`: integration
  - `feature/<name>`: one branch per piece of work
- Commits: Conventional Commits (`feat:`, `fix:`, `chore:`, `refactor:`, `style:`, `docs:`), small and atomic.
- Merge `feature/*` → `develop` with `--no-ff`. Release `develop` → `main` with a semver tag.
- Remote: https://github.com/matanjerbi/Nexora-website.git

## Definition of done (every task)

- `lint`, `typecheck` and `build` pass with zero errors.
- No hardcoded copy or colors outside tokens and content.
- Works correctly in both `/he` (RTL) and `/en` (LTR).
