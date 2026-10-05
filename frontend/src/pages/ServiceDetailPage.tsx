import { Link, useParams } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import PageHero from "../components/ui/PageHero";
import SectionHeading from "../components/ui/SectionHeading";
import Reveal from "../components/ui/Reveal";
import ServiceCard from "../components/ui/ServiceCard";
import FaqList from "../components/ui/FaqList";
import CtaBand from "../components/ui/CtaBand";
import Process from "../components/sections/Process";
import NotFoundPage from "./NotFoundPage";
import { getServiceBySlug, services } from "../data/services";
import { usePageMeta } from "../hooks/usePageMeta";
import "./pages.css";

const ServiceDetailPage = () => {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);
  usePageMeta(service?.title ?? "Page not found", service?.summary);

  if (!service) return <NotFoundPage />;

  const Icon = service.icon;
  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <PageHero
        icon={
          <span className="icon-badge service-hero__icon" aria-hidden="true">
            <Icon />
          </span>
        }
        title={service.title}
        lead={service.intro}
        breadcrumbs={[
          { label: "Home", to: "/" },
          { label: "Services", to: "/services" },
          { label: service.title },
        ]}
      >
        <div className="page-hero__actions">
          <Link to={`/contact?service=${service.slug}`} className="btn btn--primary btn--lg">
            Discuss your project <ArrowRight className="btn-arrow" aria-hidden="true" />
          </Link>
          <a href="#how-we-work" className="btn btn--ghost btn--lg">
            How we work
          </a>
        </div>
      </PageHero>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="What we offer" title={service.tagline} />
          <div className="offerings">
            {service.offerings.map((offering, i) => (
              <Reveal key={offering.title} delay={(i % 3) * 90} className="offering-card">
                <span className="offering-card__number">{String(i + 1).padStart(2, "0")}</span>
                <h3>{offering.title}</h3>
                <p>{offering.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="container outcomes-layout">
          <div>
            <SectionHeading
              align="left"
              eyebrow="What you can expect"
              title={
                <>
                  Outcomes that <span className="accent">matter</span> to your business
                </>
              }
            />
            <div className="outcomes">
              {service.outcomes.map((outcome, i) => (
                <Reveal key={outcome.title} delay={i * 80} className="outcome">
                  <CheckCircle2 aria-hidden="true" />
                  <div>
                    <h3>{outcome.title}</h3>
                    <p>{outcome.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal className="stack-card" delay={120}>
            <h3 className="stack-card__title">Our toolkit</h3>
            <p className="stack-card__text">
              We pick proven technologies that fit your team and goals — never the other way
              around.
            </p>
            <ul className="stack-card__list">
              {service.stack.map((tech) => (
                <li key={tech} className="chip">
                  {tech}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <div id="how-we-work">
        <Process className="section--sand" />
      </div>

      <section className="section section--white">
        <div className="container faq-layout">
          <div className="faq-layout__intro">
            <SectionHeading
              align="left"
              eyebrow="FAQ"
              title={`${service.title}: common questions`}
            />
            <Link to={`/contact?service=${service.slug}`} className="btn btn--dark">
              Ask a question <ArrowRight className="btn-arrow" aria-hidden="true" />
            </Link>
          </div>
          <FaqList faqs={service.faqs} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Explore more" title="Related services" />
          <div className="services-grid">
            {related.map((item, i) => (
              <Reveal key={item.slug} delay={i * 90}>
                <ServiceCard service={item} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand buttonTo={`/contact?service=${service.slug}`} />
    </>
  );
};

export default ServiceDetailPage;
