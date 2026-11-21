// Data model for menu items and pricing
// Confirmed owner data: 7 items (PROJECT_BRIEF.md) + 2 unconfirmed additions (Chả lụa, Chả Quế Chiên)
// TODO: owner must confirm whether Chả lụa and Chả Quế Chiên belong in the menu
// TODO: owner must confirm whether "Topping thêm" or "Chả thêm" is the correct name for id=cha-them
// All food images are owner-supplied photos (WebP + PNG fallback)

export const menuGroups = [
  {
    id: "mon-nong",
    title: "Món nóng",
    badge: "Phục vụ tại chỗ & mang về",
    items: [
      {
        id: "banh-cuon-uot-nong",
        name: "Bánh cuốn / Bánh ướt nóng",
        price: 30000,
        badge: "Tráng mới nóng",
        image: "/images/menu/banh-cuon-nong.webp",
        imageThumb: "/images/menu/banh-cuon-nong-thumb.webp",
        imageFallback: "/images/menu/banh-cuon-nong.png",
        imageAlt: "Đĩa bánh cuốn nóng tráng tại chỗ kèm chả lụa, nem rán, chả nướng và hành phi",
        imagePosition: "center",
        imageStatus: "owner-photo",
        description: "Bánh tráng nóng mỏng mượt, rắc hành phi giòn tan, kèm chả lụa, nem rán và rau sống tươi.",
      },
      {
        id: "bun-cha-ha-noi",
        name: "Bún chả Hà Nội",
        price: 30000,
        badge: "Nướng than hoa",
        image: "/images/menu/bun-cha-ha-noi.webp",
        imageThumb: "/images/menu/bun-cha-ha-noi-thumb.webp",
        imageFallback: "/images/menu/bun-cha-ha-noi.png",
        imageAlt: "Mẹt bún chả Hà Nội truyền thống gồm chả nướng thơm lừng, bát nước mắm chua ngọt và bún tươi",
        imagePosition: "center",
        imageStatus: "owner-photo",
        description: "Thịt nướng than hoa đậm đà kèm nước mắm chua ngọt thanh nhẹ, đu đủ ngâm giòn và đĩa rau sống tươi.",
      },
      {
        id: "bun-moc-cha-cu-cai-trang",
        name: "Bún mọc chả củ cải trắng",
        price: 30000,
        badge: "Nước dùng ngọt thanh",
        image: "/images/menu/bun-moc-cha-cu-cai-trang.webp",
        imageThumb: "/images/menu/bun-moc-cha-cu-cai-trang-thumb.webp",
        imageFallback: "/images/menu/bun-moc-cha-cu-cai-trang.png",
        imageAlt: "Tô bún mọc chả củ cải trắng nóng hổi với mọc viên giòn dai, chả lụa và nước dùng ngọt thanh",
        imagePosition: "center",
        imageStatus: "owner-photo",
        description: "Nước dùng hầm xương trong ngọt thanh với củ cải trắng, mọc viên giòn dai và chả lụa thái dày thơm béo.",
      },
      {
        id: "bun-moc-suon-non",
        name: "Bún mọc sườn non",
        price: 40000,
        badge: "Tô đặc biệt",
        image: "/images/menu/bun-moc-suon-non.webp",
        imageThumb: "/images/menu/bun-moc-suon-non-thumb.webp",
        imageFallback: "/images/menu/bun-moc-suon-non.png",
        imageAlt: "Tô bún mọc sườn non đặc biệt ninh mềm béo ngậy kèm mọc giòn ngọt và hành hoa",
        imagePosition: "center",
        imageStatus: "owner-photo",
        description: "Tô đặc biệt sườn non ninh mềm béo ngậy kết hợp cùng mọc mộc nhĩ giòn ngọt, nước dùng đậm đà thơm phức.",
      },
    ],
  },
  {
    id: "banh-cuon-banh-uot-theo-ky",
    title: "Bánh cuốn & bánh ướt bán theo ký",
    badge: "Đặt trước theo ký",
    categoryImage: "/images/menu/banh-cuon-ky.webp",
    categoryImageThumb: "/images/menu/banh-cuon-ky-thumb.webp",
    categoryImageFallback: "/images/menu/banh-cuon-ky.png",
    categoryImageAlt: "Bánh cuốn ký tráng mới nóng mỗi sáng đóng gói tiện lợi theo yêu cầu",
    categoryImageStatus: "owner-photo",
    items: [
      {
        id: "banh-cuon-ky",
        name: "Bánh cuốn ký",
        price: 60000,
        unit: "1 ký",
        image: "/images/menu/banh-cuon-ky.webp",
        imageThumb: "/images/menu/banh-cuon-ky-thumb.webp",
        imageFallback: "/images/menu/banh-cuon-ky.png",
        imageAlt: "Bánh cuốn ký tráng mới nóng mỗi sáng",
        imagePosition: "center",
        imageStatus: "owner-photo",
      },
      {
        id: "banh-uot-ky",
        name: "Bánh ướt ký",
        price: 50000,
        unit: "1 ký",
        image: null,
        imageThumb: null,
        imageFallback: null,
        imageAlt: null,
        imagePosition: "center",
        imageStatus: "no-image-supplied",
      },
    ],
  },
  {
    id: "mon-them",
    title: "Món thêm",
    badge: "Ăn kèm nóng hổi",
    // TODO: owner must confirm item names, prices, and whether Chả lụa / Chả Quế Chiên belong here
    items: [
      {
        id: "cha-them",
        // TODO: confirm display name — PROJECT_BRIEF.md says "Chả thêm"; current value is "Topping thêm"
        name: "Topping thêm",
        price: 3000,
        unit: "1 miếng",
      },
      {
        // TODO: unconfirmed addition — verify with owner before launch
        id: "cha-lua",
        name: "Chả lụa",
        price: 90000,
        unit: "1 cây (nửa ký)",
      },
      {
        // TODO: unconfirmed addition — verify with owner before launch
        id: "cha-que",
        name: "Chả Quế Chiên",
        price: 90000,
        unit: "1 cây (nửa ký)",
      },
    ],
  },
];

export function formatVnd(amount) {
  return `${new Intl.NumberFormat("vi-VN").format(amount)}đ`;
}
