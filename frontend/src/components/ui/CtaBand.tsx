import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import SunMark from "./SunMark";
import "./ui.css";

interface CtaBandProps {
  title?: ReactNode;
  text?: string;
  buttonLabel?: string;
  buttonTo?: string;
}

const CtaBand = ({
  title = (
    <>
      Let's build something <span className="accent">bright</span> together.
    </>
  ),
  text = "Tell us where you want to go. We'll come back within one business day with ideas, a recommended approach and next steps — no obligation.",
  buttonLabel = "Book a free consultation",
  buttonTo = "/contact",
}: CtaBandProps) => (
  <section className="cta-band-section">
    <div className="container">
      <Reveal className="cta-band">
        <SunMark variant="light" className="cta-band__mark" />
        <div className="cta-band__content">
          <h2 className="cta-band__title">{title}</h2>
          <p className="cta-band__text">{text}</p>
        </div>
        <div className="cta-band__actions">
          {buttonTo.startsWith("mailto:") ? (
            <a href={buttonTo} className="btn btn--primary btn--lg">
              {buttonLabel}
              <ArrowRight className="btn-arrow" aria-hidden="true" />
            </a>
          ) : (
            <Link to={buttonTo} className="btn btn--primary btn--lg">
              {buttonLabel}
              <ArrowRight className="btn-arrow" aria-hidden="true" />
            </Link>
          )}
          <Link to="/services" className="btn btn--ghost-light btn--lg">
            Explore services
          </Link>
        </div>
      </Reveal>
    </div>
  </section>
);

export default CtaBand;
