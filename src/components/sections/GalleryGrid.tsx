import Link from 'next/link';
import Image from 'next/image';
import { MotionItem } from '@/components/motion/MotionSection';

const galleryProjects = [
  { title: 'EOSS шилен пасадан барилга', system: 'EOSS шилен пасад', location: 'Улаанбаатар', image: '/gallery/project-1.png' },
  { title: 'Худалдааны төв', system: 'Unitized Glass System', location: 'Улаанбаатар', image: '/gallery/project-2.png' },
  { title: 'Орон сууцны хороолол', system: '3 давхар Low-E шил', location: 'Улаанбаатар', image: '/gallery/project-3.png' },
  { title: 'Спортын цогцолбор', system: 'Металл пасад', location: 'Улаанбаатар', image: '/gallery/project-4.png' },
  { title: 'Зочид буудал', system: 'EOSS шилен пасад', location: 'Улаанбаатар', image: '/logo.png' },
  { title: 'Боловсролын байгууллага', system: 'Rockwool дулаалга', location: 'Улаанбаатар', image: '/gallery/project-6.png' },
  { title: 'Эмнэлэг', system: 'Хатсан шил + профиль', location: 'Улаанбаатар', image: '/gallery/project-7.png' },
  { title: 'Үзвэр үйлчилгээний төв', system: 'Alucobond', location: 'Улаанбаатар', image: '/logo.png' },
  { title: 'Агуулах, ложистик төв', system: 'Металл пасад', location: 'Улаанбаатар', image: '/logo.png' },
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
              className="object-cover opacity-80 transition-transform duration-500 group-hover:scale-105"
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
