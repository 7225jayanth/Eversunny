import type { ReactNode } from "react";
import Reveal from "./Reveal";
import "./ui.css";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "center" | "left";
}

const SectionHeading = ({ eyebrow, title, subtitle, align = "center" }: SectionHeadingProps) => (
  <Reveal className={`section-heading section-heading--${align}`}>
    {eyebrow && <span className="eyebrow">{eyebrow}</span>}
    <h2 className="section-heading__title">{title}</h2>
    {subtitle && <p className="lead section-heading__subtitle">{subtitle}</p>}
  </Reveal>
);

export default SectionHeading;
