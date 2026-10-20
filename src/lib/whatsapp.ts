import { siteConfig } from '@/config/site';

/** Build a wa.me link that opens a chat with a prefilled, already-localized message. */
export function whatsappLink(message: string, phone: string = siteConfig.whatsapp): string {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
