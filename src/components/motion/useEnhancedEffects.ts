'use client';

import { useSyncExternalStore } from 'react';

const QUERY = '(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)';

type NavigatorWithHints = Navigator & {
  connection?: { saveData?: boolean };
  deviceMemory?: number;
};

function isCapableDevice() {
  const nav = navigator as NavigatorWithHints;
  if (nav.connection?.saveData) return false;
  if (nav.deviceMemory !== undefined && nav.deviceMemory < 4) return false;
  if (nav.hardwareConcurrency !== undefined && nav.hardwareConcurrency < 4) return false;
  return true;
}

function subscribe(onChange: () => void) {
  const mql = window.matchMedia(QUERY);
  mql.addEventListener('change', onChange);
  return () => mql.removeEventListener('change', onChange);
}

function getSnapshot() {
  return window.matchMedia(QUERY).matches && isCapableDevice();
}

/**
 * True only on desktop-class devices (fine pointer, hover) that haven't asked for reduced
 * motion and aren't low-power. Heavy effects (spotlight, magnetic, parallax) gate on this.
 * Always false during SSR, so effects attach after hydration without layout shift.
 */
export function useEnhancedEffects() {
  return useSyncExternalStore(subscribe, getSnapshot, () => false);
}
