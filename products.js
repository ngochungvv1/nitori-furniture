/* ─────────────────────────────────────────────────────────────
   NITORI Vietnam — Database sản phẩm
   
   Để thêm sản phẩm mới: sao chép một object bên dưới,
   dán vào cuối mảng, điền thông tin và lưu file.
   
   Các trường bắt buộc: id, name, category, cat (mã lọc),
                        price, images, specs, description
   Các trường tuỳ chọn: badge, badgeType, oldPrice, rating, reviewCount
───────────────────────────────────────────────────────────── */

const PRODUCTS = [
  {
    id: 1,
    name: "Leren L-Shape",
    category: "Sofa góc · Vải bố cao cấp",
    cat: "goc",                          // "goc" | "don" | "thu-gian"
    price: 15990000,
    oldPrice: 18990000,                  // bỏ dòng này nếu không giảm giá
    badge: "Mới nhất",                   // bỏ dòng này nếu không có badge
    badgeType: "new",                    // "new" (vàng đồng) | "sale" (đỏ)
    rating: 4.8,
    reviewCount: 124,
    images: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&q=80",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&q=80",
      "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=1200&q=80",
      "https://images.unsplash.com/photo-1567016432779-094069958ea5?w=1200&q=80"
    ],
    colors: [
      { name: "Xám tro",   hex: "#B5B0A8" },
      { name: "Nâu đất",   hex: "#6B5B4E" },
      { name: "Be kem",    hex: "#E8DDD0" },
      { name: "Xanh navy", hex: "#3A4A5A" },
      { name: "Đen than",  hex: "#2E2E2E" }
    ],
    sizes: ["220 × 150 cm", "260 × 165 cm", "300 × 180 cm"],
    defaultSize: "260 × 165 cm",
    specs: [
      ["Kích thước (D × R)", "260 × 165 cm"],
      ["Chiều cao ngồi",     "43 cm"],
      ["Chiều cao tựa lưng", "85 cm"],
      ["Chất liệu bọc",      "Vải bố polyester cao cấp"],
      ["Khung xương",        "Gỗ thông + thép mạ"],
      ["Lõi nệm",            "Foam HR 35kg/m³"],
      ["Chân sofa",          "Nhựa ABS màu gỗ"],
      ["Trọng lượng",        "72 kg"],
      ["Xuất xứ",            "Việt Nam (tiêu chuẩn NITORI Nhật)"]
    ],
    description: `Leren L-Shape là mẫu sofa góc bestseller của NITORI Vietnam, được thiết kế theo triết lý "Otoku" — chất lượng cao với giá hợp lý. Khung xương kết hợp gỗ thông và thép mạ đảm bảo độ bền vượt thời gian.\n\nLõi nệm foam HR 35kg/m³ mang đến cảm giác ngồi mềm mại nhưng vẫn đủ độ nâng đỡ, phù hợp cho cả gia đình. Vải bọc polyester cao cấp dễ vệ sinh, kháng bụi và màu sắc bền lâu.`,
    care: "Hút bụi bề mặt vải 1–2 lần/tuần. Với vết bẩn nhẹ, dùng khăn ẩm lau nhẹ theo chiều dệt vải — không chà mạnh. Tránh ánh nắng trực tiếp kéo dài để tránh phai màu. Không dùng chất tẩy có cồn trên bề mặt vải."
  },

  {
    id: 2,
    name: "Domas 2-Seat",
    category: "Sofa đôi · Da PU Nhật",
    cat: "don",
    price: 8990000,
    rating: 4.9,
    reviewCount: 87,
    images: [
      "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=1200&q=80",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&q=80",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&q=80",
      "https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=1200&q=80"
    ],
    colors: [
      { name: "Đen",      hex: "#2E2E2E" },
      { name: "Nâu cafe", hex: "#5C3D2E" },
      { name: "Trắng kem",hex: "#F0EBE0" }
    ],
    sizes: ["140 × 85 cm", "160 × 85 cm"],
    defaultSize: "160 × 85 cm",
    specs: [
      ["Kích thước (D × R)", "160 × 85 cm"],
      ["Chiều cao ngồi",     "42 cm"],
      ["Chiều cao tựa lưng", "80 cm"],
      ["Chất liệu bọc",      "Da PU cao cấp nhập khẩu Nhật Bản"],
      ["Khung xương",        "Gỗ tự nhiên sấy khô"],
      ["Lõi nệm",            "Foam kết hợp lò xo túi"],
      ["Chân sofa",          "Kim loại sơn tĩnh điện"],
      ["Trọng lượng",        "38 kg"],
      ["Xuất xứ",            "Việt Nam (tiêu chuẩn NITORI Nhật)"]
    ],
    description: "Domas 2-Seat mang vẻ đẹp tối giản của thiết kế Nhật Bản vào không gian sống. Bọc da PU cao cấp nhập khẩu từ Nhật, mặt da mịn màng, dễ lau chùi — lý tưởng cho gia đình có trẻ nhỏ hoặc thú cưng.",
    care: "Lau bề mặt da bằng khăn mềm ẩm. Định kỳ 3 tháng dùng kem dưỡng da chuyên dụng để giữ độ bóng và độ mềm. Tránh vật sắc nhọn cào xước bề mặt."
  },

  {
    id: 3,
    name: "Relax Recliner",
    category: "Ghế thư giãn · Vải nhung",
    cat: "thu-gian",
    price: 5490000,
    oldPrice: 6490000,
    badge: "Giảm 15%",
    badgeType: "sale",
    rating: 4.6,
    reviewCount: 56,
    images: [
      "https://images.unsplash.com/photo-1567016432779-094069958ea5?w=1200&q=80",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&q=80",
      "https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=1200&q=80",
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=1200&q=80"
    ],
    colors: [
      { name: "Xanh rêu", hex: "#4A6741" },
      { name: "Xám khói", hex: "#7A7A7A" },
      { name: "Kem cát",  hex: "#D4C5A9" }
    ],
    sizes: ["Tiêu chuẩn"],
    defaultSize: "Tiêu chuẩn",
    specs: [
      ["Kích thước",         "80 × 90 cm (mở: 150 cm)"],
      ["Chiều cao ngồi",     "40 cm"],
      ["Góc ngả tối đa",     "140°"],
      ["Chất liệu bọc",      "Vải nhung cao cấp"],
      ["Khung xương",        "Thép sơn tĩnh điện"],
      ["Lõi nệm",            "Foam Memory 45kg/m³"],
      ["Chân",               "Gỗ sồi tự nhiên"],
      ["Trọng lượng",        "28 kg"],
      ["Xuất xứ",            "Việt Nam (tiêu chuẩn NITORI Nhật)"]
    ],
    description: "Relax Recliner — chiếc ghế thư giãn hoàn hảo sau một ngày dài. Cơ chế ngả lưng mượt mà đến 140°, kết hợp foam Memory êm ái, mang cảm giác như nằm trên mây. Vải nhung mềm mại, ấm áp vào mùa đông.",
    care: "Hút bụi nhẹ bề mặt nhung theo chiều lông vải. Với vết bẩn, dùng khăn ẩm lau và để khô tự nhiên. Không giặt máy phần bọc cố định."
  },

  {
    id: 4,
    name: "Holta 3-Seat",
    category: "Sofa 3 chỗ · Vải Polyester",
    cat: "don",
    price: 11990000,
    rating: 4.9,
    reviewCount: 43,
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&q=80",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&q=80",
      "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=1200&q=80",
      "https://images.unsplash.com/photo-1567016432779-094069958ea5?w=1200&q=80"
    ],
    colors: [
      { name: "Be nhạt",    hex: "#E8DDD0" },
      { name: "Xám trung",  hex: "#9A9590" },
      { name: "Nâu đậm",   hex: "#5C4033" }
    ],
    sizes: ["190 × 90 cm", "220 × 90 cm"],
    defaultSize: "220 × 90 cm",
    specs: [
      ["Kích thước (D × R)", "220 × 90 cm"],
      ["Chiều cao ngồi",     "44 cm"],
      ["Chiều cao tựa lưng", "87 cm"],
      ["Chất liệu bọc",      "Vải polyester chống nhăn"],
      ["Khung xương",        "Gỗ thông New Zealand"],
      ["Lõi nệm",            "Foam HR + lò xo zigzag"],
      ["Chân sofa",          "Gỗ beech tự nhiên"],
      ["Trọng lượng",        "52 kg"],
      ["Xuất xứ",            "Việt Nam (tiêu chuẩn NITORI Nhật)"]
    ],
    description: "Holta 3-Seat là lựa chọn hoàn hảo cho phòng khách gia đình. Thiết kế rộng rãi, tựa lưng cao, đệm ngồi dày dặn — đủ không gian thoải mái cho cả gia đình cùng xem phim. Vải polyester chống nhăn, giữ form tốt theo thời gian.",
    care: "Hút bụi định kỳ, lau nhẹ bằng khăn ẩm khi cần. Có thể tháo vỏ gối tựa để giặt máy ở chế độ nhẹ 30°C."
  },

  {
    id: 5,
    name: "Floda Corner",
    category: "Sofa góc · Vải microfiber",
    cat: "goc",
    price: 21490000,
    badge: "Mới nhất",
    badgeType: "new",
    rating: 4.9,
    reviewCount: 31,
    images: [
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=1200&q=80",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&q=80",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&q=80",
      "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=1200&q=80"
    ],
    colors: [
      { name: "Kem sữa",   hex: "#F0E6D3" },
      { name: "Xám nhạt",  hex: "#C8C4BE" },
      { name: "Caramel",   hex: "#C4956A" }
    ],
    sizes: ["270 × 170 cm", "310 × 190 cm"],
    defaultSize: "270 × 170 cm",
    specs: [
      ["Kích thước (D × R)", "270 × 170 cm"],
      ["Chiều cao ngồi",     "45 cm"],
      ["Chiều cao tựa lưng", "90 cm"],
      ["Chất liệu bọc",      "Microfiber mịn mặt, kháng nước nhẹ"],
      ["Khung xương",        "Gỗ tự nhiên kết hợp ván MDF cao cấp"],
      ["Lõi nệm",            "Foam HR 40kg/m³ + fiberfill"],
      ["Chân sofa",          "Kim loại đánh bóng"],
      ["Trọng lượng",        "91 kg"],
      ["Xuất xứ",            "Việt Nam (tiêu chuẩn NITORI Nhật)"]
    ],
    description: "Floda Corner — mẫu sofa góc hiện đại nhất trong bộ sưu tập 2025 của NITORI. Vải microfiber siêu mịn có khả năng kháng nước nhẹ, lý tưởng cho gia đình năng động. Foam HR 40kg/m³ cao cấp giúp đệm ngồi không bị xẹp dù sử dụng thường xuyên.",
    care: "Lau bề mặt microfiber bằng khăn ẩm hoặc bàn chải mềm theo chiều vải. Vết bẩn thấm ngay bằng khăn khô trước khi lau ướt. Không dùng máy sấy nhiệt cao."
  },

  {
    id: 6,
    name: "Ottone Lounge",
    category: "Ghế + đôn · Vải bố",
    cat: "thu-gian",
    price: 7290000,
    rating: 4.5,
    reviewCount: 68,
    images: [
      "https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=1200&q=80",
      "https://images.unsplash.com/photo-1567016432779-094069958ea5?w=1200&q=80",
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=1200&q=80",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&q=80"
    ],
    colors: [
      { name: "Vàng mù tạt", hex: "#C9A84C" },
      { name: "Xanh petrol",  hex: "#2E5E6B" },
      { name: "Xám đậm",      hex: "#4A4A4A" }
    ],
    sizes: ["Tiêu chuẩn (bộ ghế + đôn)"],
    defaultSize: "Tiêu chuẩn (bộ ghế + đôn)",
    specs: [
      ["Kích thước ghế",     "80 × 80 cm"],
      ["Kích thước đôn",     "55 × 45 cm"],
      ["Chiều cao ngồi",     "42 cm"],
      ["Chất liệu bọc",      "Vải bố cotton blend"],
      ["Khung xương",        "Gỗ cao su tự nhiên"],
      ["Lõi nệm",            "Foam + fiberfill"],
      ["Chân",               "Gỗ sồi sơn mờ"],
      ["Trọng lượng",        "22 kg (bộ)"],
      ["Xuất xứ",            "Việt Nam (tiêu chuẩn NITORI Nhật)"]
    ],
    description: "Ottone Lounge là bộ ghế + đôn đa năng, linh hoạt bố trí trong nhiều không gian: phòng khách, phòng đọc sách, góc làm việc. Vải bố cotton blend thoáng khí, mát mẻ — lý tưởng cho khí hậu nhiệt đới Việt Nam.",
    care: "Có thể tháo áo ghế để giặt máy ở 30°C. Lõi nệm để khô tự nhiên nơi thoáng gió. Chân gỗ lau bằng khăn ẩm, định kỳ 6 tháng dùng dầu dưỡng gỗ."
  }

  /* ──────────────────────────────────────────
     THÊM SẢN PHẨM MỚI: sao chép block bên dưới,
     dán trước dòng này, điền thông tin.
  ──────────────────────────────────────────
  ,{
    id: 7,
    name: "Tên sản phẩm",
    category: "Loại · Chất liệu",
    cat: "goc",
    price: 0000000,
    badge: "Mới nhất",
    badgeType: "new",
    rating: 5.0,
    reviewCount: 0,
    images: [
      "URL_anh_1",
      "URL_anh_2",
      "URL_anh_3",
      "URL_anh_4"
    ],
    colors: [
      { name: "Tên màu", hex: "#RRGGBB" }
    ],
    sizes: ["Kích thước 1"],
    defaultSize: "Kích thước 1",
    specs: [
      ["Thuộc tính", "Giá trị"]
    ],
    description: "Mô tả sản phẩm...",
    care: "Hướng dẫn bảo quản..."
  }
  */
];
