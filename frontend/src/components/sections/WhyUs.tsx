import { Check } from "lucide-react";
import { commitments, pillars } from "../../data/company";
import Reveal from "../ui/Reveal";
import "./sections.css";

const WhyUs = () => (
  <section className="section section--navy why-us">
    <div className="container why-us__inner">
      <Reveal className="why-us__intro">
        <span className="eyebrow">Why Eversunny</span>
        <h2 className="why-us__title">
          Dependable as the sunrise. <span className="accent">Every sprint, every release.</span>
        </h2>
        <p className="why-us__text">
          Great software comes from great partnerships. We combine senior engineering
          talent with a delivery process built on transparency, so you always know what's
          happening, what's next and why.
        </p>
        <ul className="check-list why-us__commitments">
          {commitments.slice(0, 4).map((item) => (
            <li key={item}>
              <Check aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </Reveal>

      <div className="why-us__grid">
        {pillars.map((pillar, i) => {
          const Icon = pillar.icon;
          return (
            <Reveal key={pillar.title} delay={i * 90} className="pillar-card">
              <span className="pillar-card__icon">
                <Icon aria-hidden="true" />
              </span>
              <h3>{pillar.title}</h3>
              <p>{pillar.description}</p>
            </Reveal>
          );
        })}
      </div>
    </div>
  </section>
);

export default WhyUs;
