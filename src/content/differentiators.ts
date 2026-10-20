import { z } from 'zod';
import { differentiatorSchema } from '@/domain';

/** The founder's engineering background: what makes Nexora different. */
export const differentiators = z.array(differentiatorSchema).parse([
  {
    id: 'infrastructure',
    icon: 'server',
    title: { he: 'תשתיות בקנה מידה גדול', en: 'Production infrastructure at scale' },
    description: {
      he: 'רקע בהנדסת תשתיות פרודקשן במערכות גדולות, שבהן כל דקת השבתה עולה כסף. אותם סטנדרטים, לאתר שלכם.',
      en: 'A background in production infrastructure engineering for large systems, where every minute of downtime costs money. The same standards, for your site.',
    },
  },
  {
    id: 'data-automation',
    icon: 'database',
    title: { he: 'מסדי נתונים ואוטומציה', en: 'Databases & automation' },
    description: {
      he: 'ניסיון עבודה עם Redis ו-PostgreSQL ובאוטומציה של תהליכים. פחות עבודה ידנית, פחות טעויות.',
      en: 'Hands-on experience with Redis, PostgreSQL and process automation. Less manual work, fewer mistakes.',
    },
  },
  {
    id: 'self-service',
    icon: 'workflow',
    title: { he: 'פלטפורמות בשירות עצמי', en: 'Self-service platforms' },
    description: {
      he: 'ניסיון בבניית פלטפורמות שמאפשרות לאנשים להתקדם לבד, בלי לחכות למפתח. ככה נבנה גם האתר שלכם: פשוט לתפעול.',
      en: 'Experience building platforms that let people get things done without waiting on a developer. Your site is built the same way: simple to run.',
    },
  },
  {
    id: 'security',
    icon: 'lock',
    title: { he: 'חשיבה של אבטחה', en: 'Security-minded' },
    description: {
      he: 'אבטחה היא לא תוסף שמוסיפים בסוף, אלא חלק מהתכנון: הרשאות, עדכונים, הצפנה וגיבויים.',
      en: "Security isn't an afterthought. It's part of the plan: permissions, updates, encryption and backups.",
    },
  },
]);

/** What small businesses actually get out of it. */
export const benefits = z.array(differentiatorSchema).parse([
  {
    id: 'speed',
    icon: 'zap',
    title: { he: 'מהירות', en: 'Speed' },
    description: {
      he: 'אתר שנטען מהר מחזיק גולשים ומדורג טוב יותר בגוגל.',
      en: 'A fast site keeps visitors and ranks better on Google.',
    },
  },
  {
    id: 'uptime',
    icon: 'activity',
    title: { he: 'זמינות', en: 'Uptime' },
    description: {
      he: 'ניטור מסביב לשעון. אם משהו קורה, אנחנו יודעים לפניכם.',
      en: 'Round-the-clock monitoring. If something breaks, we know before you do.',
    },
  },
  {
    id: 'security',
    icon: 'shield-check',
    title: { he: 'אבטחה', en: 'Security' },
    description: {
      he: 'SSL, עדכונים שוטפים והגנה מפני התקפות נפוצות.',
      en: 'SSL, regular updates and protection against common attacks.',
    },
  },
  {
    id: 'backups',
    icon: 'archive',
    title: { he: 'גיבויים', en: 'Backups' },
    description: {
      he: 'גיבוי אוטומטי, כך שתמיד אפשר לחזור לגרסה תקינה.',
      en: 'Automatic backups, so there is always a working version to restore.',
    },
  },
  {
    id: 'one-contact',
    icon: 'user',
    title: { he: 'כתובת אחת', en: 'One point of contact' },
    description: {
      he: 'אתר, דומיין, אחסון ותמיכה: הכול אצל מי שבנה את האתר.',
      en: 'Site, domain, hosting and support, all with the person who built it.',
    },
  },
]);
