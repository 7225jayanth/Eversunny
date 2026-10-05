import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

// Scroll to the top on navigation, or to the #hash target when there is one.
const ScrollManager = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView();
      return;
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
};

const Layout = () => (
  <>
    <a href="#main" className="skip-link">
      Skip to content
    </a>
    <ScrollManager />
    <Header />
    <main id="main" tabIndex={-1}>
      <Outlet />
    </main>
    <Footer />
  </>
);

export default Layout;
