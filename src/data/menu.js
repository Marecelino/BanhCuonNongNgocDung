// Data model for menu items and pricing
// Confirmed owner data: 7 items, 3 categories

export const menuGroups = [
  {
    id: "mon-nong",
    title: "Món nóng",
    items: [
      { id: "banh-cuon-uot-nong", name: "Bánh cuốn / Bánh ướt nóng", price: 30000 },
      { id: "bun-cha-ha-noi", name: "Bún chả Hà Nội", price: 30000 },
      { id: "bun-moc-cha-cu-cai-trang", name: "Bún mọc chả củ cải trắng", price: 30000 },
      { id: "bun-moc-suon-non", name: "Bún mọc sườn non", price: 40000 },
    ],
  },
  {
    id: "banh-cuon-banh-uot-theo-ky",
    title: "Bánh cuốn & bánh ướt bán theo ký",
    items: [
      { id: "banh-cuon-ky", name: "Bánh cuốn ký", price: 60000, unit: "1 ký" },
      { id: "banh-uot-ky", name: "Bánh ướt ký", price: 50000, unit: "1 ký" },
    ],
  },
  {
    id: "mon-them",
    title: "Món thêm",
    items: [
      { id: "cha-them", name: "Chả thêm", price: 3000, unit: "1 miếng" },
    ],
  },
];

export function formatVnd(amount) {
  return `${new Intl.NumberFormat("vi-VN").format(amount)}đ`;
}

