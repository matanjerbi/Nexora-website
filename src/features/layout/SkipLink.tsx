import { useTranslations } from 'next-intl';

export function SkipLink() {
  const t = useTranslations('SkipLink');
  return (
    <a
      href="#main"
      className="sr-only rounded-full bg-cyan px-5 py-3 font-semibold text-bg focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-[100]"
    >
      {t('label')}
    </a>
  );
}
