import { Container } from '../components/Container';
import { SectionHeading } from '../components/SectionHeading';
import { restaurant } from '../data/restaurant';

export function GallerySection() {
  const galleryItems = [
    {
      id: 'gallery-banh-cuon',
      src: restaurant.images.banhCuon,
      label: 'Bánh cuốn / bánh ướt nóng',
    },
    {
      id: 'gallery-bun-cha',
      src: restaurant.images.bunCha,
      label: 'Bún chả Hà Nội',
    },
    {
      id: 'gallery-bun-moc',
      src: restaurant.images.bunMoc,
      label: 'Bún mọc sườn non & chả',
    },
    {
      id: 'gallery-shop-front',
      src: restaurant.images.shopFront,
      label: 'Không gian đón khách',
    },
  ];

  return (
    <section id="hinh-anh" className="gallery-section section-padding">
      <Container>
        <SectionHeading
          eyebrow="Hình ảnh quán"
          title="Món ăn &amp; Không gian"
          subtitle="Hình ảnh các món ăn sáng nóng hổi được chuẩn bị chu đáo mỗi ngày."
          align="center"
        />

        <div className="gallery-section__grid">
          {galleryItems.map((item) => (
            <div key={item.id} className="gallery-card">
              <div className="gallery-card__image-frame">
                <img
                  src={item.src}
                  alt=""
                  width="400"
                  height="300"
                  loading="lazy"
                  data-placeholder="true"
                  className="gallery-card__image"
                />
              </div>
              <div className="gallery-card__caption">
                <span className="gallery-card__label">{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

