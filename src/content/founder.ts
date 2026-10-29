import { founderSchema } from '@/domain';

/** The person behind Nexora. */
export const founder = founderSchema.parse({
  name: { he: 'מתן ג׳רבי', en: 'Matan Jerbi' },
  role: { he: 'בעלים ומפתח', en: 'Owner & developer' },
  photo: {
    src: '/brand/matan-jerbi.jpg',
    width: 880,
    height: 1100,
    alt: {
      he: 'מתן ג׳רבי יושב על ספסל עץ מעל עמק הררי, מחייך',
      en: 'Matan Jerbi sitting on a wooden bench above a mountain valley, smiling',
    },
  },
  bio: [
    {
      he: 'אני מתן ג׳רבי, בן 28, הבעלים של Nexora. אני מתכנת עם שלוש שנות ניסיון בפיתוח אתרים ובתשתיות, אחרי שירות ביחידה טכנולוגית בצבא.',
      en: "I'm Matan Jerbi, 28, the owner of Nexora. I'm a developer with three years of experience in web development and infrastructure, after serving in a technology unit in the IDF.",
    },
    {
      he: 'היום אני בונה אתרים לעסקים קטנים, ומביא איתי את מה שלמדתי בעולם התשתיות: אתר צריך להיות מהיר, מאובטח ומנוטר, לא רק יפה.',
      en: 'Today I build websites for small businesses, and I bring what I learned in infrastructure with me: a website has to be fast, secure and monitored, not just good-looking.',
    },
    {
      he: 'במקביל אני סטודנט לפסיכולוגיה. זה עוזר לי להבין מה גורם לגולש להרגיש בנוח, לסמוך עליכם ולשלוח הודעה. ואת הפרויקט שלכם אני מלווה אישית, מההודעה הראשונה ועד אחרי ההשקה.',
      en: "I'm also a psychology student. It helps me understand what makes a visitor feel at ease, trust you and send that message. And I see your project through personally, from the first message to well after launch.",
    },
  ],
  facts: [
    {
      value: { he: '3', en: '3' },
      label: { he: 'שנות ניסיון בפיתוח ותשתיות', en: 'years in web development & infrastructure' },
    },
    {
      value: { he: 'IDF', en: 'IDF' },
      label: { he: 'שירות ביחידה טכנולוגית', en: 'served in a technology unit' },
    },
    {
      value: { he: 'Ψ', en: 'Ψ' },
      label: { he: 'סטודנט לפסיכולוגיה', en: 'psychology student' },
    },
    {
      value: { he: '2h', en: '2h' },
      label: { he: 'זמן מענה מקסימלי בוואטסאפ', en: 'max reply time on WhatsApp' },
    },
  ],
});
