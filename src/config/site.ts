import { siteConfigSchema } from '@/domain';

/** Brand and contact details. NEXT_PUBLIC_SITE_URL overrides the production domain (e.g. for local or preview builds). */
export const siteConfig = siteConfigSchema.parse({
  name: 'Nexora',
  tagline: { he: 'אתרים ותמיכה טכנית', en: 'Websites & Tech Support' },
  phone: { display: '053-361-5428', href: 'tel:+972533615428' },
  whatsapp: '972533615428',
  email: 'jerbimatan@gmail.com',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.nexoraisrael.com',
  serviceArea: {
    cities: [
      { he: 'רמת גן', en: 'Ramat Gan' },
      { he: 'גבעתיים', en: 'Givatayim' },
      { he: 'תל אביב', en: 'Tel Aviv' },
      { he: 'פתח תקווה', en: 'Petah Tikva' },
      { he: 'בני ברק', en: 'Bnei Brak' },
    ],
    country: { he: 'ישראל', en: 'Israel' },
  },
  // Add profile URLs here as they go live (Google Business Profile, LinkedIn, Facebook, Instagram).
  sameAs: [],
});
