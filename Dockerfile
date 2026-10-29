# syntax=docker/dockerfile:1

# ---- base ----------------------------------------------------------------
ARG NODE_VERSION=24
FROM node:${NODE_VERSION}-alpine AS base
RUN apk add --no-cache libc6-compat
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1

# ---- 1. deps: install exactly what the lockfile says ----------------------
FROM base AS deps
COPY package.json package-lock.json ./
RUN --mount=type=cache,target=/root/.npm npm ci

# ---- 2. build: compile the standalone server ------------------------------
FROM base AS build
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# Public URL is baked into prerendered pages (canonical, hreflang, sitemap, OG), so it's a build arg.
ARG NEXT_PUBLIC_SITE_URL=https://www.nexoraisrael.com
ENV NEXT_PUBLIC_SITE_URL=${NEXT_PUBLIC_SITE_URL}
RUN npm run build

# ---- 3. runner: minimal, non-root ----------------------------------------
FROM base AS runner
ENV NODE_ENV=production \
    PORT=3000 \
    HOSTNAME=0.0.0.0

RUN addgroup -S -g 1001 nodejs && adduser -S -u 1001 -G nodejs nextjs

# Standalone output already contains the traced server code, node_modules and OG fonts (src/assets).
COPY --from=build --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=build --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=build --chown=nextjs:nodejs /app/public ./public

USER nextjs
EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=5s --start-period=20s --retries=3 \
  CMD wget -q -O /dev/null http://127.0.0.1:3000/robots.txt || exit 1

CMD ["node", "server.js"]
