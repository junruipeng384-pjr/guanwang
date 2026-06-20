import { useState } from "react";
import { useParams, Link } from "react-router";
import { Minus, Plus, Heart, ArrowLeftRight, Share2, Truck, Shield, RotateCcw, CheckCircle, Star } from "lucide-react";
import { useCart } from "../hooks/useCart";
import { getProductById, products, categories } from "../data/products";
import AxonexLayout from "../components/layout/AxonexLayout";

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const { addItem } = useCart();
  const product = getProductById(id || "");
  const [activeImage, setActiveImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [wishlistActive, setWishlistActive] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  if (!product) {
    return (
      <AxonexLayout breadcrumbs={[{ label: "Product Not Found" }]}>
        <div className="max-w-[1280px] mx-auto px-4 lg:px-6 py-20 text-center">
          <h2 className="text-2xl font-bold mb-2" style={{ color: "#333" }}>Product Not Found</h2>
          <p className="text-sm mb-4" style={{ color: "#888" }}>The product you are looking for does not exist.</p>
          <Link to="/store" className="text-sm" style={{ color: "var(--color-accent)" }}>Browse All Products</Link>
        </div>
      </AxonexLayout>
    );
  }

  const categoryName = categories.find((c) => c.id === product.category)?.name || product.category;
  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addItem({ id: product.id, name: product.name, price: product.price, image: product.image, quantity });
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <AxonexLayout breadcrumbs={[
      { label: "Store", href: "/store" },
      { label: categoryName, href: `/store/${product.category}` },
      { label: product.shortName },
    ]}>
      {/* Product Hero */}
      <div className="max-w-[1280px] mx-auto px-4 lg:px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Images Gallery */}
          <div className="lg:w-[42%]">
            {/* Main Image - white background, natural aspect ratio */}
            <div
              className="w-full rounded-xl flex items-center justify-center p-4 sm:p-8"
              style={{
                backgroundColor: "#fff",
                border: "1px solid var(--color-border-light)",
                minHeight: 420,
              }}
            >
              <img
                src={product.images[activeImage]}
                alt={product.name}
                className="max-w-full object-contain"
                style={{ maxHeight: 420 }}
              />
            </div>
            {/* Thumbnails */}
            <div className="flex gap-2 mt-3 overflow-x-auto pb-1">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  className="w-[72px] h-[72px] shrink-0 rounded-lg flex items-center justify-center p-1 transition-all"
                  style={{
                    border: activeImage === i ? "2px solid var(--color-accent)" : "1px solid var(--color-border-light)",
                    backgroundColor: "#fff",
                  }}
                  onClick={() => setActiveImage(i)}
                >
                  <img src={img} alt="" className="max-w-full max-h-full object-contain" />
                </button>
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="lg:w-[58%]">
            <div className="flex items-center gap-2 mb-3">
              <span className="px-2.5 py-0.5 rounded text-[11px] font-bold text-white" style={{ backgroundColor: "var(--color-accent)" }}>AXONEX Official</span>
              {product.inStock && <span className="px-2.5 py-0.5 rounded text-[11px] font-medium" style={{ backgroundColor: "#E8F5E9", color: "#2E7D32" }}>In Stock</span>}
              {product.tag && <span className="px-2.5 py-0.5 rounded text-[11px] font-medium" style={{ backgroundColor: "#FFF3E0", color: "var(--color-accent)" }}>{product.tag}</span>}
            </div>

            <h1 className="text-xl sm:text-2xl font-bold leading-tight mb-2" style={{ color: "#222" }}>{product.name}</h1>

            <div className="flex items-center gap-2 mb-3">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }, (_, i) => (<Star key={i} size={15} fill={i < product.rating ? "#FFB400" : "none"} color={i < product.rating ? "#FFB400" : "#ddd"} />))}
              </div>
              <span className="text-sm font-medium" style={{ color: "var(--color-link)" }}>{product.rating}.0</span>
              <span className="text-sm" style={{ color: "#888" }}>({product.reviews} verified reviews)</span>
            </div>

            <div className="p-4 rounded-xl mb-4" style={{ backgroundColor: "#FFF8F0" }}>
              <div className="flex items-end gap-3 flex-wrap">
                <span className="text-3xl font-bold" style={{ color: "var(--color-accent)" }}>${product.price.toFixed(2)}</span>
                {product.originalPrice && <span className="text-lg line-through mb-1" style={{ color: "#bbb" }}>${product.originalPrice.toFixed(2)}</span>}
                {product.originalPrice && <span className="px-2 py-0.5 rounded text-xs font-bold text-white mb-1" style={{ backgroundColor: "#d32f2f" }}>SAVE {Math.round((1 - product.price / product.originalPrice) * 100)}%</span>}
              </div>
              <p className="text-xs mt-1" style={{ color: "#888" }}>Tax excluded. Free shipping on orders over $50.</p>
            </div>

            {/* Highlights */}
            <div className="flex flex-wrap gap-2 mb-4">
              {product.highlights.map((h) => (
                <span key={h} className="px-2.5 py-1 rounded-full text-xs font-medium border" style={{ borderColor: "var(--color-border-light)", color: "#666", backgroundColor: "#FAFAFA" }}>{h}</span>
              ))}
            </div>

            {/* Brand & Product Meta */}
            <div className="mb-4">
              <div className="flex items-start gap-3 py-1.5 border-b text-[13px]" style={{ borderColor: "var(--color-border-light)" }}>
                <span className="w-[100px] shrink-0" style={{ color: "#888" }}>Brand</span>
                <span className="font-medium" style={{ color: "var(--color-accent)" }}>AXONEX</span>
              </div>
              <div className="flex items-start gap-3 py-1.5 border-b text-[13px]" style={{ borderColor: "var(--color-border-light)" }}>
                <span className="w-[100px] shrink-0" style={{ color: "#888" }}>Product Code</span>
                <span className="font-medium" style={{ color: "#444" }}>{product.sku}</span>
              </div>
              <div className="flex items-start gap-3 py-1.5 border-b text-[13px]" style={{ borderColor: "var(--color-border-light)" }}>
                <span className="w-[100px] shrink-0" style={{ color: "#888" }}>Copyright</span>
                <span className="font-medium" style={{ color: "#444" }}>The Copyright of AXONEX Belongs to AXONEX Inc.</span>
              </div>
            </div>

            {/* Specs */}
            <div className="mb-4">
              {Object.entries(product.specs).slice(0, 6).map(([key, val]) => (
                <div key={key} className="flex items-start gap-3 py-1.5 border-b last:border-b-0 text-[13px]" style={{ borderColor: "var(--color-border-light)" }}>
                  <span className="w-[100px] shrink-0" style={{ color: "#888" }}>{key}</span>
                  <span className="font-medium" style={{ color: "#444" }}>{val}</span>
                </div>
              ))}
            </div>

            {/* SKU */}
            <div className="text-[13px] mb-4" style={{ color: "#888" }}>SKU: {product.sku}</div>

            {/* Qty + Add to Cart */}
            <div className="flex flex-col sm:flex-row gap-3 mb-3">
              <div className="flex items-center gap-3">
                <span className="text-sm" style={{ color: "#666" }}>Qty</span>
                <div className="flex items-center border rounded-lg overflow-hidden" style={{ borderColor: "var(--color-border)" }}>
                  <button className="w-10 h-10 flex items-center justify-center hover:bg-gray-100" onClick={() => setQuantity((q) => Math.max(1, q - 1))} disabled={quantity <= 1}><Minus size={14} /></button>
                  <input type="text" value={quantity} onChange={(e) => { const v = parseInt(e.target.value); if (!isNaN(v) && v >= 1) setQuantity(v); }} className="w-10 h-10 text-center text-sm font-semibold outline-none border-x" style={{ borderColor: "var(--color-border)" }} />
                  <button className="w-10 h-10 flex items-center justify-center hover:bg-gray-100" onClick={() => setQuantity((q) => q + 1)}><Plus size={14} /></button>
                </div>
              </div>
              <button className="flex-1 h-10 rounded-lg font-semibold text-white text-sm flex items-center justify-center gap-2 transition-all" style={{ backgroundColor: addedToCart ? "#2E7D32" : "var(--color-accent)" }} onClick={handleAddToCart} onMouseEnter={(e) => { if (!addedToCart) e.currentTarget.style.backgroundColor = "var(--color-accent-hover)"; }} onMouseLeave={(e) => { if (!addedToCart) e.currentTarget.style.backgroundColor = "var(--color-accent)"; }}>
                {addedToCart ? <><CheckCircle size={16} /> Added to Cart</> : <><Plus size={16} strokeWidth={2.5} /> Add to Cart</>}
              </button>
            </div>

            {/* Secondary Actions */}
            <div className="flex gap-2 mb-4">
              <button className="flex-1 h-9 border rounded-lg flex items-center justify-center gap-2 text-[12px] transition-colors" style={{ borderColor: wishlistActive ? "var(--color-accent)" : "var(--color-border)", color: wishlistActive ? "var(--color-accent)" : "#666" }} onClick={() => setWishlistActive(!wishlistActive)}>
                <Heart size={14} fill={wishlistActive ? "currentColor" : "none"} /> {wishlistActive ? "Saved" : "Wish List"}
              </button>
              <button className="flex-1 h-9 border rounded-lg flex items-center justify-center gap-2 text-[12px] transition-colors" style={{ borderColor: "var(--color-border)", color: "#666" }}>
                <ArrowLeftRight size={14} /> Compare
              </button>
              <button className="flex-1 h-9 border rounded-lg flex items-center justify-center gap-2 text-[12px] transition-colors" style={{ borderColor: "var(--color-border)", color: "#666" }}>
                <Share2 size={14} /> Share
              </button>
            </div>

            {/* Trust */}
            <div className="grid grid-cols-3 gap-3 p-4 rounded-xl" style={{ backgroundColor: "#F7F9FC" }}>
              {[{ icon: Truck, label: "Free Shipping", desc: "$50+" }, { icon: Shield, label: "2-Year Warranty", desc: "Full coverage" }, { icon: RotateCcw, label: "30-Day Returns", desc: "Hassle-free" }].map((t, i) => (
                <div key={i} className="flex flex-col items-center text-center gap-1">
                  <t.icon size={18} color="var(--color-accent)" />
                  <span className="text-[11px] font-semibold" style={{ color: "#444" }}>{t.label}</span>
                  <span className="text-[10px]" style={{ color: "#888" }}>{t.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="mt-10">
          <h3 className="text-lg font-bold mb-3" style={{ color: "#333" }}>Product Description</h3>
          <p className="text-sm leading-relaxed" style={{ color: "#555" }}>{product.description}</p>
        </div>

        {/* Full Specs Table */}
        <div className="mt-8">
          <h3 className="text-lg font-bold mb-3" style={{ color: "#333" }}>Full Specifications</h3>
          <div className="rounded-xl border overflow-hidden" style={{ borderColor: "var(--color-border-light)" }}>
            {Object.entries(product.specs).map(([key, val], i, arr) => (
              <div key={key} className={`flex items-start gap-4 px-5 py-3 ${i < arr.length - 1 ? "border-b" : ""}`} style={{ borderColor: "var(--color-border-light)", backgroundColor: i % 2 === 0 ? "#FAFAFA" : "#fff" }}>
                <span className="w-[160px] shrink-0 text-sm" style={{ color: "#666" }}>{key}</span>
                <span className="text-sm font-medium" style={{ color: "#333" }}>{val}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <div className="mt-10 mb-6">
            <h3 className="text-lg font-bold mb-4" style={{ color: "#333" }}>Related Products</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {related.map((p) => (
                <Link key={p.id} to={`/product/${p.id}`} className="rounded-xl border overflow-hidden transition-all hover:shadow-md group" style={{ borderColor: "var(--color-border-light)" }}>
                  <div className="aspect-square flex items-center justify-center p-4" style={{ backgroundColor: "#F9F9F9" }}>
                    <img src={p.image} alt={p.name} className="w-full h-full object-contain transition-transform group-hover:scale-105" />
                  </div>
                  <div className="p-3">
                    <p className="text-sm font-medium line-clamp-1" style={{ color: "#333" }}>{p.shortName}</p>
                    <div className="flex items-center justify-between mt-1">
                      <span className="font-bold" style={{ color: "var(--color-accent)" }}>${p.price.toFixed(2)}</span>
                      <span className="flex items-center gap-1 text-[11px]" style={{ color: "#888" }}><Star size={10} fill="#FFB400" color="#FFB400" /> {p.rating}.0</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </AxonexLayout>
  );
}
