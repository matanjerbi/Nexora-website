import {
  Activity,
  AppWindow,
  Archive,
  Briefcase,
  CloudCog,
  Code,
  Database,
  LayoutTemplate,
  LifeBuoy,
  Lock,
  PenTool,
  Rocket,
  Search,
  Server,
  ShieldCheck,
  User,
  Workflow,
  Wrench,
  Zap,
  type LucideIcon,
  type LucideProps,
} from 'lucide-react';
import type { IconName } from '@/domain';
import { cn } from '@/lib/cn';

const icons: Record<IconName, LucideIcon> = {
  'app-window': AppWindow,
  'cloud-cog': CloudCog,
  server: Server,
  'shield-check': ShieldCheck,
  layout: LayoutTemplate,
  briefcase: Briefcase,
  wrench: Wrench,
  zap: Zap,
  activity: Activity,
  database: Database,
  archive: Archive,
  user: User,
  search: Search,
  pen: PenTool,
  code: Code,
  rocket: Rocket,
  'life-buoy': LifeBuoy,
  workflow: Workflow,
  lock: Lock,
};

type IconProps = Omit<LucideProps, 'ref'> & { name: IconName };

/** Brand line icon: thin 1.5px cyan stroke. Decorative unless given an aria-label. */
export function Icon({ name, className, strokeWidth = 1.5, ...props }: IconProps) {
  const Component = icons[name];
  return (
    <Component
      aria-hidden={props['aria-label'] ? undefined : true}
      strokeWidth={strokeWidth}
      className={cn('size-6 shrink-0 text-cyan', className)}
      {...props}
    />
  );
}
