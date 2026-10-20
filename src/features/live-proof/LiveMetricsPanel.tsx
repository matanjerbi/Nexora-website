'use client';

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/cn';
import { useLiveMetrics } from './useLiveMetrics';

export type LiveMetricsLabels = {
  live: string;
  measuring: string;
  unavailable: string;
  paint: { label: string; hint: string; unit: string };
  weight: { label: string; hint: string; unit: string };
  requests: { label: string; hint: string };
  cls: { label: string; hint: string };
  compare: {
    title: string;
    thisPage: string;
    average: string;
    /** Contains `{times}`, replaced with the measured ratio. */
    lighter: string;
    source: string;
  };
};

type Props = {
  labels: LiveMetricsLabels;
  medianKb: number;
  sourceUrl: string;
};

/** Counts a number up from 0 once it's known. Text only, so no layout shift. */
function useCountUp(target: number | null, duration = 900) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (target === null) return;
    // Reduced motion: jump straight to the value (a zero-length animation).
    const length = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : duration;
    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = length === 0 ? 1 : Math.min(1, (now - start) / length);
      setValue(target * (1 - Math.pow(1 - progress, 3)));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, duration]);
  return value;
}

function Metric({
  label,
  hint,
  value,
  unit,
}: {
  label: string;
  hint: string;
  value: string;
  unit?: string;
}) {
  return (
    <div className="flex flex-col gap-3 bg-bg-elevated p-6 sm:p-8">
      <dt className="text-sm text-muted">{label}</dt>
      <dd className="order-first" dir="ltr">
        <span className="font-mono text-4xl font-medium text-fg tabular-nums sm:text-5xl">
          {value}
        </span>
        {unit && <span className="ms-1.5 font-mono text-base text-cyan">{unit}</span>}
      </dd>
      <dd className="font-mono text-xs text-muted/80" dir="ltr">
        {hint}
      </dd>
    </div>
  );
}

export function LiveMetricsPanel({ labels, medianKb, sourceUrl }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const metrics = useLiveMetrics(visible);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  const kb = metrics ? metrics.bytes / 1024 : null;
  const seconds = useCountUp(metrics?.paintMs != null ? metrics.paintMs / 1000 : null);
  const weight = useCountUp(kb);
  const requests = useCountUp(metrics?.requests ?? null);
  const cls = useCountUp(metrics?.cls ?? null);

  const pending = '—';
  const ratio = kb ? Math.min(1, kb / medianKb) : 0;
  const times = kb ? Math.max(1, Math.round(medianKb / kb)) : null;

  return (
    <div ref={ref} className="overflow-hidden rounded-3xl card-glass">
      {/* Window bar, like a monitoring dashboard. */}
      <div className="flex items-center justify-between gap-4 border-b border-line px-6 py-4 sm:px-8">
        <p className="flex items-center gap-2.5 text-sm text-fg" aria-live="polite">
          <span aria-hidden className="relative flex size-2.5">
            <span className="absolute inset-0 animate-pulse-ring rounded-full bg-cyan" />
            <span className="relative size-2.5 rounded-full bg-cyan" />
          </span>
          {metrics ? labels.live : labels.measuring}
        </p>
        <span className="font-mono text-xs text-muted" dir="ltr">
          window.performance
        </span>
      </div>

      <dl className="grid grid-cols-2 gap-px bg-line lg:grid-cols-4">
        <Metric
          label={labels.paint.label}
          hint={labels.paint.hint}
          value={
            metrics?.paintMs != null ? seconds.toFixed(2) : metrics ? labels.unavailable : pending
          }
          unit={metrics?.paintMs != null ? labels.paint.unit : undefined}
        />
        <Metric
          label={labels.weight.label}
          hint={labels.weight.hint}
          value={kb !== null ? Math.round(weight).toString() : pending}
          unit={kb !== null ? labels.weight.unit : undefined}
        />
        <Metric
          label={labels.requests.label}
          hint={labels.requests.hint}
          value={metrics ? Math.round(requests).toString() : pending}
        />
        <Metric
          label={labels.cls.label}
          hint={labels.cls.hint}
          value={metrics?.cls != null ? cls.toFixed(2) : metrics ? labels.unavailable : pending}
        />
      </dl>

      {/* Weight comparison against the median web page. */}
      <div className="border-t border-line px-6 py-7 sm:px-8">
        <p className="mb-5 text-sm font-bold">{labels.compare.title}</p>
        <div className="flex flex-col gap-4">
          {[
            { label: labels.compare.thisPage, scale: ratio, value: kb, accent: true },
            { label: labels.compare.average, scale: 1, value: medianKb, accent: false },
          ].map((row) => (
            <div
              key={row.label}
              className="grid grid-cols-[1fr_auto] items-center gap-x-4 gap-y-2 sm:grid-cols-[11rem_1fr_auto]"
            >
              <span className="text-sm text-muted">{row.label}</span>
              <span className="order-last col-span-2 h-2.5 overflow-hidden rounded-full bg-bg-elevated sm:order-none sm:col-span-1">
                <span
                  className={cn(
                    'block h-full rounded-full transition-transform duration-1000 ease-out ltr:origin-left rtl:origin-right',
                    row.accent ? 'bg-cta' : 'bg-muted/40',
                  )}
                  style={{ transform: `scaleX(${row.accent ? (metrics ? row.scale : 0) : 1})` }}
                />
              </span>
              <span className="min-w-20 text-end font-mono text-sm tabular-nums" dir="ltr">
                {row.value !== null
                  ? `${Math.round(row.value).toLocaleString('en-US')} KB`
                  : pending}
              </span>
            </div>
          ))}
        </div>
        <p className="mt-5 flex flex-wrap items-center justify-between gap-3 text-xs text-muted">
          {times !== null && times > 1 ? (
            <span className="font-bold text-cyan">
              {labels.compare.lighter.replace('{times}', String(times))}
            </span>
          ) : (
            <span />
          )}
          <a
            href={sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-line-strong underline-offset-4 hover:text-fg"
          >
            {labels.compare.source}
          </a>
        </p>
      </div>
    </div>
  );
}
