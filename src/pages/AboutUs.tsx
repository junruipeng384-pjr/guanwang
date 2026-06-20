import { Award, Users, Globe, Cpu, Target, Zap } from "lucide-react";
import AxonexLayout from "../components/layout/AxonexLayout";

const milestones = [
  { year: "2018", title: "Founded", desc: "AXONEX was established in San Jose, California with a mission to make high-performance computing accessible in compact form factors." },
  { year: "2019", title: "First Product Launch", desc: "Released the M1 Mini PC, our first AMD-powered compact computer. Sold 10,000 units in the first quarter." },
  { year: "2020", title: "Global Expansion", desc: "Expanded to Europe and Asia-Pacific markets. Opened distribution centers in Germany, UK, and Singapore." },
  { year: "2021", title: "Innovation Award", desc: "Received the CES Innovation Award for the M5 Series. Featured in TechCrunch, The Verge, and PCMag." },
  { year: "2022", title: "1 Million Units", desc: "Surpassed 1 million units sold worldwide. Launched the Workstation WS series for professional users." },
  { year: "2023", title: "Gaming Division", desc: "Entered the gaming market with the G1 Gaming PC series. Partnered with esports teams for product development." },
  { year: "2024", title: "WiFi 6E & Beyond", desc: "Full product line upgraded to WiFi 6E. Opened new R&D facility in Taiwan. Expanded to 50+ countries." },
];

const values = [
  { icon: Cpu, title: "Performance First", desc: "We never compromise on performance. Every product is engineered to deliver maximum computing power in the smallest possible footprint." },
  { icon: Target, title: "Precision Engineering", desc: "Our design team obsesses over thermal management, power efficiency, and component selection to create products that exceed expectations." },
  { icon: Users, title: "Customer Obsessed", desc: "From pre-sales consultation to post-purchase support, we're dedicated to delivering an exceptional customer experience at every touchpoint." },
  { icon: Globe, title: "Global Vision", desc: "With customers in 50+ countries, we design products that meet international standards and adapt to diverse usage scenarios worldwide." },
];

const stats = [
  { value: "50+", label: "Countries Served" },
  { value: "1M+", label: "Units Sold" },
  { value: "240K+", label: "Happy Customers" },
  { value: "99.2%", label: "Satisfaction Rate" },
];

export default function AboutUs() {
  return (
    <AxonexLayout breadcrumbs={[{ label: "About Us" }]}>
      {/* Hero */}
      <div className="w-full py-12" style={{ backgroundColor: "#1a1a2e" }}>
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            About <span style={{ color: "var(--color-accent)" }}>AXONEX</span>
          </h1>
          <p className="text-base max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.6)" }}>
            Pioneering compact computing solutions since 2018. We believe powerful technology shouldn't require a massive footprint.
          </p>
        </div>
      </div>

      {/* Our Story */}
      <div className="max-w-[1200px] mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--color-accent)" }}>
              Our Story
            </p>
            <h2 className="text-2xl font-bold mb-4" style={{ color: "#222" }}>
              Redefining What a Computer Can Be
            </h2>
            <div className="space-y-3 text-sm leading-relaxed" style={{ color: "#555" }}>
              <p>
                AXONEX was born from a simple observation: most desktop computers waste enormous amounts of space. 
                Our founders, a group of ex-Intel and AMD engineers, believed that desktop-class performance 
                could be delivered in a chassis small enough to fit in the palm of your hand.
              </p>
              <p>
                Starting in a small garage in San Jose, we spent 18 months perfecting our thermal management 
                system, which became the cornerstone of every AXONEX product. Today, we're the fastest-growing 
                Mini PC brand in North America, serving customers in over 50 countries.
              </p>
              <p>
                Every AXONEX product is designed in California and manufactured in ISO 9001-certified facilities. 
                We maintain direct relationships with AMD, Intel, and Qualcomm to get early access to the latest 
                processors, ensuring our customers always have cutting-edge technology.
              </p>
            </div>
          </div>
          <div
            className="rounded-xl p-8 border"
            style={{ backgroundColor: "#FAFAFA", borderColor: "var(--color-border-light)" }}
          >
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <p className="text-3xl font-bold" style={{ color: "var(--color-accent)" }}>
                    {stat.value}
                  </p>
                  <p className="text-xs mt-1" style={{ color: "#888" }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="w-full py-10" style={{ backgroundColor: "#FAFAFA" }}>
        <div className="max-w-[1200px] mx-auto px-4">
          <p className="text-xs font-semibold uppercase tracking-widest mb-2 text-center" style={{ color: "var(--color-accent)" }}>
            Our Values
          </p>
          <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: "#222" }}>
            What Drives Us
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <div
                key={i}
                className="rounded-xl border p-6 text-center transition-all duration-300 hover:shadow-md"
                style={{ backgroundColor: "#fff", borderColor: "var(--color-border-light)" }}
              >
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: "rgba(230,81,0,0.08)" }}>
                  <v.icon size={24} color="var(--color-accent)" />
                </div>
                <h3 className="text-sm font-bold mb-2" style={{ color: "#333" }}>{v.title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: "#777" }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="max-w-[1200px] mx-auto px-4 py-12">
        <p className="text-xs font-semibold uppercase tracking-widest mb-2 text-center" style={{ color: "var(--color-accent)" }}>
          Our Journey
        </p>
        <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: "#222" }}>
          Milestones
        </h2>
        <div className="relative">
          <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px" style={{ backgroundColor: "var(--color-border)" }} />
          {milestones.map((m, i) => (
            <div key={i} className={`relative flex items-start gap-6 mb-8 ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
              <div className={`hidden lg:block flex-1 ${i % 2 === 0 ? "text-right" : "text-left"}`}>
                <h3 className="text-lg font-bold" style={{ color: "#333" }}>{m.year}</h3>
                <p className="text-sm font-semibold" style={{ color: "var(--color-accent)" }}>{m.title}</p>
                <p className="text-xs mt-1 leading-relaxed" style={{ color: "#888" }}>{m.desc}</p>
              </div>
              <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 relative z-10" style={{ backgroundColor: "var(--color-accent)" }}>
                <Zap size={14} color="#fff" />
              </div>
              <div className="lg:hidden flex-1">
                <h3 className="text-lg font-bold" style={{ color: "#333" }}>{m.year}</h3>
                <p className="text-sm font-semibold" style={{ color: "var(--color-accent)" }}>{m.title}</p>
                <p className="text-xs mt-1 leading-relaxed" style={{ color: "#888" }}>{m.desc}</p>
              </div>
              <div className="hidden lg:block flex-1" />
            </div>
          ))}
        </div>
      </div>

      {/* Team */}
      <div className="w-full py-10" style={{ backgroundColor: "#FAFAFA" }}>
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--color-accent)" }}>
            Our Team
          </p>
          <h2 className="text-2xl font-bold mb-3" style={{ color: "#222" }}>
            Meet the People Behind AXONEX
          </h2>
          <p className="text-sm max-w-xl mx-auto mb-8" style={{ color: "#888" }}>
            Our team of 120+ engineers, designers, and support specialists are passionate about building the best compact computers in the world.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
            {[
              { name: "Hongbin Dong", role: "Founder & CEO", since: "Since 2018" },
              { name: "Wei Zhang", role: "CTO", since: "Since 2018" },
              { name: "Lisa Chen", role: "Head of Design", since: "Since 2019" },
              { name: "Marcus Johnson", role: "VP of Engineering", since: "Since 2020" },
              { name: "Aiko Tanaka", role: "Head of Support", since: "Since 2019" },
            ].map((person, i) => (
              <div key={i} className="rounded-xl border p-4" style={{ backgroundColor: "#fff", borderColor: "var(--color-border-light)" }}>
                <div className="w-16 h-16 rounded-full mx-auto mb-3 flex items-center justify-center text-white font-bold text-lg" style={{ backgroundColor: `hsl(${20 + i * 30}, 70%, 55%)` }}>
                  {person.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <h4 className="text-sm font-bold" style={{ color: "#333" }}>{person.name}</h4>
                <p className="text-xs mt-0.5" style={{ color: "var(--color-accent)" }}>{person.role}</p>
                <p className="text-[10px] mt-1" style={{ color: "#aaa" }}>{person.since}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Certifications */}
      <div className="max-w-[1200px] mx-auto px-4 py-10">
        <div className="text-center">
          <h2 className="text-lg font-bold mb-6" style={{ color: "#333" }}>
            Certifications & Standards
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {["FCC Certified", "CE Marked", "RoHS Compliant", "ISO 9001:2015", "Energy Star", "WEEE Registered"].map((cert) => (
              <span key={cert} className="px-4 py-2 rounded-full text-xs font-medium border" style={{ borderColor: "var(--color-border-light)", color: "#666", backgroundColor: "#FAFAFA" }}>
                <Award size={12} className="inline mr-1" />
                {cert}
              </span>
            ))}
          </div>
        </div>
      </div>
    </AxonexLayout>
  );
}
