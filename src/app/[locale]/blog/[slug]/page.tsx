import { notFound } from 'next/navigation';
import Link from 'next/link';
import { PageHero } from '@/components/sections/PageHero';
import { MotionSection } from '@/components/motion/MotionSection';
import { Button } from '@/components/ui/Button';
import { getPostBySlug } from '@/lib/mock';

interface PageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams() {
  return [
    'global-aluminum-price-today',
    'new-project-eoss-installation',
    'passive-house-metal-thermal-window',
    'eoss-shilen-pasad-standard',
    'metal-pasad-songoh',
    'gadna-duulaalga-energy',
  ].map((slug) => ({
    locale: 'mn',
    slug,
  }));
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;
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
            {new Date(post.createdAt).toLocaleDateString('mn-MN')}
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
              <Link href="/blog">← Бүх мэдээ</Link>
            </Button>
          </div>
        </MotionSection>
      </section>
    </>
  );
}
