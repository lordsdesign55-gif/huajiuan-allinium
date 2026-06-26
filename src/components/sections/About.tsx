'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { MotionSection, MotionItem } from '@/components/motion/MotionSection';

export function About() {
  const t = useTranslations('about');

  return (
    <section className="bg-muted py-20 lg:py-28" id="about">
      <div className="container-site">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <MotionSection>
            <span className="text-sm font-bold uppercase tracking-widest text-accent">{t('kicker')}</span>
            <h2 className="mt-3 text-3xl font-bold text-foreground lg:text-display-md">
              {t('title')}
            </h2>
            <div className="mt-6 space-y-4 text-foreground/80 leading-relaxed">
              <p>{t('intro')}</p>
              <p>{t('partnership')}</p>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6">
              {['years', 'projects', 'standard'].map((key, index) => (
                <MotionItem key={key} delay={index * 0.1}>
                  <div className="border-l-4 border-accent pl-4">
                    <div className="text-3xl font-bold text-foreground lg:text-4xl">
                      {t(`stats.${key}`)}
                    </div>
                  </div>
                </MotionItem>
              ))}
            </div>
          </MotionSection>

          <MotionSection className="relative aspect-[4/3] overflow-hidden bg-white shadow-lg lg:aspect-square">
            <Image
              src="/images/project-1.jpg"
              alt="Huajian Aluminium Mongolia"
              fill
              className="object-cover"
            />
          </MotionSection>
        </div>
      </div>
    </section>
  );
}
