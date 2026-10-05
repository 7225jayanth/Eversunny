import { Link } from "react-router-dom";
import { ArrowUp, Mail, MapPin, Phone } from "lucide-react";
import Logo from "../ui/Logo";
import { services } from "../../data/services";
import { site } from "../../data/site";
import "./Footer.css";

const companyLinks = [
  { label: "Home", to: "/" },
  { label: "About us", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Careers", to: "/careers" },
  { label: "Contact", to: "/contact" },
];

const Footer = () => (
  <footer className="site-footer">
    <div className="container">
      <div className="site-footer__top">
        <div className="site-footer__brand">
          <Logo variant="light" className="site-footer__logo" />
          <p>{site.description}</p>
          {site.social.linkedin && (
            <a
              href={site.social.linkedin}
              className="site-footer__social"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${site.shortName} on LinkedIn`}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
              </svg>
            </a>
          )}
        </div>

        <div className="site-footer__col">
          <h2 className="site-footer__heading">Services</h2>
          <ul>
            {services.map((service) => (
              <li key={service.slug}>
                <Link to={`/services/${service.slug}`}>{service.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="site-footer__col">
          <h2 className="site-footer__heading">Company</h2>
          <ul>
            {companyLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="site-footer__col">
          <h2 className="site-footer__heading">Get in touch</h2>
          <ul className="site-footer__contact">
            <li>
              <Mail aria-hidden="true" />
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            {site.phone && (
              <li>
                <Phone aria-hidden="true" />
                <a href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}>{site.phone}</a>
              </li>
            )}
            {site.address && (
              <li>
                <MapPin aria-hidden="true" />
                <span>{site.address}</span>
              </li>
            )}
          </ul>
          <Link to="/contact" className="btn btn--primary site-footer__cta">
            Start a project
          </Link>
        </div>
      </div>

      <div className="site-footer__bottom">
        <p>
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
        <p className="site-footer__tagline">{site.tagline}</p>
        <button
          type="button"
          className="site-footer__top-btn"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
        >
          <ArrowUp aria-hidden="true" />
        </button>
      </div>
    </div>
  </footer>
);

export default Footer;
