import { z } from 'zod';
import { faqSchema } from '@/domain';

export const faqs = z.array(faqSchema).parse([
  {
    id: 'timeline',
    question: { he: 'כמה זמן לוקח לבנות אתר?', en: 'How long does it take to build a site?' },
    answer: {
      he: 'בין שבוע לשלושה שבועות, לפי המורכבות של האתר. דף נחיתה בדרך כלל בצד הקצר, אתר תדמית מלא בצד הארוך. כבר בשיחה הראשונה תקבלו לוח זמנים מדויק, ואנחנו עומדים בו.',
      en: 'Between one and three weeks, depending on how complex the site is. A landing page is usually at the shorter end, a full business website at the longer end. You get an exact timeline in our first conversation, and we stick to it.',
    },
  },
  {
    id: 'response-time',
    question: { he: 'כמה מהר עונים?', en: 'How fast do you reply?' },
    answer: {
      he: 'מהר. כל הודעה בוואטסאפ מקבלת מענה תוך שעתיים לכל היותר, כך שלא תצטרכו לרדוף אחרינו.',
      en: 'Fast. Every WhatsApp message gets a reply within two hours at most, so you never have to chase us.',
    },
  },
  {
    id: 'what-we-need',
    question: { he: 'מה אני צריך להכין?', en: 'What do I need to prepare?' },
    answer: {
      he: 'לוגו אם יש, תמונות של העסק ומידע בסיסי על השירותים שלכם. אין לכם טקסטים? לא נורא, נעזור לנסח אותם.',
      en: "Your logo if you have one, photos of your business and basic information about your services. No copy yet? No problem, we'll help you write it.",
    },
  },
  {
    id: 'hosting',
    question: { he: 'מי דואג לאחסון ולדומיין?', en: 'Who takes care of hosting and the domain?' },
    answer: {
      he: 'אנחנו. נעזור לרכוש דומיין או נחבר את הקיים, ונארח את האתר על תשתית מהירה ומאובטחת עם SSL. הדומיין רשום על שמכם ונשאר שלכם.',
      en: "We do. We'll help you register a domain or connect your existing one, and host the site on fast, secure infrastructure with SSL. The domain is registered in your name and stays yours.",
    },
  },
  {
    id: 'after-launch',
    question: { he: 'מה קורה אחרי שהאתר עולה?', en: 'What happens after launch?' },
    answer: {
      he: 'אפשר להמשיך איתנו בחבילת תחזוקה: ניטור, גיבויים, עדכוני אבטחה ועדכוני תוכן. אפשר גם לקבל את האתר ולנהל אותו לבד. הבחירה שלכם.',
      en: "You can stay with us on a maintenance plan: monitoring, backups, security updates and content changes. Or take the site and run it yourself. It's your call.",
    },
  },
  {
    id: 'content-updates',
    question: { he: 'אפשר לעדכן תוכן בעצמי?', en: 'Can I update content myself?' },
    answer: {
      he: 'כן. אם זה חשוב לכם, נבנה ממשק פשוט לעדכון. ואם אתם מעדיפים לא להתעסק, שולחים הודעה בוואטסאפ ואנחנו מעדכנים.',
      en: "Yes. If it matters to you, we'll set up a simple way to edit. If you'd rather not deal with it, send us a WhatsApp message and we'll make the change.",
    },
  },
  {
    id: 'mobile',
    question: { he: 'האתר יעבוד טוב בטלפון?', en: 'Will the site work well on phones?' },
    answer: {
      he: 'בהחלט. רוב הגולשים מגיעים מהנייד, ולכן כל אתר נבנה קודם כול למובייל ונבדק על מגוון מכשירים ודפדפנים.',
      en: 'Absolutely. Most visitors arrive on their phones, so every site is built mobile-first and tested across devices and browsers.',
    },
  },
  {
    id: 'pricing',
    question: { he: 'כמה זה עולה?', en: 'How much does it cost?' },
    answer: {
      he: 'כל פרויקט שונה, ולכן אין מחירון קבוע. ספרו לנו בוואטסאפ מה אתם צריכים ותקבלו הצעת מחיר מסודרת, בלי התחייבות.',
      en: "Every project is different, so there's no fixed price list. Tell us on WhatsApp what you need and you'll get a clear quote, no strings attached.",
    },
  },
  {
    id: 'accessibility',
    question: { he: 'האתר יהיה נגיש?', en: 'Will the site be accessible?' },
    answer: {
      he: 'כן. אנחנו בונים לפי התקן הישראלי ת"י 5568 והנחיות WCAG 2.1 ברמה AA, כולל הצהרת נגישות.',
      en: 'Yes. We build to Israeli Standard 5568 and WCAG 2.1 level AA, including an accessibility statement.',
    },
  },
]);
