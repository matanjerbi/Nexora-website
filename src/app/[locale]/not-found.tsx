import { useLocale, useTranslations } from 'next-intl';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { NMark } from '@/components/ui/NMark';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { localizedPath } from '@/lib/seo';

export default function NotFound() {
  const t = useTranslations('NotFound');
  const tw = useTranslations('WhatsApp');
  const locale = useLocale();

  return (
    <main id="main" tabIndex={-1} className="relative isolate overflow-hidden outline-none">
      <div aria-hidden className="absolute inset-0 -z-10 bg-grid" />
      <Container className="flex min-h-[70dvh] flex-col items-center justify-center py-24 text-center">
        <title>{t('metaTitle')}</title>
        <NMark className="size-20 opacity-90" />
        <p className="mt-8 text-gradient font-brand text-6xl sm:text-7xl">{t('code')}</p>
        <h1 className="mt-6 font-display text-3xl font-bold text-balance">{t('title')}</h1>
        <p className="mt-4 max-w-md text-muted">{t('description')}</p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button href={localizedPath(locale)} variant="secondary" size="lg">
            {t('home')}
          </Button>
          <WhatsAppButton message={tw('messages.notFound')} label={tw('cta')} size="lg" />
        </div>
      </Container>
    </main>
  );
}
