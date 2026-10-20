import { ImageResponse } from 'next/og';
import { brandColors } from '@/config/brand';
import { nMarkDataUri } from '@/lib/seo';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: brandColors.bg,
      }}
    >
      <img src={nMarkDataUri()} width={128} height={128} alt="" />
    </div>,
    size,
  );
}
