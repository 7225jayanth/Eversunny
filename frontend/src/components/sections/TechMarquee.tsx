import { technologies } from "../../data/company";
import "./sections.css";

const TechMarquee = () => (
  <section className="marquee-section" aria-labelledby="tech-heading">
    <div className="container">
      <h2 id="tech-heading" className="marquee-section__label">
        Technologies we build with
      </h2>
    </div>
    <div className="marquee">
      <ul className="marquee__track">
        {/* The list is rendered twice so the scroll loops seamlessly. */}
        {[...technologies, ...technologies].map((tech, i) => (
          <li key={i} className="marquee__item" aria-hidden={i >= technologies.length}>
            {tech}
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default TechMarquee;
