import { Container } from '../components/Container';
import { restaurant } from '../data/restaurant';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <Container className="site-footer__container">
        <div className="site-footer__brand-block">
          <h2 className="site-footer__title">{restaurant.name}</h2>
          <p className="site-footer__desc">
            Phục vụ bánh cuốn nóng, bánh ướt, bún chả và bún mọc thơm ngon cho bữa sáng tròn vị.
          </p>
        </div>

        <div className="site-footer__info-block">
          <div className="site-footer__item">
            <span className="site-footer__label">Giờ phục vụ</span>
            <span className="site-footer__value">Mở cửa: {restaurant.openingHoursDisplay}</span>
                        <span className="site-footer__value">Tất cả các ngày trong tuần</span>
          </div>

          <div className="site-footer__item">
            <span className="site-footer__label">Điện thoại đặt món</span>
            <a href={restaurant.phoneHref} className="site-footer__link">
              {restaurant.phoneDisplay}
            </a>
          </div>

          <div className="site-footer__item">
            <span className="site-footer__label">Địa chỉ quán</span>
            <a
              href={restaurant.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="site-footer__link site-footer__link--map"
              aria-label="Mở địa chỉ trên Google Maps"
            >
              {restaurant.address.formatted} ↗
            </a>
          </div>
        </div>

        <div className="site-footer__bottom">
          <p className="site-footer__copyright">
            © {new Date().getFullYear()} {restaurant.name}. Design by Nguyễn Trọng Thứ - Marecelino.
          </p>
        </div>
      </Container>
    </footer>
  );
}
