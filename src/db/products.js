const products = [
  {
    id: 1,
    title: "Ergonomic Office Chair ",
    price: 199.99,
    rating: 4.5,
    discount: 10, // 0.10 * 100 = 10
  },
  {
    id: 2,
    title: "Noise-Cancelling Headphones",
    price: 249.0,
    rating: 4.8,
    discount: 15, // 0.15 * 100 = 15
  },
  {
    id: 3,
    title: "4K Ultra HD Smart TV (55 inch)",
    price: 699.5,
    rating: 4.3,
    discount: 20, // 0.20 * 100 = 20
  },
  {
    id: 4,
    title: "Stainless Steel Coffee Maker",
    price: 49.95,
    rating: 4.6,
    discount: 5, // 0.05 * 100 = 5
  },
  {
    id: 5,
    title: "Portable Bluetooth Speaker",
    price: 75.0,
    rating: 4.7,
    discount: 25, // 0.25 * 100 = 25
  },
  {
    id: 6,
    title: "Smart Fitness Watch",
    price: 129.99,
    rating: 4.4,
    discount: 10, // 0.10 * 100 = 10
  },
  {
    id: 7,
    title: "High-Performance Laptop",
    price: 1199.0,
    rating: 4.9,
    discount: 12, // 0.12 * 100 = 12
  },
  {
    id: 8,
    title: "Organic Cotton Bed Sheets (Queen)",
    price: 89.9,
    rating: 4.2,
    discount: 5, // 0.05 * 100 = 5
  },
  {
    id: 9,
    title: "Digital SLR Camera",
    price: 549.99,
    rating: 4.5,
    discount: 20, // 0.20 * 100 = 20
  },
  {
    id: 10,
    title: "Robot Vacuum Cleaner",
    price: 320.5,
    rating: 4.1,
    discount: 18, // 0.18 * 100 = 18
  },
  {
    id: 11,
    title: "Electric Scooter (Foldable)",
    price: 499.0,
    rating: 4.6,
    discount: 15, // 0.15 * 100 = 15
  },
  {
    id: 12,
    title: "Gourmet Spice Rack Set",
    price: 35.75,
    rating: 4.8,
    discount: 5, // 0.05 * 100 = 5
  },
  {
    id: 13,
    title: "Wireless Gaming Mouse",
    price: 59.99,
    rating: 4.7,
    discount: 10, // 0.10 * 100 = 10
  },
  {
    id: 14,
    title: "Resistance Band Set",
    price: 24.5,
    rating: 4.4,
    discount: 5, // 0.05 * 100 = 5
  },
  {
    id: 15,
    title: "Acoustic Guitar Starter Pack",
    price: 149.0,
    rating: 4.3,
    discount: 12, // 0.12 * 100 = 12
  },
  {
    id: 16,
    title: "External Solid State Drive (1TB)",
    price: 110.25,
    rating: 4.9,
    discount: 20, // 0.20 * 100 = 20
  },
  { id: 17, title: "Air Fryer XL", price: 99.99, rating: 4.5, discount: 15 }, // 0.15 * 100 = 15
  {
    id: 18,
    title: "Classic Leather Wallet",
    price: 39.0,
    rating: 4.6,
    discount: 5, // 0.05 * 100 = 5
  },
  {
    id: 19,
    title: "Digital Drawing Tablet",
    price: 85.5,
    rating: 4.7,
    discount: 20, // 0.20 * 100 = 20
  },
  {
    id: 20,
    title: "Camping Tent (4-Person)",
    price: 179.99,
    rating: 4.2,
    discount: 15, // 0.15 * 100 = 15
  },
  {
    id: 21,
    title: "Smart Home Hub",
    price: 79.95,
    rating: 4.8,
    discount: 10, // 0.10 * 100 = 10
  },
  {
    id: 22,
    title: "Professional Hair Dryer",
    price: 65.0,
    rating: 4.4,
    discount: 5, // 0.05 * 100 = 5
  },
  {
    id: 23,
    title: "Beginner Telescope",
    price: 135.5,
    rating: 4.5,
    discount: 25, // 0.25 * 100 = 25
  },
  {
    id: 24,
    title: "Luxury Scented Candle Set",
    price: 55.0,
    rating: 4.9,
    discount: 5, // 0.05 * 100 = 5
  },
  {
    id: 25,
    title: "Non-Stick Cookware Set (10-Piece)",
    price: 189.99,
    rating: 4.1,
    discount: 20, // 0.20 * 100 = 20
  },
  {
    id: 26,
    title: "Power Bank (20000mAh)",
    price: 45.99,
    rating: 4.7,
    discount: 15, // 0.15 * 100 = 15
  },
  {
    id: 27,
    title: "Yoga Mat and Blocks Combo",
    price: 30.0,
    rating: 4.6,
    discount: 5, // 0.05 * 100 = 5
  },
  {
    id: 28,
    title: "Mechanical Keyboard",
    price: 115.75,
    rating: 4.8,
    discount: 15, // 0.15 * 100 = 15
  },
  {
    id: 29,
    title: "Electric Toothbrush (Rechargeable)",
    price: 59.9,
    rating: 4.5,
    discount: 10, // 0.10 * 100 = 10
  },
  {
    id: 30,
    title: "Gardening Tool Set (5-Piece)",
    price: 40.25,
    rating: 4.3,
    discount: 5, // 0.05 * 100 = 5
  },
];

export default products
