export type Article = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  createdAt: string; // ISO date format: YYYY-MM-DD
};

export const articles: Article[] = [
  {
    slug: "ux-vs-ui",
    title: "Understanding UX vs UI — By Example",
    description:
      "A hands-on demonstration of the difference between User Experience and User Interface through interactive form examples",
    tags: ["Fundamentals", "Forms", "Interactive"],
    createdAt: "2026-02-04",
  },
  {
    slug: "linkedin-ux-mistakes",
    title: "5 UX Mistakes Even LinkedIn Makes",
    description:
      "A deep dive into friction points on one of the world's largest platforms, and what they teach us about UX best practices",
    tags: ["Case Study", "Feedback", "Loading", "Navigation"],
    createdAt: "2025-12-27",
  },
  {
    slug: "otp-ux-guide",
    title: "The Complete Guide to OTP UX",
    description:
      "Best practices for verification code inputs, from email design to form implementation",
    tags: ["OTP", "Forms", "Verification"],
    createdAt: "2025-12-13",
  },
  {
    slug: "ux-speed-game",
    title: "The UX Speed Challenge",
    description:
      "Experience firsthand how small UX frictions compound into major slowdowns",
    tags: ["Interactive", "Game", "Micro-interactions"],
    createdAt: "2025-12-16",
  },
  {
    slug: "checkbox-vs-toggle",
    title: "Checkbox vs Toggle Switch: When to Use Which",
    description:
      "A practical guide to choosing between checkboxes and toggle switches, with interactive examples",
    tags: ["Forms", "Interactive"],
    createdAt: "2026-02-10",
  },
];
