import { projects } from '@/content';

const sections = ['services', 'why', 'about', 'process', 'portfolio', 'faq'] as const;
export type NavSection = (typeof sections)[number];

/**
 * In-page sections linked from the header and footer. Each id matches a section's `id`.
 * The portfolio link only appears once there's at least one project.
 */
export const mainNav: readonly NavSection[] = sections.filter(
  (id) => id !== 'portfolio' || projects.length > 0,
);
