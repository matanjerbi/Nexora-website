import { Heebo, Inter, Michroma } from 'next/font/google';

/** Wide geometric display face matching the wordmark (EN display + brand wordmark). */
export const michroma = Michroma({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-michroma',
});

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

/** Hebrew display and body. */
export const heebo = Heebo({
  subsets: ['hebrew', 'latin'],
  display: 'swap',
  variable: '--font-heebo',
});

export const fontVariables = [michroma.variable, inter.variable, heebo.variable].join(' ');
