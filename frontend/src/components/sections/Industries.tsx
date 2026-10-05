import { industries } from "../../data/company";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import "./sections.css";

const Industries = () => (
  <section className="section" id="industries">
    <div className="container">
      <SectionHeading
        eyebrow="Industries"
        title="Expertise that travels across industries"
        subtitle="Every industry has its own rules, risks and customers. We bring the engineering depth and the domain awareness to build for yours."
      />
      <div className="industries">
        {industries.map((industry, i) => {
          const Icon = industry.icon;
          return (
            <Reveal key={industry.title} delay={(i % 4) * 80} className="industry-card">
              <span className="industry-card__icon">
                <Icon aria-hidden="true" />
              </span>
              <h3>{industry.title}</h3>
              <p>{industry.description}</p>
            </Reveal>
          );
        })}
      </div>
    </div>
  </section>
);

export default Industries;
