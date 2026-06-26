import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { Link } from '@/i18n/routing';
import { PageHero } from '@/components/sections/PageHero';
import { MotionSection } from '@/components/motion/MotionSection';
import { Button } from '@/components/ui/Button';
import { getPostBySlug } from '@/lib/mock';

interface PageProps {
  params: Promise<{ locale: string; slug: string }>;
}

const postSlugs = [
  'global-aluminum-price-today',
  'new-project-eoss-installation',
  'passive-house-metal-thermal-window',
  'eoss-shilen-pasad-standard',
  'metal-pasad-songoh',
  'gadna-duulaalga-energy',
];

export async function generateStaticParams() {
  return postSlugs.flatMap((slug) => [
    { locale: 'mn', slug },
    { locale: 'en', slug },
  ]);
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug, locale } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Huajiuan Allinium`,
    description: post.excerpt,
    alternates: {
      canonical: `/${locale}/blog/${slug}`,
      languages: { mn: `/mn/blog/${slug}`, en: `/en/blog/${slug}` },
    },
  };
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug, locale } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <PageHero title={post.title} subtitle={post.excerpt} />

      <section className="container-site py-16 lg:py-24">
        <MotionSection className="mx-auto max-w-3xl">
          <div className="text-sm text-muted-foreground">
            {new Date(post.createdAt).toLocaleDateString(locale === 'en' ? 'en-US' : 'mn-MN')}
          </div>

          {post.content ? (
            <article
              className="prose prose-lg mt-8 max-w-none prose-headings:text-foreground prose-p:text-foreground/80 prose-a:text-accent"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          ) : (
            <p className="mt-8 text-muted-foreground">{post.excerpt}</p>
          )}

          <div className="mt-12">
            <Button variant="outline" className="border-foreground/20 text-foreground hover:bg-muted" asChild>
              <Link href="/blog">← {locale === 'en' ? 'All news' : 'Бүх мэдээ'}</Link>
            </Button>
          </div>
        </MotionSection>
      </section>
    </>
  );
}
