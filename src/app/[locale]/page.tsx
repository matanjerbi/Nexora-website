import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';
import { NMark } from '@/components/ui/NMark';

/** Temporary localized preview; replaced by the home page sections. */
export default function Home() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center gap-8">
      <NMark animated className="size-32" />
      <LanguageSwitcher />
    </main>
  );
}
