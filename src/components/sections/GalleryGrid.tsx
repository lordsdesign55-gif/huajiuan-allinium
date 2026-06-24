import { Link } from '@/i18n/routing';
import Image from 'next/image';
import { MotionItem } from '@/components/motion/MotionSection';

const galleryProjects = [
  { title: 'EOSS шилен пасадан барилга', system: 'EOSS шилен пасад', location: 'Улаанбаатар', image: '/images/project-2.jpg' },
  { title: 'Худалдааны төв', system: 'Unitized Glass System', location: 'Улаанбаатар', image: '/images/project-3.jpg' },
  { title: 'Орон сууцны хороолол', system: '3 давхар Low-E шил', location: 'Улаанбаатар', image: '/images/project-4.jpg' },
  { title: 'Спортын цогцолбор', system: 'Металл пасад', location: 'Улаанбаатар', image: '/images/project-5.jpg' },
  { title: 'Зочид буудал', system: 'EOSS шилен пасад', location: 'Улаанбаатар', image: '/images/project-6.jpg' },
  { title: 'Боловсролын байгууллага', system: 'Rockwool дулаалга', location: 'Улаанбаатар', image: '/images/project-7.jpg' },
  { title: 'Эмнэлэг', system: 'Хатсан шил + профиль', location: 'Улаанбаатар', image: '/images/project-8.jpg' },
  { title: 'Үзвэр үйлчилгээний төв', system: 'Alucobond', location: 'Улаанбаатар', image: '/images/project-9.jpg' },
  { title: 'Агуулах, ложистик төв', system: 'Металл пасад', location: 'Улаанбаатар', image: '/images/hero-bg.jpg' },
];

export function GalleryGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {galleryProjects.map((project, index) => (
        <MotionItem key={project.title} delay={index * 0.06}>
          <Link href="/gallery" className="group relative block aspect-[4/3] overflow-hidden bg-muted">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/30 to-transparent" />
            <div className="absolute bottom-0 left-0 p-5">
              <span className="text-xs font-bold uppercase tracking-wider text-accent">{project.system}</span>
              <h3 className="mt-2 text-lg font-semibold text-white">{project.title}</h3>
              <p className="mt-1 text-sm text-white/70">{project.location}</p>
            </div>
          </Link>
        </MotionItem>
      ))}
    </div>
  );
}
