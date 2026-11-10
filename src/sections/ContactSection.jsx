import { Container } from '../components/Container';
import { SectionHeading } from '../components/SectionHeading';
import { ButtonLink } from '../components/ButtonLink';
import { GoogleMapEmbed } from '../components/GoogleMapEmbed';
import { restaurant } from '../data/restaurant';

export function ContactSection({ contactRef }) {
  return (
    <section id="lien-he" ref={contactRef} className="contact-section section-padding">
      <Container>
        <SectionHeading
          eyebrow="Địa điểm &amp; Liên hệ"
          title="Đến với Bánh Cuốn Nóng Ngọc Dung"
          subtitle="Ghé quán thưởng thức bữa sáng nóng hổi."
          align="center"
        />

        <div className="contact-section__layout">
          {/* Cột thông tin liên hệ */}
          <div className="contact-section__info">
            <div className="contact-info-card">
              {/* Giờ mở cửa */}
              <div className="contact-info-item">
                <div className="contact-info-item__icon" aria-hidden="true">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div className="contact-info-item__content">
                  <span className="contact-info-item__label">Giờ phục vụ</span>
                  <strong className="contact-info-item__value">Mở cửa: {restaurant.openingHoursDisplay}</strong>
                  <p className="contact-info-item__desc">
                    Phục vụ bữa sáng nóng hổi tại chỗ hoặc gói mang về nhanh chóng.
                  </p>
                </div>
              </div>

              {/* Hotline đặt món */}
              <div className="contact-info-item">
                <div className="contact-info-item__icon" aria-hidden="true">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div className="contact-info-item__content">
                  <span className="contact-info-item__label">Hotline đặt món</span>
                  <strong className="contact-info-item__value">{restaurant.phoneDisplay}</strong>
                  <p className="contact-info-item__desc">
                    Bấm gọi trực tiếp để đặt món trước hoặc đặt bánh cuốn số lượng nhiều.
                  </p>
                </div>
              </div>
            </div>

            {/* Thao tác liên hệ */}
            <div className="contact-section__actions">
              <ButtonLink
                href={restaurant.phoneHref}
                variant="primary"
                size="md"
                className="btn--full"
                ariaLabel={`Gọi đặt món: ${restaurant.phoneDisplay}`}
              >
                Gọi đặt món — {restaurant.phoneDisplay}
              </ButtonLink>

              {/* Nút chỉ đường hiển thị trên Desktop */}
              <ButtonLink
                href={restaurant.mapUrl}
                variant="secondary"
                size="md"
                external
                className="btn--full contact-section__cta-directions--desktop"
                ariaLabel="Mở chỉ đường trên ứng dụng Google Maps"
              >
                Chỉ đường đến quán ↗
              </ButtonLink>
            </div>
          </div>

          {/* Cột bản đồ vị trí Google Maps */}
          <div className="contact-section__map-wrap">
            <GoogleMapEmbed />

            {/* Nút chỉ đường hiển thị trên Mobile ngay dưới bản đồ */}
            <ButtonLink
              href={restaurant.mapUrl}
              variant="secondary"
              size="md"
              external
              className="btn--full contact-section__cta-directions--mobile"
              ariaLabel="Mở chỉ đường trên ứng dụng Google Maps"
            >
              Chỉ đường đến quán ↗
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
