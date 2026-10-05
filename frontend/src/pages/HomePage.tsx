import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Hero from "../components/sections/Hero";
import TechMarquee from "../components/sections/TechMarquee";
import WhyUs from "../components/sections/WhyUs";
import Process from "../components/sections/Process";
import Industries from "../components/sections/Industries";
import EngagementModels from "../components/sections/EngagementModels";
import SectionHeading from "../components/ui/SectionHeading";
import ServiceCard from "../components/ui/ServiceCard";
import FaqList from "../components/ui/FaqList";
import CtaBand from "../components/ui/CtaBand";
import Reveal from "../components/ui/Reveal";
import { services } from "../data/services";
import { generalFaqs } from "../data/company";
import { usePageMeta } from "../hooks/usePageMeta";
import "./pages.css";

const HomePage = () => {
  usePageMeta();

  return (
    <>
      <Hero />
      <TechMarquee />

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="What we do"
            title={
              <>
                End-to-end services, <span className="accent">one accountable team</span>
              </>
            }
            subtitle="From the first sketch to the thousandth release, we cover every stage of building and running digital products."
          />
          <div className="services-grid">
            {services.map((service, i) => (
              <Reveal key={service.slug} delay={(i % 3) * 90}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
          <Reveal className="section-more">
            <Link to="/services" className="btn btn--ghost">
              Compare all services <ArrowRight className="btn-arrow" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      <WhyUs />
      <Process />
      <Industries />
      <EngagementModels />

      <section className="section section--white">
        <div className="container faq-layout">
          <div className="faq-layout__intro">
            <SectionHeading
              align="left"
              eyebrow="FAQ"
              title="Questions, answered"
              subtitle="Everything you need to know about working with Eversunny. Can't find what you're looking for? We're one message away."
            />
            <Link to="/contact" className="btn btn--dark">
              Ask us anything <ArrowRight className="btn-arrow" aria-hidden="true" />
            </Link>
          </div>
          <FaqList faqs={generalFaqs} />
        </div>
      </section>

      <CtaBand />
    </>
  );
};

export default HomePage;
