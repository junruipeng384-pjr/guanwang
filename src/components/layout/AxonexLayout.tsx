import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Menu, Search, ShoppingCart, X, ChevronDown, Heart, Cpu } from "lucide-react";
import { useCart } from "../../hooks/useCart";
import { NAV_ITEMS } from "../../data/brand";
import Toast from "../Toast";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface Props {
  children: React.ReactNode;
  breadcrumbs?: BreadcrumbItem[];
  darkHero?: boolean;
}

export default function AxonexLayout({ children, breadcrumbs, darkHero }: Props) {
  const location = useLocation();
  const { totalItems, items, removeItem, updateQuantity, totalPrice } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchValue, setSearchValue] = useState("");
  const [searchFocused, setSearchFocused] = useState(false);
  const cartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (cartRef.current && !cartRef.current.contains(e.target as Node)) setCartOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  const dropdownData: Record<string, { title: string; items: readonly { label: string; href: string }[] }[]> = {
    Store: [
      { title: "Browse", items: NAV_ITEMS.shop },
      { title: "Special Offers", items: [
        { label: "Best Sellers", href: "/store?sort=best" },
        { label: "New Arrivals", href: "/store?sort=new" },
        { label: "On Sale", href: "/store?sale=true" },
      ]},
    ],
    Products: [
      { title: "Product Families", items: NAV_ITEMS.products },
      { title: "Compare", items: [
        { label: "M5 vs M3", href: "/compare/m5-m3" },
        { label: "M7 Pro vs WS1", href: "/compare/m7-ws1" },
      ]},
    ],
    Solutions: [
      { title: "Use Cases", items: NAV_ITEMS.solutions },
      { title: "Industries", items: [
        { label: "Creative Professionals", href: "/solutions/creative" },
        { label: "Software Development", href: "/solutions/dev" },
        { label: "Financial Trading", href: "/solutions/trading" },
      ]},
    ],
    Support: [
      { title: "Get Help", items: NAV_ITEMS.support },
      { title: "Resources", items: [
        { label: "User Manuals", href: "/support/downloads" },
        { label: "Driver Downloads", href: "/support/downloads" },
        { label: "Knowledge Base", href: "/support" },
      ]},
    ],
    Company: [
      { title: "About", items: NAV_ITEMS.company },
      { title: "Legal", items: [
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Service", href: "/terms" },
        { label: "Cookie Policy", href: "/cookies" },
      ]},
    ],
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Top Bar */}
      <div className="w-full text-center py-2 text-xs" style={{ backgroundColor: "#1a1a2e", color: "rgba(255,255,255,0.7)" }}>
        <span>Free shipping on orders over $50</span>
        <Link to="/store" className="ml-2 underline hover:no-underline" style={{ color: "var(--color-accent)" }}>Shop Now</Link>
      </div>

      {/* Header */}
      <header className="w-full sticky top-0 z-50 border-b" style={{ height: 64, backgroundColor: "rgba(255,255,255,0.95)", backdropFilter: "blur(12px)", borderColor: "var(--color-border)" }}>
        <div className="max-w-[1280px] mx-auto h-full flex items-center justify-between px-4 lg:px-6">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 shrink-0">
            <div className="w-9 h-9 rounded-lg flex items-center justify-center text-white font-bold text-lg" style={{ backgroundColor: "var(--color-accent)" }}>
              <Cpu size={20} />
            </div>
            <div className="flex flex-col">
              <span className="text-[15px] font-bold tracking-wider leading-none" style={{ color: "#222" }}>AXONEX</span>
              <span className="text-[9px] tracking-[0.2em] uppercase leading-none mt-0.5" style={{ color: "var(--color-accent)" }}>Computing</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-0.5">
            {NAV_ITEMS.main.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={item.href}
                  className="flex items-center gap-1 px-3 py-2 text-[13px] font-medium rounded-md transition-all"
                  style={{ color: (item.href === "/" ? location.pathname === "/" : location.pathname.startsWith(item.href)) ? "var(--color-accent)" : "#444" }}
                >
                  {item.label}
                  {item.hasDropdown && <ChevronDown size={12} />}
                </Link>
                {item.hasDropdown && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 pt-2" style={{ minWidth: 480 }}>
                    <div className="bg-white rounded-xl shadow-xl border p-5 flex gap-6">
                      {dropdownData[item.label]?.map((section) => (
                        <div key={section.title} className="flex-1">
                          <p className="text-[10px] font-bold uppercase tracking-wider mb-2" style={{ color: "#bbb" }}>{section.title}</p>
                          <div className="flex flex-col gap-0.5">
                            {section.items.map((sub) => (
                              <Link key={sub.label} to={sub.href} className="text-[13px] py-1.5 px-2 rounded transition-colors hover:bg-gray-50" style={{ color: "#444" }}>
                                {sub.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-1">
            {/* Search */}
            <div className="hidden md:block relative">
              <div className={`flex items-center border rounded-full overflow-hidden transition-all ${searchFocused ? "w-56" : "w-44"}`} style={{ borderColor: searchFocused ? "var(--color-accent)" : "var(--color-border)" }}>
                <Search size={15} className="ml-3 shrink-0" color="#999" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="flex-1 px-2 py-1.5 text-[12px] outline-none bg-transparent"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  onFocus={() => setSearchFocused(true)}
                  onBlur={() => setSearchFocused(false)}
                  onKeyDown={(e) => { if (e.key === "Enter" && searchValue.trim()) window.location.href = `/store?q=${encodeURIComponent(searchValue.trim())}`; }}
                />
              </div>
            </div>

            <Link to="/wishlist" className="p-2 rounded-lg transition-colors hover:bg-gray-100 hidden sm:block">
              <Heart size={18} color="#666" />
            </Link>

            {/* Cart */}
            <div ref={cartRef} className="relative">
              <button className="p-2 rounded-lg transition-colors hover:bg-gray-100 relative" onClick={() => setCartOpen(!cartOpen)}>
                <ShoppingCart size={18} color="#666" />
                {totalItems > 0 && (
                  <span className="absolute top-0 right-0 w-4 h-4 rounded-full text-[10px] font-bold text-white flex items-center justify-center" style={{ backgroundColor: "var(--color-accent)" }}>{totalItems}</span>
                )}
              </button>
              {cartOpen && (
                <div className="absolute right-0 top-full mt-2 w-[360px] rounded-xl shadow-xl border overflow-hidden bg-white z-50">
                  <div className="flex items-center justify-between px-4 py-3 border-b" style={{ borderColor: "var(--color-border-light)" }}>
                    <span className="font-semibold text-sm">Cart ({totalItems})</span>
                    <button onClick={() => setCartOpen(false)}><X size={16} color="#888" /></button>
                  </div>
                  {items.length === 0 ? (
                    <div className="px-4 py-8 text-center">
                      <ShoppingCart size={40} color="#ddd" className="mx-auto mb-3" />
                      <p className="text-sm" style={{ color: "#888" }}>Your cart is empty</p>
                    </div>
                  ) : (
                    <>
                      <div className="max-h-[280px] overflow-y-auto">
                        {items.map((item) => (
                          <div key={item.id} className="flex gap-3 px-4 py-3 border-b" style={{ borderColor: "var(--color-border-light)" }}>
                            <img src={item.image} alt={item.name} className="w-14 h-14 object-contain rounded border shrink-0" style={{ borderColor: "var(--color-border-light)" }} />
                            <div className="flex-1 min-w-0">
                              <p className="text-xs font-medium truncate" style={{ color: "#333" }}>{item.name}</p>
                              <p className="text-xs mt-0.5" style={{ color: "var(--color-accent)" }}>${item.price.toFixed(2)}</p>
                              <div className="flex items-center gap-2 mt-1">
                                <button className="w-5 h-5 border rounded flex items-center justify-center text-xs" onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                                <span className="text-xs">{item.quantity}</span>
                                <button className="w-5 h-5 border rounded flex items-center justify-center text-xs" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                                <button className="ml-auto" onClick={() => removeItem(item.id)}><X size={12} color="#d32f2f" /></button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="px-4 py-3 border-t" style={{ borderColor: "var(--color-border-light)" }}>
                        <div className="flex justify-between mb-3 text-sm"><span className="font-medium">Subtotal</span><span className="font-bold" style={{ color: "var(--color-accent)" }}>${totalPrice.toFixed(2)}</span></div>
                        <Link to="/cart" className="block w-full h-9 rounded-lg font-medium text-white text-sm text-center leading-9" style={{ backgroundColor: "var(--color-accent)" }} onClick={() => setCartOpen(false)}>View Cart & Checkout</Link>
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>

            <button className="xl:hidden p-2 rounded-lg" onClick={() => setMobileOpen(!mobileOpen)}>
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Breadcrumbs */}
      {breadcrumbs && breadcrumbs.length > 0 && (
        <div className="w-full py-2.5 border-b" style={{ backgroundColor: darkHero ? "#1a1a2e" : "#FAFAFA", borderColor: darkHero ? "rgba(255,255,255,0.08)" : "var(--color-border-light)" }}>
          <div className="max-w-[1280px] mx-auto px-4 lg:px-6">
            <nav className="flex items-center gap-1 text-[11px]">
              <Link to="/" className="transition-colors" style={{ color: darkHero ? "rgba(255,255,255,0.5)" : "var(--color-link)" }}>Home</Link>
              {breadcrumbs.map((item, i) => (
                <span key={i} className="flex items-center gap-1">
                  <span style={{ color: darkHero ? "rgba(255,255,255,0.3)" : "#ccc" }}>/</span>
                  {item.href ? (
                    <Link to={item.href} className="transition-colors" style={{ color: darkHero ? "rgba(255,255,255,0.5)" : "var(--color-link)" }}>{item.label}</Link>
                  ) : (
                    <span style={{ color: darkHero ? "rgba(255,255,255,0.3)" : "#999" }}>{item.label}</span>
                  )}
                </span>
              ))}
            </nav>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] bg-white xl:hidden">
          <div className="flex items-center justify-between p-4 border-b">
            <span className="font-bold text-lg" style={{ color: "#222" }}>Menu</span>
            <button onClick={() => setMobileOpen(false)}><X size={24} /></button>
          </div>
          <div className="p-4 overflow-y-auto max-h-[calc(100vh-60px)]">
            <div className="mb-4">
              <div className="flex items-center border rounded-lg overflow-hidden px-3">
                <Search size={16} color="#999" />
                <input type="text" placeholder="Search products..." className="flex-1 px-2 py-2.5 text-sm outline-none" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
              </div>
            </div>
            {NAV_ITEMS.main.map((item) => (
              <div key={item.label} className="mb-1">
                <Link to={item.href} className="block py-2.5 text-sm font-semibold" style={{ color: "#333" }} onClick={() => setMobileOpen(false)}>{item.label}</Link>
                {dropdownData[item.label]?.map((section) => (
                  <div key={section.title} className="pl-3">
                    {section.items.map((sub) => (
                      <Link key={sub.label} to={sub.href} className="block py-1.5 text-[12px]" style={{ color: "#666" }} onClick={() => setMobileOpen(false)}>{sub.label}</Link>
                    ))}
                  </div>
                ))}
              </div>
            ))}
            <div className="border-t pt-3 mt-3">
              <Link to="/cart" className="flex items-center gap-2 py-2 text-sm" style={{ color: "#333" }} onClick={() => setMobileOpen(false)}><ShoppingCart size={16} /> Cart ({totalItems})</Link>
              <Link to="/wishlist" className="flex items-center gap-2 py-2 text-sm" style={{ color: "#333" }} onClick={() => setMobileOpen(false)}><Heart size={16} /> Wish List</Link>
            </div>
          </div>
        </div>
      )}

      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="w-full" style={{ backgroundColor: "#111827" }}>
        <div className="max-w-[1280px] mx-auto px-4 lg:px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
            <div className="col-span-2 md:col-span-4 lg:col-span-1">
              <Link to="/" className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white" style={{ backgroundColor: "var(--color-accent)" }}>
                  <Cpu size={16} />
                </div>
                <span className="text-lg font-bold text-white tracking-wider">AXONEX</span>
              </Link>
              <p className="text-xs leading-relaxed mb-3" style={{ color: "rgba(255,255,255,0.5)" }}>Compact Computing. Infinite Possibilities.</p>
              <p className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>Austin, TX 78701, USA</p>
            </div>
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">Products</h4>
              <ul className="flex flex-col gap-2">
                {NAV_ITEMS.products.map((p) => (<li key={p.label}><Link to={p.href} className="text-xs transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.5)" }}>{p.label}</Link></li>))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">Support</h4>
              <ul className="flex flex-col gap-2">
                {NAV_ITEMS.support.map((s) => (<li key={s.label}><Link to={s.href} className="text-xs transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.5)" }}>{s.label}</Link></li>))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">Company</h4>
              <ul className="flex flex-col gap-2">
                {NAV_ITEMS.company.map((c) => (<li key={c.label}><Link to={c.href} className="text-xs transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.5)" }}>{c.label}</Link></li>))}
                <li><Link to="/contact" className="text-xs transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.5)" }}>Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">Stay Updated</h4>
              <p className="text-xs mb-2" style={{ color: "rgba(255,255,255,0.5)" }}>Subscribe for product launches and exclusive offers.</p>
              <div className="flex">
                <input type="email" placeholder="Your email" className="flex-1 px-3 py-1.5 rounded-l text-xs outline-none bg-white/10 text-white placeholder-white/30" />
                <button className="px-3 py-1.5 rounded-r text-xs font-bold text-white" style={{ backgroundColor: "var(--color-accent)" }}>Join</button>
              </div>
            </div>
          </div>
          <div className="mt-10 pt-6 border-t flex flex-col md:flex-row items-center justify-between gap-3" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
            <p className="text-[10px]" style={{ color: "rgba(255,255,255,0.3)" }}>© 2024 AXONEX Inc. All rights reserved.</p>
            <div className="flex items-center gap-4">
              {["Privacy", "Terms", "Cookies", "Sitemap"].map((l) => (
                <Link key={l} to={`/${l.toLowerCase()}`} className="text-[10px] transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.3)" }}>{l}</Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
      <Toast />
    </div>
  );
}
