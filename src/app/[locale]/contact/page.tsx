import { PageHero } from '@/components/sections/PageHero';
import { ContactForm } from '@/components/sections/ContactForm';
import { MotionSection, MotionItem } from '@/components/motion/MotionSection';
import { Phone, Mail, MapPin, Clock, Facebook } from 'lucide-react';

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Холбоо барих"
        subtitle="Төслийнхөө талаар манай багтай холбогдож, үнийн санал аваарай."
      />

      <section className="container-site py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2">
          <MotionSection>
            <h2 className="text-2xl font-bold text-foreground lg:text-3xl">Манай мэдээлэл</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Та манай бүтээгдэхүүн, үйлчилгээний талаар дэлгэрэнгүй мэдээлэл авах, төслийн үнийн санал авахыг хүсвэл доорх маягтыг бөглөнө үү.
            </p>

            <div className="mt-8 space-y-6">
              {[
                { icon: Phone, label: 'Утас', value: '+976 7000 9559' },
                { icon: Mail, label: 'Имэйл', value: 'gergroup11@gmail.com' },
                { icon: MapPin, label: 'Хаяг', value: 'Баянзүрх дүүрэг, 5-р хороо, Монелийн задгай' },
                { icon: Clock, label: 'Ажлын цаг', value: '08:00 - 18:00' },
                { icon: Facebook, label: 'Facebook', value: 'Гэр групп', href: 'https://www.facebook.com/gergroup' },
              ].map((item, index) => (
                <MotionItem key={item.label} delay={index * 0.1}>
                  <div className="flex items-start gap-4">
                    <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center bg-muted">
                      <item.icon className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{item.label}</div>
                      {'href' in item ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-foreground hover:text-accent transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <div className="font-medium text-foreground">{item.value}</div>
                      )}
                    </div>
                  </div>
                </MotionItem>
              ))}
            </div>
          </MotionSection>

          <MotionSection>
            <div className="bg-card p-6 text-card-foreground lg:p-8">
              <h3 className="mb-6 text-xl font-semibold text-white">Үнийн санал авах</h3>
              <ContactForm />
            </div>
          </MotionSection>
        </div>
      </section>
    </>
  );
}
