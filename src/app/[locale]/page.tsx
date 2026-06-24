import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { About } from '@/components/sections/About';
import { Gallery } from '@/components/sections/Gallery';
import { Blog } from '@/components/sections/Blog';
import { ContactCTA } from '@/components/sections/ContactCTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Gallery />
      <Blog />
      <ContactCTA />
    </>
  );
}
