import { useLocale, useTranslations } from 'next-intl';
import { Container } from '@/components/ui/Container';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';
import { Logo } from '@/components/ui/Logo';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { mainNav } from '@/config/navigation';
import { getPathname } from '@/i18n/navigation';
import { MobileMenu } from './MobileMenu';

export function Header() {
  const t = useTranslations('Nav');
  const tw = useTranslations('WhatsApp');
  const locale = useLocale();
  const home = getPathname({ href: '/', locale });
  const links = mainNav.map((id) => ({ href: `${home}#${id}`, label: t(id) }));
  const cta = (
    <WhatsAppButton message={tw('messages.general')} label={tw('short')} variant="primary" />
  );

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-header backdrop-blur-md">
      <Container className="flex h-18 items-center justify-between gap-6">
        <a href={home} aria-label={t('home')} className="rounded-md">
          <Logo />
        </a>

        <nav aria-label={t('label')} className="hidden lg:block">
          <ul className="flex items-center gap-8 text-sm">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-muted transition-colors hover:text-fg">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher />
          {cta}
        </div>

        <div className="lg:hidden">
          <MobileMenu
            openLabel={t('openMenu')}
            closeLabel={t('closeMenu')}
            navLabel={t('label')}
            links={links}
            footer={
              <>
                <LanguageSwitcher />
                <WhatsAppButton
                  message={tw('messages.general')}
                  label={tw('cta')}
                  size="lg"
                  className="w-full"
                />
              </>
            }
          />
        </div>
      </Container>
    </header>
  );
}
