import type { MetadataRoute } from 'next';
import { services } from '@/content';
import { routing } from '@/i18n/routing';
import { absoluteUrl, localeAlternates, localizedPath, servicePath } from '@/lib/seo';

type Page = {
  path: string;
  priority: number;
  changeFrequency: NonNullable<MetadataRoute.Sitemap[number]['changeFrequency']>;
};

/** Pages that exist in every locale. */
const pages: Page[] = [
  { path: '', priority: 1, changeFrequency: 'monthly' },
  ...services.map((service) => ({
    path: servicePath(service.slug),
    priority: 0.8,
    changeFrequency: 'monthly' as const,
  })),
  { path: '/accessibility', priority: 0.3, changeFrequency: 'yearly' },
];

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
