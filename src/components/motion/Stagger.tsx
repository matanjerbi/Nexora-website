'use client';

import { m, type HTMLMotionProps, type Variants } from 'framer-motion';

const container: Variants = {
  hidden: {},
  visible: (stagger: number) => ({ transition: { staggerChildren: stagger } }),
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

type StaggerProps<T extends 'div' | 'ul' | 'ol'> = HTMLMotionProps<T> & {
  as?: T;
  stagger?: number;
};

/** Reveals its `StaggerItem` children one after another when scrolled into view. */
export function Stagger<T extends 'div' | 'ul' | 'ol' = 'div'>({
  as,
  stagger = 0.1,
  children,
  ...props
}: StaggerProps<T>) {
  const Component = m[as ?? 'div'] as typeof m.div;
  return (
    <Component
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      variants={container}
      custom={stagger}
      {...(props as HTMLMotionProps<'div'>)}
    >
      {children}
    </Component>
  );
}

export function StaggerItem<T extends 'div' | 'li' = 'div'>({
  as,
  children,
  ...props
}: HTMLMotionProps<T> & { as?: T }) {
  const Component = m[as ?? 'div'] as typeof m.div;
  return (
    <Component variants={item} {...(props as HTMLMotionProps<'div'>)}>
      {children}
    </Component>
  );
}
