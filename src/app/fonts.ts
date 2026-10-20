import { IBM_Plex_Mono, IBM_Plex_Sans_Hebrew, Michroma } from 'next/font/google';

/**
 * Primary face for both locales: one engineered family with matching Hebrew and Latin,
 * so /he and /en read as the same brand. Two weights only (regular + bold) to keep preloads small.
 */
export const plex = IBM_Plex_Sans_Hebrew({
  weight: ['400', '700'],
  subsets: ['hebrew', 'latin'],
  display: 'swap',
  variable: '--font-plex',
});

/** Technical accents: labels, numbers, live measurements. */
export const plexMono = IBM_Plex_Mono({
  weight: ['400', '500'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-plex-mono',
});

/** The NEXORA wordmark only (it's part of the logo). */
export const michroma = Michroma({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-michroma',
});

export const fontVariables = [plex.variable, plexMono.variable, michroma.variable].join(' ');
