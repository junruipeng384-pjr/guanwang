import { useState } from "react";
import { Search, Package, Truck, CheckCircle, Clock, MapPin, ChevronDown, ChevronUp } from "lucide-react";
import AxonexLayout from "../components/layout/AxonexLayout";

interface Order {
  id: string;
  date: string;
  status: string;
  statusSteps: { label: string; time: string; done: boolean }[];
  items: { name: string; qty: number; price: number; image: string }[];
  shipping: { method: string; address: string; tracking: string; estDelivery: string };
  totals: { subtotal: number; shipping: number; tax: number; total: number };
}

const mockOrders: Record<string, Order> = {
  "KE-ORD-24001": {
    id: "KE-ORD-24001",
    date: "2024-12-10",
    status: "Shipped",
    statusSteps: [
      { label: "Order Placed", time: "Dec 10, 2024 at 2:34 PM", done: true },
      { label: "Payment Confirmed", time: "Dec 10, 2024 at 2:35 PM", done: true },
      { label: "Processing", time: "Dec 10, 2024 at 4:12 PM", done: true },
      { label: "Shipped", time: "Dec 11, 2024 at 9:15 AM", done: true },
      { label: "Out for Delivery", time: "Dec 13, 2024 at 7:30 AM", done: false },
      { label: "Delivered", time: "Est. Dec 13, 2024 by 6:00 PM", done: false },
    ],
    items: [
      { name: "AXONEX M5 Plus Mini PC — 32GB/1TB", qty: 1, price: 329.0, image: "/images/product-main.jpg" },
      { name: "AXONEX 12-in-1 USB-C Dock", qty: 1, price: 79.0, image: "/images/product-thumb-4.jpg" },
    ],
    shipping: { method: "FedEx Express (2-3 Days)", address: "1200 Innovation Dr, San Jose, CA 95134", tracking: "FX1234567890", estDelivery: "December 13, 2024" },
    totals: { subtotal: 408.0, shipping: 0, tax: 36.72, total: 444.72 },
  },
  "KE-ORD-23987": {
    id: "KE-ORD-23987",
    date: "2024-12-01",
    status: "Delivered",
    statusSteps: [
      { label: "Order Placed", time: "Dec 1, 2024 at 10:12 AM", done: true },
      { label: "Payment Confirmed", time: "Dec 1, 2024 at 10:13 AM", done: true },
      { label: "Processing", time: "Dec 1, 2024 at 2:45 PM", done: true },
      { label: "Shipped", time: "Dec 2, 2024 at 8:30 AM", done: true },
      { label: "Out for Delivery", time: "Dec 4, 2024 at 6:45 AM", done: true },
      { label: "Delivered", time: "Dec 4, 2024 at 11:23 AM", done: true },
    ],
    items: [
      { name: "AXONEX S1 2TB NVMe SSD", qty: 1, price: 129.0, image: "/images/product-thumb-3.jpg" },
    ],
    shipping: { method: "FedEx Express (2-3 Days)", address: "1200 Innovation Dr, San Jose, CA 95134", tracking: "FX0987654321", estDelivery: "December 4, 2024" },
    totals: { subtotal: 129.0, shipping: 0, tax: 11.61, total: 140.61 },
  },
};

export default function CheckOrder() {
  const [orderId, setOrderId] = useState("");
  const [email, setEmail] = useState("");
  const [order, setOrder] = useState<Order | null>(null);
  const [error, setError] = useState("");
  const [expandedItems, setExpandedItems] = useState(true);
  const [expandedTracking, setExpandedTracking] = useState(true);

  const lookupOrder = () => {
    const id = orderId.toUpperCase().trim();
    const found = mockOrders[id];
    if (found) {
      setOrder(found);
      setError("");
    } else {
      setOrder(null);
      setError("Order not found. Try: KE-ORD-24001 or KE-ORD-23987");
    }
  };

  return (
    <AxonexLayout breadcrumbs={[{ label: "Check Your Order" }]}>
      <div className="w-full py-10" style={{ backgroundColor: "#1a1a2e" }}>
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <Package size={40} className="mx-auto mb-3" color="var(--color-accent)" />
          <h1 className="text-3xl font-bold text-white mb-2">Track Your Order</h1>
          <p className="text-sm max-w-lg mx-auto" style={{ color: "rgba(255,255,255,0.6)" }}>
            Enter your order number and email to view real-time tracking and order details.
          </p>
        </div>
      </div>

      <div className="max-w-[800px] mx-auto px-4 py-10">
        {/* Search Form */}
        <div className="rounded-xl border p-5 mb-6" style={{ borderColor: "var(--color-border-light)", backgroundColor: "#FAFAFA" }}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <input type="text" placeholder="Order Number" className="px-4 py-2.5 border rounded-lg text-sm outline-none" style={{ borderColor: "var(--color-border)" }} value={orderId} onChange={(e) => setOrderId(e.target.value)} />
            <input type="email" placeholder="Email Address" className="px-4 py-2.5 border rounded-lg text-sm outline-none" style={{ borderColor: "var(--color-border)" }} value={email} onChange={(e) => setEmail(e.target.value)} />
            <button className="h-10 rounded-lg font-medium text-white text-sm flex items-center justify-center gap-2" style={{ backgroundColor: "var(--color-accent)" }} onClick={lookupOrder}>
              <Search size={16} /> Track Order
            </button>
          </div>
          {error && <p className="text-xs mt-2" style={{ color: "#d32f2f" }}>{error}</p>}
          <p className="text-[11px] mt-2" style={{ color: "#888" }}>Demo: Try order number "KE-ORD-24001" or "KE-ORD-23987"</p>
        </div>

        {/* Order Details */}
        {order && (
          <div className="flex flex-col gap-4">
            {/* Order Header */}
            <div className="rounded-xl border p-5" style={{ borderColor: "var(--color-border-light)", backgroundColor: "#fff" }}>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-xs" style={{ color: "#888" }}>Order #{order.id}</p>
                  <p className="text-sm" style={{ color: "#555" }}>Placed on {order.date}</p>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-bold" style={{
                  backgroundColor: order.status === "Delivered" ? "#E8F5E9" : "#FFF3E0",
                  color: order.status === "Delivered" ? "#2E7D32" : "var(--color-accent)",
                }}>
                  {order.status}
                </span>
              </div>
            </div>

            {/* Tracking Timeline */}
            <div className="rounded-xl border overflow-hidden" style={{ borderColor: "var(--color-border-light)", backgroundColor: "#fff" }}>
              <button className="w-full flex items-center justify-between px-5 py-3" onClick={() => setExpandedTracking(!expandedTracking)}>
                <div className="flex items-center gap-2">
                  <Truck size={18} color="var(--color-accent)" />
                  <span className="text-sm font-bold" style={{ color: "#333" }}>Tracking Status</span>
                </div>
                {expandedTracking ? <ChevronUp size={16} color="#888" /> : <ChevronDown size={16} color="#888" />}
              </button>
              {expandedTracking && (
                <div className="px-5 pb-4">
                  <div className="relative pl-4">
                    <div className="absolute left-[11px] top-2 bottom-2 w-0.5" style={{ backgroundColor: "var(--color-border-light)" }} />
                    {order.statusSteps.map((step, i) => (
                      <div key={i} className="relative flex items-start gap-3 mb-4 last:mb-0">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 z-10 ${step.done ? "" : ""}`} style={{ backgroundColor: step.done ? "var(--color-accent)" : "#eee" }}>
                          {step.done ? <CheckCircle size={12} color="#fff" /> : <Clock size={12} color="#aaa" />}
                        </div>
                        <div>
                          <p className="text-sm font-medium" style={{ color: step.done ? "#333" : "#aaa" }}>{step.label}</p>
                          <p className="text-xs" style={{ color: step.done ? "#888" : "#bbb" }}>{step.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Items */}
            <div className="rounded-xl border overflow-hidden" style={{ borderColor: "var(--color-border-light)", backgroundColor: "#fff" }}>
              <button className="w-full flex items-center justify-between px-5 py-3" onClick={() => setExpandedItems(!expandedItems)}>
                <span className="text-sm font-bold" style={{ color: "#333" }}>Order Items ({order.items.length})</span>
                {expandedItems ? <ChevronUp size={16} color="#888" /> : <ChevronDown size={16} color="#888" />}
              </button>
              {expandedItems && (
                <div>
                  {order.items.map((item, i) => (
                    <div key={i} className="flex items-center gap-4 px-5 py-3 border-t" style={{ borderColor: "var(--color-border-light)" }}>
                      <img src={item.image} alt={item.name} className="w-14 h-14 object-contain rounded border" style={{ borderColor: "var(--color-border-light)" }} />
                      <div className="flex-1">
                        <p className="text-sm font-medium" style={{ color: "#333" }}>{item.name}</p>
                        <p className="text-xs" style={{ color: "#888" }}>Qty: {item.qty}</p>
                      </div>
                      <span className="text-sm font-bold" style={{ color: "var(--color-accent)" }}>${item.price.toFixed(2)}</span>
                    </div>
                  ))}
                  <div className="px-5 py-3 border-t space-y-1" style={{ borderColor: "var(--color-border-light)" }}>
                    <div className="flex justify-between text-xs" style={{ color: "#888" }}><span>Subtotal</span><span>${order.totals.subtotal.toFixed(2)}</span></div>
                    <div className="flex justify-between text-xs" style={{ color: "#888" }}><span>Shipping</span><span>{order.totals.shipping === 0 ? "Free" : `$${order.totals.shipping.toFixed(2)}`}</span></div>
                    <div className="flex justify-between text-xs" style={{ color: "#888" }}><span>Tax</span><span>${order.totals.tax.toFixed(2)}</span></div>
                    <div className="flex justify-between text-sm font-bold pt-1 border-t" style={{ color: "#333", borderColor: "var(--color-border-light)" }}><span>Total</span><span>${order.totals.total.toFixed(2)}</span></div>
                  </div>
                </div>
              )}
            </div>

            {/* Shipping */}
            <div className="rounded-xl border p-5" style={{ borderColor: "var(--color-border-light)", backgroundColor: "#fff" }}>
              <div className="flex items-center gap-2 mb-3">
                <MapPin size={16} color="var(--color-accent)" />
                <span className="text-sm font-bold" style={{ color: "#333" }}>Shipping Details</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                <div>
                  <p className="text-xs mb-0.5" style={{ color: "#888" }}>Shipping Method</p>
                  <p style={{ color: "#333" }}>{order.shipping.method}</p>
                </div>
                <div>
                  <p className="text-xs mb-0.5" style={{ color: "#888" }}>Tracking Number</p>
                  <p style={{ color: "var(--color-link)" }}>{order.shipping.tracking}</p>
                </div>
                <div>
                  <p className="text-xs mb-0.5" style={{ color: "#888" }}>Estimated Delivery</p>
                  <p style={{ color: "#333" }}>{order.shipping.estDelivery}</p>
                </div>
                <div>
                  <p className="text-xs mb-0.5" style={{ color: "#888" }}>Shipping Address</p>
                  <p style={{ color: "#333" }}>{order.shipping.address}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </AxonexLayout>
  );
}
