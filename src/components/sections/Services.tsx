'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { MotionSection, MotionItem } from '@/components/motion/MotionSection';
import { LowESection } from './LowESection';
import { Building2, Layers, Thermometer, Wrench, Frame } from 'lucide-react';

const serviceKeys = [
  { id: 'glass', icon: Building2, image: '/images/project-2.jpg', link: '/unitized-glass-system' },
  { id: 'metalWindow', icon: Frame, image: '/images/project-3.jpg', link: '/metal-windows' },
  { id: 'metal', icon: Layers, image: '/images/project-5.jpg', link: '/services' },
  { id: 'insulation', icon: Thermometer, image: '/images/project-7.jpg', link: '/services' },
  { id: 'equipment', icon: Wrench, image: '/images/project-8.jpg', link: '/services' },
];

export function Services() {
  const t = useTranslations('services');

  return (
    <section className="bg-background py-20 lg:py-28" id="services">
      <div className="container-site">
        <MotionSection className="mb-14 max-w-2xl">
          <span className="text-sm font-bold uppercase tracking-widest text-accent">{t('title')}</span>
          <h2 className="mt-3 text-3xl font-bold text-foreground lg:text-display-md">
            {t('subtitle')}
          </h2>
        </MotionSection>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {serviceKeys.map((service, index) => (
            <MotionItem key={service.id} delay={index * 0.08}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
                className="group relative flex h-full flex-col overflow-hidden bg-card text-white"
              >
                <div className="relative h-40 w-full">
                  <Image
                    src={service.image}
                    alt={t(`items.${service.id}.title`)}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center bg-white/10 text-accent">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{t(`items.${service.id}.title`)}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-white/80">{t(`items.${service.id}.description`)}</p>
                  <div className="mt-6">
                    <Link
                      href={service.link}
                      className="text-sm font-medium text-accent hover:text-white transition-colors"
                    >
                      {t('details')} →
                    </Link>
                  </div>
                </div>
              </motion.div>
            </MotionItem>
          ))}
        </div>

        <LowESection />

        <MotionSection className="mt-12 flex justify-center">
          <Button variant="primary" size="lg" asChild>
            <Link href="/services">{t('viewAll')}</Link>
          </Button>
        </MotionSection>
      </div>
    </section>
  );
}
