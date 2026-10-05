import { ArrowRight, Mail } from "lucide-react";
import PageHero from "../components/ui/PageHero";
import SectionHeading from "../components/ui/SectionHeading";
import Reveal from "../components/ui/Reveal";
import CtaBand from "../components/ui/CtaBand";
import { hiringAreas, hiringSteps, perks } from "../data/careers";
import { site } from "../data/site";
import { usePageMeta } from "../hooks/usePageMeta";
import "./pages.css";

const resumeHref = `mailto:${site.careersEmail}?subject=${encodeURIComponent("Application — Eversunny Technologies")}`;

const CareersPage = () => {
  usePageMeta(
    "Careers",
    "Join Eversunny Technologies — engineers, designers and problem-solvers who care about doing great work."
  );

  return (
    <>
      <PageHero
        eyebrow="Careers"
        title={
          <>
            Grow your career somewhere <span className="accent">bright</span>.
          </>
        }
        lead="Join a team of engineers, designers and problem-solvers who care about doing great work — and about each other."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Careers" }]}
      >
        <div className="page-hero__actions">
          <a href={resumeHref} className="btn btn--primary btn--lg">
            <Mail aria-hidden="true" /> Send your resume
          </a>
          <a href="#areas" className="btn btn--ghost btn--lg">
            Where we're hiring
          </a>
        </div>
      </PageHero>

      <section className="section section--white">
        <div className="container">
          <SectionHeading
            eyebrow="Life at Eversunny"
            title="Why people like working here"
            subtitle="We're building a company where talented people can do the best work of their careers — with the trust, support and flexibility to make it happen."
          />
          <div className="values-grid">
            {perks.map((perk, i) => {
              const Icon = perk.icon;
              return (
                <Reveal key={perk.title} delay={(i % 3) * 90} className="value-card">
                  <span className="icon-badge">
                    <Icon aria-hidden="true" />
                  </span>
                  <h3>{perk.title}</h3>
                  <p>{perk.description}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section" id="areas">
        <div className="container areas">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Open areas"
              title="Teams we're growing"
              subtitle="We hire on a rolling basis across these disciplines. If your skills fit, we'd love to hear from you — even if there isn't a specific opening listed."
            />
            <a href={resumeHref} className="text-link">
              Email {site.careersEmail} <ArrowRight aria-hidden="true" />
            </a>
          </div>
          <ul className="areas__list">
            {hiringAreas.map((area, i) => (
              <Reveal as="li" key={area} delay={(i % 4) * 70} className="areas__item">
                <span className="areas__dot" aria-hidden="true" />
                {area}
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <SectionHeading
            eyebrow="Hiring process"
            title="Simple, respectful and quick"
            subtitle="We value your time. Our process is designed to help us get to know each other — not to trip you up."
          />
          <ol className="process">
            {hiringSteps.map((step, i) => (
              <Reveal as="li" key={step.title} delay={i * 110} className="process__step">
                <span className="process__number">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="process__title">{step.title}</h3>
                <p className="process__text">{step.description}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <CtaBand
        title={
          <>
            Ready to do your <span className="accent">best work</span>?
          </>
        }
        text={`Send your resume to ${site.careersEmail} and tell us what you'd love to work on. We read every application.`}
        buttonLabel="Email your resume"
        buttonTo={resumeHref}
      />
    </>
  );
};

export default CareersPage;
