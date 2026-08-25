import { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  useLocation,
} from "react-router-dom";
import { Box } from "@chakra-ui/react";

import Header from "./components/Header";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import AboutPage from "./pages/AboutPage";
import TermsPage from "./pages/TermsPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ContactPage from "./pages/ContactPage";

import PageTransition from "./components/PageTransition";

const navy = "#07111f";

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));

      if (element) {
        setTimeout(() => {
          element.scrollIntoView({
            behavior: "smooth",
          });
        }, 100);
      }
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [pathname, hash]);

  return null;
}

function Layout() {
  const location = useLocation();

  const isHomeSection = location.pathname === "/" && location.hash !== "";

  return (
    <>
      <Header />

      <Box flex="1">
        {isHomeSection ? (
          <Outlet />
        ) : (
          <PageTransition key={location.pathname}>
            <Outlet />
          </PageTransition>
        )}
      </Box>

      <Footer />
    </>
  );
}

export function AppRoutes() {
  return (
    <>
      <ScrollToTop />

      <Box
        color={navy}
        bg="white"
        lineHeight="1.6"
        minH="100vh"
        display="flex"
        flexDirection="column"
      >
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/terms-and-conditions" element={<TermsPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/contact" element={<ContactPage />} />

            <Route path="*" element={<HomePage />} />
          </Route>
        </Routes>
      </Box>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

