'use client';

import { Link } from '@/i18n/routing';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { MotionSection, MotionItem } from '@/components/motion/MotionSection';
import { Building2, Layers, Thermometer, Wrench, Frame } from 'lucide-react';

const services = [
  {
    id: 'glass',
    title: 'EOSS шилен пасад',
    description: 'Passive House сертификаттай, Монголын -40°C ~ +40°C уур амьсгалд тохируулсан өндөр чанарын шилен пасад.',
    icon: Building2,
  },
  {
    id: 'metal-window',
    title: 'Металл дулаан цонх',
    description: 'Passive House сертификаттай EOSS брендийн 10 см зузаантай best-seller металл цонх.',
    icon: Frame,
  },
  {
    id: 'metal',
    title: 'Металл пасад',
    description: 'Alucobond болон хөнгөн цагаан хавтангийн өнгөлгөө, уян хатан дизайн, удаан эдэлгээтэй бүтээн байгуулалт.',
    icon: Layers,
  },
  {
    id: 'insulation',
    title: 'Гадна дуулаалга',
    description: 'Rockwool стандартад нийцсэн дулаан, дуу чимээ тусгаарлалт — эрчим хүчний хэмнэлттэй барилга.',
    icon: Thermometer,
  },
  {
    id: 'equipment',
    title: 'Дагалдах тоноглол',
    description: 'Төмөр тогтоогч бүрдэл, резин хөндлөнгийн холболт, ус зайлуулах профиль болон бусад дагалдах хэрэгсэл.',
    icon: Wrench,
  },
];

const lowEStandards = [
  'ASTM E2190',
  'EN 1279-2',
  'EN 673',
  'CSA A440.2',
  'GOST 30674',
  'Passive House сертификат',
];

export function Services() {
  return (
    <section className="bg-background py-20 lg:py-28" id="services">
      <div className="container-site">
        <MotionSection className="mb-14 max-w-2xl">
          <span className="text-sm font-bold uppercase tracking-widest text-accent">Үйлчилгээ</span>
          <h2 className="mt-3 text-3xl font-bold text-foreground lg:text-display-md">
            Барилгын гадна өнгөлгөөний бүх шийдлийг нэг дороос
          </h2>
        </MotionSection>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {services.map((service, index) => (
            <MotionItem key={service.id} delay={index * 0.08}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
                className="group flex h-full flex-col bg-[#4B5563] p-7 text-white"
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center bg-white/10 text-accent">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-white/80">{service.description}</p>
                <div className="mt-6">
                  <Link
                    href={`/services#${service.id}`}
                    className="text-sm font-medium text-accent hover:text-white transition-colors"
                  >
                    Дэлгэрэнгүй →
                  </Link>
                </div>
              </motion.div>
            </MotionItem>
          ))}
        </div>

        <MotionSection className="mt-20 border-t border-border pt-16">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h3 className="text-2xl font-bold text-foreground lg:text-3xl">Low-E шилийн онцлог</h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Монголын уур амьсгалд зориулсан Low-E шил нь өвлийн -40°C хүйтэнд дулааны алдагдлыг багасгаж, зуны +40°C халуунд нарны дулааныг тусгаарлана. Бүтээгдэхүүн нь EN 673, ASTM E2190, CSA A440.2 зэрэг олон улсын хүйтэн уур амьсгалын стандартын шаардлагыг хангана.
              </p>
              <ul className="mt-6 grid gap-3">
                {lowEStandards.map((standard) => (
                  <li key={standard} className="flex items-center gap-3 text-sm text-foreground">
                    <span className="h-1.5 w-1.5 bg-accent" />
                    {standard}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-muted p-6 lg:p-8">
              <h4 className="text-lg font-semibold text-foreground">2 давхар vs 3 давхар шил</h4>
              <div className="mt-6 overflow-hidden">
                <table className="w-full text-left text-sm">
                  <thead className="border-b border-border">
                    <tr>
                      <th className="py-3 font-medium text-muted-foreground">Үзүүлэлт</th>
                      <th className="py-3 font-medium text-foreground">2 давхар Low-E</th>
                      <th className="py-3 font-medium text-foreground">3 давхар Low-E</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      ['U-утга', '1.4 W/m²K', '0.9 W/m²K'],
                      ['Дуу чимээ тусгаарлалт', '32 dB', '40 dB'],
                      ['Нарны коэффициент (g)', '0.62', '0.48'],
                      ['Монголын уур амьсгалд', 'Тохиромжтой', 'Маш тохиромжтой'],
                    ].map(([label, v2, v3]) => (
                      <tr key={label}>
                        <td className="py-3 text-muted-foreground">{label}</td>
                        <td className="py-3 text-foreground">{v2}</td>
                        <td className="py-3 font-medium text-accent">{v3}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-xs text-muted-foreground">
                * Budagtai шил + гэрлийн дамжуулалт бууруулах боломжтой. Техник үзүүлэлт бүтээгдэхүүний төрлөөр өөрчлөгдөж болно.
              </p>
            </div>
          </div>
        </MotionSection>

        <MotionSection className="mt-12 flex justify-center">
          <Button variant="primary" size="lg" asChild>
            <Link href="/services">Бүх үйлчилгээ харах</Link>
          </Button>
        </MotionSection>
      </div>
    </section>
  );
}
