import { useState } from "react";
import { RefreshCcw, CheckCircle, Clock, Package, AlertTriangle, HelpCircle, ChevronDown, ChevronUp, Shield } from "lucide-react";
import AxonexLayout from "../components/layout/AxonexLayout";

const steps = [
  { icon: Package, title: "Initiate Return", desc: "Log in to your account and go to 'My Orders'. Select the order and item(s) you want to return. Click 'Request Return'." },
  { icon: HelpCircle, title: "Reason & Condition", desc: "Select a return reason (defective, wrong item, changed mind, etc.). Describe the condition and upload photos if applicable." },
  { icon: CheckCircle, title: "Approval", desc: "Our team reviews your request within 24 hours. You'll receive an email with the return decision and instructions." },
  { icon: Package, title: "Ship It Back", desc: "Print the prepaid return label from your email. Pack the item securely with all original accessories and packaging. Drop off at any authorized location." },
  { icon: Clock, title: "Processing", desc: "Once received, we inspect the item within 2-3 business days. Refunds are processed immediately after inspection." },
  { icon: CheckCircle, title: "Refund", desc: "Refunds are issued to your original payment method within 5-7 business days. Store credit is available instantly." },
];

const faqs = [
  { q: "What is your return policy?", a: "We accept returns within 30 days of delivery. Items must be in original condition with all accessories, packaging, and documentation. Defective items can be returned within the 2-year warranty period." },
  { q: "Do I have to pay for return shipping?", a: "No — return shipping is free for defective items and orders over $100. For all other returns, a flat $9.95 shipping fee applies, which is deducted from your refund." },
  { q: "How long does a refund take?", a: "Once we receive and inspect your return, refunds are processed within 2-3 business days. Credit card refunds may take 5-7 business days to appear on your statement. Store credit is instant." },
  { q: "Can I exchange instead of return?", a: "Yes! You can exchange for the same item (different variant) or a different product of equal or greater value. Exchanges ship free after we receive your returned item." },
  { q: "What if my item arrived damaged?", a: "Contact us immediately at support@axonex.com with photos of the damaged item and packaging. We'll send a replacement right away and provide a prepaid return label for the damaged unit." },
  { q: "Are opened items returnable?", a: "Software licenses and download codes are non-returnable once redeemed. Hardware products can be returned within 30 days even if opened, provided they're in working condition with all accessories." },
  { q: "How do I track my return?", a: "After initiating a return, you'll receive a prepaid return label with tracking. You can track the status in your account under 'My Returns' at any time." },
];

export default function ProductReturns() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [returnStarted, setReturnStarted] = useState(false);
  const [orderId, setOrderId] = useState("");
  const [email, setEmail] = useState("");
  const [lookupResult, setLookupResult] = useState<null | { found: boolean; order?: { id: string; date: string; items: string[]; status: string } }>(null);

  const lookupOrder = () => {
    if (orderId.trim() && email.trim()) {
      if (orderId.toUpperCase().startsWith("KE-ORD")) {
        setLookupResult({
          found: true,
          order: {
            id: orderId.toUpperCase(),
            date: "2024-12-10",
            items: ["AXONEX M5 Plus Mini PC", "AXONEX USB-C Dock"],
            status: "Delivered",
          },
        });
      } else {
        setLookupResult({ found: false });
      }
    }
  };

  return (
    <AxonexLayout breadcrumbs={[{ label: "Product Returns" }]}>
      {/* Hero */}
      <div className="w-full py-10" style={{ backgroundColor: "#1a1a2e" }}>
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <RefreshCcw size={40} className="mx-auto mb-3" color="var(--color-accent)" />
          <h1 className="text-3xl font-bold text-white mb-2">Returns & Exchanges</h1>
          <p className="text-sm max-w-lg mx-auto" style={{ color: "rgba(255,255,255,0.6)" }}>
            Hassle-free returns within 30 days. We make it simple because we stand behind every product.
          </p>
        </div>
      </div>

      {/* Quick Start Return */}
      <div className="max-w-[1200px] mx-auto px-4 py-10">
        <div className="rounded-xl border p-6" style={{ borderColor: "var(--color-border-light)", backgroundColor: "#FAFAFA" }}>
          <h2 className="text-lg font-bold mb-4" style={{ color: "#333" }}>Start a Return</h2>
          {!returnStarted ? (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <input
                type="text"
                placeholder="Order Number (e.g., KE-ORD-12345)"
                className="px-4 py-2.5 border rounded-lg text-sm outline-none"
                style={{ borderColor: "var(--color-border)" }}
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
              />
              <input
                type="email"
                placeholder="Email Address"
                className="px-4 py-2.5 border rounded-lg text-sm outline-none"
                style={{ borderColor: "var(--color-border)" }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                className="h-10 rounded-lg font-medium text-white text-sm transition-all"
                style={{ backgroundColor: "var(--color-accent)" }}
                onClick={() => { setReturnStarted(true); lookupOrder(); }}
              >
                Look Up Order
              </button>
            </div>
          ) : lookupResult?.found ? (
            <div>
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle size={18} color="#2E7D32" />
                <span className="text-sm font-medium" style={{ color: "#2E7D32" }}>Order found! Select items to return:</span>
              </div>
              <div className="space-y-2 mb-4">
                {lookupResult.order?.items.map((item, i) => (
                  <label key={i} className="flex items-center gap-3 p-3 rounded-lg border cursor-pointer" style={{ borderColor: "var(--color-border-light)", backgroundColor: "#fff" }}>
                    <input type="checkbox" className="w-4 h-4 accent-orange-600" />
                    <span className="text-sm" style={{ color: "#333" }}>{item}</span>
                  </label>
                ))}
              </div>
              <div className="flex gap-2">
                <button className="h-9 px-5 rounded-lg font-medium text-white text-sm" style={{ backgroundColor: "var(--color-accent)" }}>
                  Continue Return
                </button>
                <button onClick={() => { setReturnStarted(false); setLookupResult(null); }} className="h-9 px-5 rounded-lg border text-sm" style={{ borderColor: "var(--color-border)" }}>
                  Back
                </button>
              </div>
            </div>
          ) : (
            <div>
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle size={18} color="#d32f2f" />
                <span className="text-sm font-medium" style={{ color: "#d32f2f" }}>Order not found. Please check your details.</span>
              </div>
              <button onClick={() => { setReturnStarted(false); setLookupResult(null); }} className="text-sm" style={{ color: "var(--color-link)" }}>
                Try again
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Steps */}
      <div className="w-full py-10" style={{ backgroundColor: "#FAFAFA" }}>
        <div className="max-w-[1200px] mx-auto px-4">
          <p className="text-xs font-semibold uppercase tracking-widest mb-2 text-center" style={{ color: "var(--color-accent)" }}>The Process</p>
          <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: "#222" }}>How Returns Work</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {steps.map((step, i) => (
              <div key={i} className="flex gap-4 p-5 rounded-xl border" style={{ borderColor: "var(--color-border-light)", backgroundColor: "#fff" }}>
                <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: "rgba(230,81,0,0.08)" }}>
                  <step.icon size={20} color="var(--color-accent)" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold text-white shrink-0" style={{ backgroundColor: "var(--color-accent)" }}>{i + 1}</span>
                    <h3 className="text-sm font-bold" style={{ color: "#333" }}>{step.title}</h3>
                  </div>
                  <p className="text-xs leading-relaxed" style={{ color: "#777" }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Policy Summary */}
      <div className="max-w-[1200px] mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { icon: Clock, title: "30-Day Window", desc: "Return any item within 30 days of delivery for a full refund." },
            { icon: Shield, title: "2-Year Warranty", desc: "Defective products are covered under our 2-year warranty." },
            { icon: RefreshCcw, title: "Free Exchanges", desc: "Exchange for any reason — we cover return shipping both ways." },
          ].map((item, i) => (
            <div key={i} className="text-center p-5 rounded-xl border" style={{ borderColor: "var(--color-border-light)", backgroundColor: "#FAFAFA" }}>
              <item.icon size={24} className="mx-auto mb-2" color="var(--color-accent)" />
              <h3 className="text-sm font-bold mb-1" style={{ color: "#333" }}>{item.title}</h3>
              <p className="text-xs" style={{ color: "#888" }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="w-full py-10" style={{ backgroundColor: "#FAFAFA" }}>
        <div className="max-w-[800px] mx-auto px-4">
          <p className="text-xs font-semibold uppercase tracking-widest mb-2 text-center" style={{ color: "var(--color-accent)" }}>Got Questions?</p>
          <h2 className="text-2xl font-bold mb-6 text-center" style={{ color: "#222" }}>Return Policy FAQ</h2>
          <div className="flex flex-col gap-2">
            {faqs.map((faq, i) => (
              <div key={i} className="rounded-lg border overflow-hidden" style={{ borderColor: "var(--color-border-light)", backgroundColor: "#fff" }}>
                <button className="w-full flex items-center justify-between px-5 py-3.5 text-left" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span className="text-sm font-medium" style={{ color: "#333" }}>{faq.q}</span>
                  {openFaq === i ? <ChevronUp size={16} color="#888" /> : <ChevronDown size={16} color="#888" />}
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-4">
                    <p className="text-sm leading-relaxed" style={{ color: "#666" }}>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </AxonexLayout>
  );
}
