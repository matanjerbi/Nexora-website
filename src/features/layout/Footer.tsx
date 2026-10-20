import { useLocale, useTranslations } from 'next-intl';
import { Mail, Phone } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';
import { Logo } from '@/components/ui/Logo';
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon';
import { siteConfig } from '@/config/site';
import { mainNav } from '@/config/navigation';
import { getPathname } from '@/i18n/navigation';
import { whatsappLink } from '@/lib/whatsapp';
import { CopyrightYear } from './CopyrightYear';

export function Footer() {
  const t = useTranslations('Footer');
  const nav = useTranslations('Nav');
  const tw = useTranslations('WhatsApp');
  const locale = useLocale();
  const home = getPathname({ href: '/', locale });

  const contacts = [
    {
      label: t('phone'),
      value: siteConfig.phone.display,
      href: siteConfig.phone.href,
      icon: <Phone aria-hidden strokeWidth={1.5} className="size-4 text-cyan" />,
      dir: 'ltr' as const,
    },
    {
      label: t('whatsapp'),
      value: tw('short'),
      href: whatsappLink(tw('messages.general')),
      icon: <WhatsAppIcon className="size-4 text-cyan" />,
      external: true,
    },
    {
      label: t('email'),
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
      icon: <Mail aria-hidden strokeWidth={1.5} className="size-4 text-cyan" />,
      dir: 'ltr' as const,
    },
  ];

  return (
    <footer className="relative border-t border-line bg-bg-elevated">
      <Container className="grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="flex flex-col gap-5">
          <a href={home} aria-label={nav('home')} className="self-start rounded-md">
            <Logo />
          </a>
          <p className="eyebrow">{siteConfig.tagline[locale]}</p>
          <LanguageSwitcher className="self-start" />
        </div>

        <nav aria-label={t('navigation')}>
          <h2 className="mb-4 text-sm font-semibold text-fg">{t('navigation')}</h2>
          <ul className="flex flex-col gap-3 text-sm">
            {mainNav.map((id) => (
              <li key={id}>
                <a href={`${home}#${id}`} className="text-muted transition-colors hover:text-cyan">
                  {nav(id)}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="mb-4 text-sm font-semibold text-fg">{t('contact')}</h2>
          <ul className="flex flex-col gap-3 text-sm">
            {contacts.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  {...(item.external && { target: '_blank', rel: 'noopener noreferrer' })}
                  className="inline-flex items-center gap-3 text-muted transition-colors hover:text-cyan"
                >
                  {item.icon}
                  <span className="sr-only">{item.label}: </span>
                  <span dir={item.dir}>{item.value}</span>
                  {item.external && <span className="sr-only">{tw('newTab')}</span>}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <div className="border-t border-line">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-xs text-muted sm:flex-row">
          <p>
            © <CopyrightYear /> {siteConfig.name}. {t('rights')}
          </p>
          <a
            href={getPathname({ href: '/accessibility', locale })}
            className="transition-colors hover:text-cyan"
          >
            {t('accessibility')}
          </a>
        </Container>
      </div>
    </footer>
  );
}
