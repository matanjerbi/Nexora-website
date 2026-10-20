import type { Locale } from '@/domain';
import { siteConfig } from '@/config/site';
import { routing } from '@/i18n/routing';
import { brandColors } from '@/config/brand';
import { N_MARK } from '@/components/ui/nmark-geometry';

/** Absolute URL on the site, e.g. absoluteUrl('/he/accessibility'). */
export function absoluteUrl(path = '/'): string {
  return new URL(path, siteConfig.siteUrl).toString();
}

/** Locale-prefixed path, e.g. localizedPath('he', '/accessibility') → '/he/accessibility'. */
export function localizedPath(locale: Locale, path = ''): string {
  return `/${locale}${path === '/' ? '' : path}`;
}

/** Canonical URL plus hreflang alternates (including x-default) for a path that exists in every locale. */
export function localeAlternates(locale: Locale, path = '') {
  const languages = Object.fromEntries(
    routing.locales.map((l) => [l, absoluteUrl(localizedPath(l, path))]),
  ) as Record<Locale, string>;
  return {
    canonical: languages[locale],
    languages: { ...languages, 'x-default': languages[routing.defaultLocale] },
  };
}

export const ogLocales: Record<Locale, string> = { he: 'he_IL', en: 'en_US' };

/** Full Open Graph block. Pages must pass all of it: Next replaces (not merges) a parent's openGraph. */
export function openGraphFor(locale: Locale, { title, description, path = '' }: OgInput) {
  return {
    type: 'website' as const,
    siteName: siteConfig.name,
    title,
    description,
    url: absoluteUrl(localizedPath(locale, path)),
    locale: ogLocales[locale],
    alternateLocale: routing.locales.filter((l) => l !== locale).map((l) => ogLocales[l]),
  };
}

type OgInput = { title: string; description?: string; path?: string };

/** The N mark as a standalone SVG string (for next/og images and data URIs). */
export function nMarkSvg(): string {
  const c = brandColors;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
<defs>
<linearGradient id="b" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${c.cyan}"/><stop offset=".55" stop-color="${c.blue}"/><stop offset="1" stop-color="${c.deepBlue}"/></linearGradient>
<linearGradient id="f" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${c.deepBlue}"/><stop offset="1" stop-color="${c.cyan}"/></linearGradient>
</defs>
<path d="${N_MARK.leftLeg}" fill="url(#f)"/><path d="${N_MARK.rightLeg}" fill="url(#b)"/><path d="${N_MARK.diagonal}" fill="url(#b)"/>
<path d="${N_MARK.badge}" fill="${c.bg}" stroke="url(#b)" stroke-width="3"/>
<path d="${N_MARK.glyph}" fill="none" stroke="${c.cyan}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
}

export function nMarkDataUri(): string {
  return `data:image/svg+xml;base64,${Buffer.from(nMarkSvg()).toString('base64')}`;
}
