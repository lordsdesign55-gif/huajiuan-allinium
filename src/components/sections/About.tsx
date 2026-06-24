import Image from 'next/image';
import { MotionSection, MotionItem } from '@/components/motion/MotionSection';

const stats = [
  { value: '4+', label: 'Жил' },
  { value: '50+', label: 'Төсөл' },
  { value: '100%', label: 'Стандарт' },
];

export function About() {
  return (
    <section className="bg-muted py-20 lg:py-28" id="about">
      <div className="container-site">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <MotionSection>
            <span className="text-sm font-bold uppercase tracking-widest text-accent">Бидний тухай</span>
            <h2 className="mt-3 text-3xl font-bold text-foreground lg:text-display-md">
              Итгэл үнэмшилтэй гадна өнгөлгөөний хамтрагч
            </h2>
            <div className="mt-6 space-y-4 text-foreground/80 leading-relaxed">
              <p>
                Huajiuan Allinium нь 4 жилийн туршлагатай, барилгын салбарт шилэн пасад, металл пасад, барилгын гадна дуулаалга, дагалдах хэрэгсэл тоноглолын худалдаа болон угсралтын үйлчилгээ үзүүлдэг мэргэжлийн компани юм.
              </p>
              <p>
                Бид Хятадын Huajian Aluminium компанийн EOSS брендийн албан ёсны хэрэглэгч бөгөөд Монгол улсад тус брендийн шилен пасадын бүтээгдэхүүнийг албан ёсоор нэвтрүүлж, борлуулж, угсарч байна.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <MotionItem key={stat.label} delay={index * 0.1}>
                  <div className="border-l-4 border-accent pl-4">
                    <div className="text-3xl font-bold text-foreground lg:text-4xl">{stat.value}</div>
                    <div className="mt-1 text-sm font-medium text-muted-foreground">{stat.label}</div>
                  </div>
                </MotionItem>
              ))}
            </div>
          </MotionSection>

          <MotionSection className="relative aspect-[4/3] overflow-hidden bg-white shadow-lg lg:aspect-square">
            <Image
              src="/images/project-1.jpg"
              alt="Huajiuan Allinium төсөл"
              fill
              className="object-cover"
            />
          </MotionSection>
        </div>
      </div>
    </section>
  );
}
