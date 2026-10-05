import { processSteps } from "../../data/company";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import "./sections.css";

interface ProcessProps {
  className?: string;
}

const Process = ({ className = "section--white" }: ProcessProps) => (
  <section className={`section ${className}`}>
    <div className="container">
      <SectionHeading
        eyebrow="How we work"
        title={
          <>
            A clear path from idea to <span className="accent">impact</span>
          </>
        }
        subtitle="A proven, collaborative process that keeps you in control and gets working software into users' hands quickly."
      />
      <ol className="process">
        {processSteps.map((step, i) => (
          <Reveal as="li" key={step.title} delay={i * 110} className="process__step">
            <span className="process__number">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="process__title">{step.title}</h3>
            <p className="process__text">{step.description}</p>
            <span className="process__deliverable">{step.deliverable}</span>
          </Reveal>
        ))}
      </ol>
    </div>
  </section>
);

export default Process;
