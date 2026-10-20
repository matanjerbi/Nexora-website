# Project Brief — Nexora Website v1.0

Initial build specification. Conventions, design system, architecture and rules are in `CLAUDE.md`. Follow them throughout.

## Role

You are a senior frontend architect and product designer. Build the complete site described below, autonomously, milestone by milestone. At the end of each milestone, briefly state what you did before moving on.

## Repository setup

The remote https://github.com/matanjerbi/Nexora-website.git may be empty. If so:

1. Initialize the repo.
2. Create `main`, and commit a README.
3. Create `develop` from `main`.
4. Push both branches.

## Milestones

Each milestone gets its own `feature/*` branch off `develop`. Merge it back with `--no-ff` before starting the next one.

| #   | Branch                  | Scope                                                           |
| --- | ----------------------- | --------------------------------------------------------------- |
| 1   | `feature/project-setup` | Next.js, TS strict, Tailwind, ESLint/Prettier, folder structure |
| 2   | `feature/design-system` | tokens, fonts, UI primitives, motion primitives, SVG "N" mark   |
| 3   | `feature/i18n`          | `next-intl`, `/he` + `/en`, RTL/LTR, language switcher          |
| 4   | `feature/content-model` | domain types, zod schemas, all content files (he/en)            |
| 5   | `feature/layout`        | header, footer, floating WhatsApp button, mobile menu           |
| 6   | `feature/hero`          | hero section                                                    |
| 7   | `feature/services`      | services + capabilities strip                                   |
| 8   | `feature/why-nexora`    | differentiators section                                         |
| 9   | `feature/process`       | process steps                                                   |
| 10  | `feature/portfolio`     | portfolio grid                                                  |
| 11  | `feature/faq-cta`       | FAQ accordion + final CTA                                       |
| 12  | `feature/seo`           | metadata, hreflang, sitemap, robots, OG images, JSON-LD         |
| 13  | `feature/accessibility` | a11y pass + accessibility statement page                        |
| 14  | `feature/docker`        | Dockerfile, compose, env, README                                |

Release steps:

1. Merge `develop` into `main`.
2. Tag `v1.0.0`.
3. Push all branches and tags.

## Home page `/[locale]`: sections in order

### 1. Header

- Contents: logo, anchor nav, language switcher (he/en), and a WhatsApp CTA.
- Behavior: sticky, with a blur backdrop.
- Mobile: the menu opens as an animated overlay.

### 2. Hero

- Headline: strong, e.g. "אתרים שמביאים לקוחות. תשתית שלא נופלת."
- Subline below the headline.
- CTAs: primary → WhatsApp; secondary → scroll to services.
- Effects:
  - the SVG "N" mark draws itself in on load
  - a lightweight gradient-glow background
  - a text reveal

### 3. Services (the products)

- **דפי נחיתה / Landing Pages**
- **אתר תדמית / Business Website**
- **תחזוקה ותמיכה / Maintenance & Support**

Each card has:

- an icon
- a description
- what's included
- who it's for
- a "Talk to us on WhatsApp" button with a service-specific prefilled message

No prices: use a "Let's get a quote" style instead. Cards get the spotlight hover effect on desktop.

### 4. Capabilities strip

The four logo pillars, laid out with thin vertical cyan dividers like the logo's bottom row:

- Website Development
- Maintenance & Support
- Cloud & Infrastructure
- Security & Monitoring

### 5. Why Nexora

Highlight the founder's real engineering background:

- production infrastructure engineering at large scale
- databases (Redis, PostgreSQL) and automation
- building self-service platforms
- security-minded thinking

Core message: _"Most website builders stop at design. We build like engineers: fast, secure, monitored, and built to last."_

Concrete benefits for small businesses:

- speed
- uptime
- security
- backups
- one point of contact for everything

### 6. Process

Steps, animated on scroll:

1. Discovery
2. Design
3. Build
4. Launch
5. Ongoing support

### 7. Portfolio

- A grid driven by `content/projects.ts`.
- The first item is "NOBLE Jewelry" (status `demo`, placeholder image).
- Adding a project must take a single data entry.

### 8. FAQ

- An accessible accordion with 6–8 relevant questions, for example:
  - timelines
  - what's needed from the client
  - hosting
  - maintenance
  - content updates
  - mobile responsiveness

### 9. Final CTA

A large gradient section with a WhatsApp button.

### 10. Footer

- logo and tagline
- phone, email, WhatsApp
- language switcher
- link to the accessibility statement
- copyright

## Additional pages and elements

- **Floating WhatsApp button** on all pages, with a subtle pulse that is disabled under reduced motion.
- **`/[locale]/accessibility`**: an accessibility statement page (IS 5568 / WCAG 2.1 AA).
- **Custom 404 page** in brand style.

## Motion effects (within the performance rules in CLAUDE.md)

- Hero: SVG stroke draw-in, a gradient shimmer on the "N", and a canvas/CSS glow.
- Cards: mouse-follow spotlight (desktop only).
- Buttons: magnetic CTAs (desktop only).
- Scrolling: scroll-reveal with stagger, and a subtle parallax on section backgrounds.
- Optional: a smooth counter or marquee, only where it adds value.

## SEO

- Per-locale metadata, `hreflang` alternates, and canonical URLs.
- `sitemap.ts` and `robots.ts`.
- OG images in brand style, generated with `next/og`.
- JSON-LD `ProfessionalService` schema.
- `NEXT_PUBLIC_SITE_URL` from env. There is no domain yet, so default to `http://localhost:3000`.

## Docker

- Multi-stage `Dockerfile`:
  1. deps
  2. build
  3. runner on `node:<lts>-alpine`, using Next standalone output
- Runtime: non-root user, `HEALTHCHECK`, `EXPOSE 3000`.
- Add `.dockerignore`, plus a `docker-compose.yml` that passes env vars.
- Add `.env.example`.

## README.md

- Overview and stack
- Folder structure
- How to edit content (services, projects, FAQ)
- Running locally
- Running with Docker
- Env vars
- Deployment notes

## Final check

Before the release merge:

1. Run `lint`, `typecheck` and `build` with zero errors, fixing anything that fails.
2. Verify `/he` and `/en` render correctly at mobile width and desktop width.
