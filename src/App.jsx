import { useRef, useState, useEffect } from 'react';
import { SiteHeader } from './sections/SiteHeader';
import { HeroSection } from './sections/HeroSection';
import { MenuSection } from './sections/MenuSection';
import { GallerySection } from './sections/GallerySection';
import { ContactSection } from './sections/ContactSection';
import { ContactDock } from './sections/ContactDock';
import { FloatingZalo } from './components/FloatingZalo';
import { SiteFooter } from './sections/SiteFooter';

export default function App() {
  const heroRef = useRef(null);
  const contactRef = useRef(null);
  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const [isContactVisible, setIsContactVisible] = useState(false);

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;

    let heroObserver;
    let contactObserver;

    const heroEl = heroRef.current;
    const contactEl = contactRef.current;

    if (heroEl) {
      heroObserver = new IntersectionObserver(
        ([entry]) => {
          setIsHeroVisible(entry.isIntersecting);
        },
        { threshold: 0 }
      );
      heroObserver.observe(heroEl);
    }

    if (contactEl) {
      contactObserver = new IntersectionObserver(
        ([entry]) => {
          setIsContactVisible(entry.isIntersecting);
        },
        { threshold: 0.1 }
      );
      contactObserver.observe(contactEl);
    }

    return () => {
      if (heroObserver && heroEl) heroObserver.unobserve(heroEl);
      if (contactObserver && contactEl) contactObserver.unobserve(contactEl);
    };
  }, []);

  const isDockVisible = !isHeroVisible && !isContactVisible;

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
      <ContactDock isVisible={isDockVisible} heroRef={heroRef} contactRef={contactRef} />
      <FloatingZalo isDockVisible={isDockVisible} />
    </>
  );
}
