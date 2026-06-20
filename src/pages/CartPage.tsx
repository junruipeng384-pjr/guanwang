import { useState } from "react";
import { Link } from "react-router";
import { ShoppingCart, Minus, Plus, Trash2, Truck, Shield, ArrowRight, Package, CreditCard, Tag } from "lucide-react";
import { useCart } from "../hooks/useCart";
import AxonexLayout from "../components/layout/AxonexLayout";

const shippingOptions = [
  { id: "fedex-express", name: "FedEx Express", time: "2-3 business days", price: 0, free: true },
  { id: "fedex-ground", name: "FedEx Ground", time: "5-7 business days", price: 0, free: true },
  { id: "fedex-overnight", name: "FedEx Priority Overnight", time: "Next business day", price: 24.99, free: false },
];

export default function CartPage() {
  const { items, removeItem, updateQuantity, totalPrice } = useCart();
  const [promoCode, setPromoCode] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);
  const [shipping, setShipping] = useState("fedex-express");

  const selectedShipping = shippingOptions.find((s) => s.id === shipping)!;
  const discount = promoApplied ? totalPrice * 0.1 : 0;
  const finalTotal = totalPrice - discount + selectedShipping.price;

  return (
    <AxonexLayout breadcrumbs={[{ label: "Shopping Cart" }]}>
      <div className="max-w-[1200px] mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6" style={{ color: "#333" }}>
          Shopping Cart ({items.length} item{items.length !== 1 ? "s" : ""})
        </h1>

        {items.length === 0 ? (
          <div className="text-center py-16">
            <ShoppingCart size={64} className="mx-auto mb-4" color="#ddd" />
            <h2 className="text-xl font-bold mb-2" style={{ color: "#333" }}>Your cart is empty</h2>
            <p className="text-sm mb-6" style={{ color: "#888" }}>Looks like you haven't added anything yet.</p>
            <Link to="/" className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg font-medium text-white text-sm" style={{ backgroundColor: "var(--color-accent)" }}>
              <Package size={16} /> Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="rounded-xl border overflow-hidden" style={{ borderColor: "var(--color-border-light)", backgroundColor: "#fff" }}>
                <div className="flex items-center px-5 py-3 border-b text-xs font-semibold" style={{ borderColor: "var(--color-border-light)", color: "#888" }}>
                  <span className="flex-1">Product</span>
                  <span className="w-28 text-center">Quantity</span>
                  <span className="w-24 text-right">Total</span>
                  <span className="w-10" />
                </div>
                {items.map((item) => (
                  <div key={item.id} className="flex items-center px-5 py-4 border-b" style={{ borderColor: "var(--color-border-light)" }}>
                    <div className="flex items-center gap-3 flex-1 min-w-0">
                      <img src={item.image} alt={item.name} className="w-16 h-16 object-contain rounded border shrink-0" style={{ borderColor: "var(--color-border-light)" }} />
                      <Link to="/" className="text-sm line-clamp-2 hover:underline" style={{ color: "#333" }}>{item.name}</Link>
                    </div>
                    <div className="w-28 flex items-center justify-center">
                      <div className="flex items-center border rounded-lg overflow-hidden" style={{ borderColor: "var(--color-border)" }}>
                        <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-50" onClick={() => updateQuantity(item.id, item.quantity - 1)}><Minus size={12} /></button>
                        <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                        <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-50" onClick={() => updateQuantity(item.id, item.quantity + 1)}><Plus size={12} /></button>
                      </div>
                    </div>
                    <span className="w-24 text-right text-sm font-bold" style={{ color: "var(--color-accent)" }}>${(item.price * item.quantity).toFixed(2)}</span>
                    <button className="w-10 flex justify-end p-1 rounded hover:bg-red-50" onClick={() => removeItem(item.id)}>
                      <Trash2 size={14} color="#d32f2f" />
                    </button>
                  </div>
                ))}
              </div>

              {/* Shipping */}
              <div className="mt-5 rounded-xl border p-5" style={{ borderColor: "var(--color-border-light)", backgroundColor: "#fff" }}>
                <div className="flex items-center gap-2 mb-3">
                  <Truck size={18} color="var(--color-accent)" />
                  <h3 className="text-sm font-bold" style={{ color: "#333" }}>Shipping Method</h3>
                </div>
                <div className="flex flex-col gap-2">
                  {shippingOptions.map((option) => (
                    <label key={option.id} className="flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-colors" style={{ borderColor: shipping === option.id ? "var(--color-accent)" : "var(--color-border-light)", backgroundColor: shipping === option.id ? "rgba(230,81,0,0.03)" : "transparent" }}>
                      <input type="radio" name="shipping" value={option.id} checked={shipping === option.id} onChange={() => setShipping(option.id)} className="accent-orange-600" />
                      <div className="flex-1">
                        <p className="text-sm font-medium" style={{ color: "#333" }}>{option.name}</p>
                        <p className="text-xs" style={{ color: "#888" }}>{option.time}</p>
                      </div>
                      <span className="text-sm font-bold" style={{ color: option.free ? "#2E7D32" : "#333" }}>{option.free ? "FREE" : `$${option.price.toFixed(2)}`}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Promo */}
              <div className="mt-4 rounded-xl border p-5" style={{ borderColor: "var(--color-border-light)", backgroundColor: "#fff" }}>
                <div className="flex items-center gap-2 mb-2">
                  <Tag size={16} color="var(--color-accent)" />
                  <h3 className="text-sm font-bold" style={{ color: "#333" }}>Promo Code</h3>
                </div>
                <div className="flex gap-2">
                  <input type="text" placeholder="Enter code (try 'SAVE10')" className="flex-1 px-3 py-2 border rounded-lg text-sm outline-none" style={{ borderColor: "var(--color-border)" }} value={promoCode} onChange={(e) => setPromoCode(e.target.value)} disabled={promoApplied} />
                  <button className="px-4 py-2 rounded-lg text-sm font-medium text-white" style={{ backgroundColor: promoApplied ? "#2E7D32" : "var(--color-accent)" }} onClick={() => { if (!promoApplied && promoCode.toUpperCase() === "SAVE10") setPromoApplied(true); }}>
                    {promoApplied ? "Applied" : "Apply"}
                  </button>
                </div>
                {promoApplied && <p className="text-xs mt-1" style={{ color: "#2E7D32" }}>10% discount applied!</p>}
                {!promoApplied && promoCode && promoCode.toUpperCase() !== "SAVE10" && <p className="text-xs mt-1" style={{ color: "#d32f2f" }}>Invalid code. Try "SAVE10"</p>}
              </div>
            </div>

            {/* Summary */}
            <div>
              <div className="rounded-xl border p-5 sticky top-20" style={{ borderColor: "var(--color-border-light)", backgroundColor: "#FAFAFA" }}>
                <h3 className="text-sm font-bold mb-4" style={{ color: "#333" }}>Order Summary</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm" style={{ color: "#666" }}><span>Subtotal</span><span>${totalPrice.toFixed(2)}</span></div>
                  <div className="flex justify-between text-sm" style={{ color: "#666" }}><span>Shipping</span><span style={{ color: selectedShipping.free ? "#2E7D32" : "inherit" }}>{selectedShipping.free ? "Free" : `$${selectedShipping.price.toFixed(2)}`}</span></div>
                  <div className="flex justify-between text-sm" style={{ color: "#666" }}><span>Tax</span><span>Calculated at checkout</span></div>
                  {promoApplied && <div className="flex justify-between text-sm" style={{ color: "#2E7D32" }}><span>Discount (SAVE10)</span><span>-${discount.toFixed(2)}</span></div>}
                </div>
                <div className="border-t pt-3 mb-4" style={{ borderColor: "var(--color-border-light)" }}>
                  <div className="flex justify-between text-lg font-bold" style={{ color: "#333" }}>
                    <span>Total</span>
                    <span style={{ color: "var(--color-accent)" }}>${finalTotal.toFixed(2)}</span>
                  </div>
                </div>
                <button className="w-full h-11 rounded-lg font-semibold text-white flex items-center justify-center gap-2 transition-all" style={{ backgroundColor: "var(--color-accent)" }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "var(--color-accent-hover)"; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "var(--color-accent)"; }}>
                  Proceed to Checkout <ArrowRight size={16} />
                </button>
                <div className="flex items-center justify-center gap-4 mt-4">
                  <span className="flex items-center gap-1 text-[10px]" style={{ color: "#888" }}><Shield size={12} /> Secure</span>
                  <span className="flex items-center gap-1 text-[10px]" style={{ color: "#888" }}><CreditCard size={12} /> SSL Encrypted</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </AxonexLayout>
  );
}
