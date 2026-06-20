export const BRAND = {
  name: "AXONEX",
  domain: "axonex.com",
  tagline: "Compact Computing. Infinite Possibilities.",
  description: "AXONEX designs and manufactures high-performance Mini PCs and computing solutions. From home offices to enterprise deployments, we deliver desktop-class performance in remarkably compact form factors.",
  founded: 2018,
  hq: "Austin, Texas, USA",
  email: "support@axonex.com",
  phone: "+1 (888) 555-AXON",
  accent: "#E65100",
  accentHover: "#D84300",
} as const;

export const NAV_ITEMS = {
  shop: [
    { label: "All Products", href: "/store" },
    { label: "Mini PCs", href: "/store/mini-pcs" },
    { label: "Gaming PCs", href: "/store/gaming-pcs" },
    { label: "Workstations", href: "/store/workstations" },
    { label: "Accessories", href: "/store/accessories" },
    { label: "Components", href: "/store/components" },
  ],
  products: [
    { label: "M5 Series", href: "/product/m5-plus" },
    { label: "M3 Series", href: "/store/mini-pcs" },
    { label: "M7 Pro Series", href: "/store/gaming-pcs" },
    { label: "WS Workstation", href: "/store/workstations" },
  ],
  solutions: [
    { label: "Home Office", href: "/solutions/home-office" },
    { label: "Enterprise", href: "/solutions/enterprise" },
    { label: "Gaming & Media", href: "/solutions/gaming" },
    { label: "Education", href: "/solutions/education" },
  ],
  support: [
    { label: "Help Center", href: "/support" },
    { label: "Order Status", href: "/order-status" },
    { label: "Returns & Warranty", href: "/returns" },
    { label: "Downloads", href: "/support/downloads" },
    { label: "Contact Us", href: "/contact" },
  ],
  company: [
    { label: "About AXONEX", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Press Center", href: "/press" },
    { label: "Partners", href: "/partners" },
  ],
  main: [
    { label: "Home", href: "/", hasDropdown: false },
    { label: "Store", href: "/store", hasDropdown: true },
    { label: "Products", href: "/store", hasDropdown: true },
    { label: "Support", href: "/support", hasDropdown: true },
    { label: "Company", href: "/about", hasDropdown: true },
  ],
} as const;
