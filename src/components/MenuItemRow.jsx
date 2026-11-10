import { formatVnd } from '../data/menu';

export function MenuItemRow({ item }) {
  const { name, price, unit } = item;

  return (
    <li className="menu-item-row">
      <div className="menu-item-row__info">
        <span className="menu-item-row__name">{name}</span>
      </div>
      <div className="menu-item-row__divider" aria-hidden="true" />
      <div className="menu-item-row__pricing">
        <span className="menu-item-row__price tabular-nums">{formatVnd(price)}</span>
        {unit && <span className="menu-item-row__unit">/ {unit}</span>}
      </div>
    </li>
  );
}

