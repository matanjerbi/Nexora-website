import { siteConfigSchema } from '@/domain';

/** Brand and contact details. The site URL comes from env (no domain yet). */
export const siteConfig = siteConfigSchema.parse({
  name: 'Nexora',
  tagline: { he: 'אתרים ותמיכה טכנית', en: 'Websites & Tech Support' },
  phone: { display: '053-361-5428', href: 'tel:+972533615428' },
  whatsapp: '972533615428',
  email: 'jerbimatan@gmail.com',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000',
});
