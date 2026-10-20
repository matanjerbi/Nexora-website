import { z } from 'zod';
import { processStepSchema } from '@/domain';

export const processSteps = z.array(processStepSchema).parse([
  {
    id: 'discovery',
    icon: 'search',
    title: { he: 'היכרות ואפיון', en: 'Discovery' },
    description: {
      he: 'שיחה קצרה כדי להבין את העסק, הלקוחות והמטרה. בסופה תקבלו הצעה ולוח זמנים ברורים.',
      en: 'A short conversation to understand your business, customers and goals. You get a clear proposal and timeline.',
    },
  },
  {
    id: 'design',
    icon: 'pen',
    title: { he: 'עיצוב', en: 'Design' },
    description: {
      he: 'עיצוב שנבנה סביב המותג שלכם. מאשרים יחד את המראה לפני שכותבים שורת קוד.',
      en: 'A design built around your brand. We sign off on the look together before writing a line of code.',
    },
  },
  {
    id: 'build',
    icon: 'code',
    title: { he: 'פיתוח', en: 'Build' },
    description: {
      he: 'פיתוח מהיר, נגיש ומותאם למובייל, עם עדכונים שוטפים לאורך הדרך.',
      en: 'Fast, accessible, mobile-first development, with regular updates along the way.',
    },
  },
  {
    id: 'launch',
    icon: 'rocket',
    title: { he: 'עלייה לאוויר', en: 'Launch' },
    description: {
      he: 'בדיקות אחרונות, חיבור דומיין, SSL ומדידה. האתר באוויר ומוכן לקבל לקוחות.',
      en: 'Final checks, domain, SSL and analytics. Your site is live and ready for customers.',
    },
  },
  {
    id: 'support',
    icon: 'life-buoy',
    title: { he: 'ליווי שוטף', en: 'Ongoing support' },
    description: {
      he: 'ניטור, גיבויים ועדכונים. אנחנו כאן גם אחרי ההשקה.',
      en: "Monitoring, backups and updates. We're still here after launch.",
    },
  },
]);
