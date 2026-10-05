import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { engagementModels } from "../../data/company";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import "./sections.css";

interface EngagementModelsProps {
  className?: string;
}

const EngagementModels = ({ className = "section--sand" }: EngagementModelsProps) => (
  <section className={`section ${className}`}>
    <div className="container">
      <SectionHeading
        eyebrow="Engagement models"
        title="Work with us the way that suits you"
        subtitle="Whether you need a complete product team or one specialist, we'll shape the engagement around your goals and budget."
      />
      <div className="models">
        {engagementModels.map((model, i) => (
          <Reveal
            key={model.title}
            delay={i * 100}
            className={`model-card ${model.featured ? "model-card--featured" : ""}`}
          >
            {model.featured && <span className="model-card__badge">Most flexible</span>}
            <span className="model-card__best">{model.bestFor}</span>
            <h3 className="model-card__title">{model.title}</h3>
            <p className="model-card__text">{model.description}</p>
            <ul className="check-list model-card__list">
              {model.features.map((feature) => (
                <li key={feature}>
                  <Check aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              className={`btn ${model.featured ? "btn--primary" : "btn--ghost"} model-card__cta`}
            >
              Discuss your needs <ArrowRight className="btn-arrow" aria-hidden="true" />
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default EngagementModels;
