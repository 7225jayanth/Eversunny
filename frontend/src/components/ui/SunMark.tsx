// The sunrise arcs from the Eversunny logo, traced as SVG so they can be used
// as crisp decoration at any size.
interface SunMarkProps {
  variant?: "color" | "light";
  className?: string;
}

const palettes = {
  color: ["#DE821A", "#001C40", "#DE821A", "#566A82"],
  light: ["#F0A040", "#FCF9F2", "#DE821A", "#B0BED0"],
};

const paths = [
  "M508 380A345 345 0 0 1 1057 362A405 405 0 0 0 508 380Z",
  "M500 416Q625 338 880 326Q696.5 349 607 416Z",
  "M680 416Q785 355 945 341Q816.5 377.5 742 416Z",
  "M797 416Q865 372 973 352Q890 396 847 416Z",
];

const SunMark = ({ variant = "color", className = "" }: SunMarkProps) => (
  <svg
    className={`sun-mark ${className}`}
    viewBox="496 228 566 192"
    aria-hidden="true"
    focusable="false"
  >
    {paths.map((d, i) => (
      <path key={d} d={d} fill={palettes[variant][i]} className={`sun-mark__p${i}`} />
    ))}
  </svg>
);

export default SunMark;
