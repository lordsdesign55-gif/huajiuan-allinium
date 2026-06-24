'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { CmsMenuItem } from '@/lib/mock';
import { cn } from '@/lib/utils';

interface MobileMenuProps {
  items: CmsMenuItem[];
}

export function MobileMenu({ items }: MobileMenuProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        aria-label={open ? 'Цэс хаах' : 'Цэс нээх'}
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
        <nav className="container-site flex flex-col py-6" aria-label="Гар утасны цэс">
          {items.map((item) => (
            <Link
              key={item._id}
              href={item.url}
              onClick={() => setOpen(false)}
              className="py-3 text-lg font-medium text-white hover:text-accent transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
