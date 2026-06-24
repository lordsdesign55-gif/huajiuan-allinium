import Link from 'next/link';
import Image from 'next/image';
import { MotionSection, MotionItem } from '@/components/motion/MotionSection';
import { Button } from '@/components/ui/Button';
import { posts } from '@/lib/mock';

export function Blog() {
  const latestPosts = posts.slice(0, 3);

  return (
    <section className="bg-muted py-20 lg:py-28" id="blog">
      <div className="container-site">
        <div className="mb-12 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <MotionSection className="max-w-2xl">
            <span className="text-sm font-bold uppercase tracking-widest text-accent">Мэдээ</span>
            <h2 className="mt-3 text-3xl font-bold text-foreground lg:text-display-md">
              Салбарын мэдээ, зөвлөгөө
            </h2>
          </MotionSection>

          <MotionSection>
            <Button variant="outline" className="border-foreground/20 text-foreground hover:bg-background" asChild>
              <Link href="/blog">Бүх мэдээ</Link>
            </Button>
          </MotionSection>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {latestPosts.map((post, index) => (
            <MotionItem key={post._id} delay={index * 0.1}>
              <article className="group flex h-full flex-col bg-background">
                <Link href={`/blog/${post.slug}`} className="relative aspect-video overflow-hidden bg-muted">
                  <Image
                    src="/logo.png"
                    alt={post.title}
                    fill
                    className="object-cover opacity-20 transition-transform duration-500 group-hover:scale-105"
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
                      Дэлгэрэнгүй унших →
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
