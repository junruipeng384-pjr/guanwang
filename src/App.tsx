import { Routes, Route } from "react-router";
import { SearchProvider } from "./hooks/useSearch";
import HomePage from "./pages/HomePage";
import ProductDetail from "./pages/ProductDetail";
import StorePage from "./pages/StorePage";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import ProductReturns from "./pages/ProductReturns";
import CheckOrder from "./pages/CheckOrder";
import SiteMap from "./pages/SiteMap";
import CartPage from "./pages/CartPage";
import WishlistPage from "./pages/WishlistPage";

export default function App() {
  return (
    <SearchProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/store" element={<StorePage />} />
        <Route path="/store/:categorySlug" element={<StorePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/returns" element={<ProductReturns />} />
        <Route path="/order-status" element={<CheckOrder />} />
        <Route path="/gift-certificate" element={<StorePage />} />
        <Route path="/sitemap" element={<SiteMap />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
      </Routes>
    </SearchProvider>
  );
}
