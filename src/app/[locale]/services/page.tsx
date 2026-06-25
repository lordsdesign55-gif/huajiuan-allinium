'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import Image from 'next/image';
import { MotionSection, MotionItem } from '@/components/motion/MotionSection';
import { Button } from '@/components/ui/Button';
import { ArrowRight, CheckCircle2, Building2, Frame, Layers, Thermometer, Wrench } from 'lucide-react';

const services = [
  {
    id: 'glass',
    icon: Building2,
    image: '/images/services/service-glass.jpg',
    features: ['Passive House сертификат', '2 / 3 давхар Low-E шил', '±3.0 kPa салхины ачаалал', 'Ус нэвтрүүлэхгүй битүүмжлэл'],
  },
  {
    id: 'metalWindow',
    icon: Frame,
    image: '/images/services/service-window.jpg',
    features: ['10 см хөнгөн цагаан профиль', '3 давхар Low-E + Argon', 'U-утга ≤ 1.0 W/m²K', '-40°C хүйтэнд тэсвэртэй'],
  },
  {
    id: 'metal',
    icon: Layers,
    image: '/images/services/service-metal.jpg',
    features: ['Alucobond A2 / PLUS хавтан', 'Хөнгөн цагаан композит', 'Европ стандарт (EN 13501)', 'Уян хатан дизайн, удаан эдэлгээ'],
  },
  {
    id: 'insulation',
    icon: Thermometer,
    image: '/images/services/service-insulation.jpg',
    features: ['Rockwool стандарт', 'Дулаан тусгаарлалт', 'Дуу чимээ тусгаарлалт', 'Эрчим хүчний хэмнэлт'],
  },
  {
    id: 'equipment',
    icon: Wrench,
    image: '/images/services/service-equipment.jpg',
    features: ['Төмөр тогтоогч бүрдэл', 'Резин хөндлөнгийн холболт', 'Ус зайлуулах профиль', 'Бүх дагалдах хэрэгсэл'],
  },
];

const alucobondImages = [
  { src: '/images/alucobond/facade-1.jpg', alt: 'Alucobond modern facade' },
  { src: '/images/alucobond/facade-2.jpg', alt: 'Alucobond architectural cladding' },
  { src: '/images/alucobond/facade-3.jpg', alt: 'Alucobond facade detail' },
  { src: '/images/alucobond/facade-4.jpg', alt: 'Alucobond composite panel facade' },
];

const alucobondProducts = [
  { name: 'ALUCOBOND® A2', desc: 'Галд тэсвэртэй, хөнгөн цагаан композит хавтан. B-s1,d0 ангилал (EN 13501-1).' },
  { name: 'ALUCOBOND® PLUS', desc: 'Өндөр бат бөх чанар, 4 мм зузаантай, олон төрлийн өнгө, металлик болон аноджуулсан дуурайлтууд.' },
  { name: 'ALUCORE®', desc: 'Зуурмаг бус хөнгөн цагаан сэндвич хавтан. Том хэмжээний хавтангуудад илүү сайн тэгш байдал.' },
];

const euStandards = [
  { code: 'EN 13501-1', desc: 'Галын ангилал (B-s1,d0 хүртэл).' },
  { code: 'EN 13830', desc: 'Металл пасадын системийн ерөнхий шаардлага.' },
  { code: 'EN 14509', desc: 'Сэндвич хавтангийн дулаан тусгаарлалт, агаар/ус нэвтрүүлэлт.' },
  { code: 'EN 1991-1-4', desc: 'Салхины ачааллын тооцоо (Eurocode 1).' },
  { code: 'EN 1096', desc: 'Бүрээстэй шил — Low-E шилний оптик/энерги үзүүлэлт.' },
  { code: 'EN 1279', desc: 'Дулаалсан шилэн багцын чанар, чийгний тэсвэрлэлт.' },
];

const metalWindows = [
  { title: 'Металл дулаан цонх', desc: 'EOSS 10 см хөнгөн цагаан профиль, 3 давхар Low-E + Argon. Passive House сертификаттай.' },
  { title: 'Хөнгөн цагаан фасад цонх', desc: 'Alucobond пасадтай уялдуулсан, ус/агаар нэвтрүүлэхгүй битүүмжлэл.' },
  { title: 'Урсах цонх', desc: 'Дуу чимээ, дулаан тусгаарлалт сайтай, том нээлттэй тагт, ложонд зориулсан.' },
  { title: 'Аюулгүй байдлын цонх', desc: 'Хатсан шил, мултиплекс шилтэй сонголт — ослын эрсдэлийг бууруулна.' },
];

const facadeTechLayers = [
  { step: '01', title: 'Бетон хана', desc: 'Барилгын суурь бүтэц — зоомол, блок, бетон.' },
  { step: '02', title: 'Дулаалга', desc: 'Rockwool/минерал өвс — дулаан, дуу чимээ тусгаарлалт.' },
  { step: '03', title: 'Тогтоогч бүрдэл', desc: 'Хөнгөн цагаан/ган Z-профиль, тохируулгатай тулгуур.' },
  { step: '04', title: 'Агаарын завсар', desc: 'Ус зайлуулах, агаар сэлгэх 30–50 мм завсар — rainscreen зарчим.' },
  { step: '05', title: 'Alucobond хавтан', desc: '4 мм хөнгөн цагаан композит хавтан — нуусан тогтоогч, 6–12 мм халуун өргөтгөлийн завсар.' },
];

const facadeSpeed = [
  { label: 'Уламжлалт зоомол', value: '8–15', unit: 'м²/өдөр', note: 'Арматур, зуурмаг, хатаалт шаарддаг' },
  { label: 'Уламжлалт шаваас', value: '10–25', unit: 'м²/өдөр', note: 'Олон давхар өнгөлгөө, хатаалт' },
  { label: 'Металл пасад (бүрэн)', value: '15–30', unit: 'м²/өдөр', note: 'Дулаалга + тогтоогч + хавтан' },
  { label: 'Металл пасад (хавтан)', value: '30–60', unit: 'м²/өдөр', note: 'Зөвхөн хавтан угсрах' },
];

const facadeTimeline = [
  { scenario: '1 баг, бүрэн систем', output: '25 м²/өдөр', days: '480', months: '~22 сар' },
  { scenario: '1 баг, зөвхөн хавтан', output: '40 м²/өдөр', days: '300', months: '~14 сар' },
  { scenario: '3 баг, бүрэн систем', output: '90 м²/өдөр', days: '133', months: '~6–7 сар' },
];

const facadeDesignOptions = [
  '80+ стандарт өнгө',
  'Металлик, аноджуулсан, мат дуурайлт',
  'Spectra / iridescent хувирах өнгө',
  'Мод, чулуу дуурайсан хэвлэл',
  'CNC нүхэлгээ, ирмэггүй хөндлөнгийн холболт',
  'Том хэмжээний хавтан (1.57 × 10 м хүртэл)',
];

const workflow = [
  { step: '01', title: 'Зөвлөгөө', desc: 'Төслийн шаардлага, уур амьсгал, төсөвт тохируулан шийдэл санал болгоно.' },
  { step: '02', title: 'Инженерчлэл', desc: 'U-утга, салхины ачаалал, ус нэвтрүүлэх зэрэг тооцоог гүйцэтгэнэ.' },
  { step: '03', title: 'Үйлдвэрлэл', desc: 'EOSS системийн профиль, шил, резинийг чанарын хяналттайгаар угсарна.' },
  { step: '04', title: 'Угсралт', desc: 'Мэргэжлийн баг талбай дээр аюулгүй, хурдан угсарна.' },
  { step: '05', title: 'Баталгаа', desc: 'Дууссаны дараа чанарын шалгалт, засвар үйлчилгээний дэмжлэг үзүүлнэ.' },
];

const standards = ['ASTM E2190', 'EN 1279-2', 'EN 673', 'CSA A440.2', 'GOST 30674', 'Passive House'];

export default function ServicesPage() {
  const t = useTranslations('services');
  const nav = useTranslations('nav');

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[60vh] items-center overflow-hidden bg-card text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/services/service-hero.jpg"
            alt={t('title')}
            fill
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-card/95 via-card/80 to-card/50" />
        </div>
        <div className="container-site relative z-10 py-24">
          <MotionSection className="max-w-3xl">
            <span className="mb-4 inline-block text-sm font-bold uppercase tracking-widest text-accent">{nav('services')}</span>
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">{t('subtitle')}</h1>
            <p className="mt-6 max-w-2xl text-lg text-white/80">
              Huajian Aluminium / EOSS брендийн бүтээгдэхүүн, Passive House стандарт, Монголын уур амьсгалд тохируулсан шийдэл.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button variant="primary" size="lg" asChild>
                <Link href="/contact">{nav('quote')} <ArrowRight className="ml-2 inline h-5 w-5" /></Link>
              </Button>
            </div>
          </MotionSection>
        </div>
      </section>

      <section className="container-site py-16 lg:py-24">
        {/* Service cards */}
        <MotionSection className="mb-16">
          <div className="grid gap-8 lg:gap-12">
            {services.map((service, index) => (
              <MotionItem key={service.id} delay={index * 0.1}>
                <div className={`grid gap-8 items-center lg:grid-cols-2 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={`relative aspect-[4/3] overflow-hidden bg-muted ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <Image
                      src={service.image}
                      alt={t(`items.${service.id}.title`)}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className="inline-flex h-12 w-12 items-center justify-center bg-accent/10 text-accent"
                    >
                      <service.icon className="h-6 w-6" />
                    </div>
                    <h2 className="mt-4 text-2xl font-bold text-foreground lg:text-3xl">{t(`items.${service.id}.title`)}</h2>
                    <p className="mt-4 leading-relaxed text-muted-foreground">{t(`items.${service.id}.description`)}</p>
                    <ul className="mt-6 grid gap-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3 text-foreground/80"
                        >
                          <CheckCircle2 className="h-5 w-5 shrink-0 text-accent" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </MotionItem>
            ))}
          </div>
        </MotionSection>

        {/* Metal facade detail: Alucobond gallery */}
        <MotionSection className="mt-24 border-t border-border pt-16">
          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-accent">Alucobond</span>
            <h2 className="mt-3 text-3xl font-bold text-foreground lg:text-4xl">Европ стандарт металл пасад</h2>
            <p className="mx-auto mt-4 max-w-3xl text-muted-foreground">
              Бид Германы 3A Composites компанийн ALUCOBOND® брендийн хөнгөн цагаан композит хавтанг Монголд нэвтрүүлж, орчин үеийн, галд тэсвэртэй, удаан эдэлгээтэй фасадын шийдэл санал болгож байна.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {alucobondImages.map((img, index) => (
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

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {alucobondProducts.map((product, index) => (
              <MotionItem key={product.name} delay={index * 0.08}>
                <div className="h-full rounded-lg border border-border bg-white p-6 shadow-sm">
                  <div className="text-lg font-bold text-foreground">{product.name}</div>
                  <p className="mt-2 text-muted-foreground">{product.desc}</p>
                </div>
              </MotionItem>
            ))}
          </div>
        </MotionSection>

        {/* Facade technology */}
        <MotionSection className="mt-24 border-t border-border pt-16">
          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-accent">Технологи</span>
            <h2 className="mt-3 text-3xl font-bold text-foreground lg:text-4xl">Rainscreen металл пасадын технологи</h2>
            <p className="mx-auto mt-4 max-w-3xl text-muted-foreground">
              Alucobond пасад нь ханыг хамгаалах битүү үе, дулаалга, агаар сэлгэх завсар, гаднах хавтан гэсэн многослойн бүтэцтэй. Ус, чийг, салхины даралтыг агаарын завсар хүлээн авч, барилгыг хуурай, дулаан, эрүүх хадгална.
            </p>
          </div>

          <div className="mt-12 grid items-center gap-12 lg:grid-cols-2">
            <div className="relative aspect-square overflow-hidden rounded-lg bg-muted lg:aspect-[4/3]">
              <Image
                src="/images/alucobond/project-3.jpg"
                alt="Metal facade technology cross section"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-4">
              {facadeTechLayers.map((layer, index) => (
                <MotionItem key={layer.step} delay={index * 0.08}>
                  <div className="flex gap-4 rounded-lg border border-border bg-white p-5 shadow-sm">
                    <div className="text-3xl font-bold text-accent/30">{layer.step}</div>
                    <div>
                      <div className="font-semibold text-foreground">{layer.title}</div>
                      <p className="mt-1 text-sm text-muted-foreground">{layer.desc}</p>
                    </div>
                  </div>
                </MotionItem>
              ))}
            </div>
          </div>
        </MotionSection>

        {/* Speed comparison */}
        <MotionSection className="mt-24 border-t border-border pt-16">
          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-accent">Хурд</span>
            <h2 className="mt-3 text-3xl font-bold text-foreground lg:text-4xl">Уламжлалт аргаас 3–5 дахин хурдан</h2>
            <p className="mx-auto mt-4 max-w-3xl text-muted-foreground">
              Хөнгөн цагаан композит хавтанг үйлдвэрт бэлтгэж, талбай дээр зөвхөн хуурай угсардаг тул зуурмаг, шаваас, хатаалтын хүлээлгүй. Өвөл, чийгтэй үед ч ажиллана.
            </p>
          </div>

          <div className="mt-12 overflow-hidden rounded-lg border border-border bg-white shadow-sm">
            <table className="w-full text-left text-sm">
              <thead className="bg-card text-white">
                <tr>
                  <th className="px-6 py-4 font-medium">Арга</th>
                  <th className="px-6 py-4 font-medium">Бүтээмж</th>
                  <th className="px-6 py-4 font-medium">Тайлбар</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {facadeSpeed.map((row, index) => (
                  <tr key={row.label} className={index % 2 === 1 ? 'bg-muted/40' : ''}>
                    <td className="px-6 py-4 font-medium text-foreground">{row.label}</td>
                    <td className="px-6 py-4 text-accent font-semibold">{row.value} {row.unit}</td>
                    <td className="px-6 py-4 text-muted-foreground">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-12">
            <h3 className="text-center text-xl font-bold text-foreground">20 давхар, 12 000 м² металл пасад — хугацааны тооцоо</h3>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {facadeTimeline.map((item, index) => (
                <MotionItem key={item.scenario} delay={index * 0.08}>
                  <div className="h-full rounded-lg bg-muted p-6 text-center">
                    <div className="text-sm text-muted-foreground">{item.scenario}</div>
                    <div className="mt-2 text-3xl font-bold text-foreground">{item.months}</div>
                    <div className="mt-1 text-sm text-muted-foreground">{item.output} • {item.days} ажлын өдөр</div>
                  </div>
                </MotionItem>
              ))}
            </div>
            <p className="mt-6 text-center text-sm text-muted-foreground">
              Талбайн нөхцөл, цонхны нүх, өнцөг, гондолын тоо, цаг агаараас хамаарч 15–30% нэмэлт хугацаа орж болно. Олон гондол, олон баг ажиллуулбал 6–12 сарын хугацаанд дуусгах боломжтой.
            </p>
          </div>
        </MotionSection>

        {/* Design options */}
        <MotionSection className="mt-24 border-t border-border pt-16">
          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-accent">Дизайн</span>
            <h2 className="mt-3 text-3xl font-bold text-foreground lg:text-4xl">Өнгө, хэлбэр, хэмжээний уян хатан сонголт</h2>
            <p className="mx-auto mt-4 max-w-3xl text-muted-foreground">
              PVDF/FEVE бүрээстэй Alucobond хавтан нь 80+ өнгө, металлик, аноджуулсан, чулуу/мод дуурайсан гадаргуутай. CNC өрөмдлөг, ирмэггүй холболт, том хэмжээний хавтангуудаар архитекторын бүх зорилгыг хэрэгжүүлнэ.
            </p>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {facadeDesignOptions.map((option, index) => (
              <MotionItem key={option} delay={index * 0.05}>
                <span className="inline-block rounded-full bg-accent/10 px-5 py-2 text-sm font-medium text-accent">
                  {option}
                </span>
              </MotionItem>
            ))}
          </div>
        </MotionSection>

        {/* European standards */}
        <MotionSection className="mt-24 border-t border-border pt-16">
          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-accent">Стандарт</span>
            <h2 className="mt-3 text-3xl font-bold text-foreground lg:text-4xl">Европын чанарын стандарт</h2>
            <p className="mx-auto mt-4 max-w-3xl text-muted-foreground">
              Металл пасад, шил, цонхны бүтээгдэхүүн нь Европын EN стандартад нийцсэн бөгөөд галд тэсвэрлэлт, дулаан тусгаарлалт, салхины ачаалал, ус/агаар нэвтрүүлэлтээр баталгаажсан.
            </p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {euStandards.map((std, index) => (
              <MotionItem key={std.code} delay={index * 0.06}>
                <div className="flex h-full items-start gap-4 rounded-lg bg-white p-6 shadow-sm">
                  <CheckCircle2 className="h-6 w-6 shrink-0 text-accent" />
                  <div>
                    <div className="font-semibold text-foreground">{std.code}</div>
                    <p className="mt-1 text-sm text-muted-foreground">{std.desc}</p>
                  </div>
                </div>
              </MotionItem>
            ))}
          </div>
        </MotionSection>

        {/* Metal windows */}
        <MotionSection className="mt-24 border-t border-border pt-16">
          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-accent">Металл цонх</span>
            <h2 className="mt-3 text-3xl font-bold text-foreground lg:text-4xl">Металл пасадны цонхны шийдэл</h2>
            <p className="mx-auto mt-4 max-w-3xl text-muted-foreground">
              Пасадны дизайнтай уялдсан, дулаан тусгаарлалт сайтай, ус/агаар нэвтрүүлэхгүй металл цонхны сонголтууд.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {metalWindows.map((win, index) => (
              <MotionItem key={win.title} delay={index * 0.08}>
                <div className="h-full rounded-lg border border-border bg-muted p-6">
                  <Frame className="h-8 w-8 text-accent" />
                  <div className="mt-4 font-semibold text-foreground">{win.title}</div>
                  <p className="mt-2 text-sm text-muted-foreground">{win.desc}</p>
                </div>
              </MotionItem>
            ))}
          </div>
        </MotionSection>

        {/* Workflow */}
        <MotionSection className="mt-24 border-t border-border pt-16">
          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-accent">Ажлын явц</span>
            <h2 className="mt-3 text-3xl font-bold text-foreground lg:text-4xl">Бид хэрхэн ажилладаг вэ?</h2>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {workflow.map((item, index) => (
              <MotionItem key={item.step} delay={index * 0.08}>
                <div className="relative h-full bg-muted p-6">
                  <div className="text-4xl font-bold text-accent/30">{item.step}</div>
                  <div className="mt-2 font-semibold text-foreground">{item.title}</div>
                  <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </MotionItem>
            ))}
          </div>
        </MotionSection>

        {/* Standards */}
        <MotionSection className="mt-24 border-t border-border pt-16">
          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-accent">Стандарт</span>
            <h2 className="mt-3 text-3xl font-bold text-foreground lg:text-4xl">Олон улсын чанарын стандарт</h2>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {standards.map((standard, index) => (
              <MotionItem key={standard} delay={index * 0.06}>
                <div className="flex items-center gap-4 bg-white p-6 shadow-sm">
                  <CheckCircle2 className="h-6 w-6 text-accent" />
                  <span className="font-semibold text-foreground">{standard}</span>
                </div>
              </MotionItem>
            ))}
          </div>
        </MotionSection>

        {/* CTA */}
        <MotionSection className="mt-24 flex justify-center">
          <Button variant="primary" size="lg" asChild>
            <Link href="/contact">{nav('quote')} <ArrowRight className="ml-2 inline h-5 w-5" /></Link>
          </Button>
        </MotionSection>
      </section>
    </>
  );
}
