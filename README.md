# Nexora — Websites & Tech Support

Bilingual (Hebrew/English) marketing site for **Nexora**, a web studio serving small businesses in Israel.
The site is both a business card and a showcase: dark, brand-driven, fast and accessible.

- Hebrew at `/he` (default, RTL) and English at `/en` (LTR)
- Every call to action opens WhatsApp with a context-aware, localized prefilled message (no forms)
- Fully static: every page is prerendered at build time

## Stack

| Area      | Choice                                                                 |
| --------- | ---------------------------------------------------------------------- |
| Framework | Next.js 16 (App Router, Turbopack, Cache Components), React 19         |
| Language  | TypeScript (`strict`)                                                  |
| Styling   | Tailwind CSS v4, brand tokens as CSS variables (`src/app/globals.css`) |
| i18n      | `next-intl` with `next/root-params`, locale routing in `src/proxy.ts`  |
| Motion    | Framer Motion via `LazyMotion` + `domAnimation`; CSS for the hero      |
| Content   | Typed data files validated with `zod`                                  |
| Fonts     | `next/font` (self-hosted): Michroma, Inter, Heebo                      |
| Icons     | `lucide-react`, 1.5px cyan line style                                  |
| Quality   | ESLint (flat config) + Prettier                                        |
| Runtime   | `output: 'standalone'`, multi-stage Docker image on `node:24-alpine`   |

## Folder structure

```
src/
  app/
    [locale]/            routes, root layout (lang/dir), metadata, OG image, 404
      accessibility/     accessibility statement page
    sitemap.ts robots.ts manifest.ts icon.svg apple-icon.tsx
    globals.css          design tokens, Tailwind theme, keyframes, brand utilities
    fonts.ts             next/font definitions
  features/<section>/    self-contained page sections (hero, services, why-nexora, process,
                         portfolio, faq, final-cta, layout, seo, accessibility)
  components/ui/         primitives: Button, Card, Section, Container, Icon, GradientText, NMark…
  components/motion/     Reveal, Stagger, MagneticButton, SpotlightCard, Parallax, GrowLine
  domain/                TypeScript types + zod schemas
  content/               all structured content (he/en), the single source of truth
  lib/                   pure helpers: whatsapp link builder, seo builders, cn, bidi
  config/                site.ts (brand, contact, site URL), brand.ts, navigation.ts
  i18n/                  routing, request config, messages/he.json, messages/en.json
  assets/fonts/          static TTFs used only by next/og image generation
  proxy.ts               locale detection and redirects
public/
  brand/                 logo files
  projects/              portfolio images
```

## Editing content

Components never contain copy. There are two places text lives:

- **Structured content** (`src/content/*.ts`): services, capabilities, differentiators/benefits,
  process steps, projects, FAQ, accessibility statement. Every field is `{ he, en }`.
- **UI strings** (`src/i18n/messages/he.json` and `en.json`): headings, button labels, WhatsApp
  messages, metadata. Keep both files' keys identical.

Content is validated against the zod schemas in `src/domain/` at build time, so a missing
translation or a bad icon name fails the build instead of shipping.

### Add a service

Append one object to `src/content/services.ts`:

```ts
{
  id: 'online-store',
  slug: 'online-store',
  icon: 'layout', // one of `iconNames` in src/domain/index.ts
  title: { he: 'חנות אונליין', en: 'Online Store' },
  shortDescription: { he: '…', en: '…' },
  description: { he: '…', en: '…' },
  features: { he: ['…'], en: ['…'] },
  idealFor: { he: '…', en: '…' },
  whatsappMessage: { he: 'היי, אשמח לשמוע על…', en: "Hi, I'd like to hear about…" },
},
```

To use an icon that isn't available yet, add its name to `iconNames` in `src/domain/index.ts`
and map it to a lucide icon in `src/components/ui/Icon.tsx`.

### Add a portfolio project

Put the image in `public/projects/` and append one object to `src/content/projects.ts`:

```ts
{
  id: 'acme',
  title: 'Acme Studio',
  client: { he: 'Acme', en: 'Acme' },
  category: { he: 'אתר תדמית', en: 'Business website' },
  description: { he: '…', en: '…' },
  techStack: ['Next.js', 'TypeScript'],
  image: { src: '/projects/acme.webp', alt: { he: '…', en: '…' } },
  liveUrl: 'https://acme.example', // optional
  status: 'live', // or 'demo'
},
```

While `projects` is empty, the portfolio section and its nav link are hidden automatically.

### About section and live metrics

- The founder bio, photo and fact list live in `src/content/founder.ts` (photo in `public/brand/`).
- The "measure it" panel reads real numbers from the visitor's browser (Performance API). The
  comparison figure and its source are in `src/content/benchmarks.ts`; update it when a newer
  HTTP Archive Web Almanac is published.

### Add an FAQ item

Append `{ id, question: { he, en }, answer: { he, en } }` to `src/content/faq.ts`.

### Contact details

Phone, WhatsApp number and email live in `src/config/site.ts`. WhatsApp links are built by
`src/lib/whatsapp.ts` (`https://wa.me/<number>?text=<encoded message>`).

## Running locally

Requires Node.js 20.19+ (24 LTS recommended).

```bash
npm install
cp .env.example .env.local   # optional; defaults to http://localhost:3000
npm run dev                  # http://localhost:3000 → redirects to /he
```

| Script                 | What it does                              |
| ---------------------- | ----------------------------------------- |
| `npm run dev`          | Dev server                                |
| `npm run build`        | Production build (standalone)             |
| `npm run start`        | Serve the production build                |
| `npm run lint`         | ESLint                                    |
| `npm run typecheck`    | Generate route types, then `tsc --noEmit` |
| `npm run format`       | Prettier (with Tailwind class sorting)    |
| `npm run format:check` | Prettier check only                       |

## Running with Docker

```bash
cp .env.example .env         # NEXT_PUBLIC_SITE_URL defaults to the production domain
docker compose up --build -d # http://localhost:3000
```

Or without compose:

```bash
docker build --build-arg NEXT_PUBLIC_SITE_URL=https://nexora.example -t nexora-website .
docker run -p 3000:3000 nexora-website
```

The image is a three-stage build (`deps` → `build` → `runner`) on `node:24-alpine`. The runner
contains only the standalone server, runs as a non-root user, exposes port 3000 and has a
`HEALTHCHECK`. Compose additionally runs it with a read-only filesystem and `no-new-privileges`.

## Environment variables

| Variable               | Default                        | Notes                                                                                                                                       |
| ---------------------- | ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL` | `https://www.nexoraisrael.com` | Public origin, no trailing slash. Used for canonical, hreflang, sitemap, robots, OG and JSON-LD. **Build-time**: rebuild after changing it. |
| `PORT`                 | `3000`                         | Host port in `docker-compose.yml` (the container always listens on 3000).                                                                   |

## Deployment notes

- **Set the domain before building.** Pages are prerendered, so `NEXT_PUBLIC_SITE_URL` is baked
  into the HTML, sitemap and OG tags. Pass it as a Docker build arg (compose does this from `.env`).
- **Put it behind a reverse proxy with TLS** (Caddy, Nginx, Traefik or a managed load balancer)
  and forward to port 3000. Static assets under `/_next/static` are content-hashed and can be cached
  forever.
- **Health check:** `GET /robots.txt` returns 200 when the server is up.
- **SEO after go-live:** submit `https://<domain>/sitemap.xml` to Google Search Console and verify
  the OG preview (e.g. by sharing a link in WhatsApp).
- **Accessibility statement:** update `updated` in `src/content/accessibility.ts` whenever the site
  is reviewed.
- The site has no database, no forms and no secrets.

## Contributing

- Branches: `main` (production), `develop` (integration), `feature/<name>` per piece of work.
- Commits follow Conventional Commits. Merge features into `develop` with `--no-ff`; release
  `develop` → `main` with a semver tag.
- Definition of done: `lint`, `typecheck` and `build` pass; no hardcoded copy or colors; works in
  both `/he` (RTL) and `/en` (LTR).
