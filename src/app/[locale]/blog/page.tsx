import type { Metadata } from 'next';
import { Link } from '@/i18n/routing';
import Image from 'next/image';
import { PageHero } from '@/components/sections/PageHero';
import { MotionSection, MotionItem } from '@/components/motion/MotionSection';
import { posts } from '@/lib/mock';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === 'en';
  return {
    title: isEn ? 'News | Huajiuan Allinium' : 'Мэдээ | Huajiuan Allinium',
    description: isEn
      ? 'Industry news, EOSS brand highlights, aluminum market updates and technical advice.'
      : 'Салбарын мэдээ, EOSS брэндийн танилцуулга, хөнгөн цагааны зах зээл, техникийн зөвлөгөө.',
    alternates: {
      canonical: `/${locale}/blog`,
      languages: { mn: '/mn/blog', en: '/en/blog' },
    },
  };
}

const postImages: Record<string, string> = {
  'global-aluminum-price-today': '/images/project-1.jpg',
  'new-project-eoss-installation': '/images/project-2.jpg',
  'passive-house-metal-thermal-window': '/images/project-3.jpg',
  'eoss-shilen-pasad-standard': '/images/project-4.jpg',
  'metal-pasad-songoh': '/images/project-5.jpg',
  'gadna-duulaalga-energy': '/images/project-6.jpg',
};

export default async function BlogPage({ params }: PageProps) {
  const { locale } = await params;
  const isEn = locale === 'en';

  return (
    <>
      <PageHero
        title={isEn ? 'News' : 'Мэдээ'}
        subtitle={
          isEn
            ? 'Industry news, brand highlights and technical advice'
            : 'Салбарын мэдээ, брэндийн танилцуулга, техникийн зөвлөгөө'
        }
      />

      <section className="container-site py-16 lg:py-24">
        <div className="grid gap-8">
          {posts.map((post, index) => (
            <MotionItem key={post._id} delay={index * 0.05}>
              <article className="group grid gap-6 border-b border-border pb-8 sm:grid-cols-3 lg:grid-cols-4">
                <Link href={`/blog/${post.slug}`} className="relative aspect-video overflow-hidden bg-muted sm:aspect-square">
                  <Image
                    src={postImages[post.slug] || '/images/hero-bg.jpg'}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </Link>
                <div className="flex flex-col justify-center sm:col-span-2 lg:col-span-3">
                  <div className="text-sm text-muted-foreground">
                    {new Date(post.createdAt).toLocaleDateString(isEn ? 'en-US' : 'mn-MN')}
                  </div>
                  <h2 className="mt-2 text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className="mt-3 text-muted-foreground line-clamp-2">{post.excerpt}</p>
                  <div className="mt-4">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-sm font-medium text-accent hover:text-foreground transition-colors"
                    >
                      {isEn ? 'Read more' : 'Дэлгэрэнгүй унших'} →
                    </Link>
                  </div>
                </div>
              </article>
            </MotionItem>
          ))}
        </div>
      </section>
    </>
  );
}
