'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import Image from 'next/image';
import { MotionSection, MotionItem } from '@/components/motion/MotionSection';
import { Button } from '@/components/ui/Button';
import { posts } from '@/lib/mock';

const postImages: Record<string, string> = {
  'global-aluminum-price-today': '/images/project-1.jpg',
  'new-project-eoss-installation': '/images/project-2.jpg',
  'passive-house-metal-thermal-window': '/images/project-3.jpg',
  'eoss-shilen-pasad-standard': '/images/project-4.jpg',
  'metal-pasad-songoh': '/images/project-5.jpg',
  'gadna-duulaalga-energy': '/images/project-6.jpg',
};

export function Blog() {
  const t = useTranslations('blog');
  const latestPosts = posts.slice(0, 3);

  return (
    <section className="bg-muted py-20 lg:py-28" id="blog">
      <div className="container-site">
        <div className="mb-12 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <MotionSection className="max-w-2xl">
            <span className="text-sm font-bold uppercase tracking-widest text-accent">{t('title')}</span>
            <h2 className="mt-3 text-3xl font-bold text-foreground lg:text-display-md">
              {t('subtitle')}
            </h2>
          </MotionSection>

          <MotionSection>
            <Button variant="outline" className="border-foreground/20 text-foreground hover:bg-background" asChild>
              <Link href="/blog">{t('cta')}</Link>
            </Button>
          </MotionSection>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {latestPosts.map((post, index) => (
            <MotionItem key={post._id} delay={index * 0.1}>
              <article className="group flex h-full flex-col bg-background shadow-sm">
                <Link href={`/blog/${post.slug}`} className="relative aspect-video overflow-hidden bg-muted">
                  <Image
                    src={postImages[post.slug] || '/images/hero-bg.jpg'}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </Link>
                <div className="flex flex-1 flex-col p-6">
                  <div className="text-xs text-muted-foreground">
                    {new Date(post.createdAt).toLocaleDateString('mn-MN')}
                  </div>
                  <h3 className="mt-2 text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="mt-5">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-sm font-medium text-accent hover:text-foreground transition-colors"
                    >
                      {t('readMore')} →
                    </Link>
                  </div>
                </div>
              </article>
            </MotionItem>
          ))}
        </div>
      </div>
    </section>
  );
}
