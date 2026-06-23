import { publicAsset as p } from "@/lib/utils";

export interface Product {
  id: string;
  name: string;
  shortName: string;
  category: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  images: string[];
  tag?: string;
  specs: Record<string, string>;
  highlights: string[];
  inStock: boolean;
  sku: string;
  description: string;
}

export const categories = [
  { id: "mini-pcs", name: "Mini PCs", slug: "mini-pcs" },
  { id: "gaming-pcs", name: "Gaming PCs", slug: "gaming-pcs" },
  { id: "workstations", name: "Workstations", slug: "workstations" },
  { id: "accessories", name: "Accessories", slug: "accessories" },
  { id: "components", name: "Components", slug: "components" },
  { id: "networking", name: "Networking", slug: "networking" },
  { id: "monitors", name: "Monitors", slug: "monitors" },
  { id: "storage", name: "Storage", slug: "storage" },
];

export const products: Product[] = [
  {
    id: "g3-pro",
    name: "AXONEX G3 Pro Mini PC, Intel Core i3-10110U (Beats 4300U/N150) 16GB DDR4 (Dual Channel) 512GB PCIe M.2 SSD, Desktop Computer 4K Dual HDMI/USB3.2/WiFi 6/BT5.2/2.5GbE for Office, Business",
    shortName: "AXONEX G3 Pro",
    category: "mini-pcs",
    price: 202.3,
    originalPrice: 289.0,
    rating: 4.8,
    reviews: 186,
    image: p("/images/g3pro-main.jpg"),
    images: [p("/images/g3pro-main.jpg"), p("/images/g3pro-exploded.png"), p("/images/g3pro-cpu.png"), p("/images/g3pro-modes.png"), p("/images/g3pro-dual4k.png"), p("/images/g3pro-ports.png")],
    tag: "Best Seller",
    specs: { CPU: "Intel Core i3-10110U (Beats 4300U/N150)", RAM: "16GB DDR4 (Dual Channel)", Storage: "512GB PCIe M.2 SSD", Graphics: "Intel UHD Graphics", LAN: "2.5GbE RJ45", WiFi: "WiFi 6 (802.11ax)", BT: "5.2", Display: "4K Dual HDMI", USB: "USB 3.2", OS: "Windows 11 Pro" },
    highlights: ["Intel Core i3-10110U", "16GB DDR4 Dual Channel", "512GB PCIe M.2 SSD", "4K Dual HDMI", "WiFi 6 / BT 5.2", "2.5GbE Ethernet"],
    inStock: true,
    sku: "AX-G3P-i3-16-512",
    description: "AXONEX G3 Pro Mini PC featuring Intel Core i3-10110U processor (beats Intel 4300U and N150), 16GB DDR4 dual-channel memory, and 512GB PCIe M.2 SSD. Supports 4K dual HDMI output, USB 3.2, WiFi 6, Bluetooth 5.2, and 2.5GbE wired networking. Designed for office and business environments with reliable, efficient performance in a compact form factor.",
  },
  {
    id: "m5-plus",
    name: "AXONEX M5 Plus Gaming Mini PC — AMD Ryzen 7 5825U, 32GB DDR4 RAM, 1TB NVMe SSD, Dual 2.5GbE LAN, WiFi 6E, Triple 4K Display",
    shortName: "AXONEX M5 Plus (32GB/1TB)",
    category: "mini-pcs",
    price: 329.0,
    originalPrice: 399.0,
    rating: 5,
    reviews: 240,
    image: p("/images/product-main.jpg"),
    images: [p("/images/product-main.jpg"), p("/images/product-thumb-1.jpg"), p("/images/product-thumb-2.jpg"), p("/images/product-thumb-3.jpg"), p("/images/product-thumb-4.jpg")],
    tag: "Flagship",
    specs: { CPU: "AMD Ryzen 7 5825U (8C/16T, up to 4.5GHz)", RAM: "32GB DDR4-3200 (Dual Channel)", Storage: "1TB NVMe SSD", Graphics: "AMD Radeon Vega 8", LAN: "Dual 2.5GbE", WiFi: "WiFi 6E (802.11ax)", BT: "5.2", Display: "Triple 4K@60Hz", USB: "USB 3.2 + USB-C" },
    highlights: ["AMD Ryzen 7 5825U 8-Core", "32GB DDR4 Dual Channel", "1TB NVMe SSD", "WiFi 6E + BT 5.2", "Triple 4K Display", "Dual 2.5GbE LAN"],
    inStock: true,
    sku: "AX-M5P-5825U-32-1T",
    description: "The AXONEX M5 Plus delivers desktop-class performance in a compact 5-inch chassis. Powered by AMD Ryzen 7 5825U with 8 cores and 16 threads, 32GB DDR4 RAM, and a blazing-fast 1TB NVMe SSD.",
  },
  {
    id: "m3",
    name: "AXONEX M3 Mini PC — AMD Ryzen 5 5560U, 16GB DDR4 RAM, 512GB NVMe SSD, WiFi 6, Dual HDMI",
    shortName: "AXONEX M3 (16GB/512GB)",
    category: "mini-pcs",
    price: 249.0,
    originalPrice: 299.0,
    rating: 4,
    reviews: 89,
    image: p("/images/product-thumb-1.jpg"),
    images: [p("/images/product-thumb-1.jpg"), p("/images/product-thumb-3.jpg"), p("/images/product-thumb-4.jpg")],
    tag: "Popular",
    specs: { CPU: "AMD Ryzen 5 5560U (6C/12T)", RAM: "16GB DDR4-3200", Storage: "512GB NVMe SSD", Graphics: "Radeon Vega 6", LAN: "1x Gigabit", WiFi: "WiFi 6", BT: "5.1", Display: "Dual 4K HDMI" },
    highlights: ["AMD Ryzen 5 5560U 6-Core", "16GB DDR4", "512GB NVMe SSD", "WiFi 6", "Dual 4K HDMI", "Ultra Compact"],
    inStock: true,
    sku: "AX-M3-5560U-16-512",
    description: "Entry-level powerhouse perfect for home office and media streaming. The Ryzen 5 5560U handles everyday tasks with ease.",
  },
  {
    id: "m7-pro",
    name: "AXONEX M7 Pro Mini PC — AMD Ryzen 9 5900HX, 64GB DDR4 RAM, 2TB NVMe SSD, RTX 3060, WiFi 6E",
    shortName: "AXONEX M7 Pro (64GB/2TB)",
    category: "gaming-pcs",
    price: 599.0,
    originalPrice: 699.0,
    rating: 5,
    reviews: 156,
    image: p("/images/product-main.jpg"),
    images: [p("/images/product-main.jpg"), p("/images/product-thumb-1.jpg"), p("/images/product-thumb-2.jpg"), p("/images/product-thumb-3.jpg")],
    tag: "Top Rated",
    specs: { CPU: "AMD Ryzen 9 5900HX (8C/16T)", RAM: "64GB DDR4-3200", Storage: "2TB NVMe SSD", Graphics: "RTX 3060 6GB", LAN: "Dual 2.5GbE", WiFi: "WiFi 6E", BT: "5.2", Display: "Quad 4K" },
    highlights: ["Ryzen 9 5900HX 8-Core", "64GB DDR4", "2TB NVMe SSD", "RTX 3060 Graphics", "WiFi 6E", "Quad Display"],
    inStock: true,
    sku: "AX-M7P-5900HX-64-2T",
    description: "The ultimate compact gaming machine. Ryzen 9 5900HX paired with RTX 3060 delivers serious gaming performance in a tiny package.",
  },
  {
    id: "ws1",
    name: "AXONEX WS1 Workstation — Intel Core i9-12900H, 64GB DDR5, 2TB NVMe + 4TB HDD, Quadro T1200",
    shortName: "AXONEX WS1 Workstation",
    category: "workstations",
    price: 1299.0,
    originalPrice: 1499.0,
    rating: 5,
    reviews: 34,
    image: p("/images/product-thumb-1.jpg"),
    images: [p("/images/product-thumb-1.jpg"), p("/images/product-thumb-4.jpg")],
    tag: "Professional",
    specs: { CPU: "Intel i9-12900H (14C/20T)", RAM: "64GB DDR5-4800", Storage: "2TB NVMe + 4TB HDD", Graphics: "NVIDIA Quadro T1200", LAN: "Dual 2.5GbE", WiFi: "WiFi 6E", BT: "5.2", Display: "Quad 4K" },
    highlights: ["Intel i9-12900H 14-Core", "64GB DDR5", "6TB Total Storage", "Quadro T1200", "ISV Certified", "DDR5 Memory"],
    inStock: true,
    sku: "AX-WS1-i9-64-2T4T",
    description: "ISV-certified workstation for CAD, 3D rendering, and scientific computing. Professional-grade reliability meets compact design.",
  },
  {
    id: "s1-ssd",
    name: "AXONEX S1 2TB NVMe SSD Expansion for M5/M7 Series — PCIe 3.0 x4, Up to 3500MB/s",
    shortName: "AXONEX S1 2TB NVMe SSD",
    category: "storage",
    price: 129.0,
    originalPrice: 159.0,
    rating: 4,
    reviews: 42,
    image: p("/images/product-thumb-3.jpg"),
    images: [p("/images/product-thumb-3.jpg"), p("/images/product-thumb-4.jpg")],
    tag: "Accessory",
    specs: { Capacity: "2TB", Interface: "PCIe 3.0 x4", Speed: "3500/3000 MB/s", FormFactor: "M.2 2280", NAND: "3D TLC", Warranty: "5 Years" },
    highlights: ["2TB Capacity", "3500MB/s Read", "PCIe 3.0 x4", "M.2 2280", "5-Year Warranty"],
    inStock: true,
    sku: "AX-S1-2TB-NVMe",
    description: "Expand your AXONEX Mini PC storage with this high-speed 2TB NVMe SSD. Perfect for media libraries, game storage, and large projects.",
  },
  {
    id: "dock-12in1",
    name: "AXONEX USB-C Docking Station 12-in-1 — Dual HDMI 4K@60Hz, 3x USB-A, SD/TF, 100W PD",
    shortName: "AXONEX 12-in-1 USB-C Dock",
    category: "accessories",
    price: 79.0,
    rating: 4,
    reviews: 203,
    image: p("/images/product-thumb-4.jpg"),
    images: [p("/images/product-thumb-4.jpg"), p("/images/product-thumb-3.jpg")],
    tag: "Essential",
    specs: { HDMI: "2x 4K@60Hz", USB: "3x USB 3.0", CardReader: "SD + TF", Ethernet: "1x Gigabit", PD: "100W Pass-through", Audio: "3.5mm Jack" },
    highlights: ["Dual 4K HDMI", "12-in-1 Ports", "100W PD Charging", "SD/TF Card Reader", "Gigabit Ethernet"],
    inStock: true,
    sku: "AX-DOCK-12IN1",
    description: "Transform your Mini PC into a full desktop setup. Dual 4K HDMI, multiple USB ports, card reader, and 100W power delivery.",
  },
  {
    id: "mesh-wifi",
    name: "AXONEX Mesh WiFi 6E System — AXE5400 Tri-Band, 3-Pack, Coverage up to 7500 sq ft",
    shortName: "AXONEX Mesh WiFi 6E (3-Pack)",
    category: "networking",
    price: 249.0,
    originalPrice: 299.0,
    rating: 4,
    reviews: 78,
    image: p("/images/product-thumb-4.jpg"),
    images: [p("/images/product-thumb-4.jpg")],
    tag: "Popular",
    specs: { WiFi: "WiFi 6E AXE5400", Bands: "Tri-Band (2.4/5/6GHz)", Coverage: "7500 sq ft", Ports: "3x 2.5GbE", Devices: "200+", Setup: "App-based" },
    highlights: ["WiFi 6E Tri-Band", "7500 sq ft Coverage", "3-Pack System", "2.5GbE Ports", "200+ Devices"],
    inStock: true,
    sku: "AX-MESH-AXE5400-3P",
    description: "Blanket your entire home with ultra-fast WiFi 6E. Tri-band technology ensures optimal performance for all your devices.",
  },
  {
    id: "proview-27",
    name: "AXONEX ProView 27\" 4K Monitor — IPS, 99% sRGB, USB-C 65W PD, Height Adjustable",
    shortName: "AXONEX ProView 27 4K",
    category: "monitors",
    price: 349.0,
    originalPrice: 429.0,
    rating: 4,
    reviews: 112,
    image: p("/images/product-thumb-1.jpg"),
    images: [p("/images/product-thumb-1.jpg"), p("/images/product-thumb-3.jpg")],
    tag: "Editor's Pick",
    specs: { Size: "27 inch", Resolution: "3840x2160 4K", Panel: "IPS", Color: "99% sRGB", PD: "USB-C 65W", Refresh: "60Hz", HDR: "HDR400" },
    highlights: ["27\" 4K IPS", "99% sRGB Color", "USB-C 65W PD", "HDR400", "Height Adjustable"],
    inStock: true,
    sku: "AX-MON-27-4K-IPS",
    description: "A stunning 27-inch 4K IPS monitor perfect for productivity and creative work. USB-C with 65W power delivery simplifies your setup.",
  },
  {
    id: "ram-32gb",
    name: "AXONEX 32GB DDR4-3200 SODIMM Memory Kit (2x16GB) for Mini PCs",
    shortName: "AXONEX 32GB DDR4 RAM Kit",
    category: "components",
    price: 69.0,
    originalPrice: 89.0,
    rating: 5,
    reviews: 312,
    image: p("/images/product-thumb-2.jpg"),
    images: [p("/images/product-thumb-2.jpg")],
    specs: { Capacity: "32GB (2x16GB)", Type: "DDR4-3200 SODIMM", Voltage: "1.2V", CAS: "CL22", Warranty: "Lifetime" },
    highlights: ["32GB Dual Channel", "DDR4-3200", "SODIMM for Mini PCs", "Lifetime Warranty"],
    inStock: true,
    sku: "AX-RAM-32G-DDR4",
    description: "Upgrade your Mini PC memory with this reliable 32GB DDR4-3200 kit. Tested for compatibility with all AXONEX systems.",
  },
  {
    id: "g1-gaming",
    name: "AXONEX G1 Gaming PC — Intel Core i7-12700, RTX 3070, 32GB DDR5, 1TB NVMe SSD",
    shortName: "AXONEX G1 Gaming PC",
    category: "gaming-pcs",
    price: 1199.0,
    originalPrice: 1399.0,
    rating: 5,
    reviews: 67,
    image: p("/images/product-main.jpg"),
    images: [p("/images/product-main.jpg"), p("/images/product-thumb-1.jpg")],
    tag: "High Performance",
    specs: { CPU: "Intel i7-12700 (12C/20T)", RAM: "32GB DDR5-5200", Storage: "1TB NVMe Gen4", Graphics: "RTX 3070 8GB", PSU: "750W 80+ Gold", Case: "Mid-Tower RGB" },
    highlights: ["Intel i7-12700 12-Core", "RTX 3070 8GB", "32GB DDR5", "1TB Gen4 NVMe", "RGB Case"],
    inStock: true,
    sku: "AX-G1-i7-32-1T",
    description: "Full-size gaming powerhouse. The RTX 3070 handles 1440p gaming at high settings with ray tracing enabled.",
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  const cat = categories.find((c) => c.slug === categorySlug);
  if (!cat) return [];
  return products.filter((p) => p.category === cat.id);
}

export function searchProducts(query: string): Product[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.shortName.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.sku.toLowerCase().includes(q) ||
      Object.values(p.specs).some((v) => v.toLowerCase().includes(q))
  );
}
