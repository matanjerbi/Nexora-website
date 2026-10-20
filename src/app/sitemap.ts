import type { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';
import { absoluteUrl, localeAlternates, localizedPath } from '@/lib/seo';

/** Pages that exist in every locale. */
const pages = [
  { path: '', priority: 1, changeFrequency: 'monthly' },
  { path: '/accessibility', priority: 0.3, changeFrequency: 'yearly' },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.flatMap((page) =>
    routing.locales.map((locale) => ({
      url: absoluteUrl(localizedPath(locale, page.path)),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
      alternates: { languages: localeAlternates(locale, page.path).languages },
    })),
  );
}
