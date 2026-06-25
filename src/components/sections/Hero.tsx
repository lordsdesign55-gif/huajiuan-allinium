'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Button } from '@/components/ui/Button';
import { MotionSection } from '@/components/motion/MotionSection';

export function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="relative overflow-hidden bg-card text-card-foreground min-h-[90vh] flex items-center">
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/images/hero-bg.jpg"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-r from-card/95 via-card/80 to-card/40" />

      <div className="container-site relative z-10 flex min-h-[90vh] flex-col justify-center py-24 lg:py-32">
        <MotionSection className="max-w-3xl">
          <span className="mb-6 inline-block text-sm font-bold uppercase tracking-widest text-accent">
            {t('kicker')}
          </span>
          <h1 className="text-4xl font-bold leading-[1.05] text-white sm:text-5xl lg:text-display-lg">
            {t('title')}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/80 lg:text-xl leading-relaxed">
            {t('subtitle')}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button variant="primary" size="lg" asChild>
              <Link href="/contact">{t('ctaPrimary')}</Link>
            </Button>
            <Button variant="outline" size="lg" className="text-white border-white/30 hover:bg-white/10 hover:text-white" asChild>
              <Link href="/about">{t('ctaSecondary')}</Link>
            </Button>
          </div>
        </MotionSection>
      </div>
    </section>
  );
}
