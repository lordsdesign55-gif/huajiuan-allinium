import { MotionSection } from '@/components/motion/MotionSection';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  kicker?: string;
}

export function PageHero({ title, subtitle, kicker }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-card py-24 lg:py-32">
      <div className="absolute inset-0 bg-[url('/images/project-7.jpg')] bg-cover bg-center opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-r from-card/95 via-card/80 to-card/60" />
      <div className="container-site relative">
        <MotionSection className="max-w-3xl">
          {kicker && (
            <span className="mb-4 inline-block text-sm font-bold uppercase tracking-widest text-accent">
              {kicker}
            </span>
          )}
          <h1 className="text-4xl font-bold text-white lg:text-5xl">{title}</h1>
          {subtitle && (
            <p className="mt-5 max-w-2xl text-lg text-white/80 leading-relaxed">{subtitle}</p>
          )}
        </MotionSection>
      </div>
    </section>
  );
}
