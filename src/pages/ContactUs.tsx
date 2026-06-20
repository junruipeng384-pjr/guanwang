import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, MessageSquare, Headphones, FileQuestion } from "lucide-react";
import AxonexLayout from "../components/layout/AxonexLayout";

const contactMethods = [
  { icon: Mail, title: "Email Support", value: "support@axonex.com", desc: "We reply within 2 hours during business hours", action: "Send Email" },
  { icon: Phone, title: "Phone Support", value: "+1 (888) 555-0199", desc: "Mon-Fri 9AM-6PM PT, Sat 10AM-4PM", action: "Call Now" },
  { icon: Headphones, title: "Live Chat", value: "Available Now", desc: "Average wait time: under 2 minutes", action: "Start Chat" },
  { icon: MessageSquare, title: "Community Forum", value: "community.axonex.com", desc: "Get help from fellow AXONEX users", action: "Visit Forum" },
];

const departments = [
  { name: "Sales Inquiries", email: "sales@axonex.com", desc: "Bulk orders, partnerships, distribution" },
  { name: "Technical Support", email: "support@axonex.com", desc: "Product issues, troubleshooting, drivers" },
  { name: "Warranty Claims", email: "warranty@axonex.com", desc: "RMA requests, warranty service" },
  { name: "Press & Media", email: "press@axonex.com", desc: "Review units, press releases, interviews" },
];

const faqs = [
  { q: "What are your business hours?", a: "Our US-based support team is available Monday through Friday, 9:00 AM to 6:00 PM Pacific Time. Weekend hours are Saturday 10:00 AM to 4:00 PM PT. Our email support operates 24/7 with a target response time of 2 hours." },
  { q: "How do I get warranty service?", a: "Contact our warranty department at warranty@axonex.com with your order number and a description of the issue. We'll guide you through the RMA process and provide a prepaid return label for defective items." },
  { q: "Do you offer bulk pricing?", a: "Yes! For orders of 10+ units, contact our sales team at sales@axonex.com. We offer volume discounts, extended warranties, and dedicated account management for business customers." },
];

export default function ContactUs() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "general", message: "" });

  const handleSubmit = () => {
    if (form.name && form.email && form.message) {
      setSubmitted(true);
    }
  };

  return (
    <AxonexLayout breadcrumbs={[{ label: "Contact Us" }]}>
      <div className="w-full py-10" style={{ backgroundColor: "#1a1a2e" }}>
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-white mb-2">Contact Us</h1>
          <p className="text-sm max-w-lg mx-auto" style={{ color: "rgba(255,255,255,0.6)" }}>
            We're here to help. Reach out through any of the channels below — we typically respond within 2 hours.
          </p>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 py-10">
        {/* Contact Methods */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {contactMethods.map((method, i) => (
            <div key={i} className="rounded-xl border p-5 text-center transition-all hover:shadow-md" style={{ borderColor: "var(--color-border-light)", backgroundColor: "#fff" }}>
              <div className="w-11 h-11 rounded-lg flex items-center justify-center mx-auto mb-3" style={{ backgroundColor: "rgba(230,81,0,0.08)" }}>
                <method.icon size={22} color="var(--color-accent)" />
              </div>
              <h3 className="text-sm font-bold mb-0.5" style={{ color: "#333" }}>{method.title}</h3>
              <p className="text-sm font-medium mb-1" style={{ color: "var(--color-accent)" }}>{method.value}</p>
              <p className="text-xs mb-3" style={{ color: "#888" }}>{method.desc}</p>
              <span className="text-xs font-medium" style={{ color: "var(--color-link)" }}>{method.action}</span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <div className="rounded-xl border p-8 text-center" style={{ borderColor: "#C8E6C9", backgroundColor: "#E8F5E9" }}>
                <CheckCircle size={48} className="mx-auto mb-3" color="#2E7D32" />
                <h3 className="text-lg font-bold mb-1" style={{ color: "#2E7D32" }}>Message Sent!</h3>
                <p className="text-sm" style={{ color: "#555" }}>Thank you {form.name}. We've received your message and will respond within 2 hours.</p>
                <p className="text-xs mt-2" style={{ color: "#888" }}>Reference: #{Math.random().toString(36).substring(2, 10).toUpperCase()}</p>
              </div>
            ) : (
              <div className="rounded-xl border p-6" style={{ borderColor: "var(--color-border-light)", backgroundColor: "#FAFAFA" }}>
                <h3 className="text-lg font-bold mb-4" style={{ color: "#333" }}>Send Us a Message</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                  <input type="text" placeholder="Your Name *" className="px-4 py-2.5 border rounded-lg text-sm outline-none" style={{ borderColor: "var(--color-border)" }} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                  <input type="email" placeholder="Email Address *" className="px-4 py-2.5 border rounded-lg text-sm outline-none" style={{ borderColor: "var(--color-border)" }} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                </div>
                <select className="w-full px-4 py-2.5 border rounded-lg text-sm outline-none mb-3" style={{ borderColor: "var(--color-border)" }} value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })}>
                  <option value="general">General Inquiry</option>
                  <option value="sales">Sales Question</option>
                  <option value="support">Technical Support</option>
                  <option value="warranty">Warranty Claim</option>
                  <option value="partnership">Partnership</option>
                </select>
                <textarea placeholder="Your Message *" className="w-full px-4 py-2.5 border rounded-lg text-sm outline-none resize-none mb-4" style={{ borderColor: "var(--color-border)" }} rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
                <button className="h-10 px-6 rounded-lg font-medium text-white text-sm flex items-center gap-2" style={{ backgroundColor: "var(--color-accent)" }} onClick={handleSubmit}>
                  <Send size={14} /> Send Message
                </button>
              </div>
            )}

            {/* Departments */}
            <div className="mt-6">
              <h3 className="text-sm font-bold mb-3" style={{ color: "#333" }}>Department Contacts</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {departments.map((dept, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-lg border" style={{ borderColor: "var(--color-border-light)", backgroundColor: "#FAFAFA" }}>
                    <Mail size={16} className="mt-0.5 shrink-0" color="var(--color-accent)" />
                    <div>
                      <p className="text-sm font-medium" style={{ color: "#333" }}>{dept.name}</p>
                      <p className="text-xs" style={{ color: "var(--color-link)" }}>{dept.email}</p>
                      <p className="text-xs" style={{ color: "#888" }}>{dept.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            {/* Location */}
            <div className="rounded-xl border p-5" style={{ borderColor: "var(--color-border-light)", backgroundColor: "#FAFAFA" }}>
              <h4 className="text-sm font-bold mb-3" style={{ color: "#333" }}>Headquarters</h4>
              <div className="space-y-2">
                <div className="flex items-start gap-2 text-xs" style={{ color: "#666" }}>
                  <MapPin size={14} className="mt-0.5 shrink-0" />
                  <span>1200 Innovation Drive, Suite 300<br />San Jose, CA 95134, USA</span>
                </div>
                <div className="flex items-center gap-2 text-xs" style={{ color: "#666" }}>
                  <Clock size={14} />
                  <span>Mon-Fri: 9AM-6PM PT</span>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div className="rounded-xl border p-5" style={{ borderColor: "var(--color-border-light)", backgroundColor: "#FAFAFA" }}>
              <h4 className="text-sm font-bold mb-3 flex items-center gap-2" style={{ color: "#333" }}>
                <FileQuestion size={16} />
                Quick Answers
              </h4>
              <div className="space-y-3">
                {faqs.map((faq, i) => (
                  <div key={i}>
                    <p className="text-xs font-medium mb-0.5" style={{ color: "#555" }}>{faq.q}</p>
                    <p className="text-[11px] leading-relaxed" style={{ color: "#888" }}>{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </AxonexLayout>
  );
}
