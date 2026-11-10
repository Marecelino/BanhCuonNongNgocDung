import { useState, useEffect } from 'react';
import { ButtonLink } from '../components/ButtonLink';
import { restaurant } from '../data/restaurant';

export function ContactDock({ heroRef, contactRef, isVisible }) {
  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const [isContactVisible, setIsContactVisible] = useState(false);

  useEffect(() => {
    // If isVisible is explicitly passed by parent, skip local observers
    if (isVisible !== undefined) return;
    if (!('IntersectionObserver' in window)) return;

    let heroObserver;
    let contactObserver;

    const heroEl = heroRef?.current;
    const contactEl = contactRef?.current;

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
  }, [heroRef, contactRef, isVisible]);

  // Dock is visible only when scrolled past Hero and not yet in Contact section
  const isDockVisible = isVisible !== undefined ? isVisible : (!isHeroVisible && !isContactVisible);

  return (
    <aside
      className={`contact-dock ${isDockVisible ? 'contact-dock--visible' : ''}`}
      aria-label="Thao tác nhanh cho di động"
      aria-hidden={!isDockVisible}
    >
      <div className="contact-dock__container">
        <ButtonLink
          href={restaurant.phoneHref}
          variant="primary"
          size="md"
          className="contact-dock__btn"
          ariaLabel={`Gọi đặt món: ${restaurant.phoneDisplay}`}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          <span>Gọi đặt món</span>
        </ButtonLink>

        <ButtonLink
          href={restaurant.mapUrl}
          variant="secondary"
          size="md"
          external
          className="contact-dock__btn"
          ariaLabel="Mở chỉ đường trên Google Maps"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polygon points="3 11 22 2 13 21 11 13 3 11" />
          </svg>
          <span>Chỉ đường</span>
        </ButtonLink>
      </div>
    </aside>
  );
}
