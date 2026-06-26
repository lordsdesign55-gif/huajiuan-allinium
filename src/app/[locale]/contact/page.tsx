import type { Metadata } from 'next';
import { PageHero } from '@/components/sections/PageHero';
import { ContactForm } from '@/components/sections/ContactForm';
import { MotionSection, MotionItem } from '@/components/motion/MotionSection';
import { Phone, Mail, MapPin, Clock, Facebook } from 'lucide-react';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const title = locale === 'en' ? 'Contact | Huajian Aluminium Mongolia' : 'Холбоо барих | Huajian Aluminium Mongolia';
  const description =
    locale === 'en'
      ? 'Contact Huajian Aluminium Mongolia for EOSS facades, metal windows, insulation and construction accessories. Phone: +976 7000 9559'
      : 'Huajian Aluminium Mongolia - EOSS пасад, металл цонх, дулаалга, тоноглолын талаар холбогдох. Утас: 7000-9559';
  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}/contact`,
      languages: { mn: '/mn/contact', en: '/en/contact' },
    },
  };
}

const contactItems = [
  { icon: Phone, labelKey: 'phone', value: '+976 7000 9559', href: 'tel:+97670009559' },
  { icon: Mail, labelKey: 'email', value: 'gergroup11@gmail.com', href: 'mailto:gergroup11@gmail.com' },
  { icon: MapPin, labelKey: 'address', value: 'Баянзүрх дүүрэг, 5-р хороо, Монелийн задгай' },
  { icon: Clock, labelKey: 'hours', value: '08:00 - 18:00' },
  { icon: Facebook, labelKey: 'facebook', value: 'Гэр групп', href: 'https://www.facebook.com/gergroup' },
];

export default async function ContactPage({ params }: PageProps) {
  const { locale } = await params;
  const isEn = locale === 'en';

  return (
    <>
      <PageHero
        title={isEn ? 'Contact' : 'Холбоо барих'}
        subtitle={
          isEn
            ? 'Get in touch with our team for your project and request a competitive quote.'
            : 'Төслийнхөө талаар манай багтай холбогдож, үнийн санал аваарай.'
        }
      />

      <section className="container-site py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2">
          <MotionSection>
            <h2 className="text-2xl font-bold text-foreground lg:text-3xl">{isEn ? 'Our Information' : 'Манай мэдээлэл'}</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              {isEn
                ? 'For detailed information about our products and services, or to request a project quote, please fill out the form.'
                : 'Та манай бүтээгдэхүүн, үйлчилгээний талаар дэлгэрэнгүй мэдээлэл авах, төслийн үнийн санал авахыг хүсвэл доорх маягтыг бөглөнө үү.'}
            </p>

            <div className="mt-8 space-y-6">
              {contactItems.map((item, index) => (
                <MotionItem key={item.labelKey} delay={index * 0.1}>
                  <div className="flex items-start gap-4">
                    <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center bg-muted">
                      <item.icon className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{isEn ? item.labelKey : labelMn(item.labelKey)}</div>
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
              <h3 className="mb-6 text-xl font-semibold text-white">{isEn ? 'Request a quote' : 'Үнийн санал авах'}</h3>
              <ContactForm />
            </div>
          </MotionSection>
        </div>
      </section>
    </>
  );
}

function labelMn(key: string) {
  const labels: Record<string, string> = {
    phone: 'Утас',
    email: 'Имэйл',
    address: 'Хаяг',
    hours: 'Ажлын цаг',
    facebook: 'Facebook',
  };
  return labels[key] ?? key;
}
