import { z } from 'zod';
import { serviceSchema } from '@/domain';

/** The studio's products. Add a service by appending one entry. */
export const services = z.array(serviceSchema).parse([
  {
    id: 'landing-page',
    slug: 'landing-pages',
    icon: 'layout',
    title: { he: 'דף נחיתה', en: 'Landing Page' },
    shortDescription: {
      he: 'עמוד אחד, מטרה אחת: להפוך גולשים לפניות.',
      en: 'One page, one goal: turning visitors into leads.',
    },
    description: {
      he: 'דף ממוקד לקמפיין, למוצר או לשירות חדש. כתוב, מעוצב ובנוי כך שהגולש מבין תוך שניות מה אתם מציעים, ושולח לכם הודעה.',
      en: 'A focused page for a campaign, a product or a new service. Written, designed and built so visitors get what you offer in seconds, and message you.',
    },
    features: {
      he: [
        'עיצוב מותאם למותג שלכם',
        'מותאם במלואו למובייל',
        'טעינה מהירה במיוחד',
        'כפתורי וואטסאפ וחיוג ישיר',
        'הגדרות SEO ומדידה בסיסיות',
        'דומיין, אחסון ותעודת SSL',
      ],
      en: [
        'Custom design that fits your brand',
        'Fully mobile-optimized',
        'Exceptionally fast loading',
        'WhatsApp and click-to-call buttons',
        'SEO and analytics essentials',
        'Domain, hosting and SSL',
      ],
    },
    idealFor: {
      he: 'עסקים שמריצים קמפיין ממומן, משיקים שירות חדש או צריכים נוכחות דיגיטלית מהר.',
      en: 'Businesses running paid campaigns, launching a new service, or needing a fast online presence.',
    },
    whatsappMessage: {
      he: 'היי, אשמח לשמוע על בניית דף נחיתה לעסק שלי.',
      en: "Hi, I'd like to hear about a landing page for my business.",
    },
  },
  {
    id: 'business-website',
    slug: 'business-website',
    icon: 'briefcase',
    title: { he: 'אתר תדמית', en: 'Business Website' },
    shortDescription: {
      he: 'האתר שמציג את העסק שלכם במיטבו, ועובד בשבילכם מסביב לשעון.',
      en: 'A website that shows your business at its best, and works for you around the clock.',
    },
    description: {
      he: 'אתר מלא עם כמה עמודים: מי אתם, מה אתם עושים, עבודות, שאלות נפוצות ודרכי יצירת קשר. בנוי על טכנולוגיה מודרנית, מהיר, מאובטח ונוח לגלישה.',
      en: 'A complete multi-page site: who you are, what you do, your work, FAQs and how to reach you. Built on modern technology: fast, secure and easy to navigate.',
    },
    features: {
      he: [
        'עיצוב ייחודי שנבנה סביב המותג',
        'מבנה עמודים ותוכן שמוביל לפנייה',
        'עברית ואנגלית, לפי הצורך',
        'SEO טכני: מהירות, מבנה ונתונים מובנים',
        'נגישות לפי התקן הישראלי',
        'אחסון מנוהל, גיבויים ו-SSL',
      ],
      en: [
        'Distinctive design built around your brand',
        'Page structure and copy that drive inquiries',
        'Hebrew and English, as needed',
        'Technical SEO: speed, structure, structured data',
        'Accessibility to the Israeli standard',
        'Managed hosting, backups and SSL',
      ],
    },
    idealFor: {
      he: 'עסקים קטנים, נותני שירות ובעלי מקצוע שרוצים אתר רציני שבונה אמון.',
      en: 'Small businesses, service providers and professionals who want a serious site that builds trust.',
    },
    whatsappMessage: {
      he: 'היי, אשמח לקבל הצעה לאתר תדמית לעסק שלי.',
      en: "Hi, I'd like a quote for a business website.",
    },
  },
  {
    id: 'maintenance',
    slug: 'maintenance-support',
    icon: 'wrench',
    title: { he: 'תחזוקה ותמיכה', en: 'Maintenance & Support' },
    shortDescription: {
      he: 'אתם מנהלים את העסק. אנחנו דואגים שהאתר יעבוד.',
      en: 'You run the business. We keep the website running.',
    },
    description: {
      he: 'ליווי שוטף לאתר חדש או קיים: עדכוני תוכן, עדכוני אבטחה, ניטור זמינות וגיבויים, עם כתובת אחת לכל שאלה טכנית.',
      en: 'Ongoing care for a new or existing site: content updates, security patches, uptime monitoring and backups, with one point of contact for every technical question.',
    },
    features: {
      he: [
        'ניטור זמינות 24/7 עם התראות',
        'גיבויים אוטומטיים ושחזור מהיר',
        'עדכוני אבטחה ותוכנה',
        'עדכוני תוכן ותמונות לפי בקשה',
        'בדיקות מהירות וביצועים',
        'מענה בוואטסאפ תוך שעתיים',
      ],
      en: [
        '24/7 uptime monitoring with alerts',
        'Automatic backups and fast restores',
        'Security and software updates',
        'Content and image updates on request',
        'Speed and performance checks',
        'WhatsApp replies within 2 hours',
      ],
    },
    idealFor: {
      he: 'בעלי אתרים שלא רוצים להתעסק בטכני, ורוצים לדעת שמישהו שומר על האתר.',
      en: "Site owners who don't want to deal with the technical side, and want to know someone has it covered.",
    },
    whatsappMessage: {
      he: 'היי, אשמח לשמוע על תחזוקה ותמיכה לאתר שלי.',
      en: "Hi, I'd like to hear about maintenance and support for my website.",
    },
  },
]);
