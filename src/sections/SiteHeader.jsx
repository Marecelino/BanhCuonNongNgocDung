import { useState, useEffect } from 'react';
import { Container } from '../components/Container';
import { ButtonLink } from '../components/ButtonLink';
import { restaurant } from '../data/restaurant';

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close drawer on Escape key press
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="site-header">
      <Container className="site-header__container">
        {/* Brand Wordmark */}
        <a href="#" className="site-header__brand" onClick={closeMenu}>
          <span className="site-header__brand-title">{restaurant.name}</span>
          <span className="site-header__brand-tag">Món ngon ăn sáng</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="site-header__nav-desktop" aria-label="Điều hướng chính">
          <ul className="site-header__nav-list">
            <li>
              <a href="#thuc-don" className="site-header__nav-link">Thực đơn</a>
            </li>
            <li>
              <a href="#hinh-anh" className="site-header__nav-link">Hình ảnh</a>
            </li>
            <li>
              <a href="#lien-he" className="site-header__nav-link">Liên hệ</a>
            </li>
          </ul>
        </nav>

        {/* Desktop Phone CTA */}
        <div className="site-header__action-desktop">
          <ButtonLink
            href={restaurant.phoneHref}
            variant="white"
            size="sm"
            ariaLabel={`Gọi đặt món: ${restaurant.phoneDisplay}`}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span>{restaurant.phoneDisplay}</span>
          </ButtonLink>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          className="site-header__toggle"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav-drawer"
          aria-label={isMenuOpen ? "Đóng thực đơn điều hướng" : "Mở thực đơn điều hướng"}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="site-header__toggle-box" aria-hidden="true">
            <span className={`site-header__toggle-bar ${isMenuOpen ? 'site-header__toggle-bar--open' : ''}`} />
          </span>
        </button>
      </Container>

      {/* Mobile Drawer */}
      <div
        id="mobile-nav-drawer"
        className={`site-header__drawer ${isMenuOpen ? 'site-header__drawer--open' : ''}`}
        aria-hidden={!isMenuOpen}
      >
        <nav className="site-header__drawer-nav" aria-label="Điều hướng di động">
          <ul className="site-header__drawer-list">
            <li>
              <a href="#thuc-don" className="site-header__drawer-link" onClick={closeMenu}>
                Thực đơn
              </a>
            </li>
            <li>
              <a href="#hinh-anh" className="site-header__drawer-link" onClick={closeMenu}>
                Hình ảnh
              </a>
            </li>
            <li>
              <a href="#lien-he" className="site-header__drawer-link" onClick={closeMenu}>
                Giờ mở cửa & Liên hệ
              </a>
            </li>
          </ul>

          <div className="site-header__drawer-cta">
            <ButtonLink
              href={restaurant.phoneHref}
              variant="primary"
              size="lg"
              className="btn--full"
              onClick={closeMenu}
            >
              Gọi đặt món ({restaurant.phoneDisplay})
            </ButtonLink>
          </div>
        </nav>
      </div>
    </header>
  );
}

