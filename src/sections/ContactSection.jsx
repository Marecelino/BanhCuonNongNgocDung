import { Container } from '../components/Container';
import { SectionHeading } from '../components/SectionHeading';
import { ButtonLink } from '../components/ButtonLink';
import { restaurant } from '../data/restaurant';

export function ContactSection({ contactRef }) {
  return (
    <section id="lien-he" ref={contactRef} className="contact-section section-padding">
      <Container>
        <SectionHeading
          eyebrow="Thông tin liên hệ"
          title="Giờ mở cửa &amp; Chỉ đường"
          subtitle="Quán hân hạnh phục vụ quý khách bữa sáng chất lượng từ 5h00 đến 10h30."
          align="center"
        />

        <div className="contact-section__grid">
          {/* Card 1: Giờ mở cửa */}
          <div className="contact-card">
            <div className="contact-card__icon" aria-hidden="true">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <h3 className="contact-card__title">Giờ phục vụ</h3>
            <p className="contact-card__highlight">Mở cửa: {restaurant.openingHoursDisplay}</p>
            <p className="contact-card__desc">
              Phục vụ bữa sáng nóng hổi tại chỗ hoặc gói mang về nhanh chóng.
            </p>
          </div>

          {/* Card 2: Hotline đặt món */}
          <div className="contact-card contact-card--featured">
            <div className="contact-card__icon" aria-hidden="true">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <h3 className="contact-card__title">Đặt món qua điện thoại</h3>
            <p className="contact-card__highlight">{restaurant.phoneDisplay}</p>
            <p className="contact-card__desc">
              Bấm số gọi trực tiếp để đặt món trước hoặc đặt bánh cuốn theo ký.
            </p>
            <div className="contact-card__action">
              <ButtonLink
                href={restaurant.phoneHref}
                variant="primary"
                size="md"
                className="btn--full"
                ariaLabel={`Gọi đặt món: ${restaurant.phoneDisplay}`}
              >
                Gọi đặt món ngay
              </ButtonLink>
            </div>
          </div>

          {/* Card 3: Google Maps */}
          <div className="contact-card">
            <div className="contact-card__icon" aria-hidden="true">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="3 11 22 2 13 21 11 13 3 11" />
              </svg>
            </div>
            <h3 className="contact-card__title">Vị trí &amp; Chỉ đường</h3>
            <p className="contact-card__highlight">Google Maps</p>
            <p className="contact-card__desc">
              Xem ghim vị trí và tìm lộ trình đường đi nhanh nhất đến quán.
            </p>
            <div className="contact-card__action">
              <ButtonLink
                href={restaurant.mapUrl}
                variant="secondary"
                size="md"
                external
                className="btn--full"
                ariaLabel="Mở chỉ đường trên ứng dụng Google Maps"
              >
                Mở Google Maps ↗
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

