import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import SunMark from "./SunMark";
import "./ui.css";

interface Crumb {
  label: string;
  to?: string;
}

interface PageHeroProps {
  eyebrow?: string;
  icon?: ReactNode;
  title: ReactNode;
  lead?: ReactNode;
  breadcrumbs?: Crumb[];
  children?: ReactNode;
}

// Hero used at the top of every inner page.
const PageHero = ({ eyebrow, icon, title, lead, breadcrumbs, children }: PageHeroProps) => (
  <section className="page-hero">
    <SunMark className="page-hero__mark" />
    <div className="container page-hero__inner">
      {breadcrumbs && (
        <nav aria-label="Breadcrumb" className="breadcrumbs">
          <ol>
            {breadcrumbs.map((crumb, i) => (
              <li key={crumb.label}>
                {crumb.to ? (
                  <Link to={crumb.to}>{crumb.label}</Link>
                ) : (
                  <span aria-current="page">{crumb.label}</span>
                )}
                {i < breadcrumbs.length - 1 && <ChevronRight aria-hidden="true" />}
              </li>
            ))}
          </ol>
        </nav>
      )}
      {icon}
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h1 className="page-hero__title">{title}</h1>
      {lead && <p className="lead page-hero__lead">{lead}</p>}
      {children}
    </div>
  </section>
);

export default PageHero;
