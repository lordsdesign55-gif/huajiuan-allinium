import Link from 'next/link';
import Image from 'next/image';
import { PageHero } from '@/components/sections/PageHero';
import { MotionSection, MotionItem } from '@/components/motion/MotionSection';
import { posts } from '@/lib/mock';

export default function BlogPage() {
  return (
    <>
      <PageHero
        title="Мэдээ"
        subtitle="Салбарын мэдээ, брэндийн танилцуулга, техникийн зөвлөгөө"
      />

      <section className="container-site py-16 lg:py-24">
        <div className="grid gap-8">
          {posts.map((post, index) => (
            <MotionItem key={post._id} delay={index * 0.05}>
              <article className="group grid gap-6 border-b border-border pb-8 sm:grid-cols-3 lg:grid-cols-4">
                <Link href={`/blog/${post.slug}`} className="relative aspect-video overflow-hidden bg-muted sm:aspect-square">
                  <Image
                    src={index === 0 ? '/gallery/project-1.png' : '/logo.png'}
                    alt={post.title}
                    fill
                    className="object-cover opacity-80 transition-transform duration-500 group-hover:scale-105"
                  />
                </Link>
                <div className="flex flex-col justify-center sm:col-span-2 lg:col-span-3">
                  <div className="text-sm text-muted-foreground">
                    {new Date(post.createdAt).toLocaleDateString('mn-MN')}
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
                      Дэлгэрэнгүй унших →
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
