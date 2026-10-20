import { z } from 'zod';
import { capabilitySchema } from '@/domain';

/** The four brand pillars from the logo's bottom row. */
export const capabilities = z.array(capabilitySchema).parse([
  {
    id: 'web-development',
    icon: 'app-window',
    title: { he: 'פיתוח אתרים', en: 'Website Development' },
    description: { he: 'אתרים מהירים, מותאמים ונגישים', en: 'Fast, responsive, accessible sites' },
  },
  {
    id: 'maintenance',
    icon: 'cloud-cog',
    title: { he: 'תחזוקה ותמיכה', en: 'Maintenance & Support' },
    description: { he: 'עדכונים ומענה שוטף', en: 'Updates and ongoing help' },
  },
  {
    id: 'cloud',
    icon: 'server',
    title: { he: 'ענן ותשתיות', en: 'Cloud & Infrastructure' },
    description: { he: 'אחסון מנוהל ויציב', en: 'Managed, reliable hosting' },
  },
  {
    id: 'security',
    icon: 'shield-check',
    title: { he: 'אבטחה וניטור', en: 'Security & Monitoring' },
    description: { he: 'הגנה, גיבויים והתראות', en: 'Protection, backups, alerts' },
  },
]);
