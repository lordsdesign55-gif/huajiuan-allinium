import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { getHeaderMenus } from '@/lib/mock';
import { MobileMenu } from './MobileMenu';
import { Button } from '@/components/ui/Button';

export function Header() {
  const headerItems = getHeaderMenus();

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

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Үндсэн цэс">
          {headerItems.map((item) => (
            <Link
              key={item._id}
              href={item.url}
              className="text-sm font-medium text-white/80 hover:text-accent transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <Button variant="primary" size="sm" asChild>
            <Link href="/contact">Үнийн санал авах</Link>
          </Button>
        </div>

        <MobileMenu items={headerItems} />
      </div>
    </header>
  );
}
