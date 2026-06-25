'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import Image from 'next/image';
import { getFooterMenus } from '@/lib/mock';
import { Button } from '@/components/ui/Button';

export function Footer() {
  const footerItems = getFooterMenus();
  const t = useTranslations('nav');

  return (
    <footer className="bg-card text-card-foreground border-t border-white/10">
      <div className="container-site py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Link href="/" className="flex items-center gap-3 mb-6">
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
            <p className="max-w-sm text-white/70 leading-relaxed">
              EOSS шилэн пасад, металл пасад, гадна дуулаалга — чанар, стандарт, бүтээмж.
            </p>
            <div className="mt-6">
              <Button variant="primary" size="sm" asChild>
                <Link href="/contact">{t('quote')}</Link>
              </Button>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3 lg:col-span-7">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">Компани</h3>
              <ul className="space-y-3">
                {footerItems.filter(i => ['/about', '/contact', '/blog'].includes(i.url)).map((item) => (
                  <li key={item._id}>
                    <Link href={item.url} className="text-sm text-white/70 hover:text-accent transition-colors"
                    >
                      {t(item.labelKey)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">Үйлчилгээ</h3>
              <ul className="space-y-3">
                {[
                  { url: '/services', label: 'EOSS шилэн пасад' },
                  { url: '/unitized-glass-system', label: 'Unitized Glass System' },
                  { url: '/services', label: 'Металл пасад' },
                  { url: '/services', label: 'Гадна дуулаалга' },
                ].map((item) => (
                  <li key={item.url + item.label}>
                    <Link href={item.url} className="text-sm text-white/70 hover:text-accent transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">Холбоо барих</h3>
              <ul className="space-y-3 text-sm text-white/70">
                <li>Утас: +976 7000 9559</li>
                <li>Имэйл: gergroup11@gmail.com</li>
                <li>Баянзүрх дүүрэг, 5-р хороо, Монелийн задгай</li>
                <li>Ажлын цаг: 08:00 - 18:00</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-white/50">
            © {new Date().getFullYear()} Huajiuan Allinium. Бүх эрх хуулиар хамгаалагдсан.
          </p>
          <div className="flex gap-6">
            <Link href="/" className="text-sm text-white/50 hover:text-accent transition-colors">Нууцлал</Link>
            <Link href="/" className="text-sm text-white/50 hover:text-accent transition-colors">Үйлчилгээний нөхцөл</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
