import { Link } from "react-router-dom";
import { site } from "../../data/site";
import "./Logo.css";

interface LogoProps {
  variant?: "color" | "light";
  className?: string;
}

const sources = {
  color: "/brand/eversunny-logo.png",
  light: "/brand/eversunny-logo-light.png",
};

const Logo = ({ variant = "color", className = "" }: LogoProps) => (
  <Link to="/" className={`logo ${className}`} aria-label={`${site.name} — home`}>
    <img src={sources[variant]} alt={site.name} width={600} height={286} />
  </Link>
);

export default Logo;
