import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageHero from "../components/ui/PageHero";
import Reveal from "../components/ui/Reveal";
import CtaBand from "../components/ui/CtaBand";
import Process from "../components/sections/Process";
import EngagementModels from "../components/sections/EngagementModels";
import { services } from "../data/services";
import { usePageMeta } from "../hooks/usePageMeta";
import "./pages.css";

const ServicesPage = () => {
  usePageMeta(
    "Services",
    "Custom software, mobile apps, cloud & DevOps, data & AI, quality engineering and UI/UX design from Eversunny Technologies."
  );

  return (
    <>
      <PageHero
        eyebrow="Our services"
        title={
          <>
            Everything you need to build, launch and <span className="accent">grow</span>{" "}
            digital products
          </>
        }
        lead="Six practices, one team. Pick a single service or combine them — either way, you get senior people, a clear plan and software that keeps working long after launch."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Services" }]}
      >
        <div className="page-hero__actions">
          <Link to="/contact" className="btn btn--primary btn--lg">
            Talk to an expert <ArrowRight className="btn-arrow" aria-hidden="true" />
          </Link>
        </div>
      </PageHero>

      <section className="section">
        <div className="container">
          <ol className="service-rows">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <Reveal as="li" key={service.slug} className="service-row">
                  <div className="service-row__head">
                    <span className="service-row__index">{String(i + 1).padStart(2, "0")}</span>
                    <span className="icon-badge">
                      <Icon aria-hidden="true" />
                    </span>
                  </div>
                  <div className="service-row__body">
                    <h2 className="service-row__title">
                      <Link to={`/services/${service.slug}`}>{service.title}</Link>
                    </h2>
                    <p className="service-row__summary">{service.summary}</p>
                    <ul className="service-row__tags">
                      {service.offerings.slice(0, 4).map((offering) => (
                        <li key={offering.title} className="chip">
                          {offering.title}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    to={`/services/${service.slug}`}
                    className="btn btn--ghost service-row__cta"
                    aria-label={`Explore ${service.title}`}
                  >
                    Explore <ArrowRight className="btn-arrow" aria-hidden="true" />
                  </Link>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </section>

      <Process />
      <EngagementModels />
      <CtaBand />
    </>
  );
};

export default ServicesPage;
