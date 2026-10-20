/**
 * Brand colors as raw hex for contexts that can't read CSS variables
 * (next/og images, web manifest, theme-color). Must mirror the tokens in `app/globals.css`.
 */
export const brandColors = {
  bg: '#050A18',
  bgElevated: '#0A1228',
  surface: '#0E1834',
  cyan: '#3FD9F5',
  blue: '#2F7BF5',
  deepBlue: '#1D3FD6',
  text: '#FFFFFF',
  textMuted: '#9AA8C7',
} as const;
