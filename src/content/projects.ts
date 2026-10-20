import { z } from 'zod';
import { projectSchema } from '@/domain';

/** Portfolio. Add a project by appending one entry (and its image under `public/projects/`). */
export const projects = z.array(projectSchema).parse([
  {
    id: 'noble-jewelry',
    title: 'NOBLE Jewelry',
    client: { he: 'NOBLE Jewelry', en: 'NOBLE Jewelry' },
    category: { he: 'אתר תדמית · תכשיטים', en: 'Business website · Jewelry' },
    description: {
      he: 'אתר יוקרתי למותג תכשיטים: גלריית קולקציות, גלילה עדינה ודגש על צילומי מוצר.',
      en: 'A luxury site for a jewelry brand: collection galleries, smooth scrolling and a focus on product photography.',
    },
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    image: {
      src: '/projects/noble-jewelry.svg',
      alt: { he: 'תצוגה מקדימה של אתר NOBLE Jewelry', en: 'Preview of the NOBLE Jewelry website' },
    },
    status: 'demo',
  },
]);
