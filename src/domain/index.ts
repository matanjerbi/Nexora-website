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
});
export type SiteConfig = z.infer<typeof siteConfigSchema>;

export const serviceSchema = z.object({
  id: z.string(),
  slug: z.string(),
  title: localizedSchema,
  shortDescription: localizedSchema,
  description: localizedSchema,
  features: localizedList,
  icon: iconNameSchema,
  idealFor: localizedSchema,
  whatsappMessage: localizedSchema,
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
