import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import PageTransition from "./components/layout/PageTransition";
import { setSEO } from "./lib/seo";
import Home from "./pages/Home";
import GoToTop from "./components/GoToTop";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Work from "./pages/Work";
import ProjectDetail from "./pages/ProjectDetail";
import Contact from "./pages/Contact";
import Legal from "./pages/Legal";
const seoMap: any = {
  "/": "home",
  "/about": "about",
  "/services": "services",
  "/services/bpo": "bpo",
  "/services/website-development": "website-development",
  "/services/digital-marketing": "digital-marketing",
  "/services/seo": "seo",
  "/work": "work",
  "/contact": "contact",
  "/privacy-policy": "privacy",
  "/terms-and-conditions": "terms",
};
function Shell() {
  const loc = useLocation();
  useEffect(() => {
    setSEO(seoMap[loc.pathname] || "home");
  }, [loc.pathname]);
  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <PageTransition key={loc.pathname}>
          <Routes location={loc}>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/work" element={<Work />} />
            <Route path="/work/:slug" element={<ProjectDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<Legal />} />
            <Route path="/terms-and-conditions" element={<Legal />} />
            <Route path="*" element={<Home />} />
          </Routes>
          <GoToTop />
        </PageTransition>
      </AnimatePresence>
      <Footer />
    </>
  );
}
export default Shell;
