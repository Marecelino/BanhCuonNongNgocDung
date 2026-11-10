import { formatVnd } from '../data/menu';

export function MenuDishCard({ item }) {
  const {
    name,
    price,
    unit,
    image,
    imageThumb,
    imageFallback,
    imageAlt,
    imagePosition = 'center',
    imageStatus,
    description,
  } = item;

  const isPlaceholder = imageStatus === 'placeholder-license-unverified';

  // Responsive srcset when thumbnail variant is available
  const srcSet = imageThumb && imageThumb !== image
    ? `${imageThumb} 480w, ${image} 1200w`
    : undefined;

  const sizes = srcSet
    ? '(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 300px'
    : undefined;

  return (
    <article className="menu-dish-card">
      <div className="menu-dish-card__media">
        <picture>
          <source type="image/webp" srcSet={srcSet || image} sizes={sizes} />
          {imageFallback && <source type="image/png" srcSet={imageFallback} />}
          <img
            src={image}
            alt={imageAlt || name}
            width="600"
            height="450"
            loading="lazy"
            decoding="async"
            className="menu-dish-card__image"
            style={{ objectPosition: imagePosition }}
          />
        </picture>
        {isPlaceholder && (
          <span
            className="menu-dish-card__badge-status"
            title="Đang chờ hình ảnh bản quyền chính thức từ quán"
          >
            Ảnh minh họa
          </span>
        )}
      </div>

      <div className="menu-dish-card__body">
        <div className="menu-dish-card__header">
          <h4 className="menu-dish-card__title">{name}</h4>
          <div className="menu-dish-card__pricing">
            <span className="menu-dish-card__price tabular-nums">
              {formatVnd(price)}
            </span>
            {unit && <span className="menu-dish-card__unit">/ {unit}</span>}
          </div>
        </div>

        {description && (
          <p className="menu-dish-card__description">{description}</p>
        )}
      </div>
    </article>
  );
}
