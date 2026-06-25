import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getPageBySlug } from '@/lib/mock';
import { PageHero } from '@/components/sections/PageHero';
import { GalleryGrid } from '@/components/sections/GalleryGrid';
import { MotionSection, MotionItem } from '@/components/motion/MotionSection';
import { Button } from '@/components/ui/Button';
import { Link } from '@/i18n/routing';
import { Award, Users, Building2, Globe2, ArrowRight } from 'lucide-react';

const validSlugs = ['about', 'services', 'gallery'];

interface PageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams() {
  return validSlugs.map((slug) => ({ locale: 'mn', slug }));
}

const stats = [
  { icon: Award, value: '26+', label: 'жилийн туршлага', suffix: 'Huajian Aluminium' },
  { icon: Building2, value: '50+', label: 'гүйцэтгэсэн төсөл', suffix: 'Монголд' },
  { icon: Users, value: '4+', label: 'жилийн орон нутгийн туршлага', suffix: 'Huajiuan Allinium' },
  { icon: Globe2, value: '2', label: 'улс', suffix: 'Хятад, Монгол' },
];

const values = [
  { title: 'Стандарт', desc: 'ASTM, EN, CSA, GOST, Passive House олон улсын стандартад нийцсэн чанар.' },
  { title: 'Бүтээмж', desc: 'Үйлдвэрлэл, логистик, угсралтын бүрэн процесст хяналт тавьж, хугацаа хэмнэдэг.' },
  { title: 'Итгэлцэл', desc: 'Харилцагч тал бүрт зориулсан инженерчлэл, зөвлөгөө, засвар үйлчилгээний дэмжлэг.' },
];

export default async function DynamicPage({ params }: PageProps) {
  const { slug } = await params;

  if (!validSlugs.includes(slug)) {
    notFound();
  }

  const page = getPageBySlug(slug);

  if (!page) {
    notFound();
  }

  const isGallery = slug === 'gallery';
  const isAbout = slug === 'about';

  return (
    <>
      <PageHero title={page.name} subtitle={page.description} />

      <section className="container-site py-16 lg:py-24">
        {isGallery ? (
          <GalleryGrid />
        ) : isAbout ? (
          <AboutContent page={page} />
        ) : page.content ? (
          <article
            className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-foreground/80 prose-a:text-accent"
            dangerouslySetInnerHTML={{ __html: page.content }}
          />
        ) : (
          <p className="text-muted-foreground">{page.description}</p>
        )}
      </section>
    </>
  );
}

function AboutContent({ page }: { page: { name: string; description: string; content: string } }) {
  return (
    <div className="space-y-20">
      {/* Intro + image */}
      <MotionSection>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-accent">Huajian Aluminium</span>
            <h2 className="mt-3 text-3xl font-bold text-foreground lg:text-4xl">
              26 жилийн туршлагатай, дэлхийн стандартад нийцсэн цаасан биш — металл шийдэл
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Huajian Aluminium 1998 оноос эхлэн Хятадын хөнгөн цагаан, шилэн пасадын салбарт тэргүүлэгч үйлдвэрлэгч болон хөгжсөн. EOSS бренд нь Passive House сертификаттай, олон улсын инженерчлэлийн шаардлагыг бүрэн хангасан систем юм.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Монгол дахь албан ёсны төлөөлөгч <strong>Huajiuan Allinium</strong> нь уг бүтээгдэхүүнийг Монголын -40°C ~ +40°C уур амьсгалд тохируулан нэвтрүүлж, 50 гаруй төсөлд амжилттай хэрэгжүүлээд байна.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button variant="primary" size="lg" asChild>
                <Link href="/services">Үйлчилгээ харах <ArrowRight className="ml-2 inline h-5 w-5" /></Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">Холбоо барих</Link>
              </Button>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden bg-muted lg:aspect-square">
            <Image
              src="/images/project-7.jpg"
              alt="Huajian Aluminium facade project"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </MotionSection>

      {/* Stats */}
      <MotionSection>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <MotionItem key={stat.label} delay={index * 0.08}>
              <div className="flex h-full flex-col bg-muted p-6">
                <stat.icon className="h-8 w-8 text-accent" />
                <div className="mt-4 text-4xl font-bold text-foreground">{stat.value}</div>
                <div className="mt-1 font-medium text-foreground">{stat.label}</div>
                <div className="mt-auto pt-4 text-sm text-muted-foreground">{stat.suffix}</div>
              </div>
            </MotionItem>
          ))}
        </div>
      </MotionSection>

      {/* Values */}
      <MotionSection>
        <h3 className="text-2xl font-bold text-foreground lg:text-3xl">Бидний үнэт зүйлс</h3>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {values.map((value, index) => (
            <MotionItem key={value.title} delay={index * 0.08}>
              <div className="h-full border-l-4 border-accent bg-white p-6 shadow-sm">
                <div className="text-lg font-semibold text-foreground">{value.title}</div>
                <p className="mt-2 text-muted-foreground">{value.desc}</p>
              </div>
            </MotionItem>
          ))}
        </div>
      </MotionSection>

      {/* Legacy content from CMS */}
      <article
        className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-foreground/80 prose-a:text-accent"
        dangerouslySetInnerHTML={{ __html: page.content }}
      />
    </div>
  );
}
