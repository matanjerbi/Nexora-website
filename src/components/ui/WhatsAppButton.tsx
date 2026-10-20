import { useTranslations } from 'next-intl';
import { MagneticButton } from '@/components/motion/MagneticButton';
import { whatsappLink } from '@/lib/whatsapp';
import { Button, type ButtonProps } from './Button';
import { WhatsAppIcon } from './WhatsAppIcon';

type WhatsAppButtonProps = Omit<ButtonProps, 'href' | 'children'> & {
  /** Prefilled message, already localized. */
  message: string;
  label: string;
  /** Magnetic hover (desktop only). */
  magnetic?: boolean;
};

/** CTA that opens a WhatsApp chat with a context-aware prefilled message. */
export function WhatsAppButton({
  message,
  label,
  magnetic = false,
  ...props
}: WhatsAppButtonProps) {
  const t = useTranslations('WhatsApp');
  const button = (
    <Button href={whatsappLink(message)} target="_blank" rel="noopener noreferrer" {...props}>
      <WhatsAppIcon />
      <span>{label}</span>
      <span className="sr-only">{t('newTab')}</span>
    </Button>
  );
  return magnetic ? <MagneticButton>{button}</MagneticButton> : button;
}
