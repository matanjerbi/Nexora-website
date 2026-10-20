import { useTranslations } from 'next-intl';
import { MagneticButton } from '@/components/motion/MagneticButton';
import { cn } from '@/lib/cn';
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
  className,
  ...props
}: WhatsAppButtonProps) {
  const t = useTranslations('WhatsApp');
  const button = (
    <Button
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(magnetic && 'w-full', className)}
      {...props}
    >
      <WhatsAppIcon />
      <span>{label}</span>
      <span className="sr-only">{t('newTab')}</span>
    </Button>
  );
  // The magnetic wrapper takes the sizing classes so full-width buttons stay full-width.
  return magnetic ? <MagneticButton className={className}>{button}</MagneticButton> : button;
}
