'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { MotionSection, MotionItem } from '@/components/motion/MotionSection';
import { Building2, Layers, Thermometer, Wrench, Frame } from 'lucide-react';

const serviceKeys = [
  { id: 'glass', icon: Building2, image: '/images/project-2.jpg' },
  { id: 'metalWindow', icon: Frame, image: '/images/project-3.jpg' },
  { id: 'metal', icon: Layers, image: '/images/project-5.jpg' },
  { id: 'insulation', icon: Thermometer, image: '/images/project-7.jpg' },
  { id: 'equipment', icon: Wrench, image: '/images/project-8.jpg' },
];

const standards = ['ASTM E2190', 'EN 1279-2', 'EN 673', 'CSA A440.2', 'GOST 30674', 'Passive House сертификат'];

const comparison = [
  { label: 'U-утга', v2: '1.4 W/m²K', v3: '0.9 W/m²K' },
  { label: 'Дуу чимээ тусгаарлалт', v2: '32 dB', v3: '40 dB' },
  { label: 'Нарны коэффициент (g)', v2: '0.62', v3: '0.48' },
  { label: 'Монголын уур амьсгалд', v2: 'Тохиромжтой', v3: 'Маш тохиромжтой' },
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
                      href={`/services#${service.id}`}
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

        <MotionSection className="mt-20 border-t border-border pt-16">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h3 className="text-2xl font-bold text-foreground lg:text-3xl">{t('lowE.title')}</h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">{t('lowE.intro')}</p>
              <ul className="mt-6 grid gap-3">
                {standards.map((standard) => (
                  <li key={standard} className="flex items-center gap-3 text-sm text-foreground">
                    <span className="h-1.5 w-1.5 bg-accent" />
                    {standard}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-muted p-6 lg:p-8">
              <h4 className="text-lg font-semibold text-foreground">{t('lowE.paneTitle')}</h4>
              <div className="mt-6 overflow-hidden">
                <table className="w-full text-left text-sm">
                  <thead className="border-b border-border">
                    <tr>
                      <th className="py-3 font-medium text-muted-foreground">{t('lowE.uValue')}</th>
                      <th className="py-3 font-medium text-foreground">{t('lowE.pane2')}</th>
                      <th className="py-3 font-medium text-foreground">{t('lowE.pane3')}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {comparison.map(({ label, v2, v3 }) => (
                      <tr key={label}>
                        <td className="py-3 text-muted-foreground">{label}</td>
                        <td className="py-3 text-foreground">{v2}</td>
                        <td className="py-3 font-medium text-accent">{v3}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-xs text-muted-foreground">{t('lowE.note')}</p>
            </div>
          </div>
        </MotionSection>

        <MotionSection className="mt-12 flex justify-center">
          <Button variant="primary" size="lg" asChild>
            <Link href="/services">{t('viewAll')}</Link>
          </Button>
        </MotionSection>
      </div>
    </section>
  );
}
