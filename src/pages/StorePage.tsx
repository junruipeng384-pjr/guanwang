import { useState, useMemo } from "react";
import { Link, useParams, useSearchParams } from "react-router";
import { ShoppingCart, SlidersHorizontal, Grid3X3, LayoutList, Search, X } from "lucide-react";
import StarRating from "../components/StarRating";
import { useCart } from "../hooks/useCart";
import { products, categories } from "../data/products";
import AxonexLayout from "../components/layout/AxonexLayout";

export default function StorePage() {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("q") || "";
  const { addItem } = useCart();
  const [sortBy, setSortBy] = useState("featured");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [priceMax, setPriceMax] = useState(2000);
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>(categorySlug || "all");

  const filtered = useMemo(() => {
    let list = [...products];
    if (activeCategory !== "all") {
      const cat = categories.find((c) => c.slug === activeCategory);
      if (cat) list = list.filter((p) => p.category === cat.id);
    }
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      list = list.filter((p) => p.name.toLowerCase().includes(q) || p.shortName.toLowerCase().includes(q));
    }
    list = list.filter((p) => p.price <= priceMax);
    switch (sortBy) {
      case "price-low": list.sort((a, b) => a.price - b.price); break;
      case "price-high": list.sort((a, b) => b.price - a.price); break;
      case "rating": list.sort((a, b) => b.rating - a.rating); break;
      case "reviews": list.sort((a, b) => b.reviews - a.reviews); break;
    }
    return list;
  }, [activeCategory, searchQuery, priceMax, sortBy]);

  const headerTitle = searchQuery
    ? `Search: "${searchQuery}"`
    : categorySlug
      ? categories.find((c) => c.slug === categorySlug)?.name || "Products"
      : "All Products";

  return (
    <AxonexLayout breadcrumbs={[
      { label: "Store", href: "/store" },
      { label: headerTitle },
    ]}>
      {/* Hero */}
      <div className="w-full py-8" style={{ backgroundColor: "#1a1a2e" }}>
        <div className="max-w-[1280px] mx-auto px-4 lg:px-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-1">{headerTitle}</h1>
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>{filtered.length} product{filtered.length !== 1 ? "s" : ""}</p>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-4 lg:px-6 py-6">
        {/* Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
          <div className="flex items-center gap-2">
            <button className="lg:hidden flex items-center gap-1.5 px-3 py-2 border rounded-lg text-xs font-medium" style={{ borderColor: "var(--color-border)" }} onClick={() => setShowMobileFilters(!showMobileFilters)}>
              <SlidersHorizontal size={14} /> Filters
            </button>
            <span className="text-xs" style={{ color: "#888" }}>Sort:</span>
            <select className="px-3 py-1.5 border rounded-lg text-xs outline-none" style={{ borderColor: "var(--color-border)" }} value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
          <div className="flex items-center gap-1 border rounded-lg overflow-hidden" style={{ borderColor: "var(--color-border)" }}>
            <button className="p-1.5" style={{ backgroundColor: viewMode === "grid" ? "var(--color-accent)" : "transparent" }} onClick={() => setViewMode("grid")}><Grid3X3 size={14} color={viewMode === "grid" ? "#fff" : "#888"} /></button>
            <button className="p-1.5" style={{ backgroundColor: viewMode === "list" ? "var(--color-accent)" : "transparent" }} onClick={() => setViewMode("list")}><LayoutList size={14} color={viewMode === "list" ? "#fff" : "#888"} /></button>
          </div>
        </div>

        <div className="flex gap-6">
          {/* Sidebar */}
          <div className={`${showMobileFilters ? "fixed inset-0 z-50 bg-white p-4 overflow-y-auto" : "hidden"} lg:block lg:static lg:w-52 lg:shrink-0`}>
            {showMobileFilters && (
              <div className="flex items-center justify-between mb-4 lg:hidden">
                <span className="font-bold">Filters</span>
                <button onClick={() => setShowMobileFilters(false)}><X size={20} /></button>
              </div>
            )}
            <div className="rounded-xl border p-4" style={{ borderColor: "var(--color-border-light)", backgroundColor: "#FAFAFA" }}>
              <h4 className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: "#999" }}>Categories</h4>
              <div className="flex flex-col gap-0.5 mb-5">
                <Link to="/store" className="text-xs py-1.5 px-2 rounded transition-colors" style={{ color: activeCategory === "all" ? "var(--color-accent)" : "#555", backgroundColor: activeCategory === "all" ? "rgba(230,81,0,0.05)" : "transparent", fontWeight: activeCategory === "all" ? 600 : 400 }} onClick={() => setActiveCategory("all")}>All Products</Link>
                {categories.map((cat) => (
                  <Link key={cat.id} to={`/store/${cat.slug}`} className="text-xs py-1.5 px-2 rounded transition-colors" style={{ color: activeCategory === cat.slug ? "var(--color-accent)" : "#555", backgroundColor: activeCategory === cat.slug ? "rgba(230,81,0,0.05)" : "transparent", fontWeight: activeCategory === cat.slug ? 600 : 400 }} onClick={() => setActiveCategory(cat.slug)}>{cat.name}</Link>
                ))}
              </div>
              <h4 className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: "#999" }}>Max Price</h4>
              <input type="range" min={0} max={2000} step={50} value={priceMax} onChange={(e) => setPriceMax(parseInt(e.target.value))} className="w-full accent-orange-600" />
              <div className="flex justify-between text-[10px] mt-1" style={{ color: "#aaa" }}><span>$0</span><span>${priceMax}</span></div>
            </div>
          </div>

          {/* Products */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-16">
                <Search size={48} className="mx-auto mb-3" color="#ddd" />
                <p className="text-lg font-medium" style={{ color: "#333" }}>No products found</p>
                <p className="text-sm" style={{ color: "#888" }}>Try adjusting your filters</p>
              </div>
            ) : (
              <div className={viewMode === "grid" ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" : "flex flex-col gap-3"}>
                {filtered.map((p) => (
                  <div key={p.id} className={`rounded-xl border overflow-hidden transition-all hover:shadow-md ${viewMode === "list" ? "flex gap-4" : ""}`} style={{ borderColor: "var(--color-border-light)", backgroundColor: "#fff" }}>
                    <Link to={`/product/${p.id}`} className={`block overflow-hidden ${viewMode === "list" ? "w-40 shrink-0" : ""}`} style={{ backgroundColor: "#F9F9F9" }}>
                      <img src={p.image} alt={p.name} className={`object-contain p-4 ${viewMode === "list" ? "w-full h-full" : "w-full aspect-square"}`} />
                    </Link>
                    <div className="p-4 flex flex-col flex-1">
                      <Link to={`/product/${p.id}`}><h3 className="text-sm font-medium line-clamp-2 hover:underline" style={{ color: "#333" }}>{p.name}</h3></Link>
                      <div className="flex items-center gap-1 my-1">
                        <StarRating rating={p.rating} size={11} />
                        <span className="text-[11px]" style={{ color: "#888" }}>({p.reviews})</span>
                      </div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-lg font-bold" style={{ color: "var(--color-accent)" }}>${p.price.toFixed(2)}</span>
                        {p.originalPrice && <span className="text-sm line-through" style={{ color: "#bbb" }}>${p.originalPrice.toFixed(2)}</span>}
                      </div>
                      <div className="flex flex-wrap gap-1 mb-2">
                        {p.highlights.slice(0, 3).map((h) => (<span key={h} className="px-1.5 py-0.5 rounded text-[10px] border" style={{ borderColor: "var(--color-border-light)", color: "#888" }}>{h}</span>))}
                      </div>
                      <div className="flex gap-2 mt-auto">
                        <button className="flex-1 h-8 rounded-lg text-xs font-medium text-white flex items-center justify-center gap-1" style={{ backgroundColor: "var(--color-accent)" }} onClick={() => addItem({ id: p.id, name: p.shortName, price: p.price, image: p.image })}><ShoppingCart size={12} /> Add</button>
                        <Link to={`/product/${p.id}`} className="h-8 px-3 rounded-lg border text-xs font-medium flex items-center" style={{ borderColor: "var(--color-border)" }}>Details</Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </AxonexLayout>
  );
}
