import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SunMark from "../components/ui/SunMark";
import { usePageMeta } from "../hooks/usePageMeta";
import "./pages.css";

const NotFoundPage = () => {
  usePageMeta("Page not found");

  return (
    <section className="not-found">
      <div className="container not-found__inner">
        <div className="not-found__scene" aria-hidden="true">
          <SunMark className="not-found__mark" />
          <span className="not-found__horizon" />
        </div>
        <span className="eyebrow">Error 404</span>
        <h1 className="not-found__title">
          This page has <span className="accent">set</span>.
        </h1>
        <p className="lead not-found__text">
          The page you're looking for doesn't exist or has moved. Let's get you back into the
          sunshine.
        </p>
        <div className="page-hero__actions">
          <Link to="/" className="btn btn--primary btn--lg">
            Back to home <ArrowRight className="btn-arrow" aria-hidden="true" />
          </Link>
          <Link to="/services" className="btn btn--ghost btn--lg">
            Explore services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;
