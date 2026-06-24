import { notFound } from 'next/navigation';
import { getPageBySlug } from '@/lib/mock';
import { PageHero } from '@/components/sections/PageHero';
import { GalleryGrid } from '@/components/sections/GalleryGrid';

const validSlugs = ['about', 'services', 'gallery'];

interface PageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams() {
  return validSlugs.map((slug) => ({ locale: 'mn', slug }));
}

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

  return (
    <>
      <PageHero title={page.name} subtitle={page.description} />

      <section className="container-site py-16 lg:py-24">
        {isGallery ? (
          <GalleryGrid />
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
