import { Container } from '../components/Container';
import { SectionHeading } from '../components/SectionHeading';
import { MenuItemRow } from '../components/MenuItemRow';
import { ButtonLink } from '../components/ButtonLink';
import { menuGroups } from '../data/menu';
import { restaurant } from '../data/restaurant';

export function MenuSection() {
  const hotGroup = menuGroups.find((g) => g.id === 'mon-nong');
  const kiloGroup = menuGroups.find((g) => g.id === 'banh-cuon-banh-uot-theo-ky');
  const extraGroup = menuGroups.find((g) => g.id === 'mon-them');

  return (
    <section id="thuc-don" className="menu-section section-padding">
      <Container>
        <SectionHeading
          eyebrow="Thực đơn quán"
          title="Món ngon ăn sáng"
          subtitle="Tất cả các món đều được chế biến nóng hổi, thơm ngon cùng nước mắm chấm và rau sống tươi."
          align="center"
        />

        <div className="menu-section__grid">
          {/* Main Block: Món Nóng */}
          {hotGroup && (
            <div className="menu-card menu-card--featured">
              <div className="menu-card__header">
                <div className="menu-card__header-icon" aria-hidden="true">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
                    <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
                    <line x1="6" y1="1" x2="6" y2="4" />
                    <line x1="10" y1="1" x2="10" y2="4" />
                    <line x1="14" y1="1" x2="14" y2="4" />
                  </svg>
                </div>
                <div>
                  <h3 className="menu-card__title">{hotGroup.title}</h3>
                  <span className="menu-card__badge">Phục vụ tại chỗ &amp; mang về</span>
                </div>
              </div>
              <ul className="menu-card__list">
                {hotGroup.items.map((item) => (
                  <MenuItemRow key={item.id} item={item} />
                ))}
              </ul>
            </div>
          )}

          {/* Secondary 2-Col Split: Bán theo ký & Món thêm */}
          <div className="menu-section__subgrid">
            {kiloGroup && (
              <div className="menu-card">
                <div className="menu-card__header">
                  <div className="menu-card__header-icon" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="menu-card__title">{kiloGroup.title}</h3>
                    <span className="menu-card__badge">Đặt trước theo ký</span>
                  </div>
                </div>
                <ul className="menu-card__list">
                  {kiloGroup.items.map((item) => (
                    <MenuItemRow key={item.id} item={item} />
                  ))}
                </ul>
              </div>
            )}

            {extraGroup && (
              <div className="menu-card">
                <div className="menu-card__header">
                  <div className="menu-card__header-icon" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="8" x2="12" y2="16" />
                      <line x1="8" y1="12" x2="16" y2="12" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="menu-card__title">{extraGroup.title}</h3>
                    <span className="menu-card__badge">Ăn kèm</span>
                  </div>
                </div>
                <ul className="menu-card__list">
                  {extraGroup.items.map((item) => (
                    <MenuItemRow key={item.id} item={item} />
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Menu Call-to-action note */}
        <div className="menu-section__cta-box">
          <p className="menu-section__cta-text">
            Quý khách đặt số lượng lớn theo ký hoặc món nóng cho bữa sáng, vui lòng gọi điện thoại để quán chuẩn bị trước nhanh chóng.
          </p>
          <ButtonLink
            href={restaurant.phoneHref}
            variant="primary"
            size="md"
            ariaLabel={`Gọi đặt món qua điện thoại: ${restaurant.phoneDisplay}`}
          >
            Gọi đặt món ngay: {restaurant.phoneDisplay}
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}

