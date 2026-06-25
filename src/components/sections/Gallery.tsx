'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import Image from 'next/image';
import { MotionSection, MotionItem } from '@/components/motion/MotionSection';
import { Button } from '@/components/ui/Button';

const homepageProjects = [
  { title: 'EOSS шилен пасадан барилга', system: 'EOSS шилен пасад', location: 'Улаанбаатар', image: '/images/project-2.jpg' },
  { title: 'Худалдааны төв', system: 'Unitized Glass System', location: 'Улаанбаатар', image: '/images/project-3.jpg' },
  { title: 'Орон сууцны хороолол', system: '3 давхар Low-E шил', location: 'Улаанбаатар', image: '/images/project-4.jpg' },
  { title: 'Спортын цогцолбор', system: 'Металл пасад', location: 'Улаанбаатар', image: '/images/project-5.jpg' },
];

export function Gallery() {
  const t = useTranslations('gallery');

  return (
    <section className="bg-background py-20 lg:py-28" id="gallery">
      <div className="container-site">
        <div className="mb-12 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <MotionSection className="max-w-2xl">
            <span className="text-sm font-bold uppercase tracking-widest text-accent">{t('title')}</span>
            <h2 className="mt-3 text-3xl font-bold text-foreground lg:text-display-md">
              {t('subtitle')}
            </h2>
          </MotionSection>

          <MotionSection>
            <Button variant="outline" className="border-foreground/20 text-foreground hover:bg-muted" asChild>
              <Link href="/gallery">{t('cta')}</Link>
            </Button>
          </MotionSection>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {homepageProjects.map((project, index) => (
            <MotionItem key={project.title} delay={index * 0.1}>
              <Link href="/gallery" className="group relative block aspect-[4/3] overflow-hidden bg-muted">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/30 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-accent">{project.system}</span>
                  <h3 className="mt-2 text-xl font-semibold text-white">{project.title}</h3>
                  <p className="mt-1 text-sm text-white/70">{project.location}</p>
                </div>
              </Link>
            </MotionItem>
          ))}
        </div>
      </div>
    </section>
  );
}
