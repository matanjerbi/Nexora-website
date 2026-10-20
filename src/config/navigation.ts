/** In-page sections linked from the header and footer. Each id matches a section's `id`. */
export const mainNav = ['services', 'why', 'process', 'portfolio', 'faq'] as const;
export type NavSection = (typeof mainNav)[number];
