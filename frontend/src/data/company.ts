import {
  Building2,
  Compass,
  Eye,
  Factory,
  Gem,
  GraduationCap,
  HandHeart,
  HeartPulse,
  Landmark,
  Layers,
  Lightbulb,
  Rocket,
  ShieldCheck,
  ShoppingBag,
  Sun,
  Truck,
  UsersRound,
  type LucideIcon,
} from "lucide-react";
import type { FAQ, TitledItem } from "./services";

export interface IconItem extends TitledItem {
  icon: LucideIcon;
}

export const pillars: IconItem[] = [
  {
    icon: UsersRound,
    title: "Senior-led delivery",
    description:
      "Experienced engineers and architects lead every engagement — not just the sales pitch.",
  },
  {
    icon: Eye,
    title: "Radical transparency",
    description:
      "Shared boards, weekly demos and honest status updates. You always know where things stand.",
  },
  {
    icon: Layers,
    title: "Built to last",
    description:
      "Clean code, automated tests and documentation, so your software stays easy to change.",
  },
  {
    icon: HandHeart,
    title: "Partners after launch",
    description:
      "We stay with you through launch and beyond, improving the product as your business grows.",
  },
];

export const processSteps: (TitledItem & { deliverable: string })[] = [
  {
    title: "Discover",
    description:
      "We learn your goals, users and constraints, then define scope, success metrics and a delivery roadmap.",
    deliverable: "Roadmap & estimate",
  },
  {
    title: "Design",
    description:
      "Architecture, user flows and prototypes are validated with you before development begins.",
    deliverable: "Clickable prototype",
  },
  {
    title: "Build",
    description:
      "Agile two-week sprints with demos, transparent progress tracking and continuous testing.",
    deliverable: "Working software every sprint",
  },
  {
    title: "Launch & grow",
    description:
      "We deploy, monitor and keep improving — measuring results against the goals we set together.",
    deliverable: "Launch & support plan",
  },
];

export const industries: IconItem[] = [
  {
    icon: HeartPulse,
    title: "Healthcare",
    description: "Patient portals, telehealth and compliant data platforms.",
  },
  {
    icon: Landmark,
    title: "Fintech & Banking",
    description: "Secure payments, lending and wealth-management platforms.",
  },
  {
    icon: ShoppingBag,
    title: "Retail & E-commerce",
    description: "Storefronts, inventory systems and personalization engines.",
  },
  {
    icon: Truck,
    title: "Logistics",
    description: "Fleet tracking, warehousing and supply-chain visibility.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description: "Learning platforms, assessments and student engagement apps.",
  },
  {
    icon: Rocket,
    title: "SaaS & Startups",
    description: "MVPs, product scale-ups and platform re-architecture.",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    description: "IoT dashboards, predictive maintenance and ERP integrations.",
  },
  {
    icon: Building2,
    title: "Real Estate",
    description: "Property portals, CRM workflows and smart-building apps.",
  },
];

export interface EngagementModel {
  title: string;
  bestFor: string;
  description: string;
  features: string[];
  featured?: boolean;
}

export const engagementModels: EngagementModel[] = [
  {
    title: "Project-based",
    bestFor: "Best for well-defined scope",
    description:
      "A clear scope, timeline and budget agreed up front, delivered in milestones.",
    features: [
      "Fixed scope, timeline and price",
      "Milestone-based delivery & sign-off",
      "Dedicated project manager",
    ],
  },
  {
    title: "Dedicated team",
    bestFor: "Best for evolving products",
    description:
      "A cross-functional team that works only on your product, as an extension of your company.",
    features: [
      "Engineers, QA & design in one team",
      "Scale up or down month to month",
      "Your priorities, our delivery management",
    ],
    featured: true,
  },
  {
    title: "Team augmentation",
    bestFor: "Best for filling skill gaps",
    description:
      "Vetted specialists join your existing team to add capacity or niche expertise.",
    features: [
      "Hand-picked, senior specialists",
      "Work in your tools & processes",
      "Fast onboarding, flexible terms",
    ],
  },
];

export const technologies = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Python",
  "Java",
  ".NET",
  "Flutter",
  "React Native",
  "Swift",
  "Kotlin",
  "AWS",
  "Azure",
  "Google Cloud",
  "Docker",
  "Kubernetes",
  "Terraform",
  "PostgreSQL",
  "MongoDB",
  "Snowflake",
  "PyTorch",
  "LangChain",
  "Playwright",
  "Figma",
];

export const generalFaqs: FAQ[] = [
  {
    question: "What kinds of companies do you work with?",
    answer:
      "We partner with startups, growing businesses and established enterprises. Engagements range from a single MVP to long-term product teams.",
  },
  {
    question: "How do we get started?",
    answer:
      "Share a few details through our contact form. We'll set up a free consultation to understand your goals, then propose an approach, team and timeline.",
  },
  {
    question: "How do you communicate during a project?",
    answer:
      "You get a dedicated point of contact, a shared project board, weekly demos and written status updates. We adapt to your tools — Slack, Teams, Jira or whatever you prefer.",
  },
  {
    question: "Can you work in our time zone?",
    answer:
      "Yes. We plan overlapping working hours for meetings and collaboration, and we're comfortable working with distributed teams across time zones.",
  },
  {
    question: "Do you sign NDAs?",
    answer:
      "Of course. We're happy to sign an NDA before any detailed discussion, and confidentiality is part of every contract we sign.",
  },
  {
    question: "What happens after launch?",
    answer:
      "We offer flexible support and maintenance plans — from on-call bug fixing to an ongoing team that keeps improving the product.",
  },
];

export const values: IconItem[] = [
  {
    icon: ShieldCheck,
    title: "Ownership",
    description:
      "We treat every product as if it were our own and take responsibility for outcomes, not just tasks.",
  },
  {
    icon: Compass,
    title: "Clarity",
    description:
      "Plain language, honest estimates and no surprises. If something is at risk, you hear it from us first.",
  },
  {
    icon: Gem,
    title: "Craftsmanship",
    description:
      "We sweat the details — in code, in design and in the way we document and hand over our work.",
  },
  {
    icon: Sun,
    title: "Optimism",
    description:
      "Every problem has a solution. We bring energy and a constructive attitude to every challenge.",
  },
  {
    icon: Lightbulb,
    title: "Curiosity",
    description:
      "We keep learning, question assumptions and bring new ideas to the table — not just what was asked for.",
  },
  {
    icon: HandHeart,
    title: "Integrity",
    description:
      "We recommend what's right for you, even when it means a smaller engagement for us.",
  },
];

export const commitments = [
  "A response to every enquiry within one business day",
  "A single, accountable point of contact",
  "Weekly demos of working software",
  "Your code, your IP — from day one",
  "Documentation and handover as standard",
  "No lock-in: flexible terms you can scale or end",
];
