import { ButtonLink } from './ButtonLink';
import { restaurant } from '../data/restaurant';

export function ContactActions({ className = '' }) {
  return (
    <div className={`contact-actions ${className}`.trim()}>
      <ButtonLink
        href={restaurant.phoneHref}
        variant="primary"
        size="lg"
        ariaLabel={`Gọi đặt món qua điện thoại: ${restaurant.phoneDisplay}`}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
        <span>Gọi đặt món: {restaurant.phoneDisplay}</span>
      </ButtonLink>

      <ButtonLink
        href={restaurant.mapUrl}
        variant="secondary"
        size="lg"
        external
        ariaLabel="Mở chỉ đường trên Google Maps"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <polygon points="3 11 22 2 13 21 11 13 3 11" />
        </svg>
        <span>Mở Google Maps ↗</span>
      </ButtonLink>
    </div>
  );
}

