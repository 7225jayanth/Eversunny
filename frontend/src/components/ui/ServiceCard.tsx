import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import type { Service } from "../../data/services";
import "./ui.css";

const ServiceCard = ({ service }: { service: Service }) => {
  const Icon = service.icon;
  return (
    <Link to={`/services/${service.slug}`} className="service-card">
      <span className="icon-badge">
        <Icon />
      </span>
      <h3 className="service-card__title">{service.title}</h3>
      <p className="service-card__summary">{service.summary}</p>
      <ul className="service-card__list">
        {service.highlights.map((item) => (
          <li key={item}>
            <Check aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>
      <span className="service-card__more">
        Learn more <ArrowRight aria-hidden="true" />
      </span>
    </Link>
  );
};

export default ServiceCard;
