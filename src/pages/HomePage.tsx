import { useState } from "react";
import { Link } from "react-router";
import { ArrowRight, Zap, Monitor, Wifi, HardDrive, Cpu, Truck, Shield, Headphones, Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useCart } from "../hooks/useCart";
import { products } from "../data/products";
import { publicAsset } from "@/lib/utils";
import AxonexLayout from "../components/layout/AxonexLayout";

const heroSlides = [
  {
    title: "AXONEX G3 Pro",
    subtitle: "Intel Core i3-10110U | 16GB DDR4 | 512GB PCIe SSD",
    desc: "Desktop Computer with 4K Dual HDMI, USB3.2, WiFi 6, BT5.2, 2.5GbE. Beats 4300U/N150. Built for Office & Business.",
    cta: "Shop G3 Pro",
    link: "/product/g3-pro",
    price: "$229",
    badge: "Best Seller",
    color: "#E65100",
  },
  {
    title: "AXONEX M5 Plus",
    subtitle: "Desktop Power. Pocket Size.",
    desc: "AMD Ryzen 7 5825U, 32GB RAM, 1TB SSD. The most powerful Mini PC under $350.",
    cta: "Shop M5 Plus",
    link: "/product/m5-plus",
    price: "$329",
    badge: "Flagship",
    color: "#6C5CE7",
  },
  {
    title: "AXONEX M7 Pro",
    subtitle: "Gaming. Unleashed.",
    desc: "Ryzen 9 5900HX + RTX 3060. Full-size gaming performance in a 6-inch chassis.",
    cta: "Explore M7 Pro",
    link: "/product/m7-pro",
    price: "$599",
    badge: "Gaming",
    color: "#00B894",
  },
];

const stats = [
  { value: "1M+", label: "Units Delivered" },
  { value: "50+", label: "Countries" },
  { value: "4.8", label: "Avg. Rating" },
  { value: "2yr", label: "Warranty" },
];

const features = [
  { icon: Zap, title: "Desktop-Class Performance", desc: "AMD Ryzen & Intel Core processors deliver up to 8 cores — handling 4K video editing, multi-monitor setups, and heavy multitasking with ease." },
  { icon: Monitor, title: "Multi-Display Ready", desc: "Drive up to three 4K displays simultaneously. HDMI 2.1, DisplayPort 1.4, and USB-C DP Alt Mode for flexible connectivity." },
  { icon: Wifi, title: "Next-Gen Connectivity", desc: "Wi-Fi 6E for wireless speeds up to 2.4Gbps. Dual 2.5GbE Ethernet for ultra-fast wired networking and NAS access." },
  { icon: HardDrive, title: "Blazing-Fast Storage", desc: "NVMe SSDs with read speeds up to 3,500MB/s. Dual M.2 slots for expansion up to 4TB total storage." },
  { icon: Cpu, title: "Whisper-Quiet Design", desc: "Copper heat pipe + ultra-quiet fan keep noise under 28dB even under full load. Work in complete silence." },
  { icon: Truck, title: "Free Global Shipping", desc: "Free express shipping on orders over $50. Same-day dispatch for orders placed before 2PM CT." },
];

const testimonials = [
  { name: "Michael R.", role: "Software Engineer, Austin TX", text: "The G3 Pro replaced my bulky office desktop. I run VS Code with 30+ tabs, Docker containers, and two 4K monitors — zero lag at $229. Unbelievable.", rating: 5 },
  { name: "Sarah L.", role: "Content Creator, LA", text: "I edit 4K video on the M5 Plus. The triple 4K display support is a game-changer for my editing workflow. Best tech purchase I've made in years.", rating: 5 },
  { name: "David K.", role: "IT Director, Chicago", text: "We deployed 50 G3 Pros across our office. Zero hardware failures in 6 months. The dual 2.5GbE ports are perfect for our segregated network setup.", rating: 5 },
  { name: "Jennifer W.", role: "Data Analyst, NYC", text: "This is my 3rd Mini PC and the AXONEX G3 Pro is by far the best. The price-to-performance ratio is unmatched. Buying 10 more for my team.", rating: 5 },
];

export default function HomePage() {
  const { addItem } = useCart();
  const [heroIdx, setHeroIdx] = useState(0);
  const [testimonialIdx, setTestimonialIdx] = useState(0);

  const hero = heroSlides[heroIdx];
  const featured = [
    products.find((p) => p.id === "g3-pro")!,
    products.find((p) => p.id === "m5-plus")!,
    products.find((p) => p.id === "m7-pro")!,
    products.find((p) => p.id === "dock-12in1")!,
  ];

  return (
    <AxonexLayout>
      {/* Hero */}
      <section className="w-full relative overflow-hidden" style={{ backgroundColor: "#1a1a2e", minHeight: 520 }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 rounded-full" style={{ backgroundColor: hero.color, filter: "blur(120px)" }} />
          <div className="absolute bottom-10 right-20 w-96 h-96 rounded-full" style={{ backgroundColor: hero.color, filter: "blur(150px)" }} />
        </div>
        <div className="max-w-[1280px] mx-auto px-4 lg:px-6 relative py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full text-[11px] font-bold text-white" style={{ backgroundColor: hero.color }}>{hero.badge}</span>
                <span className="text-2xl font-bold" style={{ color: hero.color }}>{hero.price}</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-2 leading-tight">{hero.title}</h1>
              <p className="text-xl mb-4" style={{ color: "rgba(255,255,255,0.6)" }}>{hero.subtitle}</p>
              <p className="text-sm mb-8 max-w-md" style={{ color: "rgba(255,255,255,0.5)" }}>{hero.desc}</p>
              <div className="flex items-center gap-3">
                <Link to={hero.link} className="px-6 py-3 rounded-lg font-semibold text-white text-sm flex items-center gap-2 transition-all hover:scale-[1.02]" style={{ backgroundColor: hero.color }}>
                  {hero.cta} <ArrowRight size={16} />
                </Link>
                <Link to="/store" className="px-6 py-3 rounded-lg font-medium text-sm border transition-colors hover:bg-white/10" style={{ borderColor: "rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.8)" }}>
                  View All Products
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img
                src={heroIdx === 0 ? publicAsset("/images/g3pro-main.jpg") : publicAsset("/images/product-main.jpg")}
                alt={hero.title}
                className="w-full max-w-lg object-contain drop-shadow-2xl"
                style={{ filter: "drop-shadow(0 25px 50px rgba(0,0,0,0.5))" }}
              />
            </div>
          </div>
          {/* Slide indicators */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {heroSlides.map((_, i) => (
              <button key={i} className="h-1.5 rounded-full transition-all" style={{ width: i === heroIdx ? 32 : 12, backgroundColor: i === heroIdx ? hero.color : "rgba(255,255,255,0.2)" }} onClick={() => setHeroIdx(i)} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="w-full py-10 border-b" style={{ backgroundColor: "#FAFAFA", borderColor: "var(--color-border-light)" }}>
        <div className="max-w-[1280px] mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <p className="text-3xl font-bold" style={{ color: "var(--color-accent)" }}>{s.value}</p>
                <p className="text-xs mt-1" style={{ color: "#888" }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-[1280px] mx-auto px-4 lg:px-6 py-14">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "var(--color-accent)" }}>Shop</p>
            <h2 className="text-2xl font-bold" style={{ color: "#222" }}>Featured Products</h2>
          </div>
          <Link to="/store" className="text-sm flex items-center gap-1" style={{ color: "var(--color-accent)" }}>View All <ArrowRight size={14} /></Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featured.map((p) => (
            <div key={p.id} className="rounded-xl border overflow-hidden transition-all hover:shadow-lg group" style={{ borderColor: "var(--color-border-light)" }}>
              <Link to={`/product/${p.id}`} className="block aspect-square relative" style={{ backgroundColor: "#F9F9F9" }}>
                <img src={p.image} alt={p.name} className="w-full h-full object-contain p-5 transition-transform group-hover:scale-105" />
                {p.tag && <span className="absolute top-3 left-3 px-2 py-0.5 rounded text-[10px] font-bold text-white" style={{ backgroundColor: "var(--color-accent)" }}>{p.tag}</span>}
                {p.originalPrice && <span className="absolute bottom-3 left-3 px-2 py-0.5 rounded text-[10px] font-bold text-white" style={{ backgroundColor: "#d32f2f" }}>Save ${(p.originalPrice - p.price).toFixed(0)}</span>}
              </Link>
              <div className="p-4">
                <Link to={`/product/${p.id}`}>
                  <h3 className="text-sm font-medium line-clamp-2 mb-1 hover:underline" style={{ color: "#333" }}>{p.shortName}</h3>
                </Link>
                <div className="flex items-center gap-1 mb-2">
                  {Array.from({ length: 5 }, (_, i) => (<Star key={i} size={11} fill={i < p.rating ? "#FFB400" : "none"} color={i < p.rating ? "#FFB400" : "#ddd"} />))}
                  <span className="text-[11px]" style={{ color: "#888" }}>({p.reviews})</span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-lg font-bold" style={{ color: "var(--color-accent)" }}>${p.price.toFixed(2)}</span>
                    {p.originalPrice && <span className="text-sm line-through ml-1" style={{ color: "#bbb" }}>${p.originalPrice.toFixed(2)}</span>}
                  </div>
                  <button className="w-8 h-8 rounded-lg flex items-center justify-center text-white transition-all hover:scale-110" style={{ backgroundColor: "var(--color-accent)" }} onClick={() => addItem({ id: p.id, name: p.shortName, price: p.price, image: p.image })}>
                    <Zap size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why AXONEX */}
      <section className="w-full py-14" style={{ backgroundColor: "#FAFAFA" }}>
        <div className="max-w-[1280px] mx-auto px-4 lg:px-6">
          <div className="text-center mb-10">
            <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "var(--color-accent)" }}>Why Choose Us</p>
            <h2 className="text-2xl font-bold" style={{ color: "#222" }}>Engineered for Excellence</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <div key={i} className="flex gap-4 p-5 rounded-xl border transition-all hover:shadow-md" style={{ backgroundColor: "#fff", borderColor: "var(--color-border-light)" }}>
                <div className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: "rgba(230,81,0,0.08)" }}>
                  <f.icon size={20} color="var(--color-accent)" />
                </div>
                <div>
                  <h3 className="text-sm font-bold mb-1" style={{ color: "#333" }}>{f.title}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: "#777" }}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="w-full py-10 border-y" style={{ backgroundColor: "#fff", borderColor: "var(--color-border-light)" }}>
        <div className="max-w-[1280px] mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: "2-Year Warranty", desc: "Full hardware coverage" },
              { icon: Truck, title: "Free Shipping", desc: "Orders $50 and above" },
              { icon: Headphones, title: "Lifetime Support", desc: "US-based help desk" },
              { icon: Zap, title: "30-Day Returns", desc: "No questions asked" },
            ].map((t, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: "rgba(230,81,0,0.08)" }}>
                  <t.icon size={18} color="var(--color-accent)" />
                </div>
                <div>
                  <p className="text-sm font-bold" style={{ color: "#333" }}>{t.title}</p>
                  <p className="text-xs" style={{ color: "#888" }}>{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-[1280px] mx-auto px-4 lg:px-6 py-14">
        <div className="text-center mb-8">
          <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "var(--color-accent)" }}>Reviews</p>
          <h2 className="text-2xl font-bold" style={{ color: "#222" }}>What Our Customers Say</h2>
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="rounded-xl border p-8 text-center" style={{ borderColor: "var(--color-border-light)", backgroundColor: "#FAFAFA" }}>
            <Quote size={32} className="mx-auto mb-4" style={{ color: "var(--color-accent)", opacity: 0.3 }} />
            <div className="flex items-center justify-center gap-1 mb-4">
              {Array.from({ length: 5 }, (_, i) => (<Star key={i} size={16} fill={i < testimonials[testimonialIdx].rating ? "#FFB400" : "none"} color={i < testimonials[testimonialIdx].rating ? "#FFB400" : "#ddd"} />))}
            </div>
            <p className="text-base mb-4 leading-relaxed" style={{ color: "#444" }}>"{testimonials[testimonialIdx].text}"</p>
            <p className="text-sm font-bold" style={{ color: "#333" }}>{testimonials[testimonialIdx].name}</p>
            <p className="text-xs" style={{ color: "#888" }}>{testimonials[testimonialIdx].role}</p>
          </div>
          <div className="flex items-center justify-center gap-3 mt-4">
            <button className="w-8 h-8 rounded-full border flex items-center justify-center hover:bg-gray-50" style={{ borderColor: "var(--color-border)" }} onClick={() => setTestimonialIdx((i) => (i - 1 + testimonials.length) % testimonials.length)}><ChevronLeft size={14} /></button>
            {testimonials.map((_, i) => (<button key={i} className="w-2 h-2 rounded-full transition-all" style={{ backgroundColor: i === testimonialIdx ? "var(--color-accent)" : "#ddd" }} onClick={() => setTestimonialIdx(i)} />))}
            <button className="w-8 h-8 rounded-full border flex items-center justify-center hover:bg-gray-50" style={{ borderColor: "var(--color-border)" }} onClick={() => setTestimonialIdx((i) => (i + 1) % testimonials.length)}><ChevronRight size={14} /></button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-16" style={{ backgroundColor: "#1a1a2e" }}>
        <div className="max-w-[1280px] mx-auto px-4 lg:px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-3">Ready to Experience Compact Power?</h2>
          <p className="text-sm mb-8 max-w-lg mx-auto" style={{ color: "rgba(255,255,255,0.5)" }}>Join over 1 million users who have made the switch to AXONEX Mini PCs. Free shipping, 2-year warranty, 30-day returns.</p>
          <div className="flex items-center justify-center gap-3">
            <Link to="/store" className="px-8 py-3 rounded-lg font-semibold text-white text-sm transition-all hover:scale-[1.02]" style={{ backgroundColor: "var(--color-accent)" }}>Shop Now</Link>
            <Link to="/about" className="px-8 py-3 rounded-lg font-medium text-sm border transition-colors hover:bg-white/10" style={{ borderColor: "rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.8)" }}>Learn More</Link>
          </div>
        </div>
      </section>
    </AxonexLayout>
  );
}
