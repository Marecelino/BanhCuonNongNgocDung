import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { menuGroups, formatVnd } from '../data/menu';

export function HeroPlateShowcase() {
  const hotGroup = menuGroups.find((g) => g.id === 'mon-nong');
  const hotDishes = hotGroup?.items || [];
  const [activeDish, setActiveDish] = useState(hotDishes[0]);

  if (!activeDish) return null;

  return (
    <div className="hero-showcase">
      {/* Mảng nền cong thương hiệu có overflow: hidden bảo vệ */}
      <div className="hero-showcase__curved-bg" aria-hidden="true" />

      {/* Sân khấu đĩa thức ăn */}
      <div className="hero-showcase__stage">
        {/* Bóng đổ tĩnh - không quay theo đĩa */}
        <div className="hero-showcase__shadow" aria-hidden="true" />

        {/* Đĩa thức ăn xoay tròn */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`plate-${activeDish.id}`}
            className="hero-showcase__plate"
            initial={{ opacity: 0, rotate: -75, scale: 0.88 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 75, scale: 0.88 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="hero-showcase__rim" aria-hidden="true" />
            <img
              src={activeDish.image}
              alt={activeDish.imageAlt || activeDish.name}
              className="hero-showcase__img"
              width="450"
              height="450"
              loading="eager"
            />
          </motion.div>
        </AnimatePresence>

        {/* Tên món và giá chuẩn VND */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`info-${activeDish.id}`}
            className="hero-showcase__info"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="hero-showcase__dish-name">{activeDish.name}</h3>
            <span className="hero-showcase__dish-price">{formatVnd(activeDish.price)}</span>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Thanh chọn 4 món bên dưới */}
      <div className="hero-showcase__carousel" role="tablist" aria-label="Chọn món hiển thị trên đĩa xoay">
        {hotDishes.map((dish) => {
          const isActive = activeDish.id === dish.id;
          return (
            <button
              key={dish.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              className={`hero-showcase__thumb ${isActive ? 'is-active' : ''}`}
              onClick={() => setActiveDish(dish)}
              aria-label={`Xem đĩa món ${dish.name}`}
            >
              <img
                src={dish.imageThumb || dish.image}
                alt=""
                width="70"
                height="70"
                loading="lazy"
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default HeroPlateShowcase;
