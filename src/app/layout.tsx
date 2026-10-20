import type { Metadata } from 'next';
import { MotionProvider } from '@/components/motion/MotionProvider';
import { fontVariables } from './fonts';
import './globals.css';

export const metadata: Metadata = {
  title: 'Nexora',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="he" dir="rtl" className={fontVariables}>
      <body className="bg-bg text-fg">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
