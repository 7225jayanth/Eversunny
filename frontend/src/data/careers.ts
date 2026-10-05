import {
  BookOpen,
  Laptop,
  Sprout,
  Target,
  UsersRound,
  Zap,
} from "lucide-react";
import type { IconItem } from "./company";

export const perks: IconItem[] = [
  {
    icon: Target,
    title: "Meaningful work",
    description:
      "Build real products used by real people, across industries and technologies.",
  },
  {
    icon: BookOpen,
    title: "Always learning",
    description:
      "Mentorship, knowledge-sharing sessions and time to explore new tools and ideas.",
  },
  {
    icon: Laptop,
    title: "Flexible working",
    description:
      "We focus on outcomes, not hours at a desk, and plan work around real life.",
  },
  {
    icon: Zap,
    title: "Ownership from day one",
    description:
      "Your ideas are heard and your decisions matter — regardless of your title.",
  },
  {
    icon: UsersRound,
    title: "Supportive team",
    description:
      "Collaborative, low-ego colleagues who review each other's work and celebrate wins together.",
  },
  {
    icon: Sprout,
    title: "Room to grow",
    description:
      "Clear technical and leadership paths, with regular feedback to help you get there.",
  },
];

export const hiringAreas = [
  "Frontend engineering",
  "Backend engineering",
  "Mobile development",
  "Cloud & DevOps",
  "Data & AI",
  "Quality engineering",
  "UI/UX design",
  "Project & delivery management",
];

export const hiringSteps = [
  {
    title: "Apply",
    description: "Send us your resume and a few lines about what you'd love to work on.",
  },
  {
    title: "Intro call",
    description: "A friendly 30-minute conversation about your experience and goals.",
  },
  {
    title: "Technical conversation",
    description: "A practical, discussion-based session — no trick questions.",
  },
  {
    title: "Offer",
    description: "We move quickly and keep you updated at every step.",
  },
];
