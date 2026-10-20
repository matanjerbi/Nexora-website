import { useTranslations } from 'next-intl';
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon';
import { whatsappLink } from '@/lib/whatsapp';

/** Always-available WhatsApp shortcut. The pulse stops under reduced motion (see globals.css). */
export function FloatingWhatsApp() {
  const t = useTranslations('WhatsApp');
  return (
    <aside aria-label={t('floatingLabel')}>
      <a
        href={whatsappLink(t('messages.general'))}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${t('floatingLabel')} ${t('newTab')}`}
        className="group fixed end-5 bottom-[max(1.25rem,env(safe-area-inset-bottom))] z-30 inline-flex size-14 items-center justify-center rounded-full bg-cta text-bg shadow-[0_10px_30px_-6px_var(--glow-cyan)] transition-transform duration-300 hover:scale-105"
      >
        <span
          aria-hidden
          className="absolute inset-0 animate-pulse-ring rounded-full border-2 border-cyan"
        />
        <WhatsAppIcon className="size-7" />
      </a>
    </aside>
  );
}
