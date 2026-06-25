'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Link, usePathname } from '@/i18n/routing';
import { getHeaderMenus } from '@/lib/mock';
import { MobileMenu } from './MobileMenu';
import { Button } from '@/components/ui/Button';
import { Globe } from 'lucide-react';

export function Header() {
  const headerItems = getHeaderMenus();
  const t = useTranslations('nav');
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-card text-card-foreground border-b border-white/10">
      <div className="container-site flex h-[72px] items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Huajiuan Allinium"
            width={40}
            height={40}
            className="h-10 w-auto object-contain"
          />
          <span className="text-lg font-semibold tracking-tight text-white">
            Huajiuan Allinium
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
          {headerItems.map((item) => (
            <Link
              key={item._id}
              href={item.url}
              className="text-sm font-medium text-white/80 hover:text-accent transition-colors"
            >
              {t(item.labelKey)}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <div className="flex items-center gap-2 text-sm text-white/70">
            <Globe className="h-4 w-4" />
            <Link href={pathname} locale="mn" className="hover:text-accent transition-colors">MN</Link>
            <span>/</span>
            <Link href={pathname} locale="en" className="hover:text-accent transition-colors">EN</Link>
          </div>
          <Button variant="primary" size="sm" asChild>
            <Link href="/contact">{t('quote')}</Link>
          </Button>
        </div>

        <MobileMenu items={headerItems} />
      </div>
    </header>
  );
}
