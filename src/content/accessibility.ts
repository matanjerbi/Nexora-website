import { accessibilityStatementSchema } from '@/domain';

/** Accessibility statement (IS 5568 / WCAG 2.1 AA). Update `updated` whenever it's reviewed. */
export const accessibilityStatement = accessibilityStatementSchema.parse({
  updated: '2026-10-20',
  intro: {
    he: 'ב-Nexora אנחנו מאמינים שאתר צריך לשרת כל אחד, כולל אנשים עם מוגבלות. השקענו מחשבה ועבודה כדי שהאתר יהיה נגיש, נוח וקל לשימוש.',
    en: 'At Nexora we believe a website should work for everyone, including people with disabilities. We put real thought and effort into making this site accessible, comfortable and easy to use.',
  },
  sections: [
    {
      id: 'level',
      heading: { he: 'רמת הנגישות באתר', en: 'Accessibility level' },
      paragraphs: [
        {
          he: 'האתר הותאם לדרישות תקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות), התשע״ג-2013, ונבנה לפי התקן הישראלי ת״י 5568, המבוסס על הנחיות WCAG 2.1 ברמה AA.',
          en: 'This site was built to meet the Israeli Equal Rights for Persons with Disabilities (Service Accessibility Adjustments) Regulations, 2013, following Israeli Standard 5568, which is based on WCAG 2.1 level AA.',
        },
      ],
    },
    {
      id: 'measures',
      heading: { he: 'מה עשינו באתר', en: "What we've done" },
      items: {
        he: [
          'מבנה סמנטי עם כותרות, אזורי ניווט ותיוג ברור',
          'ניווט מלא באמצעות המקלדת, כולל קישור לדילוג לתוכן הראשי',
          'סימון פוקוס בולט לכל רכיב אינטראקטיבי',
          'ניגודיות צבעים ברמת AA לפחות',
          'טקסט חלופי לתמונות ותוויות לכפתורים שמכילים אייקון בלבד',
          'אפשרות להגדיל טקסט עד 200% בלי לאבד תוכן',
          'כיבוד ההגדרה "הפחתת תנועה" של מערכת ההפעלה',
          'הגדרת שפה וכיוון קריאה נכונים בכל עמוד, בעברית ובאנגלית',
          'התאמה מלאה לטלפונים, טאבלטים ומחשבים',
        ],
        en: [
          'Semantic structure with headings, navigation landmarks and clear labels',
          'Full keyboard navigation, including a skip-to-content link',
          'A clearly visible focus indicator on every interactive element',
          'Color contrast at AA level or better',
          'Alternative text for images and labels for icon-only buttons',
          'Text can be enlarged to 200% without losing content',
          'Respects the operating system "reduce motion" setting',
          'Correct language and reading direction on every page, in Hebrew and English',
          'Fully responsive on phones, tablets and desktops',
        ],
      },
    },
    {
      id: 'compatibility',
      heading: { he: 'דפדפנים וטכנולוגיות מסייעות', en: 'Browsers and assistive technology' },
      paragraphs: [
        {
          he: 'האתר מותאם לגרסאות העדכניות של Chrome, Safari, Firefox ו-Edge, ותוכנן לעבודה עם קוראי מסך ועם ניווט מקלדת.',
          en: 'The site supports current versions of Chrome, Safari, Firefox and Edge, and is designed to work with screen readers and keyboard navigation.',
        },
      ],
    },
    {
      id: 'limitations',
      heading: { he: 'מגבלות ידועות', en: 'Known limitations' },
      paragraphs: [
        {
          he: 'למרות המאמצים, ייתכן שחלקים מסוימים אינם נגישים במלואם, למשל שירותים חיצוניים כמו וואטסאפ, שאינם בשליטתנו. אם נתקלתם בבעיה, נשמח לשמוע ולתקן.',
          en: "Despite our efforts, some parts may not be fully accessible, for example external services such as WhatsApp that aren't under our control. If you run into a problem, we want to hear about it and fix it.",
        },
      ],
    },
  ],
  contactIntro: {
    he: 'נתקלתם בבעיית נגישות או שיש לכם הצעה לשיפור? פנו אלינו ונטפל בפנייה בהקדם. כדי שנוכל לעזור, ציינו באיזה עמוד מדובר, מה הבעיה, ובאיזה דפדפן או טכנולוגיה מסייעת השתמשתם.',
    en: "Found an accessibility issue or have a suggestion? Contact us and we'll handle it promptly. To help us help you, tell us which page, what the problem is, and which browser or assistive technology you were using.",
  },
});
