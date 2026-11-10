import { useRef } from 'react';
import { SiteHeader } from './sections/SiteHeader';
import { HeroSection } from './sections/HeroSection';
import { MenuSection } from './sections/MenuSection';
import { GallerySection } from './sections/GallerySection';
import { ContactSection } from './sections/ContactSection';
import { ContactDock } from './sections/ContactDock';
import { SiteFooter } from './sections/SiteFooter';

export default function App() {
  const heroRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <HeroSection heroRef={heroRef} />
        <MenuSection />
        <GallerySection />
        <ContactSection contactRef={contactRef} />
      </main>
      <SiteFooter />
      <ContactDock heroRef={heroRef} contactRef={contactRef} />
    </>
  );
}
