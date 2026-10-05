import {
  useEffect,
  useRef,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from "react";

interface RevealProps {
  children: ReactNode;
  as?: ElementType;
  delay?: number;
  className?: string;
}

// Fades its children up the first time they scroll into view.
const Reveal = ({ children, as = "div", delay = 0, className = "" }: RevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const Tag = as as "div";

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      el.classList.add("is-visible");
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
