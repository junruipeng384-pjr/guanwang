import { Link } from "react-router";
import { Map, ChevronRight } from "lucide-react";
import AxonexLayout from "../components/layout/AxonexLayout";
import { categories, products } from "../data/products";

const sections = [
  {
    title: "Main Pages",
    links: [
      { label: "Home", href: "/" },
      { label: "About AXONEX", href: "/about" },
      { label: "Contact Us", href: "/contact" },
      { label: "Site Map", href: "/sitemap" },
    ],
  },
  {
    title: "Customer Service",
    links: [
      { label: "Check Your Order", href: "/check-order" },
      { label: "Product Returns", href: "/returns" },
      { label: "Gift Certificates", href: "/gift-certificate" },
    ],
  },
  {
    title: "Account",
    links: [
      { label: "Shopping Cart", href: "/cart" },
      { label: "Wish List", href: "/wishlist" },
    ],
  },
];

export default function SiteMap() {
  return (
    <AxonexLayout breadcrumbs={[{ label: "Site Map" }]}>
      <div className="w-full py-10" style={{ backgroundColor: "#1a1a2e" }}>
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <Map size={40} className="mx-auto mb-3" color="var(--color-accent)" />
          <h1 className="text-3xl font-bold text-white mb-2">Site Map</h1>
          <p className="text-sm max-w-lg mx-auto" style={{ color: "rgba(255,255,255,0.6)" }}>
            Find your way around the AXONEX store. All pages, categories, and products at a glance.
          </p>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Pages */}
          {sections.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-bold mb-3 pb-2 border-b" style={{ color: "#333", borderColor: "var(--color-border-light)" }}>
                {section.title}
              </h3>
              <ul className="flex flex-col gap-1.5">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link to={link.href} className="flex items-center gap-1 text-sm transition-colors hover:text-orange-600" style={{ color: "var(--color-link)" }}>
                      <ChevronRight size={12} />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Categories */}
          <div>
            <h3 className="text-sm font-bold mb-3 pb-2 border-b" style={{ color: "#333", borderColor: "var(--color-border-light)" }}>
              Product Categories
            </h3>
            <ul className="flex flex-col gap-1.5">
              {categories.map((cat) => (
                <li key={cat.id}>
                  <Link to={`/category/${cat.slug}`} className="flex items-center gap-1 text-sm transition-colors hover:text-orange-600" style={{ color: "var(--color-link)" }}>
                    <ChevronRight size={12} />
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* All Products */}
        <div className="mt-10">
          <h3 className="text-lg font-bold mb-4 pb-2 border-b" style={{ color: "#333", borderColor: "var(--color-border)" }}>
            All Products
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {products.map((product) => (
              <Link
                key={product.id}
                to="/"
                className="flex items-center gap-3 p-3 rounded-lg border transition-all hover:shadow-sm"
                style={{ borderColor: "var(--color-border-light)" }}
              >
                <img src={product.image} alt={product.name} className="w-10 h-10 object-contain rounded" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm truncate" style={{ color: "#333" }}>{product.shortName}</p>
                  <p className="text-xs" style={{ color: "#888" }}>{categories.find((c) => c.id === product.category)?.name}</p>
                </div>
                <span className="text-sm font-bold" style={{ color: "var(--color-accent)" }}>${product.price.toFixed(2)}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </AxonexLayout>
  );
}
