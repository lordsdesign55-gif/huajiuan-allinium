import { Link } from '@/i18n/routing';
import { PageHero } from '@/components/sections/PageHero';
import { MotionSection, MotionItem } from '@/components/motion/MotionSection';
import { Button } from '@/components/ui/Button';
import { CheckCircle2, Layers, Ruler, Wind } from 'lucide-react';

const benefits = [
  'Урьдчилан үйлдвэрлэсэн тул талбай дээр хурдан угсарна',
  'Чанарын хяналт үйлдвэрт хийгддэг',
  'Өндөр барилга, том нээлттэй фасадод тохиромжтой',
  'Салхи, ус нэвтрүүлэхгүй угсарлалт',
  'Хөдөлмөрийн зардал багасна, аюулгүй байдал сайжирна',
];

const specs = [
  { icon: Ruler, label: 'Панелийн өргөн', value: '1200 ~ 1800 мм' },
  { icon: Layers, label: 'Шилний давхарга', value: '2 / 3 давхар Low-E' },
  { icon: Wind, label: 'Салхины ачаалал', value: '±3.0 kPa хүртэл' },
];

const examples = [
  { title: 'Олон давхар оффисын барилга', location: 'Улаанбаатар' },
  { title: 'Худалдааны төвийн фасад', location: 'Улаанбаатар' },
  { title: 'Зочид буудлын өргөтгөл', location: 'Улаанбаатар' },
];

export default function UnitizedGlassSystemPage() {
  return (
    <>
      <PageHero
        title="Unitized Glass System"
        subtitle="Урьдчилан үйлдвэрлэсэн шилэн панелийн шийдэл — өндөр барилга, том нээлттэй фасадын итгэлийг бид бий болгоно."
      />

      <section className="container-site py-16 lg:py-24">
        <MotionSection className="max-w-3xl">
          <h2 className="text-2xl font-bold text-foreground lg:text-3xl">Танилцуулга</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Unitized Glass System нь шилэн пасадын панелийг үйлдвэрт бүрэн бэлдэж, талбай дээр зөвхөн угсарч буулгах систем юм. Энэ нь чанарын хяналтыг сайжруулж, угсралтын хугацааг богиносгож, өндөр барилга, нарийн инженерчлэлтэй фасадын төслүүдэд тохиромжтой.
          </p>
        </MotionSection>

        <MotionSection className="mt-16">
          <h2 className="text-2xl font-bold text-foreground lg:text-3xl">Давуу талууд</h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {benefits.map((benefit, index) => (
              <MotionItem key={benefit} delay={index * 0.08}>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span className="text-foreground/80">{benefit}</span>
                </li>
              </MotionItem>
            ))}
          </ul>
        </MotionSection>

        <MotionSection className="mt-16">
          <h2 className="text-2xl font-bold text-foreground lg:text-3xl">Техник үзүүлэлт</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {specs.map((spec, index) => (
              <MotionItem key={spec.label} delay={index * 0.1}>
                <div className="bg-muted p-6">
                  <spec.icon className="h-6 w-6 text-accent" />
                  <div className="mt-3 text-sm text-muted-foreground">{spec.label}</div>
                  <div className="mt-1 text-lg font-semibold text-foreground">{spec.value}</div>
                </div>
              </MotionItem>
            ))}
          </div>
        </MotionSection>

        <MotionSection className="mt-16">
          <h2 className="text-2xl font-bold text-foreground lg:text-3xl">Төслийн жишээ</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {examples.map((example, index) => (
              <MotionItem key={example.title} delay={index * 0.1}>
                <div className="border border-border p-6">
                  <div className="text-sm text-accent">{example.location}</div>
                  <div className="mt-2 font-semibold text-foreground">{example.title}</div>
                </div>
              </MotionItem>
            ))}
          </div>
        </MotionSection>

        <MotionSection className="mt-16 flex justify-center">
          <Button variant="primary" size="lg" asChild>
            <Link href="/contact">Үнийн санал авах</Link>
          </Button>
        </MotionSection>
      </section>
    </>
  );
}
