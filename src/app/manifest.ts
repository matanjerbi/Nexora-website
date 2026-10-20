import type { MetadataRoute } from 'next';
import { brandColors } from '@/config/brand';
import { siteConfig } from '@/config/site';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${siteConfig.name} | ${siteConfig.tagline.en}`,
    short_name: siteConfig.name,
    description: siteConfig.tagline.en,
    start_url: '/he',
    display: 'standalone',
    background_color: brandColors.bg,
    theme_color: brandColors.bg,
    icons: [
      { src: '/icon.svg', type: 'image/svg+xml', sizes: 'any' },
      { src: '/apple-icon', type: 'image/png', sizes: '180x180' },
    ],
  };
}
