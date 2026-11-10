import { Container } from '../components/Container';
import { ButtonLink } from '../components/ButtonLink';
import { restaurant } from '../data/restaurant';

export function HeroSection({ heroRef }) {
  return (
    <section id="hero" ref={heroRef} className="hero-section section-padding">
      <Container className="hero-section__container">
        {/* Left Column (Desktop) / Ordered Elements (Mobile) */}
        <div className="hero-section__content">
          {/* 1. Eyebrow */}
          <div className="hero-section__eyebrow-wrap">
            <span className="hero-section__eyebrow">Bữa Sáng Việt</span>
          </div>

          {/* 2. Main Title */}
          <h1 className="hero-section__title">
            Bánh cuốn nóng &amp; món ngon buổi sáng
          </h1>

          {/* 3. Opening Hours */}
          <div className="hero-section__hours">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <span>Mở cửa: <strong>{restaurant.openingHoursDisplay}</strong></span>
          </div>

          {/* 4. Primary CTA (Desktop and Mobile order) */}
          <div className="hero-section__cta-primary">
            <ButtonLink
              href={restaurant.phoneHref}
              variant="primary"
              size="lg"
              className="btn--full-mobile"
              ariaLabel={`Gọi đặt món: ${restaurant.phoneDisplay}`}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>Gọi đặt món — {restaurant.phoneDisplay}</span>
            </ButtonLink>
          </div>

          {/* Desktop Secondary CTA */}
          <div className="hero-section__cta-desktop-secondary">
            <ButtonLink href="#thuc-don" variant="secondary" size="md">
              Xem thực đơn ↓
            </ButtonLink>
          </div>
        </div>

        {/* Right Column (Desktop) / Image (Mobile) */}
        <div className="hero-section__media">
          <div className="hero-section__image-frame">
            <img
              src={restaurant.images.hero}
              alt=""
              width="600"
              height="450"
              loading="eager"
              data-placeholder="true"
              className="hero-section__image"
            />
          </div>

          {/* 6. Mobile Secondary CTA (placed right below the image) */}
          <div className="hero-section__cta-mobile-secondary">
            <ButtonLink href="#thuc-don" variant="secondary" size="md" className="btn--full">
              Xem thực đơn ↓
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}

