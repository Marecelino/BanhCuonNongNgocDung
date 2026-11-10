import { restaurant } from '../data/restaurant';

export function GoogleMapEmbed({
  src = restaurant.mapEmbedUrl,
  title = "Bản đồ vị trí Bánh Cuốn Nóng Ngọc Dung",
  className = "",
}) {
  return (
    <div className={`google-map-embed ${className}`.trim()}>
      <iframe
        src={src}
        title={title}
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="google-map-embed__iframe"
      />
    </div>
  );
}

