import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { MotionSection } from '@/components/motion/MotionSection';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-card text-card-foreground">
      <div className="absolute inset-0 bg-gradient-to-br from-card via-[#1a1f2e] to-card" />
      <div className="container-site relative flex min-h-[80vh] flex-col justify-center py-24 lg:py-32">
        <MotionSection className="max-w-3xl">
          <span className="mb-6 inline-block text-sm font-bold uppercase tracking-widest text-accent">
            #HUAJIUANALLINIUM
          </span>
          <h1 className="text-4xl font-bold leading-[1.05] text-white sm:text-5xl lg:text-display-lg">
            EOSS шилен пасад — Гадна өнгөлгөөний ирээдүй
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/75 lg:text-xl leading-relaxed">
            Бид Хятадын Huajian Aluminium компанийн EOSS брендийн шилэн пасадын бүтээгдэхүүнийг Монгол улсад албан ёсоор нэвтрүүлж, борлуулж, угсарч байна. Чанар, стандарт, бүтээмж — бидний амлалт.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button variant="primary" size="lg" asChild>
              <Link href="/contact">Үнийн санал авах</Link>
            </Button>
            <Button variant="outline" size="lg" className="text-white border-white/30 hover:bg-white/10 hover:text-white" asChild>
              <Link href="/about">Бидний тухай</Link>
            </Button>
          </div>
        </MotionSection>
      </div>
    </section>
  );
}
