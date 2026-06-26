import type { Metadata } from 'next';
import { Link } from '@/i18n/routing';
import Image from 'next/image';
import { LowESection } from '@/components/sections/LowESection';
import { MotionSection, MotionItem } from '@/components/motion/MotionSection';
import { Button } from '@/components/ui/Button';
import { EOSSLogo } from '@/components/icons/EOSSLogo';
import { ArrowRight, CheckCircle2, Award, Thermometer, Wind, Shield, Ruler, Droplets, Flame, Layers, Gem } from 'lucide-react';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === 'en';
  return {
    title: isEn ? 'Metal Windows EOSS ES101 | Huajiuan Allinium' : 'Металл цонх EOSS ES101 | Huajiuan Allinium',
    description: isEn
      ? 'EOSS ES101 Passive House certified metal thermal window. 101 mm frame, Uw 0.79 W/m²K, triple Low-E glass, designed for -40°C climates.'
      : 'EOSS ES101 Passive House сертификаттай металл дулаан цонх. 101 мм хүрээ, Uw 0.79 W/m²K, 3 давхар Low-E шил, -40°C уур амьсгалд.',
    alternates: {
      canonical: `/${locale}/metal-windows`,
      languages: { mn: '/mn/metal-windows', en: '/en/metal-windows' },
    },
  };
}

const specs = [
  { icon: Ruler, label: 'Хүрээний гүн', value: '101 мм' },
  { icon: Ruler, label: 'Дуганы гүн', value: '110 мм' },
  { icon: Ruler, label: 'Харагдах өргөн', value: '149.5 мм' },
  { icon: Thermometer, label: 'Дулаан тусгаарлагч зөвлүүр', value: '64 мм' },
  { icon: Thermometer, label: 'Бүх цонхны Uw утга', value: '0.79 W/(m²·K)' },
  { icon: Shield, label: 'Хөнгөн цагаан хайлш', value: '6060-T66' },
];

const glassConfig = [
  { layer: '5 мм Low-E', desc: 'Дулааны цацрагийг буцаана' },
  { layer: '16 мм Argon', desc: 'Warm-edge spacer — дулаан алдагдлыг багасгана' },
  { layer: '5 мм Low-E', desc: 'Давхар бүрээс, гэрлийг өнгөрүүлнэ' },
  { layer: '16 мм Argon', desc: 'Хоёрдугаар Argon давхарга' },
  { layer: '5 мм', desc: 'Гадна шил — хүчтэй, тэсвэртэй' },
];

const certifications = [
  { icon: Award, title: 'Passive House Institute (PHI)', desc: 'Германы PHI сертификаттай. Эрчим хүчний хэмнэлттэй, бага U-утгатай цонх.' },
  { icon: Flame, title: 'Галд тэсвэрлэлт', desc: 'ES101 галд тэсвэртэй passive цонх 1 цагийн галд тэсвэрлэх чадварыг хангасан.' },
  { icon: Shield, title: '6060-T66 хайлш', desc: 'Өндөр нарийвчлалтай, бат бөх хөнгөн цагаан профиль.' },
];

const advantages = [
  { icon: Droplets, title: 'Ус тусгаарлалт', desc: 'Гадаад профильд ус зайлуулах хөндий, сувгийн бүтэцтэй — ус буцахгүй.' },
  { icon: Wind, title: 'Салхи тусгаарлалт', desc: '3 талт битүүмжлэл, агаар/ус нэвтрүүлэлт маш бага.' },
  { icon: Thermometer, title: 'Дулаан тусгаарлалт', desc: '64 мм тусгай дулаан тусгаарлагч зөвлүүр, 0.79 Uw утга.' },
  { icon: Layers, title: 'Хөндлөнгийн холболт', desc: 'Corner bumping эсвэл screw connection — бат бөх, тэгш.' },
  { icon: Gem, title: 'Дизайн', desc: 'Саарал, хар, модон өнгө, өөрчлөн тохируулсан өнгө, шилний өнгө.' },
  { icon: Shield, title: 'Угсралт', desc: 'Хана-цонхны хооронд хөөсөнцөр бөглөх, битүүмжлэлийн цавуу.' },
];

const gallery = [
  { src: '/images/eoss-windows/gallery-1.jpg', alt: 'EOSS passive window profile' },
  { src: '/images/eoss-windows/gallery-3.jpg', alt: 'EOSS window detail' },
  { src: '/images/eoss-windows/gallery-4.jpg', alt: 'EOSS factory production' },
  { src: '/images/eoss-windows/gallery-7.jpg', alt: 'EOSS packing and shipping' },
  { src: '/images/eoss-windows/gallery-8.jpg', alt: 'EOSS installation detail' },
  { src: '/images/eoss-windows/gallery-9.jpg', alt: 'EOSS exhibition site' },
];

export default async function MetalWindowsPage({ params }: PageProps) {
  const { locale } = await params;
  const isEn = locale === 'en';

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[60vh] items-center overflow-hidden bg-card text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/services/service-window.jpg"
            alt="EOSS metal windows"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-card/95 via-card/85 to-card/60" />
        </div>
        <div className="container-site relative z-10 py-24">
          <MotionSection className="max-w-3xl">
            <div className="mb-4 text-accent">
              <EOSSLogo className="h-12 w-auto" />
            </div>
            <span className="mb-4 inline-block text-sm font-bold uppercase tracking-widest text-accent">EOSS ES101 Passive Window</span>
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Металл дулаан цонх
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/80">
              Passive House сертификаттай EOSS ES101 цонх — 101 мм хүрээ, 0.79 Uw утга, 3 давхар Low-E + Argon шил. Монголын -40°C хүйтэнд зориулсан дээд зэргийн дулаан тусгаарлалт.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button variant="primary" size="lg" asChild>
                <Link href="/contact">Үнийн санал авах <ArrowRight className="ml-2 inline h-5 w-5" /></Link>
              </Button>
              <Button variant="outline" size="lg" className="text-white border-white/30 hover:bg-white/10" asChild>
                <Link href="/services">Бүх үйлчилгээ харах</Link>
              </Button>
            </div>
          </MotionSection>
        </div>
      </section>

      <section className="container-site py-16 lg:py-24">
        {/* Intro */}
        <MotionSection className="max-w-3xl">
          <span className="text-sm font-bold uppercase tracking-widest text-accent">EOSS ES101</span>
          <h2 className="mt-3 text-3xl font-bold text-foreground lg:text-4xl">
            Passive House цонхны систем
          </h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            EOSS System Doors &amp; Windows — Shandong Huajian Aluminium Group-ийн харъяа компани. ES101 цуврал нь 101 мм гүнтэй, термобарьцалтай хөнгөн цагаан профиль, Passive House Institute (PHI)-ийн сертификаттай, маш бага U-утгатай цонхны систем юм.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Энэ систем нь агаар, ус, салхины битүүмжлэл, дулаан тусгаарлалт, галд тэсвэрлэлтээрээ олон улсын шаардлагыг бүрэн хангасан. Монголын хатуу уур амьсгалд тохирсон шийдэл бөгөөд эрчим хүчний хэмнэлттэй барилгад зориулагдсан.
          </p>
        </MotionSection>

        {/* Specs */}
        <MotionSection className="mt-20">
          <h3 className="text-2xl font-bold text-foreground lg:text-3xl">Техник үзүүлэлт</h3>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {specs.map((spec, index) => (
              <MotionItem key={spec.label} delay={index * 0.08}>
                <div className="h-full bg-muted p-6">
                  <spec.icon className="h-8 w-8 text-accent" />
                  <div className="mt-4 text-sm text-muted-foreground">{spec.label}</div>
                  <div className="mt-1 text-2xl font-bold text-foreground">{spec.value}</div>
                </div>
              </MotionItem>
            ))}
          </div>
        </MotionSection>

        {/* Glass config */}
        <MotionSection className="mt-20">
          <h3 className="text-2xl font-bold text-foreground lg:text-3xl">Шилний багцын бүтэц</h3>
          <p className="mt-4 max-w-3xl text-muted-foreground">
            5 мм Low-E + 16 мм Argon + 5 мм Low-E + 16 мм Argon + 5 мм — нийт 5 давхар, 2 Low-E бүрээс, 2 Argon хийн завсар, warm-edge spacer-той. Энэ багц нь бүх цонхны Uw утгыг 0.79 W/(m²·K) хүртэл бууруулна.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {glassConfig.map((item, index) => (
              <MotionItem key={index} delay={index * 0.08}>
                <div className="relative h-full bg-white p-6 shadow-sm">
                  <div className="text-sm font-bold text-accent">{index + 1}</div>
                  <div className="mt-2 font-semibold text-foreground">{item.layer}</div>
                  <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
                  {index < glassConfig.length - 1 && (
                    <div className="absolute -right-3 top-1/2 hidden -translate-y-1/2 text-accent lg:block">→</div>
                  )}
                </div>
              </MotionItem>
            ))}
          </div>
        </MotionSection>

        {/* Certifications */}
        <MotionSection className="mt-20">
          <h3 className="text-2xl font-bold text-foreground lg:text-3xl">Сертификат, баталгаа</h3>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {certifications.map((item, index) => (
              <MotionItem key={item.title} delay={index * 0.08}>
                <div className="flex h-full gap-4 bg-white p-6 shadow-sm">
                  <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center bg-accent/10 text-accent">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{item.title}</div>
                    <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              </MotionItem>
            ))}
          </div>
        </MotionSection>

        {/* Advantages */}
        <MotionSection className="mt-20">
          <h3 className="text-2xl font-bold text-foreground lg:text-3xl">Давуу талууд</h3>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {advantages.map((item, index) => (
              <MotionItem key={item.title} delay={index * 0.08}>
                <div className="flex h-full gap-4 bg-muted p-6">
                  <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center bg-accent/10 text-accent">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{item.title}</div>
                    <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              </MotionItem>
            ))}
          </div>
        </MotionSection>

        {/* Gallery */}
        <MotionSection className="mt-20">
          <h3 className="text-2xl font-bold text-foreground lg:text-3xl">Зургийн цомог</h3>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((img, index) => (
              <MotionItem key={img.src} delay={index * 0.08}>
                <div className="group relative aspect-[4/3] overflow-hidden bg-muted">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </MotionItem>
            ))}
          </div>
        </MotionSection>

        <LowESection />

        {/* Pricing */}
        <MotionSection className="mt-20 border-t border-border pt-16">
          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-accent">Төслийн үнэ</span>
            <h3 className="mt-3 text-3xl font-bold text-foreground lg:text-4xl">EOSS ES101 металл цонхны үнийн санал</h3>
            <p className="mx-auto mt-4 max-w-3xl text-muted-foreground">
              Үнэ нь цонхны тоо хэмжээ, хэмжээ, шилний сонголт, өнгө, угсралтын нөхцөл, валютын ханшаас хамааран уян хатан тохирно.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl rounded-lg border border-border bg-white p-8 text-center shadow-sm">
            <div className="text-sm text-muted-foreground">Бүтэн цонхны системийн үнэ</div>
            <div className="mt-2 text-4xl font-bold text-accent">950,000 – 2,350,000 ₮</div>
            <div className="mt-1 text-sm text-muted-foreground">м² тутамд</div>
            <ul className="mt-6 space-y-2 text-left text-sm text-muted-foreground">
              <li>• 101 мм хөнгөн цагаан профиль, термобарьцалт</li>
              <li>• 3 давхар Low-E + Argon шил, Warm-edge spacer</li>
              <li>• Passive House сертификат, ус/агаар нэвтрүүлэхгүй битүүмжлэл</li>
            </ul>
            <p className="mt-4 text-xs text-muted-foreground">* Олон тоогоор захиалсан төсөлд хөнгөлөлттэй үнэ тохирно.</p>
          </div>
        </MotionSection>

        {/* CTA */}
        <MotionSection className="mt-20 flex justify-center">
          <Button variant="primary" size="lg" asChild>
            <Link href="/contact">EOSS ES101 үнийн санал авах <ArrowRight className="ml-2 inline h-5 w-5" /></Link>
          </Button>
        </MotionSection>
      </section>
    </>
  );
}
