'use client';

import { Menu, X } from 'lucide-react';
import { useEffect, useRef, useState, type ReactNode } from 'react';

type MobileMenuProps = {
  openLabel: string;
  closeLabel: string;
  navLabel: string;
  links: { href: string; label: string }[];
  /** Extra content (language switcher, CTA), rendered below the links. */
  footer: ReactNode;
};

/**
 * Full-screen animated menu for small screens. Built on a native modal <dialog>, which gives
 * focus trapping, Escape-to-close and an inert page behind it for free.
 */
export function MobileMenu({ openLabel, closeLabel, navLabel, links, footer }: MobileMenuProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
    document.documentElement.style.overflow = open ? 'hidden' : '';
  }, [open]);

  return (
    <>
      <button
        type="button"
        aria-label={openLabel}
        aria-expanded={open}
        aria-haspopup="dialog"
        onClick={() => setOpen(true)}
        className="inline-flex size-11 items-center justify-center rounded-full border border-line text-fg transition-colors hover:border-line-strong hover:text-cyan"
      >
        <Menu aria-hidden className="size-5" strokeWidth={1.5} />
      </button>

      <dialog
        ref={dialogRef}
        aria-label={navLabel}
        onClose={() => setOpen(false)}
        onClick={(event) => {
          // Any in-page link closes the menu so the page can scroll to its target.
          if ((event.target as HTMLElement).closest('a')) setOpen(false);
        }}
        className="m-0 h-dvh max-h-none w-full max-w-none bg-bg/95 p-0 text-fg backdrop:bg-bg/60 open:animate-[fade-in_0.25s_ease-out]"
      >
        <div className="flex h-full flex-col px-6 pt-5 pb-[max(2rem,env(safe-area-inset-bottom))]">
          <div className="flex justify-end">
            <button
              type="button"
              aria-label={closeLabel}
              onClick={() => setOpen(false)}
              className="inline-flex size-11 items-center justify-center rounded-full border border-line text-fg transition-colors hover:text-cyan"
            >
              <X aria-hidden className="size-5" strokeWidth={1.5} />
            </button>
          </div>

          <nav aria-label={navLabel} className="mt-8 flex-1">
            <ul className="flex flex-col gap-2">
              {links.map((link, index) => (
                <li
                  key={link.href}
                  className="animate-rise"
                  style={{ animationDelay: `${80 + index * 50}ms` }}
                >
                  <a
                    href={link.href}
                    className="block py-3 font-display text-3xl font-bold text-fg transition-colors hover:text-cyan en:text-xl en:font-normal en:uppercase"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex animate-rise flex-col gap-5" style={{ animationDelay: '360ms' }}>
            {footer}
          </div>
        </div>
      </dialog>
    </>
  );
}
