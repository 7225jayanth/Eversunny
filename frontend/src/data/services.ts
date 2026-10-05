import {
  BrainCircuit,
  Cloud,
  Code2,
  PenTool,
  ShieldCheck,
  Smartphone,
  type LucideIcon,
} from "lucide-react";

export interface TitledItem {
  title: string;
  description: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Service {
  slug: string;
  title: string;
  icon: LucideIcon;
  summary: string;
  highlights: string[];
  tagline: string;
  intro: string;
  offerings: TitledItem[];
  outcomes: TitledItem[];
  stack: string[];
  faqs: FAQ[];
}

export const services: Service[] = [
  {
    slug: "custom-software-development",
    title: "Custom Software Development",
    icon: Code2,
    summary:
      "Web platforms, SaaS products and internal tools engineered to be fast, secure and easy to evolve.",
    highlights: [
      "Web apps & SaaS platforms",
      "Enterprise portals & internal tools",
      "APIs & system integrations",
    ],
    tagline: "Software built around how your business actually works.",
    intro:
      "From customer-facing platforms to the internal tools your teams rely on, we design and engineer web applications that are fast, secure and easy to evolve. Clean architecture, automated testing and documentation come as standard — so your software keeps paying off long after launch.",
    offerings: [
      {
        title: "Web application development",
        description:
          "Responsive, accessible web apps built with modern frameworks such as React, Next.js and Node.js.",
      },
      {
        title: "SaaS product engineering",
        description:
          "Multi-tenant architecture, subscription billing, role-based access and the operational tooling a SaaS business needs.",
      },
      {
        title: "Enterprise applications",
        description:
          "Portals, workflow automation and line-of-business tools that replace spreadsheets and manual hand-offs.",
      },
      {
        title: "APIs & integrations",
        description:
          "Well-documented REST and GraphQL APIs, plus integrations with CRMs, ERPs, payment gateways and third-party services.",
      },
      {
        title: "Legacy modernization",
        description:
          "Incrementally re-platform ageing systems onto modern stacks — without a risky big-bang rewrite.",
      },
      {
        title: "Maintenance & support",
        description:
          "Proactive monitoring, security patching and continuous improvement under a clear service agreement.",
      },
    ],
    outcomes: [
      {
        title: "Faster time to market",
        description: "Two-week sprints with working software at the end of every one.",
      },
      {
        title: "Architecture that scales",
        description: "Modular design that grows with your users, data and features.",
      },
      {
        title: "Lower cost of change",
        description: "Automated tests and CI/CD make every future change safer and cheaper.",
      },
      {
        title: "Complete ownership",
        description: "You own the code, the infrastructure and the documentation.",
      },
    ],
    stack: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "NestJS",
      "Python",
      "Django",
      "Java",
      "Spring Boot",
      ".NET",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "GraphQL",
    ],
    faqs: [
      {
        question: "Can you work with our existing codebase?",
        answer:
          "Yes. We start with a short code and architecture review, agree on priorities with you, and improve the system incrementally while continuing to ship features.",
      },
      {
        question: "How do you estimate custom software projects?",
        answer:
          "After a discovery phase we break the scope into features, estimate each one and share a roadmap with milestones. For evolving scope we usually recommend a dedicated team with a predictable monthly budget.",
      },
      {
        question: "Who owns the source code?",
        answer:
          "You do. All code, designs and documentation belong to you, and work happens in repositories you control from day one.",
      },
    ],
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    icon: Smartphone,
    summary:
      "Native and cross-platform apps for iOS and Android that feel fast, look polished and work reliably.",
    highlights: [
      "iOS & Android apps",
      "Cross-platform with Flutter & React Native",
      "App store launch & growth",
    ],
    tagline: "Mobile apps people are happy to open every day.",
    intro:
      "We build native and cross-platform apps for iOS and Android that feel fast, look polished and work reliably — even on patchy networks. From MVP to app-store launch and beyond, we handle design, development, release and growth.",
    offerings: [
      {
        title: "Native iOS & Android",
        description:
          "Swift and Kotlin apps that take full advantage of each platform's capabilities and performance.",
      },
      {
        title: "Cross-platform development",
        description:
          "One codebase for both platforms with Flutter or React Native — without compromising the user experience.",
      },
      {
        title: "MVP development",
        description:
          "Validate your idea quickly with a focused first release built on foundations you can keep scaling.",
      },
      {
        title: "Mobile backends & APIs",
        description:
          "Secure authentication, push notifications, offline sync and real-time features.",
      },
      {
        title: "App store launch",
        description:
          "Store listings, review guidelines, beta programmes and release management handled for you.",
      },
      {
        title: "Ongoing optimization",
        description:
          "Crash monitoring, analytics, OS-update readiness and feature iterations after launch.",
      },
    ],
    outcomes: [
      {
        title: "A smooth, native feel",
        description: "Fluid interactions, accessible UI and thoughtful micro-interactions.",
      },
      {
        title: "One team, every platform",
        description: "Design, mobile, backend and QA working as a single unit.",
      },
      {
        title: "Release confidence",
        description: "Automated builds, real-device testing and staged rollouts.",
      },
      {
        title: "Insight-driven growth",
        description: "Analytics wired in from day one, so decisions are based on real usage.",
      },
    ],
    stack: [
      "Swift",
      "SwiftUI",
      "Kotlin",
      "Jetpack Compose",
      "Flutter",
      "React Native",
      "Expo",
      "Firebase",
      "Node.js",
      "GraphQL",
      "Fastlane",
      "Sentry",
    ],
    faqs: [
      {
        question: "Should we go native or cross-platform?",
        answer:
          "It depends on your features, performance needs and budget. Cross-platform suits most business apps; native makes sense for heavy device integration or advanced graphics. We recommend an approach during discovery.",
      },
      {
        question: "Can you take over an existing app?",
        answer:
          "Yes. We audit the codebase, stabilise crashes and performance issues first, then continue feature development with a clear roadmap.",
      },
      {
        question: "Do you publish to the App Store and Google Play?",
        answer:
          "We manage the full release process, including store listings, compliance with review guidelines and phased rollouts.",
      },
    ],
  },
  {
    slug: "cloud-devops",
    title: "Cloud & DevOps",
    icon: Cloud,
    summary:
      "Cloud migration, automated delivery pipelines and infrastructure that stays up while costs stay down.",
    highlights: [
      "Cloud migration & architecture",
      "CI/CD & infrastructure as code",
      "Monitoring & cost optimization",
    ],
    tagline: "Cloud infrastructure that stays up, scales out and costs less.",
    intro:
      "We help teams migrate to the cloud, automate their delivery pipelines and run production systems with confidence. Everything is defined as code, monitored end to end and tuned for both reliability and cost.",
    offerings: [
      {
        title: "Cloud migration",
        description:
          "Assess, plan and move workloads to AWS, Azure or Google Cloud with minimal disruption.",
      },
      {
        title: "Cloud-native architecture",
        description:
          "Containers, serverless and managed services designed for resilience and scale.",
      },
      {
        title: "CI/CD pipelines",
        description:
          "Automated build, test and deployment pipelines that make shipping several times a day routine.",
      },
      {
        title: "Infrastructure as code",
        description:
          "Reproducible environments with Terraform and policy-as-code guardrails.",
      },
      {
        title: "Observability & SRE",
        description:
          "Metrics, logs, traces and alerting — plus runbooks and on-call practices that shorten incidents.",
      },
      {
        title: "Cloud cost optimization",
        description:
          "Right-sizing, reserved capacity and architecture changes that cut waste without hurting performance.",
      },
    ],
    outcomes: [
      {
        title: "Higher availability",
        description: "Redundant, self-healing infrastructure with clear recovery objectives.",
      },
      {
        title: "Faster, safer releases",
        description: "Deployments become routine, automated and easy to roll back.",
      },
      {
        title: "Predictable spend",
        description: "Cost visibility by team and service, with savings opportunities tracked.",
      },
      {
        title: "Security built in",
        description: "Least-privilege access, secrets management and audit-ready trails.",
      },
    ],
    stack: [
      "AWS",
      "Microsoft Azure",
      "Google Cloud",
      "Docker",
      "Kubernetes",
      "Helm",
      "Terraform",
      "GitHub Actions",
      "GitLab CI",
      "Argo CD",
      "Prometheus",
      "Grafana",
    ],
    faqs: [
      {
        question: "Which cloud provider do you recommend?",
        answer:
          "We work across AWS, Azure and Google Cloud and recommend based on your existing ecosystem, team skills, compliance needs and pricing — never vendor preference.",
      },
      {
        question: "Can you migrate without downtime?",
        answer:
          "For most workloads, yes. We use phased migrations, data replication and blue-green cut-overs so customers see little or no interruption.",
      },
      {
        question: "Do you offer ongoing cloud management?",
        answer:
          "Yes. We can run your infrastructure under a managed-service agreement, or coach your in-house team until they're fully self-sufficient.",
      },
    ],
  },
  {
    slug: "data-ai",
    title: "Data & AI",
    icon: BrainCircuit,
    summary:
      "Data platforms, analytics, machine learning and generative AI tied to measurable business outcomes.",
    highlights: [
      "Data engineering & analytics",
      "Machine learning in production",
      "Generative AI & LLM applications",
    ],
    tagline: "Turn your data into decisions — and your workflows into intelligent ones.",
    intro:
      "We build the data foundations, analytics and AI features that help businesses act faster. From reliable pipelines and dashboards to machine-learning models and generative-AI assistants, every solution is tied to a measurable business outcome.",
    offerings: [
      {
        title: "Data engineering",
        description:
          "Reliable pipelines that bring data from every system into a single, trusted warehouse or lakehouse.",
      },
      {
        title: "Business intelligence",
        description:
          "Self-serve dashboards and reports that put the right metrics in front of the right people.",
      },
      {
        title: "Machine learning",
        description:
          "Forecasting, recommendation, classification and anomaly-detection models taken all the way to production.",
      },
      {
        title: "Generative AI solutions",
        description:
          "Assistants, copilots and document automation built on large language models — grounded in your own data.",
      },
      {
        title: "AI strategy & readiness",
        description:
          "Identify high-value use cases, assess data maturity and build a practical adoption roadmap.",
      },
      {
        title: "MLOps",
        description:
          "Model monitoring, retraining pipelines and governance, so AI keeps performing after launch.",
      },
    ],
    outcomes: [
      {
        title: "A single source of truth",
        description: "Consistent, governed data that every team can trust.",
      },
      {
        title: "Decisions in real time",
        description: "Live dashboards instead of month-end spreadsheets.",
      },
      {
        title: "Automation that scales",
        description: "AI handles repetitive work so people can focus on judgement calls.",
      },
      {
        title: "Responsible by design",
        description: "Privacy, security and human oversight designed in from the start.",
      },
    ],
    stack: [
      "Python",
      "SQL",
      "Apache Spark",
      "Airflow",
      "dbt",
      "Snowflake",
      "BigQuery",
      "Databricks",
      "Power BI",
      "Tableau",
      "PyTorch",
      "scikit-learn",
      "LangChain",
      "Vector databases",
    ],
    faqs: [
      {
        question: "Our data is messy. Can we still use AI?",
        answer:
          "Most organisations start there. We begin by consolidating and cleaning the data that matters for your first use case, so early wins also strengthen your data foundation.",
      },
      {
        question: "How do you keep our data private when using LLMs?",
        answer:
          "We use enterprise-grade model endpoints, keep sensitive data out of prompts where possible, apply access controls to retrieval, and can deploy models inside your own cloud account.",
      },
      {
        question: "How quickly can we see results?",
        answer:
          "We scope proofs of concept to a few weeks, with success metrics agreed up front — so you can decide whether to scale based on real evidence.",
      },
    ],
  },
  {
    slug: "quality-engineering",
    title: "Quality Engineering",
    icon: ShieldCheck,
    summary:
      "Test automation, performance and security testing that let you release with confidence, every time.",
    highlights: [
      "Test automation frameworks",
      "Performance & security testing",
      "QA strategy & consulting",
    ],
    tagline: "Release with confidence, every single time.",
    intro:
      "Quality is built into every stage of delivery, not bolted on at the end. Our QA engineers combine smart exploratory testing with robust automation to catch issues early, speed up releases and protect the experience your customers rely on.",
    offerings: [
      {
        title: "Test automation",
        description:
          "Maintainable UI, API and integration test suites that run on every commit.",
      },
      {
        title: "Manual & exploratory testing",
        description:
          "Experienced testers who think like your users and find the edge cases scripts miss.",
      },
      {
        title: "Performance testing",
        description:
          "Load, stress and soak tests that reveal bottlenecks before your customers do.",
      },
      {
        title: "Security testing",
        description:
          "Vulnerability scanning and OWASP-focused testing woven into the delivery pipeline.",
      },
      {
        title: "Mobile & cross-browser testing",
        description:
          "Coverage across real devices, operating systems and browsers.",
      },
      {
        title: "QA process consulting",
        description:
          "Assess your current practices and build a test strategy that fits your release cadence.",
      },
    ],
    outcomes: [
      {
        title: "Fewer production defects",
        description: "Issues are caught early, when they're cheapest to fix.",
      },
      {
        title: "Shorter release cycles",
        description: "Automated regression replaces days of manual checks.",
      },
      {
        title: "Visible quality",
        description: "Dashboards show coverage and release readiness at a glance.",
      },
      {
        title: "Happier users",
        description: "Stable, fast experiences that protect your reputation.",
      },
    ],
    stack: [
      "Playwright",
      "Cypress",
      "Selenium",
      "Appium",
      "Jest",
      "Postman",
      "k6",
      "JMeter",
      "OWASP ZAP",
      "BrowserStack",
      "TestRail",
    ],
    faqs: [
      {
        question: "Can you automate tests for an existing product?",
        answer:
          "Yes. We prioritise the most business-critical flows first, build a stable framework and expand coverage sprint by sprint.",
      },
      {
        question: "Do you provide QA as a standalone service?",
        answer:
          "Absolutely. Many teams engage us for QA alone, working alongside their in-house developers or another vendor.",
      },
      {
        question: "Which testing tools do you use?",
        answer:
          "We choose tools that fit your stack and team — commonly Playwright, Cypress, Selenium and Appium for automation, and k6 or JMeter for performance.",
      },
    ],
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    icon: PenTool,
    summary:
      "Research-led product design, design systems and prototypes that make complex things feel simple.",
    highlights: [
      "User research & UX strategy",
      "UI design & design systems",
      "Prototyping & usability testing",
    ],
    tagline: "Design that makes complex things feel simple.",
    intro:
      "Great software starts with understanding people. Our designers research your users, map their journeys and craft interfaces that are intuitive, accessible and on-brand — then work hand-in-hand with engineers so the design ships exactly as intended.",
    offerings: [
      {
        title: "User research",
        description:
          "Interviews, surveys and analytics reviews that uncover what users really need.",
      },
      {
        title: "UX strategy & architecture",
        description:
          "Journeys, flows and information architecture that make products easy to navigate.",
      },
      {
        title: "UI design",
        description:
          "Clean, modern interfaces that reflect your brand across web and mobile.",
      },
      {
        title: "Design systems",
        description:
          "Reusable components and guidelines that keep products consistent as they grow.",
      },
      {
        title: "Prototyping",
        description:
          "Interactive prototypes to test ideas with real users before a line of code is written.",
      },
      {
        title: "Accessibility audits",
        description:
          "WCAG-aligned reviews and fixes so your product works for everyone.",
      },
    ],
    outcomes: [
      {
        title: "Higher conversion",
        description: "Clear journeys that remove friction from key tasks.",
      },
      {
        title: "Less rework",
        description: "Validated designs mean fewer surprises during development.",
      },
      {
        title: "A consistent brand",
        description: "Every screen looks and feels like it belongs together.",
      },
      {
        title: "Inclusive by default",
        description: "Accessible design that widens your reach.",
      },
    ],
    stack: [
      "Figma",
      "FigJam",
      "Storybook",
      "Maze",
      "Hotjar",
      "Framer",
      "Adobe Creative Cloud",
      "Lottie",
    ],
    faqs: [
      {
        question: "Can you redesign an existing product?",
        answer:
          "Yes. We start with a UX audit and user feedback to find the biggest pain points, then redesign in stages so improvements reach users quickly.",
      },
      {
        question: "Do you work with our in-house developers?",
        answer:
          "Definitely. We deliver developer-ready specs and design-system components, and stay involved during the build to review the implementation.",
      },
      {
        question: "Will the design be accessible?",
        answer:
          "Accessibility is part of our standard process. We design to WCAG 2.2 AA — colour contrast, keyboard navigation, screen-reader support and more.",
      },
    ],
  },
];

export const getServiceBySlug = (slug: string | undefined) =>
  services.find((service) => service.slug === slug);
