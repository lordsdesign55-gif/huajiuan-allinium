import Link from 'next/link';
import { MotionSection } from '@/components/motion/MotionSection';
import { Button } from '@/components/ui/Button';

export function ContactCTA() {
  return (
    <section className="bg-primary py-20 lg:py-28">
      <div className="container-site text-center">
        <MotionSection className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-white lg:text-display-md">
            Төслөө эхлүүлэхэд бэлэн үү?
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Манай мэргэжлийн баг таны шаардлагад нийцсэн шийдэл, өрсөлдөхүйц үнийн саналыг бэлэн болгоно.
          </p>
          <div className="mt-10">
            <Button variant="secondary" size="lg" asChild>
              <Link href="/contact">Үнийн санал авах</Link>
            </Button>
          </div>
        </MotionSection>
      </div>
    </section>
  );
}
