import { z } from 'zod';
import { serviceSchema } from '@/domain';

/** The studio's products. Add a service by appending one entry. */
export const services = z.array(serviceSchema).parse([
  {
    id: 'landing-page',
    slug: 'landing-pages',
    seo: {
      title: {
        he: 'בניית דף נחיתה לעסקים',
        en: 'Landing Page Design & Development',
      },
      description: {
        he: 'בניית דף נחיתה מהיר וממיר לעסקים קטנים: עיצוב מותאם למותג, מובייל מלא, וואטסאפ וחיוג ישיר, SEO ומדידה. עולה לאוויר תוך שבוע עד שבועיים.',
        en: 'Fast, high-converting landing pages for small businesses: brand-fit design, mobile-first, WhatsApp and click-to-call, SEO and analytics. Live in one to two weeks.',
      },
    },
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
    sections: [
      {
        heading: {
          he: 'מה זה דף נחיתה ולמה הוא עובד',
          en: 'What a landing page is, and why it works',
        },
        body: {
          he: 'דף נחיתה הוא עמוד אחד שנבנה סביב פעולה אחת: שליחת הודעה, השארת פרטים או שיחת טלפון. אין בו תפריטים שמסיחים את הדעת ואין בו עשרה נושאים שמתחרים על תשומת הלב. הגולש מגיע ממודעה, מחיפוש או מקישור, מבין תוך שניות מה אתם מציעים ולמה כדאי לפנות דווקא אליכם, ופונה.',
          en: 'A landing page is a single page built around one action: sending a message, leaving details or calling. No distracting menus, no ten topics competing for attention. Visitors arrive from an ad, a search or a link, understand in seconds what you offer and why you, and get in touch.',
        },
      },
      {
        heading: {
          he: 'איך אנחנו בונים דף שמביא פניות',
          en: 'How we build a page that brings in leads',
        },
        body: {
          he: 'מתחילים מהשאלה מי הלקוח שלכם ומה הוא צריך לשמוע כדי לפנות. משם נבנים המסר, סדר החלקים והכותרות. הדף נבנה בקוד מודרני ולא בתבנית כבדה, ולכן הוא נטען מהר גם ברשת סלולרית. מהירות טעינה משפיעה ישירות על כמה גולשים נשארים בדף ועל עלות הקליק בקמפיינים ממומנים.',
          en: 'We start with who your customer is and what they need to hear before reaching out. That drives the message, section order and headlines. The page is hand-built in modern code rather than a heavy template, so it loads fast even on mobile data. Load speed directly affects how many visitors stay and what you pay per click in paid campaigns.',
        },
      },
      {
        heading: {
          he: 'מדידה ושיפור אחרי ההשקה',
          en: 'Measuring and improving after launch',
        },
        body: {
          he: 'כל דף עולה עם מדידה בסיסית: כמה נכנסו, מאיפה הגיעו וכמה לחצו על וואטסאפ או חיוג. כך אפשר לדעת מה עובד, לשפר כותרת או סדר, ולראות אם הקמפיין באמת מחזיר את עצמו.',
          en: 'Every page launches with basic analytics: how many visited, where they came from and how many tapped WhatsApp or call. That shows what works, lets you refine a headline or layout, and tells you whether a campaign is paying for itself.',
        },
      },
    ],
    faqs: [
      {
        question: {
          he: 'מה ההבדל בין דף נחיתה לאתר תדמית?',
          en: "What's the difference between a landing page and a business website?",
        },
        answer: {
          he: 'דף נחיתה הוא עמוד אחד עם מטרה אחת, מתאים לקמפיין או לשירות ספציפי. אתר תדמית כולל כמה עמודים ומציג את העסק כולו. הרבה עסקים מתחילים בדף נחיתה ומרחיבים לאתר מלא בהמשך.',
          en: 'A landing page is one page with one goal, ideal for a campaign or a specific service. A business website has several pages and presents the whole business. Many businesses start with a landing page and grow into a full site later.',
        },
      },
      {
        question: {
          he: 'אפשר להשתמש בדף נחיתה לקמפיין בגוגל או בפייסבוק?',
          en: 'Can I use the landing page for Google or Facebook ads?',
        },
        answer: {
          he: 'כן, זה אחד השימושים הנפוצים. הדף נבנה מהיר ומוכן למדידת המרות, כך שאפשר לחבר אותו לקמפיין ולראות כמה פניות כל מודעה מביאה.',
          en: "Yes, that's one of the most common uses. The page is built fast and ready for conversion tracking, so you can connect it to a campaign and see how many leads each ad brings in.",
        },
      },
    ],
  },
  {
    id: 'business-website',
    slug: 'business-website',
    seo: {
      title: {
        he: 'בניית אתר תדמית לעסק',
        en: 'Business Website Design & Development',
      },
      description: {
        he: 'בניית אתר תדמית לעסקים קטנים ונותני שירות: עיצוב ייחודי, מהירות, SEO טכני, נגישות לפי ת"י 5568, עברית ואנגלית, אחסון מנוהל ותמיכה שוטפת.',
        en: 'Business websites for small businesses and service providers: distinctive design, speed, technical SEO, Israeli-standard accessibility, Hebrew and English, managed hosting and ongoing support.',
      },
    },
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
    sections: [
      {
        heading: {
          he: 'אתר שבונה אמון לפני השיחה הראשונה',
          en: 'A site that builds trust before the first call',
        },
        body: {
          he: 'לפני שלקוח מרים טלפון, הוא בודק אתכם בגוגל. אתר תדמית טוב עונה לו על השאלות החשובות: מי אתם, מה אתם עושים, איך זה נראה ולמה לבחור בכם. כשהתשובות ברורות והאתר מרגיש מקצועי, הפנייה מגיעה כבר עם אמון.',
          en: 'Before a customer picks up the phone, they look you up on Google. A good business website answers the questions that matter: who you are, what you do, what it looks like and why choose you. When the answers are clear and the site feels professional, the inquiry arrives with trust already built.',
        },
      },
      {
        heading: {
          he: 'בנוי כדי להימצא בגוגל',
          en: 'Built to be found on Google',
        },
        body: {
          he: 'כל אתר נבנה עם בסיס טכני לקידום אורגני: מבנה כותרות נכון, עמוד ייעודי לכל שירות, כתובות קריאות, מפת אתר, נתונים מובנים שגוגל מבין, ומהירות טעינה גבוהה במובייל. זה לא מחליף תוכן טוב, אבל בלי הבסיס הזה גם התוכן הטוב ביותר מתקשה לדרג.',
          en: "Every site ships with a technical SEO foundation: correct heading structure, a dedicated page per service, readable URLs, a sitemap, structured data Google understands, and fast mobile load times. It doesn't replace good content, but without it even great content struggles to rank.",
        },
      },
      {
        heading: {
          he: 'נגיש, מאובטח ושלכם',
          en: 'Accessible, secure and yours',
        },
        body: {
          he: 'האתר נבנה לפי התקן הישראלי לנגישות ת"י 5568 וכולל הצהרת נגישות. הוא מאוחסן על תשתית מנוהלת עם SSL וגיבויים, והדומיין רשום על שמכם. אם תרצו בעתיד לעבור לספק אחר, האתר והתוכן נשארים שלכם.',
          en: 'The site is built to Israeli accessibility standard 5568 and includes an accessibility statement. It runs on managed infrastructure with SSL and backups, and the domain is registered in your name. If you ever want to move to another provider, the site and content stay yours.',
        },
      },
    ],
    faqs: [
      {
        question: {
          he: 'כמה עמודים יש באתר תדמית?',
          en: 'How many pages does a business website have?',
        },
        answer: {
          he: 'זה תלוי בעסק. אתר טיפוסי כולל עמוד בית, עמוד לכל שירות, עבודות או לקוחות, שאלות נפוצות, יצירת קשר והצהרת נגישות. נבנה יחד את המבנה שמתאים לכם.',
          en: "It depends on the business. A typical site has a home page, a page per service, work or clients, FAQs, contact and an accessibility statement. We'll plan the structure that fits you together.",
        },
      },
      {
        question: {
          he: 'האתר יופיע בגוגל?',
          en: 'Will the site show up on Google?',
        },
        answer: {
          he: 'האתר נבנה עם כל הבסיס הטכני לקידום אורגני ונרשם ב-Google Search Console. דירוג בתוצאות תלוי גם בתוכן, בתחרות ובזמן, ולכן אנחנו לא מבטיחים מקום ראשון, אבל דואגים שהאתר יהיה בנוי נכון מהיום הראשון.',
          en: "The site is built with the full technical SEO foundation and registered in Google Search Console. Rankings also depend on content, competition and time, so we don't promise the top spot, but we make sure the site is built right from day one.",
        },
      },
    ],
  },
  {
    id: 'maintenance',
    slug: 'maintenance-support',
    seo: {
      title: {
        he: 'תחזוקת אתרים ותמיכה טכנית',
        en: 'Website Maintenance & Tech Support',
      },
      description: {
        he: 'תחזוקת אתרים ותמיכה טכנית לעסקים: ניטור זמינות 24/7, גיבויים, עדכוני אבטחה, עדכוני תוכן ובדיקות מהירות, עם מענה מהיר בוואטסאפ. לאתר חדש או קיים.',
        en: 'Website maintenance and tech support for businesses: 24/7 uptime monitoring, backups, security updates, content changes and speed checks, with quick answers on WhatsApp. For new or existing sites.',
      },
    },
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
    sections: [
      {
        heading: {
          he: 'אתר הוא לא פרויקט חד-פעמי',
          en: "A website isn't a one-off project",
        },
        body: {
          he: 'אחרי ההשקה האתר ממשיך לחיות: יוצאים עדכוני אבטחה, תעודות מתחדשות, תוכן משתנה ושרתים נופלים מדי פעם. רוב בעלי העסקים מגלים בעיה רק כשלקוח מתקשר ואומר שהאתר לא עובד. תחזוקה שוטפת נועדה לתפוס את הבעיות האלה לפני שהלקוחות רואים אותן.',
          en: 'After launch, a site keeps living: security patches ship, certificates renew, content changes and servers occasionally fail. Most owners only find out when a customer calls to say the site is down. Ongoing maintenance exists to catch those problems before customers see them.',
        },
      },
      {
        heading: {
          he: 'מה אנחנו עושים בפועל',
          en: 'What we actually do',
        },
        body: {
          he: 'האתר מנוטר מסביב לשעון, ואם הוא לא זמין אנחנו מקבלים התראה ומטפלים. הגיבויים רצים אוטומטית ונבדקים, עדכוני אבטחה מותקנים באופן שוטף, ובקשות לשינוי תוכן מטופלות בהודעת וואטסאפ אחת. הניסיון שלנו מגיע מניהול תשתיות פרודקשן, וזו אותה גישה בקנה מידה של עסק קטן.',
          en: 'The site is monitored around the clock; if it goes down we get alerted and fix it. Backups run automatically and get verified, security updates are applied regularly, and content changes take a single WhatsApp message. Our background is running production infrastructure, and this is the same approach at small-business scale.',
        },
      },
      {
        heading: {
          he: 'גם לאתר שלא אנחנו בנינו',
          en: "Even for a site we didn't build",
        },
        body: {
          he: 'אפשר להצטרף עם אתר קיים. נתחיל בבדיקה של המצב הנוכחי: מהירות, אבטחה, גיבויים ונגישות, ונגיד לכם בפשטות מה תקין, מה דורש תיקון ומה כדאי לשפר.',
          en: "You can join with an existing site. We start with a check of where it stands: speed, security, backups and accessibility, and tell you plainly what's fine, what needs fixing and what's worth improving.",
        },
      },
    ],
    faqs: [
      {
        question: {
          he: 'אתם מתחזקים גם אתרי וורדפרס או וויקס?',
          en: 'Do you maintain WordPress or Wix sites too?',
        },
        answer: {
          he: 'כן, ברוב המקרים. נבדוק את האתר שלכם ונגיד בכנות אם אנחנו הכתובת הנכונה עבורו, ומה אפשר לעשות במסגרת הפלטפורמה.',
          en: "Yes, in most cases. We'll look at your site and tell you honestly whether we're the right fit, and what can be done within the platform.",
        },
      },
      {
        question: {
          he: 'מה קורה אם האתר נופל באמצע הלילה?',
          en: 'What happens if the site goes down at night?',
        },
        answer: {
          he: 'מערכת הניטור שולחת התראה מיידית. ברוב המקרים הבעיה מטופלת לפני שמישהו בעסק בכלל שם לב, ותקבלו עדכון קצר על מה קרה ומה תוקן.',
          en: 'The monitoring system alerts us immediately. In most cases the issue is handled before anyone at the business notices, and you get a short note on what happened and what was fixed.',
        },
      },
    ],
  },
]);
