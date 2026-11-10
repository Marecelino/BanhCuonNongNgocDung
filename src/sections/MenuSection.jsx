import { Container } from '../components/Container';
import { SectionHeading } from '../components/SectionHeading';
import { MenuDishCard } from '../components/MenuDishCard';
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
          {/* Main Block: Món Nóng with 4 Dedicated Food Images */}
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
                  <span className="menu-card__badge">{hotGroup.badge}</span>
                </div>
              </div>

              <div className="menu-dishes-grid">
                {hotGroup.items.map((item) => (
                  <MenuDishCard key={item.id} item={item} />
                ))}
              </div>
            </div>
          )}

          {/* Secondary Subgrid: Bán theo ký & Món thêm */}
          <div className="menu-section__subgrid">
            {kiloGroup && (
              <div className="menu-card kilo-card">
                <div className="kilo-card__media">
                  <picture>
                    <source
                      type="image/webp"
                      srcSet={
                        kiloGroup.categoryImageThumb
                          ? `${kiloGroup.categoryImageThumb} 480w, ${kiloGroup.categoryImage} 1200w`
                          : kiloGroup.categoryImage
                      }
                      sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 300px"
                    />
                    {kiloGroup.categoryImageFallback && (
                      <source type="image/png" srcSet={kiloGroup.categoryImageFallback} />
                    )}
                    <img
                      src={kiloGroup.categoryImage}
                      alt={kiloGroup.categoryImageAlt}
                      width="600"
                      height="450"
                      loading="lazy"
                      decoding="async"
                      className="kilo-card__image"
                    />
                  </picture>
                  <span className="kilo-card__badge-note">
                    Bánh cuốn nóng theo ký
                  </span>
                </div>
                <div className="kilo-card__content">
                  <div className="menu-card__header">
                    <div className="menu-card__header-icon" aria-hidden="true">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="menu-card__title">{kiloGroup.title}</h3>
                      <span className="menu-card__badge">{kiloGroup.badge}</span>
                    </div>
                  </div>
                  <ul className="menu-card__list">
                    {kiloGroup.items.map((item) => (
                      <MenuItemRow key={item.id} item={item} />
                    ))}
                  </ul>
                  <p className="kilo-card__note">
                    * Bánh cuốn và bánh ướt được tráng mới nóng mỗi sáng theo yêu cầu. Thích hợp cho bữa sáng gia đình hoặc sự kiện. Vui lòng gọi điện trước để quán chuẩn bị kịp thời.
                  </p>
                </div>
              </div>
            )}

            {extraGroup && (
              <div className="menu-card extra-card">
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
                    <span className="menu-card__badge">{extraGroup.badge}</span>
                  </div>
                </div>
                <ul className="menu-card__list">
                  {extraGroup.items.map((item) => (
                    <MenuItemRow key={item.id} item={item} />
                  ))}
                </ul>
                <div className="extra-card__details">
                  <p className="extra-card__note">
                    Chả lụa thái dày thơm béo, ăn kèm tăng hương vị đậm đà cho tô bún hoặc đĩa bánh cuốn nóng.
                  </p>
                </div>
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
