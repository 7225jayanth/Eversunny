import { Link } from "react-router-dom";
import {
  ArrowRight,
  CalendarCheck,
  Check,
  CheckCircle2,
  LoaderCircle,
  Rocket,
} from "lucide-react";
import SunMark from "../ui/SunMark";
import "./Hero.css";

const promises = [
  "Senior engineers on every project",
  "Weekly demos, no surprises",
  "You own 100% of the code",
];

const Hero = () => (
  <section className="hero">
    <div className="container hero__inner">
      <div className="hero__content">
        <span className="eyebrow hero__fade" style={{ animationDelay: "0ms" }}>
          Software · Cloud · Data &amp; AI
        </span>
        <h1 className="hero__title hero__fade" style={{ animationDelay: "80ms" }}>
          Technology that keeps your business <span className="accent">bright</span>.
        </h1>
        <p className="lead hero__lead hero__fade" style={{ animationDelay: "160ms" }}>
          Eversunny Technologies designs, builds and scales software for growing
          companies — from first prototype to cloud-scale platforms — with a team that
          shows up for you, rain or shine.
        </p>
        <div className="hero__actions hero__fade" style={{ animationDelay: "240ms" }}>
          <Link to="/contact" className="btn btn--primary btn--lg">
            Start a project <ArrowRight className="btn-arrow" aria-hidden="true" />
          </Link>
          <Link to="/services" className="btn btn--ghost btn--lg">
            Explore services
          </Link>
        </div>
        <ul className="hero__promises hero__fade" style={{ animationDelay: "320ms" }}>
          {promises.map((promise) => (
            <li key={promise}>
              <CheckCircle2 aria-hidden="true" />
              {promise}
            </li>
          ))}
        </ul>
      </div>

      {/* Decorative illustration of a project in flight. */}
      <div className="hero__visual" aria-hidden="true">
        <div className="hero__sun" />
        <SunMark className="hero__mark" />

        <div className="hero-card hero-card--main">
          <div className="hero-card__head">
            <span className="hero-card__project">Customer portal · v2.4</span>
            <span className="hero-card__status">On track</span>
          </div>
          <div className="hero-card__progress-label">
            <span>Sprint 6 of 8</span>
            <span>75%</span>
          </div>
          <div className="hero-card__bar">
            <span />
          </div>
          <ul className="hero-card__tasks">
            <li className="is-done">
              <Check /> Payments API integrated
            </li>
            <li className="is-done">
              <Check /> Accessibility review passed
            </li>
            <li>
              <LoaderCircle className="hero-card__spin" /> Load testing in progress
            </li>
          </ul>
        </div>

        <div className="hero-chip hero-chip--deploy">
          <span className="hero-chip__icon">
            <Rocket />
          </span>
          <span>
            <strong>Deployed to production</strong>
            <small>All checks passed</small>
          </span>
        </div>

        <div className="hero-chip hero-chip--demo">
          <span className="hero-chip__icon hero-chip__icon--navy">
            <CalendarCheck />
          </span>
          <span>
            <strong>Weekly demo</strong>
            <small>Friday · 10:00</small>
          </span>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
