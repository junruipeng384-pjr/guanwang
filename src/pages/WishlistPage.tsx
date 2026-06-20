import { useState } from "react";
import { Link } from "react-router";
import { Heart, ShoppingCart, Trash2, Package } from "lucide-react";
import { useCart } from "../hooks/useCart";
import { products } from "../data/products";
import AxonexLayout from "../components/layout/AxonexLayout";

export default function WishlistPage() {
  const { addItem } = useCart();
  const [wishlistItems, setWishlistItems] = useState(
    products.filter((_, i) => [0, 1, 3, 6].includes(i)).map((p) => ({ ...p, added: false }))
  );

  const removeFromWishlist = (id: string) => {
    setWishlistItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleAddToCart = (item: typeof wishlistItems[0]) => {
    addItem({ id: item.id, name: item.name, price: item.price, image: item.image });
    setWishlistItems((prev) => prev.map((i) => i.id === item.id ? { ...i, added: true } : i));
  };

  return (
    <AxonexLayout breadcrumbs={[{ label: "Wish List" }]}>
      <div className="max-w-[1200px] mx-auto px-4 py-8">
        <div className="flex items-center gap-3 mb-6">
          <Heart size={28} color="var(--color-accent)" />
          <h1 className="text-2xl font-bold" style={{ color: "#333" }}>My Wish List</h1>
          <span className="text-sm" style={{ color: "#888" }}>({wishlistItems.length} items)</span>
        </div>

        {wishlistItems.length === 0 ? (
          <div className="text-center py-16">
            <Heart size={64} className="mx-auto mb-4" color="#ddd" />
            <h2 className="text-xl font-bold mb-2" style={{ color: "#333" }}>Your wish list is empty</h2>
            <p className="text-sm mb-6" style={{ color: "#888" }}>Save items you love for later.</p>
            <Link to="/" className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg font-medium text-white text-sm" style={{ backgroundColor: "var(--color-accent)" }}>
              <Package size={16} /> Start Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {wishlistItems.map((item) => (
              <div key={item.id} className="rounded-xl border overflow-hidden transition-all hover:shadow-md" style={{ borderColor: "var(--color-border-light)", backgroundColor: "#fff" }}>
                <div className="relative aspect-square flex items-center justify-center" style={{ backgroundColor: "#F9F9F9" }}>
                  <img src={item.image} alt={item.name} className="w-full h-full object-contain p-4" />
                  <button className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: "rgba(211,47,47,0.1)" }} onClick={() => removeFromWishlist(item.id)}>
                    <Trash2 size={14} color="#d32f2f" />
                  </button>
                </div>
                <div className="p-4">
                  <Link to="/" className="text-sm font-medium line-clamp-2 hover:underline" style={{ color: "#333" }}>{item.shortName}</Link>
                  <div className="flex items-center justify-between mt-2 mb-3">
                    <span className="text-lg font-bold" style={{ color: item.originalPrice ? "var(--color-accent)" : "#333" }}>${item.price.toFixed(2)}</span>
                    {item.originalPrice && <span className="text-sm line-through" style={{ color: "#bbb" }}>${item.originalPrice.toFixed(2)}</span>}
                  </div>
                  <button
                    className="w-full h-9 rounded-lg text-xs font-medium flex items-center justify-center gap-1.5 transition-all"
                    style={{
                      backgroundColor: item.added ? "#2E7D32" : "var(--color-accent)",
                      color: "#fff",
                    }}
                    onClick={() => handleAddToCart(item)}
                  >
                    {item.added ? (
                      <><svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8L6.5 11.5L13 4.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg> Added</>
                    ) : (
                      <><ShoppingCart size={13} /> Add to Cart</>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </AxonexLayout>
  );
}
