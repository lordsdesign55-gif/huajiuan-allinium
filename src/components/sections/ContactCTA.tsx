'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { MotionSection } from '@/components/motion/MotionSection';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

export function ContactCTA() {
  const t = useTranslations('cta');

  return (
    <section className="relative overflow-hidden bg-primary py-20 lg:py-28">
      <div className="absolute inset-0 bg-[url('/images/project-4.jpg')] bg-cover bg-center opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/80" />
      <div className="container-site relative z-10 text-center">
        <MotionSection className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-white lg:text-display-md">{t('title')}</h2>
          <p className="mt-4 text-lg text-white/80">{t('subtitle')}</p>
          <div className="mt-10">
            <Button variant="secondary" size="lg" asChild>
              <Link href="/contact">
                {t('button')}
                <ArrowRight className="ml-2 inline h-5 w-5" />
              </Link>
            </Button>
          </div>
        </MotionSection>
      </div>
    </section>
  );
}
