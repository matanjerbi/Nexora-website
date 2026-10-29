import { z } from 'zod';

export const locales = ['he', 'en'] as const;
export type Locale = (typeof locales)[number];

export const localizedSchema = z.object({ he: z.string().min(1), en: z.string().min(1) });
export type Localized<T = string> = { he: T; en: T };

const localizedList = z.object({
  he: z.array(z.string().min(1)).min(1),
  en: z.array(z.string().min(1)).min(1),
});

/** Names of icons available in `components/ui/Icon`. Kept as a closed set so content can't reference a missing icon. */
export const iconNames = [
  'app-window',
  'cloud-cog',
  'server',
  'shield-check',
  'layout',
  'briefcase',
  'wrench',
  'zap',
  'activity',
  'database',
  'archive',
  'user',
  'search',
  'pen',
  'code',
  'rocket',
  'life-buoy',
  'workflow',
  'lock',
] as const;
export const iconNameSchema = z.enum(iconNames);
export type IconName = z.infer<typeof iconNameSchema>;

export const siteConfigSchema = z.object({
  name: z.string(),
  tagline: localizedSchema,
  phone: z.object({ display: z.string(), href: z.string().startsWith('tel:') }),
  whatsapp: z.string().regex(/^\d+$/, 'digits only, international format'),
  email: z.email(),
  siteUrl: z.url(),
  /** Where the studio works (structured data `areaServed`). Cities first, then the country. */
  serviceArea: z.object({
    cities: z.array(localizedSchema).default([]),
    country: localizedSchema,
  }),
  /** Official profiles (LinkedIn, Facebook, Google Business Profile…) for structured data `sameAs`. */
  sameAs: z.array(z.url()).default([]),
});
export type SiteConfig = z.infer<typeof siteConfigSchema>;

const serviceSectionSchema = z.object({ heading: localizedSchema, body: localizedSchema });
const serviceFaqSchema = z.object({ question: localizedSchema, answer: localizedSchema });

export const serviceSchema = z.object({
  id: z.string(),
  slug: z.string().regex(/^[a-z0-9-]+$/, 'lowercase URL segment'),
  /** Search-facing title and description for the service's own page. */
  seo: z.object({ title: localizedSchema, description: localizedSchema }),
  title: localizedSchema,
  shortDescription: localizedSchema,
  description: localizedSchema,
  features: localizedList,
  icon: iconNameSchema,
  idealFor: localizedSchema,
  whatsappMessage: localizedSchema,
  /** Long-form sections for the service page. */
  sections: z.array(serviceSectionSchema).min(1),
  /** Questions specific to this service (also emitted as FAQPage structured data). */
  faqs: z.array(serviceFaqSchema).default([]),
});
export type Service = z.infer<typeof serviceSchema>;

export const capabilitySchema = z.object({
  id: z.string(),
  title: localizedSchema,
  description: localizedSchema,
  icon: iconNameSchema,
});
export type Capability = z.infer<typeof capabilitySchema>;

export const processStepSchema = z.object({
  id: z.string(),
  title: localizedSchema,
  description: localizedSchema,
  icon: iconNameSchema,
});
export type ProcessStep = z.infer<typeof processStepSchema>;

export const faqSchema = z.object({
  id: z.string(),
  question: localizedSchema,
  answer: localizedSchema,
});
export type Faq = z.infer<typeof faqSchema>;

export const differentiatorSchema = z.object({
  id: z.string(),
  title: localizedSchema,
  description: localizedSchema,
  icon: iconNameSchema,
});
export type Differentiator = z.infer<typeof differentiatorSchema>;

export const projectSchema = z.object({
  id: z.string(),
  title: z.string(),
  client: localizedSchema,
  category: localizedSchema,
  description: localizedSchema,
  techStack: z.array(z.string()).min(1),
  image: z.object({ src: z.string().startsWith('/'), alt: localizedSchema }),
  liveUrl: z.url().optional(),
  status: z.enum(['live', 'demo']),
});
export type Project = z.infer<typeof projectSchema>;

export const statementSectionSchema = z.object({
  id: z.string(),
  heading: localizedSchema,
  paragraphs: z.array(localizedSchema).default([]),
  items: localizedList.optional(),
});
export type StatementSection = z.infer<typeof statementSectionSchema>;

export const accessibilityStatementSchema = z.object({
  /** ISO date (YYYY-MM-DD) the statement was last reviewed. */
  updated: z.iso.date(),
  intro: localizedSchema,
  sections: z.array(statementSectionSchema).min(1),
  contactIntro: localizedSchema,
});
export type AccessibilityStatement = z.infer<typeof accessibilityStatementSchema>;

export const founderSchema = z.object({
  name: localizedSchema,
  role: localizedSchema,
  photo: z.object({
    src: z.string().startsWith('/'),
    width: z.number().int().positive(),
    height: z.number().int().positive(),
    alt: localizedSchema,
  }),
  bio: z.array(localizedSchema).min(1),
  /** Short facts shown as a monospace spec list: a value and what it means. */
  facts: z.array(z.object({ value: localizedSchema, label: localizedSchema })),
});
export type Founder = z.infer<typeof founderSchema>;
