'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Menu, X, Globe } from 'lucide-react';
import { Link, usePathname } from '@/i18n/routing';
import { CmsMenuItem } from '@/lib/mock';
import { cn } from '@/lib/utils';

interface MobileMenuProps {
  items: CmsMenuItem[];
}

export function MobileMenu({ items }: MobileMenuProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const t = useTranslations('nav');

  return (
    <>
      <button
        type="button"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        className="inline-flex h-10 w-10 items-center justify-center text-white hover:text-accent transition-colors lg:hidden"
      >
        {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      <div
        className={cn(
          'fixed inset-x-0 top-[72px] z-40 bg-card border-t border-white/10 lg:hidden transition-all duration-300',
          open ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
        )}
      >
        <nav className="container-site flex flex-col py-6" aria-label="Mobile navigation">
          {items.map((item) => (
            <Link
              key={item._id}
              href={item.url}
              onClick={() => setOpen(false)}
              className="py-3 text-lg font-medium text-white hover:text-accent transition-colors"
            >
              {t(item.labelKey)}
            </Link>
          ))}
          <div className="mt-4 flex items-center gap-3 border-t border-white/10 pt-4 text-white/70">
            <Globe className="h-4 w-4" />
            <Link
              href={pathname}
              locale="mn"
              onClick={() => setOpen(false)}
              className="hover:text-accent transition-colors"
            >
              MN
            </Link>
            <Link
              href={pathname}
              locale="en"
              onClick={() => setOpen(false)}
              className="hover:text-accent transition-colors"
            >
              EN
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}
