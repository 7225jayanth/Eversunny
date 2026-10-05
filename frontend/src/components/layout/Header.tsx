import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import Logo from "../ui/Logo";
import { services } from "../../data/services";
import "./Header.css";

const navLinks = [
  { label: "About", to: "/about" },
  { label: "Careers", to: "/careers" },
  { label: "Contact", to: "/contact", mobileOnly: true },
];

const isDesktop = () => window.matchMedia("(min-width: 1025px)").matches;

const navClass = ({ isActive }: { isActive: boolean }) =>
  `site-nav__link ${isActive ? "is-active" : ""}`;

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const { pathname } = useLocation();
  const servicesRef = useRef<HTMLLIElement>(null);
  const closeTimer = useRef<number | undefined>(undefined);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus whenever the route changes.
  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setServicesOpen(false);
        setMenuOpen(false);
      }
    };
    const onPointerDown = (e: PointerEvent) => {
      if (isDesktop() && !servicesRef.current?.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, []);

  const openServices = () => {
    if (!isDesktop()) return;
    window.clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };

  const closeServicesSoon = () => {
    if (!isDesktop()) return;
    closeTimer.current = window.setTimeout(() => setServicesOpen(false), 160);
  };

  const headerClass = [
    "site-header",
    scrolled && "is-scrolled",
    menuOpen && "is-menu-open",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <header className={headerClass}>
      <div className="container site-header__inner">
        <Logo className="site-header__logo" />

        <nav id="site-nav" className="site-nav" aria-label="Main">
          <ul className="site-nav__list">
            <li>
              <NavLink to="/" end className={navClass}>
                Home
              </NavLink>
            </li>
            <li
              ref={servicesRef}
              className={`site-nav__services ${servicesOpen ? "is-open" : ""}`}
              onMouseEnter={openServices}
              onMouseLeave={closeServicesSoon}
            >
              <button
                type="button"
                className={`site-nav__link ${pathname.startsWith("/services") ? "is-active" : ""}`}
                aria-expanded={servicesOpen}
                aria-controls="services-menu"
                onClick={() => setServicesOpen((open) => !open)}
              >
                Services
                <ChevronDown className="site-nav__chevron" aria-hidden="true" />
              </button>

              <div id="services-menu" className="mega">
                <ul className="mega__grid">
                  {services.map((service) => {
                    const Icon = service.icon;
                    return (
                      <li key={service.slug}>
                        <Link to={`/services/${service.slug}`} className="mega__item">
                          <span className="mega__icon">
                            <Icon aria-hidden="true" />
                          </span>
                          <span>
                            <span className="mega__title">{service.title}</span>
                            <span className="mega__desc">{service.highlights[0]}</span>
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                  <li className="mega__all-mobile">
                    <Link to="/services" className="mega__item">
                      <span className="mega__title">View all services</span>
                    </Link>
                  </li>
                </ul>
                <div className="mega__aside">
                  <p className="mega__aside-title">Not sure where to start?</p>
                  <p className="mega__aside-text">
                    Tell us about your goals and we'll recommend the right mix of services.
                  </p>
                  <Link to="/services" className="text-link">
                    View all services <ArrowRight aria-hidden="true" />
                  </Link>
                  <Link to="/contact" className="btn btn--primary">
                    Book a consultation
                  </Link>
                </div>
              </div>
            </li>
            {navLinks.map((link) => (
              <li key={link.to} className={link.mobileOnly ? "site-nav__mobile-only" : undefined}>
                <NavLink to={link.to} className={navClass}>
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="site-nav__drawer-cta">
            <Link to="/contact" className="btn btn--primary btn--lg">
              Start a project <ArrowRight className="btn-arrow" aria-hidden="true" />
            </Link>
          </div>
        </nav>

        <div className="site-header__actions">
          <Link to="/contact" className="btn btn--dark site-header__cta">
            Let's talk <ArrowRight className="btn-arrow" aria-hidden="true" />
          </Link>
          <button
            type="button"
            className="menu-toggle"
            aria-expanded={menuOpen}
            aria-controls="site-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
