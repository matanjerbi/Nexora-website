'use client';

import { useEffect, useState } from 'react';

export type LiveMetrics = {
  /** Largest Contentful Paint (or First Contentful Paint where LCP isn't exposed), in ms. */
  paintMs: number | null;
  /** Bytes downloaded for this page: document + every resource (compressed size). */
  bytes: number;
  requests: number;
  /** Cumulative Layout Shift; null where the browser doesn't expose it. */
  cls: number | null;
};

type LayoutShift = PerformanceEntry & { value: number; hadRecentInput: boolean };

function observe(type: string, onEntries: (entries: PerformanceEntry[]) => void) {
  if (!PerformanceObserver.supportedEntryTypes?.includes(type)) return undefined;
  const observer = new PerformanceObserver((list) => onEntries(list.getEntries()));
  observer.observe({ type, buffered: true });
  return observer;
}

function pageWeight() {
  const entries = [
    ...performance.getEntriesByType('navigation'),
    ...performance.getEntriesByType('resource'),
  ] as PerformanceResourceTiming[];
  // transferSize is 0 for cached files; fall back to the compressed body size.
  const bytes = entries.reduce((sum, e) => sum + (e.transferSize || e.encodedBodySize || 0), 0);
  return { bytes, requests: entries.length };
}

/**
 * Real measurements of the current page, taken in the visitor's browser with the standard
 * Performance APIs. Starts measuring only when `active` (the panel is on screen).
 */
export function useLiveMetrics(active: boolean): LiveMetrics | null {
  const [metrics, setMetrics] = useState<LiveMetrics | null>(null);

  useEffect(() => {
    if (!active) return;
    let paintMs: number | null = null;
    let cls: number | null = PerformanceObserver.supportedEntryTypes?.includes('layout-shift')
      ? 0
      : null;

    const lcp = observe('largest-contentful-paint', (entries) => {
      paintMs = entries.at(-1)?.startTime ?? paintMs;
    });
    if (!lcp) {
      paintMs =
        performance.getEntriesByName('first-contentful-paint')[0]?.startTime ??
        (performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming | undefined)
          ?.domContentLoadedEventEnd ??
        null;
    }
    const shifts = observe('layout-shift', (entries) => {
      for (const entry of entries as LayoutShift[]) {
        if (!entry.hadRecentInput) cls = (cls ?? 0) + entry.value;
      }
    });

    // Let buffered entries arrive, then snapshot. The panel is below the fold, so the page has settled.
    const timer = window.setTimeout(() => setMetrics({ paintMs, cls, ...pageWeight() }), 400);

    return () => {
      window.clearTimeout(timer);
      lcp?.disconnect();
      shifts?.disconnect();
    };
  }, [active]);

  return metrics;
}
