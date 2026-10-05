import { Check, Compass, Telescope } from "lucide-react";
import PageHero from "../components/ui/PageHero";
import SectionHeading from "../components/ui/SectionHeading";
import Reveal from "../components/ui/Reveal";
import SunMark from "../components/ui/SunMark";
import CtaBand from "../components/ui/CtaBand";
import { commitments, values } from "../data/company";
import { usePageMeta } from "../hooks/usePageMeta";
import "./pages.css";

const AboutPage = () => {
  usePageMeta(
    "About us",
    "Eversunny Technologies is a software engineering and IT services company helping businesses design, build and run digital products."
  );

  return (
    <>
      <PageHero
        eyebrow="About us"
        title={
          <>
            Your technology partner, <span className="accent">rain or shine</span>.
          </>
        }
        lead="Eversunny Technologies is a software engineering and IT services company. We help businesses design, build and run digital products that make a real difference — and we do it with energy, honesty and care."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "About us" }]}
      />

      <section className="section section--white">
        <div className="container story">
          <Reveal className="story__visual">
            <SunMark variant="light" className="story__mark" />
            <p className="story__equation">
              <span>Ever</span>
              <small>consistent, reliable, always there</small>
            </p>
            <p className="story__equation story__equation--sunny">
              <span>sunny</span>
              <small>optimistic, warm, energising</small>
            </p>
          </Reveal>
          <Reveal className="story__text" delay={100}>
            <span className="eyebrow">Our story</span>
            <h2 className="story__title">What's in a name?</h2>
            <p>
              Eversunny is a promise as much as a name. <strong>“Ever”</strong> stands for
              consistency — showing up with the same quality and commitment on day five hundred
              as on day one. <strong>“Sunny”</strong> stands for the optimism and warmth we
              bring to every partnership, especially when problems get hard.
            </p>
            <p>
              Too many businesses have lived through the opposite: missed deadlines, vague
              updates and software that becomes harder to change every month. Eversunny is
              built to be different — senior engineers stay close to the work, communication
              is clear and frequent, and quality is never an afterthought.
            </p>
            <p>
              We partner with startups and established companies alike across custom software,
              mobile, cloud, data &amp; AI, quality engineering and design.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container mission-grid">
          <Reveal className="mission-card">
            <span className="icon-badge">
              <Compass aria-hidden="true" />
            </span>
            <h2>Our mission</h2>
            <p>
              To help businesses grow by building software that is reliable, useful and a
              pleasure to use — delivered by a team that is a pleasure to work with.
            </p>
          </Reveal>
          <Reveal className="mission-card mission-card--navy" delay={100}>
            <span className="icon-badge">
              <Telescope aria-hidden="true" />
            </span>
            <h2>Our vision</h2>
            <p>
              To be the technology partner companies recommend first — for the quality of our
              work and for the way we work.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section section--sand">
        <div className="container">
          <SectionHeading
            eyebrow="Our values"
            title="The principles behind every project"
            subtitle="These aren't posters on a wall. They guide how we hire, how we make decisions and how we treat the people we work with."
          />
          <div className="values-grid">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <Reveal key={value.title} delay={(i % 3) * 90} className="value-card">
                  <span className="icon-badge">
                    <Icon aria-hidden="true" />
                  </span>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section--navy">
        <div className="container">
          <SectionHeading
            eyebrow="Our commitments"
            title={
              <>
                What every client can <span className="accent">count on</span>
              </>
            }
          />
          <ul className="commitments-grid">
            {commitments.map((item, i) => (
              <Reveal as="li" key={item} delay={(i % 3) * 80} className="commitment">
                <span className="commitment__icon">
                  <Check aria-hidden="true" />
                </span>
                {item}
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
};

export default AboutPage;
