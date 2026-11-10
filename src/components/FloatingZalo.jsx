import { restaurant } from '../data/restaurant';

export function FloatingZalo({
  href = restaurant.zaloUrl,
  isDockVisible = false,
  className = '',
}) {
  // Conditional rendering: do not display a non-functional button when unverified
  if (!href) return null;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`floating-zalo ${isDockVisible ? 'floating-zalo--docked' : ''} ${className}`.trim()}
      aria-label="Nhắn tin qua Zalo"
      title="Chat Zalo"
    >
      <img
        src="/icons/zalo.png"
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.src = 'https://img.icons8.com/color/48/zalo.png';
        }}
        width="48"
        height="48"
        alt=""
        aria-hidden="true"
        className="floating-zalo__icon"
      />
      <span className="floating-zalo__tooltip" role="tooltip" aria-hidden="true">
        Chat Zalo
      </span>
    </a>
  );
}

