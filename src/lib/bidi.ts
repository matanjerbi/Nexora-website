const LTR_RUN = /[A-Za-z0-9](?:[A-Za-z0-9.,&/+\-' ]*[A-Za-z0-9])?/g;

/**
 * Convert a single line of RTL text from logical to visual (left-to-right) order.
 * Only for renderers with no bidi support (next/og / satori); browsers do this natively.
 * Reverses the line, then restores embedded Latin/digit runs to their original order.
 */
export function toVisualRtl(line: string): string {
  const reversed = Array.from(line).reverse().join('');
  return reversed.replace(LTR_RUN, (run) => Array.from(run).reverse().join(''));
}
