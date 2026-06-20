import { useState, useRef, useEffect } from "react";
import { useCart } from "../hooks/useCart";
import { ShoppingCart, X, Plus, Minus, Trash2 } from "lucide-react";

export default function MiniCart() {
  const { items, totalItems, totalPrice, removeItem, updateQuantity } = useCart();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        className="p-2 rounded transition-colors duration-200 hover:bg-black/5 relative"
        onClick={() => setOpen(!open)}
      >
        <ShoppingCart size={18} strokeWidth={1.5} color="#333" />
        {totalItems > 0 && (
          <span
            className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full text-[10px] font-bold text-white flex items-center justify-center"
            style={{ backgroundColor: "var(--color-accent)" }}
          >
            {totalItems}
          </span>
        )}
      </button>

      {open && (
        <div
          className="absolute right-0 top-full mt-2 w-[360px] rounded-lg shadow-xl border overflow-hidden"
          style={{ backgroundColor: "#fff", borderColor: "var(--color-border)" }}
        >
          <div className="flex items-center justify-between px-4 py-3 border-b" style={{ borderColor: "var(--color-border-light)" }}>
            <span className="font-semibold text-sm" style={{ color: "#333" }}>
              Shopping Cart ({totalItems})
            </span>
            <button onClick={() => setOpen(false)} className="p-1 rounded hover:bg-gray-100">
              <X size={16} color="#888" />
            </button>
          </div>

          {items.length === 0 ? (
            <div className="px-4 py-8 text-center">
              <ShoppingCart size={40} color="#ddd" className="mx-auto mb-3" />
              <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
                Your cart is empty
              </p>
              <p className="text-xs mt-1" style={{ color: "var(--color-text-muted)" }}>
                Add some products to get started
              </p>
            </div>
          ) : (
            <>
              <div className="max-h-[320px] overflow-y-auto">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-3 px-4 py-3 border-b"
                    style={{ borderColor: "var(--color-border-light)" }}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-contain rounded border shrink-0"
                      style={{ borderColor: "var(--color-border-light)" }}
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium truncate" style={{ color: "#333" }}>
                        {item.name}
                      </p>
                      <p className="text-xs mt-0.5" style={{ color: "var(--color-accent)" }}>
                        ${item.price.toFixed(2)}
                      </p>
                      <div className="flex items-center gap-2 mt-1.5">
                        <button
                          className="w-6 h-6 border rounded flex items-center justify-center hover:bg-gray-50"
                          style={{ borderColor: "var(--color-border)" }}
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus size={10} />
                        </button>
                        <span className="text-xs w-6 text-center">{item.quantity}</span>
                        <button
                          className="w-6 h-6 border rounded flex items-center justify-center hover:bg-gray-50"
                          style={{ borderColor: "var(--color-border)" }}
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus size={10} />
                        </button>
                        <button
                          className="ml-auto p-1 rounded hover:bg-red-50 transition-colors"
                          onClick={() => removeItem(item.id)}
                        >
                          <Trash2 size={12} color="#d32f2f" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="px-4 py-3 border-t" style={{ borderColor: "var(--color-border-light)" }}>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium" style={{ color: "#333" }}>
                    Subtotal:
                  </span>
                  <span className="text-lg font-bold" style={{ color: "var(--color-accent)" }}>
                    ${totalPrice.toFixed(2)}
                  </span>
                </div>
                <button
                  className="w-full h-10 rounded font-medium text-white text-sm transition-all duration-200"
                  style={{ backgroundColor: "var(--color-accent)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "var(--color-accent-hover)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "var(--color-accent)";
                  }}
                >
                  Proceed to Checkout
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
