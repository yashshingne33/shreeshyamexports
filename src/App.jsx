import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/layout/Header.jsx";
import Footer from "./components/layout/Footer.jsx";
import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import BriquetteHub from "./pages/BriquetteHub.jsx";
import Applications from "./pages/Applications.jsx";
import Quality from "./pages/Quality.jsx";
import Packaging from "./pages/Packaging.jsx";
import ExportOrdering from "./pages/ExportOrdering.jsx";
import About from "./pages/About.jsx";
// import Contact from "./pages/Contact.jsx";
import RequestQuote from "./pages/RequestQuote.jsx";
import Resources from "./pages/Resources.jsx";
import FAQ from "./pages/FAQ.jsx";
import Privacy from "./pages/Privacy.jsx";
import Terms from "./pages/Terms.jsx";
import ThankYou from "./pages/ThankYou.jsx";
import NotFound from "./pages/NotFound.jsx";
import Disclaimer from "./pages/Disclaimer.jsx";

function ScrollToTop() {
  const { pathname, hash, key } = useLocation();
  useEffect(() => {
    if (!hash) window.scrollTo(0, 0);
  }, [pathname, hash, key]);
  return null;
}


export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-ivory">
      <ScrollToTop />
      <Header />
      <main id="main" className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/" element={<Products />} />
          <Route path="/products/coconut-charcoal-briquettes/" element={<BriquetteHub />} />
          <Route path="/products/:slug/" element={<ProductDetail />} />
          <Route path="/applications/" element={<Applications />} />
          <Route path="/quality/" element={<Quality />} />
          <Route path="/packaging-private-label/" element={<Packaging />} />
          <Route path="/export-ordering/" element={<ExportOrdering />} />
          <Route path="/about/" element={<About />} />
          {/* <Route path="/contact/" element={<Contact />} /> */}
          <Route path="/request-a-quote/" element={<RequestQuote />} />
          <Route path="/resources/" element={<Resources />} />
          <Route path="/faq/" element={<FAQ />} />
          <Route path="/privacy-policy/" element={<Privacy />} />
          <Route path="/terms/" element={<Terms />} />
          <Route path="/thank-you/" element={<ThankYou />} />
          <Route path="/guides/" element={<Navigate to="/resources/" replace />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/disclaimer/" element={<Disclaimer />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
