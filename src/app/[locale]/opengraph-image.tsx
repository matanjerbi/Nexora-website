import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { hasLocale } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { ImageResponse } from 'next/og';
import { brandColors as c } from '@/config/brand';
import { siteConfig } from '@/config/site';
import { routing } from '@/i18n/routing';
import { toVisualRtl } from '@/lib/bidi';
import { nMarkDataUri } from '@/lib/seo';

export const alt = `${siteConfig.name} | ${siteConfig.tagline.en}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

const fontDir = join(process.cwd(), 'src/assets/fonts');

export default async function OpenGraphImage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: requested } = await params;
  const locale = hasLocale(routing.locales, requested) ? requested : routing.defaultLocale;
  const t = await getTranslations({ locale, namespace: 'Hero' });
  const isHebrew = locale === 'he';
  const line = (key: 'titleLine1' | 'titleLine2') => (isHebrew ? toVisualRtl(t(key)) : t(key));

  const [michroma, plexBold, plex] = await Promise.all([
    readFile(join(fontDir, 'Michroma-Regular.ttf')),
    readFile(join(fontDir, 'IBMPlexSansHebrew-Bold.ttf')),
    readFile(join(fontDir, 'IBMPlexSansHebrew-Regular.ttf')),
  ]);

  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 72,
        background: `radial-gradient(circle at 85% 20%, rgba(47,123,245,0.35), transparent 55%), radial-gradient(circle at 10% 110%, rgba(29,63,214,0.45), transparent 50%), ${c.bg}`,
        color: c.text,
        fontFamily: 'Plex',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 22 }}>
        <img src={nMarkDataUri()} width={84} height={84} alt="" />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          <div style={{ fontFamily: 'Michroma', fontSize: 40, letterSpacing: 8 }}>NEXORA</div>
          <div style={{ fontSize: 18, letterSpacing: 7, color: c.cyan }}>
            WEBSITES &amp; TECH SUPPORT
          </div>
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: isHebrew ? 'flex-end' : 'flex-start',
          textAlign: isHebrew ? 'right' : 'left',
          fontFamily: 'Plex',
          fontWeight: 700,
          fontSize: isHebrew ? 66 : 58,
          letterSpacing: -1,
          lineHeight: 1.15,
        }}
      >
        <div style={{ display: 'flex' }}>{line('titleLine1')}</div>
        <div
          style={{
            display: 'flex',
            backgroundImage: `linear-gradient(90deg, ${c.cyan}, ${c.blue})`,
            backgroundClip: 'text',
            color: 'transparent',
          }}
        >
          {line('titleLine2')}
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          height: 4,
          width: '100%',
          backgroundImage: `linear-gradient(90deg, ${c.cyan}, ${c.blue}, ${c.deepBlue})`,
          borderRadius: 4,
        }}
      />
    </div>,
    {
      ...size,
      fonts: [
        { name: 'Michroma', data: michroma, weight: 400, style: 'normal' },
        { name: 'Plex', data: plexBold, weight: 700, style: 'normal' },
        { name: 'Plex', data: plex, weight: 400, style: 'normal' },
      ],
    },
  );
}
