import { MotionSection } from '@/components/motion/MotionSection';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  kicker?: string;
}

export function PageHero({ title, subtitle, kicker }: PageHeroProps) {
  return (
    <section className="relative bg-card py-20 lg:py-28">
      <div className="container-site relative">
        <MotionSection className="max-w-3xl">
          {kicker && (
            <span className="mb-4 inline-block text-sm font-bold uppercase tracking-widest text-accent">
              {kicker}
            </span>
          )}
          <h1 className="text-3xl font-bold text-white lg:text-display-md">{title}</h1>
          {subtitle && (
            <p className="mt-4 max-w-2xl text-lg text-white/75 leading-relaxed">{subtitle}</p>
          )}
        </MotionSection>
      </div>
    </section>
  );
}
