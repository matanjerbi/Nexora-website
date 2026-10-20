/** Resolved at build time and cached, so the static shell stays fully prerendered. */
export async function CopyrightYear() {
  'use cache';
  return <>{new Date().getFullYear()}</>;
}
