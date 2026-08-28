// data.js — single source of truth for product data
// In a real backend-connected app, this would come from an API/database call.

const PRODUCTS = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 2499,
    category: "Electronics",
    image: "assets/headphones.svg",
    description: "Over-ear wireless headphones with active noise cancellation and 30-hour battery life."
  },
  {
    id: 2,
    name: "Mechanical Keyboard",
    price: 3299,
    category: "Electronics",
    image: "assets/keyboard.svg",
    description: "Compact 75% mechanical keyboard with hot-swappable switches and RGB backlight."
  },
  {
    id: 3,
    name: "Canvas Backpack",
    price: 1499,
    category: "Accessories",
    image: "assets/backpack.svg",
    description: "Water-resistant canvas backpack with padded laptop sleeve, fits up to 15.6-inch laptops."
  },
  {
    id: 4,
    name: "Ceramic Coffee Mug",
    price: 349,
    category: "Home",
    image: "assets/mug.svg",
    description: "350ml handcrafted ceramic mug, microwave and dishwasher safe."
  },
  {
    id: 5,
    name: "Smart Fitness Band",
    price: 1999,
    category: "Electronics",
    image: "assets/fitband.svg",
    description: "Fitness tracker with heart-rate monitoring, sleep tracking, and 10-day battery life."
  },
  {
    id: 6,
    name: "Desk Lamp",
    price: 899,
    category: "Home",
    image: "assets/lamp.svg",
    description: "Adjustable LED desk lamp with three brightness modes and USB charging port."
  }
];

// Simple lookup helper, reused by multiple components (avoids duplicate logic)
function getProductById(id) {
  return PRODUCTS.find((p) => p.id === Number(id));
}
