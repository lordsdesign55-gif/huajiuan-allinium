import type { Metadata } from 'next';
import { Link } from '@/i18n/routing';
import Image from 'next/image';
import { PageHero } from '@/components/sections/PageHero';
import { LowESection } from '@/components/sections/LowESection';
import { MotionSection, MotionItem } from '@/components/motion/MotionSection';
import { Button } from '@/components/ui/Button';
import { CheckCircle2, Layers, Ruler, Wind, Factory, Truck, HardHat, Clock, Shield, TrendingUp, ArrowRight, Zap, Thermometer, Snowflake, FileCheck } from 'lucide-react';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === 'en';
  return {
    title: isEn ? 'Unitized Glass System | Huajiuan Allinium' : 'Unitized Glass System | Huajiuan Allinium',
    description: isEn
      ? 'EOSS unitized glass curtain wall system — factory-pre assembled panels, fast installation, Passive House certified for -40°C to +40°C.'
      : 'EOSS unitized glass curtain wall system — үйлдвэрт урьдчилан угсарсан панел, хурдан угсралт, Passive House сертификаттай.',
    alternates: {
      canonical: `/${locale}/unitized-glass-system`,
      languages: { mn: '/mn/unitized-glass-system', en: '/en/unitized-glass-system' },
    },
  };
}

const benefits = [
  { icon: Clock, title: 'Хурдан угсралт', desc: 'Урьдчилан үйлдвэрлэсэн тул талбай дээр угсарлалтын хугацаа 30-50% богиносдог.' },
  { icon: Factory, title: 'Үйлдвэрийн чанар', desc: 'Чанарын хяналт хяналттай орчинд хийгддэг тул гар алдаа багатай.' },
  { icon: Shield, title: 'Ус, салхи тусгаарлах', desc: 'Бүрэн битүүмжилсэн панел нь ус нэвтрүүлэх, салхи дуугарах эрсдэлийг багасгадаг.' },
  { icon: TrendingUp, title: 'Өндөр барилгад тохиромжтой', desc: '50+ давхарын цамхаг, том нээлттэй фасадын инженерчлэлд зориулагдсан.' },
  { icon: HardHat, title: 'Аюулгүй байдал', desc: 'Талбай дээрх ажлын хэмжээ багасч, ослын эрсдэл буурдаг.' },
  { icon: Truck, title: 'Тээвэрлэлтийн зохицуулалт', desc: 'Панелийг хамгаалалттай тээвэрлэж, угсарлалтын дараалалд оруулж ирдэг.' },
];

const process = [
  { step: '01', title: 'Төсөл дизайн', desc: 'Инженерчлэл, U-утга, салхины ачааллын тооцоо' },
  { step: '02', title: 'Үйлдвэрт бэлдэх', desc: 'Профиль, шил, резин, төмөр тогтоогч бүрэн угсарна' },
  { step: '03', title: 'Чанарын хяналт', desc: 'Ус нэвтрүүлэх, салхины даралтын туршилт' },
  { step: '04', title: 'Тээвэрлэлт', desc: 'Панелийг хамгаалалттай хүргэж, кранаар өргөнө' },
  { step: '05', title: 'Талбай дээр угсрах', desc: 'Нэг панелийг дунджаар 15-20 минутад бэхлэнэ' },
];

const specs = [
  { icon: Ruler, label: 'Панелийн өргөн', value: '1200 ~ 1800 мм' },
  { icon: Layers, label: 'Шилний давхарга', value: '2 / 3 давхар Low-E' },
  { icon: Wind, label: 'Салхины ачаалал', value: '±3.0 kPa хүртэл' },
  { icon: Shield, label: 'Ус нэвтрүүлэх', value: 'A级 битүүмжлэл' },
  { icon: Ruler, label: 'Профилийн зузаан', value: '50 ~ 80 мм' },
  { icon: Layers, label: 'Дулаан тусгаарлалт', value: 'U ≤ 1.0 W/m²K' },
];

const examples = [
  { title: 'Олон улсын оффисын цамхаг', location: 'Улаанбаатар', image: '/images/project-2.jpg' },
  { title: 'Худалдааны төвийн фасад', location: 'Улаанбаатар', image: '/images/project-3.jpg' },
  { title: 'Зочид буудлын өргөтгөл', location: 'Улаанбаатар', image: '/images/project-6.jpg' },
];

const installations = [
  { title: 'Unitized панелийг кранаар өргөж байна', location: 'Талбай дээр', image: '/images/unitized/install-1.jpg' },
  { title: 'Панел угсарч буй момент', location: 'Улаанбаатар', image: '/images/unitized/install-2.jpg' },
  { title: 'Site installation багийн ажиллагаа', location: 'Талбай дээр', image: '/images/unitized/install-3.jpg' },
  { title: 'Профиль, шилний деталь', location: 'Үйлдвэр', image: '/images/unitized/install-4.jpg' },
  { title: 'Фасадын угсралтын төлөвлөгөө', location: 'Инженерчлэл', image: '/images/unitized/install-5.jpg' },
  { title: 'Панелийн тээвэрлэлт, бэлтгэл', location: 'Логистик', image: '/images/unitized/install-6.jpg' },
];

const comparison = [
  { feature: 'Угсралтын хугацаа', unitized: 'Богино (панел бэлэн)', stick: 'Урт (талбай дээр нийлүүлнэ)' },
  { feature: 'Чанарын хяналт', unitized: 'Үйлдвэрт хяналттай', stick: 'Талбайн нөхцөлд хамаарна' },
  { feature: 'Аюулгүй байдал', unitized: 'Дээд', stick: 'Дундаж' },
  { feature: 'Өндөр барилгад тохиромж', unitized: 'Маш сайн', stick: 'Хязгаарлагдмал' },
  { feature: 'Ус, салхи тусгаарлалт', unitized: 'Бүрэн битүүмжилсэн', stick: 'Хөндлөнгийн резинээс хамаарна' },
  { feature: 'Эрчим хүчний хэмнэлт', unitized: 'Өндөр (U ≤ 1.0 W/m²K)', stick: 'Дундаж (U = 1.6–2.2 W/m²K)' },
];

const lowEComparison = [
  { indicator: 'U-утга (дулаан алдагдал)', regular: '2.7 – 3.0 W/m²K', lowE: '1.0 – 1.4 W/m²K', note: 'Low-E нь 2.5-3 дахин бага дулаан алдагдалтай' },
  { indicator: 'Гэрлийн нэвтрүүлэлт (LT)', regular: '80 – 90%', lowE: '70 – 80%', note: 'Тохиромжтой өнгөт бүрхүүлээр гэрлийн алдагдал багатай' },
  { indicator: 'Нарны дулаан нэвтрүүлэлт (g-утга)', regular: '0.75 – 0.85', lowE: '0.35 – 0.60', note: 'Зундаа хэт халалтыг багасгадаг' },
  { indicator: 'UV хамгаалалт', regular: '20 – 40%', lowE: '70 – 95%', note: 'Дотор эд хогшил, шалны өнгөө хамгаална' },
  { indicator: 'Халаалтын хэмнэлт', regular: 'Үндсэн', lowE: '30 – 45%', note: 'Өвлийн улиралд илүү их хэмнэнэ' },
  { indicator: 'Хөргөлтийн хэмнэлт', regular: 'Үндсэн', lowE: '20 – 30%', note: 'Нарны хэт дулааныг бууруулна' },
];

const faqs = [
  { q: 'Unitized систем ямар барилгад тохиромжтой вэ?', a: 'Өндөр цамхаг, том нээлттэй фасадтай оффис, худалдааны төв, зочид буудал, эмнэлэг зэрэг төслүүдэд хамгийн тохиромжтой.' },
  { q: 'Угсралт хэд хоног үргэлжлэх вэ?', a: 'Барилгын өндөр, фасадын талбайгаас хамаарна. Жишээ нь 20 давхар барилгын нэг талын фасадыг 4-6 долоо хоногт дуусгаж болно.' },
  { q: 'Монголын уур амьсгалд тохируулсан уу?', a: 'Тийм. EOSS unitized систем нь -40°C хүйтэн, +40°C халуун, хүчтэй салхинд тэсвэрлэхэд тохируулсан резин, хөндлөнгийн холболт, шилний багцтай.' },
];

const siberianStandards = [
  { code: 'GOST 23166-2024', desc: 'Цонх, балконы хаалганы блок. Ерөнхий шаардлага.' },
  { code: 'GOST 21519-2022', desc: 'Хөнгөн цагаан профильт цонхны блок. Техникийн нөхцөл.' },
  { code: 'GOST 30674-2023', desc: 'PVC профильт цонх, балконы хаалга. Техникийн нөхцөл.' },
  { code: 'GOST 24866-2014', desc: 'Холбосон дулаалсан шилэн багц. Ерөнхий шаардлага.' },
  { code: 'GOST 26602.1-2023', desc: 'Цонх, хаалганы дулаан тусгаарлалтын эсэргүүцэл тодорхойлох арга.' },
  { code: 'GOST 26602.2-99', desc: 'Цонх, хаалганы агаар, ус нэвтрүүлэлтийг тодорхойлох арга.' },
  { code: 'GOST 26602.5-2001', desc: 'Цонх, хаалганы салхины ачаалалд тэсвэрлэх чадварыг тодорхойлох арга.' },
  { code: 'GOST 31427-2020', desc: 'Цонх, гадаад хаалга. Эрчим хүчний үр ашгийн ангилал.' },
  { code: 'SP 131.13330.2020', desc: 'Барилгын уур амьсгал. Сибирь, Оросын бүс нутгийн тооцооны температур.' },
  { code: 'SP 50.13330.2012', desc: 'Барилгын дулаан хамгаалалт. Цонх, ханааны шаардлагатай R-утга.' },
  { code: 'SP 20.13330.2016', desc: 'Ачаалал, нөлөөлөл. Салхи, цасны тооцоо.' },
  { code: 'GOST R 59134-2020', desc: 'Гадаад шилэн пасад. Модуль, элемент угсрах дүрэм, хяналт.' },
];

const coldClimateFeatures = [
  { icon: Snowflake, title: '-40°C хүйтэнд тэсвэртэй', desc: 'EPDM резин, термобарьцалтай профиль, хөлдөлт/хайлалтын мөчлөгөнд тэсвэртэй.' },
  { icon: Thermometer, title: 'Өндөр дулаан тусгаарлалт', desc: '3 давхар Low-E + Argon, U ≤ 1.0 W/m²K — SP 50.13330-ийн хатуу бүс нутгийн шаардлагыг хангана.' },
  { icon: Wind, title: 'Хүчтэй салхины ачаалал', desc: '±3.0 kPa хүртэл, GOST 26602.5-ийн туршилтын аргаар баталгаажсан.' },
  { icon: FileCheck, title: 'Бүрэн битүүмжлэл', desc: 'Агаар, ус нэвтрүүлэлтийг үйлдвэрт 100% шалгаж, GOST 26602.2-ийн шаардлагыг хангасан.' },
];

export default async function UnitizedGlassSystemPage({ params }: PageProps) {
  const { locale } = await params;
  const isEn = locale === 'en';

  return (
    <>
      {/* Hero with video */}
      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-card text-white">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/images/project-2.jpg"
          className="absolute inset-0 h-full w-full object-cover opacity-60"
        >
          <source src="/videos/unitized-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/70 to-card/30" />
        <div className="container-site relative z-10 py-24 text-center">
          <MotionSection className="mx-auto max-w-4xl">
            <span className="mb-4 inline-block text-sm font-bold uppercase tracking-widest text-accent">Unitized Curtain Wall System</span>
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Unitized Glass System
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">
              Урьдчилан үйлдвэрлэсэн шилэн панелийн шийдэл — өндөр барилга, том нээлттэй фасадын итгэлийг бид бий болгоно.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button variant="primary" size="lg" asChild>
                <Link href="/contact">Үнийн санал авах</Link>
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
          <span className="text-sm font-bold uppercase tracking-widest text-accent">Танилцуулга</span>
          <h2 className="mt-3 text-3xl font-bold text-foreground lg:text-4xl">
            Үйлдвэрт бэлдсэн, талбай дээр угсарсан шийдэл
          </h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            Unitized Glass System нь шилэн пасадын панелийг үйлдвэрт бүрэн бэлдэж, талбай дээр зөвхөн угсарч буулгах систем юм. Энэ нь чанарын хяналтыг сайжруулж, угсралтын хугацааг богиносгож, өндөр барилга, нарийн инженерчлэлтэй фасадын төслүүдэд тохиромжтой.
          </p>
        </MotionSection>

        {/* Process */}
        <MotionSection className="mt-20">
          <h3 className="text-2xl font-bold text-foreground lg:text-3xl">Угсралтын явц</h3>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {process.map((item, index) => (
              <MotionItem key={item.step} delay={index * 0.08}>
                <div className="relative bg-muted p-6">
                  <div className="text-4xl font-bold text-accent/30">{item.step}</div>
                  <div className="mt-2 font-semibold text-foreground">{item.title}</div>
                  <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </MotionItem>
            ))}
          </div>
        </MotionSection>

        {/* Installation gallery */}
        <MotionSection className="mt-20">
          <h3 className="text-2xl font-bold text-foreground lg:text-3xl">Угсралтын зураг</h3>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {installations.map((item, index) => (
              <MotionItem key={item.title} delay={index * 0.08}>
                <div className="group relative aspect-[4/3] overflow-hidden bg-muted">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-5">
                    <div className="text-xs font-bold uppercase tracking-wider text-accent">{item.location}</div>
                    <div className="mt-1 text-base font-semibold text-white">{item.title}</div>
                  </div>
                </div>
              </MotionItem>
            ))}
          </div>
        </MotionSection>

        {/* Benefits */}
        <MotionSection className="mt-20">
          <h3 className="text-2xl font-bold text-foreground lg:text-3xl">Давуу талууд</h3>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((item, index) => (
              <MotionItem key={item.title} delay={index * 0.08}>
                <div className="flex h-full gap-4 bg-white p-6 shadow-sm">
                  <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center bg-accent/10 text-accent"
                  >
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

        {/* Specs */}
        <MotionSection className="mt-20">
          <h3 className="text-2xl font-bold text-foreground lg:text-3xl">Техник үзүүлэлт</h3>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {specs.map((spec, index) => (
              <MotionItem key={spec.label} delay={index * 0.08}>
                <div className="bg-muted p-6">
                  <spec.icon className="h-6 w-6 text-accent" />
                  <div className="mt-3 text-sm text-muted-foreground">{spec.label}</div>
                  <div className="mt-1 text-lg font-semibold text-foreground">{spec.value}</div>
                </div>
              </MotionItem>
            ))}
          </div>
        </MotionSection>

        {/* Low-E vs regular glass */}
        <MotionSection className="mt-20">
          <span className="text-sm font-bold uppercase tracking-widest text-accent">Шилний сонголт</span>
          <h3 className="mt-3 text-2xl font-bold text-foreground lg:text-3xl">
            Low-E шил vs энгийн шил — ялгаа нь юу вэ?
          </h3>
          <p className="mt-4 max-w-3xl text-muted-foreground">
            Low-E (Low-Emissivity) шил нь гадаргуун дээрх нимгэн металл бүрхүүлээр дулааны цацрагийг буцааж, өрөөний дулааныг дотор үлдээдэг. Энгийн 2 давхар шилтэй харьцуулахад U-утга 2.5–3 дахин сайжирч, эрчим хүчний зардал эрс буурна.
          </p>

          <div className="mt-8 overflow-hidden rounded-lg border border-cyan-200 bg-cyan-50/50 shadow-sm">
            <table className="w-full text-left text-sm">
              <thead className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
                <tr>
                  <th className="px-6 py-4 font-medium">Үзүүлэлт</th>
                  <th className="px-6 py-4 font-medium">Энгийн шил</th>
                  <th className="px-6 py-4 font-medium">Low-E шил</th>
                  <th className="px-6 py-4 font-medium">Тайлбар</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-cyan-100">
                {lowEComparison.map((row, index) => (
                  <tr key={row.indicator} className={index % 2 === 0 ? 'bg-white' : 'bg-cyan-50/60'}>
                    <td className="px-6 py-4 text-slate-700">{row.indicator}</td>
                    <td className="px-6 py-4 text-slate-600">{row.regular}</td>
                    <td className="px-6 py-4 font-semibold text-cyan-700">{row.lowE}</td>
                    <td className="px-6 py-4 text-slate-600">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            <MotionItem delay={0}>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-6">
                <div className="text-sm text-slate-600">Энгийн 2 давхар шил</div>
                <div className="mt-1 text-2xl font-bold text-slate-800">U ≈ 2.8</div>
                <div className="text-sm text-slate-500">W/m²K</div>
              </div>
            </MotionItem>
            <MotionItem delay={0.08}>
              <div className="rounded-lg border border-cyan-200 bg-gradient-to-br from-cyan-50 to-blue-50 p-6">
                <div className="text-sm text-cyan-800">2 давхар Low-E + Argon</div>
                <div className="mt-1 text-2xl font-bold text-cyan-700">U ≈ 1.4</div>
                <div className="text-sm text-cyan-600">W/m²K</div>
              </div>
            </MotionItem>
            <MotionItem delay={0.16}>
              <div className="rounded-lg border border-cyan-200 bg-gradient-to-br from-cyan-100 to-blue-100 p-6">
                <div className="text-sm text-cyan-900">3 давхар Low-E + Argon</div>
                <div className="mt-1 text-2xl font-bold text-cyan-800">U ≤ 1.0</div>
                <div className="text-sm text-cyan-700">W/m²K</div>
              </div>
            </MotionItem>
          </div>
        </MotionSection>

        {/* Siberian / GOST standards */}
        <MotionSection className="mt-20">
          <span className="text-sm font-bold uppercase tracking-widest text-accent">Сибирийн стандарт</span>
          <h3 className="mt-3 text-2xl font-bold text-foreground lg:text-3xl">
            Хүйтэн уур амьсгалд зориулсан цонх, шилэн пасадын стандарт
          </h3>
          <p className="mt-4 max-w-3xl text-muted-foreground">
            Монголын уур амьсгал Сибирьтэй ойролцоо учраас бид Оросын GOST болон SP стандартад нийцсэн бүтээгдэхүүн, угсралтын шийдлийг санал болгодог. EOSS unitized систем нь дараах хүйтэн уур амьсгалын шаардлагыг хангана.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {coldClimateFeatures.map((item, index) => (
              <MotionItem key={item.title} delay={index * 0.08}>
                <div className="flex h-full flex-col rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                  <item.icon className="h-8 w-8 text-slate-600" />
                  <div className="mt-4 font-semibold text-slate-800">{item.title}</div>
                  <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
                </div>
              </MotionItem>
            ))}
          </div>

          <div className="mt-8 overflow-hidden rounded-lg border border-slate-300 bg-slate-50/50 shadow-sm">
            <table className="w-full text-left text-sm">
              <thead className="bg-gradient-to-r from-slate-700 to-slate-800 text-white">
                <tr>
                  <th className="px-6 py-4 font-medium">Стандарт</th>
                  <th className="px-6 py-4 font-medium">Тайлбар</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {siberianStandards.map((row, index) => (
                  <tr key={row.code} className={index % 2 === 0 ? 'bg-white' : 'bg-slate-100/60'}>
                    <td className="px-6 py-4 font-medium text-slate-800">{row.code}</td>
                    <td className="px-6 py-4 text-slate-600">{row.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </MotionSection>

        {/* Energy efficiency */}
        <MotionSection className="mt-20">
          <h3 className="text-2xl font-bold text-foreground lg:text-3xl">EOSS систем — эрчим хүчний хэмнэлт</h3>
          <p className="mt-4 max-w-3xl text-muted-foreground">
            EOSS unitized систем нь Passive House стандартад нийцсэн, 2/3 давхар Low-E шил, Argon хийн дүүргэлттэй багц болон термобарьцалтай профилиэр бүрддэг. Энэ нь барилгын дулаан алдагдлыг эрс багасгаж, өвөлдөө халаалтын зардлыг 30–45%, зундөө хөргөлтийн зардлыг 20–30% хүртэл хэмнэнэ.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <MotionItem delay={0}>
              <div className="flex h-full flex-col bg-muted p-6">
                <Thermometer className="h-8 w-8 text-accent" />
                <div className="mt-4 text-sm text-muted-foreground">U-утга</div>
                <div className="mt-1 text-2xl font-bold text-foreground">≤ 1.0 W/m²K</div>
                <p className="mt-2 text-sm text-muted-foreground">Passive House түвшний дулаан тусгаарлалт</p>
              </div>
            </MotionItem>
            <MotionItem delay={0.08}>
              <div className="flex h-full flex-col bg-muted p-6">
                <Wind className="h-8 w-8 text-accent" />
                <div className="mt-4 text-sm text-muted-foreground">Салхины ачаалал</div>
                <div className="mt-1 text-2xl font-bold text-foreground">±3.0 kPa</div>
                <p className="mt-2 text-sm text-muted-foreground">Монголын хүчтэй салхинд тэсвэртэй</p>
              </div>
            </MotionItem>
            <MotionItem delay={0.16}>
              <div className="flex h-full flex-col bg-muted p-6">
                <Zap className="h-8 w-8 text-accent" />
                <div className="mt-4 text-sm text-muted-foreground">Халаалтын хэмнэлт</div>
                <div className="mt-1 text-2xl font-bold text-foreground">30–45%</div>
                <p className="mt-2 text-sm text-muted-foreground">Өвлийн улиралд дулааны алдагдал багатай</p>
              </div>
            </MotionItem>
            <MotionItem delay={0.24}>
              <div className="flex h-full flex-col bg-muted p-6">
                <Shield className="h-8 w-8 text-accent" />
                <div className="mt-4 text-sm text-muted-foreground">Ус нэвтрүүлэх</div>
                <div className="mt-1 text-2xl font-bold text-foreground">A级</div>
                <p className="mt-2 text-sm text-muted-foreground">Бүрэн битүүмжилсэн панел</p>
              </div>
            </MotionItem>
          </div>
        </MotionSection>

        {/* Comparison */}
        <MotionSection className="mt-20">
          <h3 className="text-2xl font-bold text-foreground lg:text-3xl">Unitized vs Traditional Stick-built</h3>
          <div className="mt-8 overflow-hidden border border-border">
            <table className="w-full text-left text-sm">
              <thead className="bg-card text-white">
                <tr>
                  <th className="px-6 py-4 font-medium">Үзүүлэлт</th>
                  <th className="px-6 py-4 font-medium text-accent">Unitized System</th>
                  <th className="px-6 py-4 font-medium">Stick-built System</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {comparison.map((row) => (
                  <tr key={row.feature}>
                    <td className="px-6 py-4 text-muted-foreground">{row.feature}</td>
                    <td className="px-6 py-4 font-medium text-foreground">{row.unitized}</td>
                    <td className="px-6 py-4 text-foreground/70">{row.stick}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </MotionSection>

        {/* Project examples */}
        <MotionSection className="mt-20">
          <h3 className="text-2xl font-bold text-foreground lg:text-3xl">Төслийн жишээ</h3>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {examples.map((example, index) => (
              <MotionItem key={example.title} delay={index * 0.1}>
                <div className="group relative aspect-[4/3] overflow-hidden bg-muted">
                  <Image
                    src={example.image}
                    alt={example.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-5">
                    <div className="text-xs font-bold uppercase tracking-wider text-accent">{example.location}</div>
                    <div className="mt-1 text-lg font-semibold text-white">{example.title}</div>
                  </div>
                </div>
              </MotionItem>
            ))}
          </div>
        </MotionSection>

        {/* FAQ */}
        <MotionSection className="mt-20 max-w-3xl">
          <h3 className="text-2xl font-bold text-foreground lg:text-3xl">Түгээмэл асуултууд</h3>
          <div className="mt-8 space-y-4">
            {faqs.map((faq, index) => (
              <MotionItem key={index} delay={index * 0.08}>
                <div className="border border-border p-6">
                  <div className="flex items-start gap-3">
                    <ArrowRight className="mt-1 h-5 w-5 shrink-0 text-accent" />
                    <div>
                      <div className="font-semibold text-foreground">{faq.q}</div>
                      <p className="mt-2 text-muted-foreground">{faq.a}</p>
                    </div>
                  </div>
                </div>
              </MotionItem>
            ))}
          </div>
        </MotionSection>

        <LowESection />

        {/* CTA */}
        <MotionSection className="mt-20 flex justify-center">
          <Button variant="primary" size="lg" asChild>
            <Link href="/contact">Unitized системийн үнийн санал авах <ArrowRight className="ml-2 inline h-5 w-5" /></Link>
          </Button>
        </MotionSection>
      </section>
    </>
  );
}
