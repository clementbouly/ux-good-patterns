import { GoodExample } from "./GoodExample";
import { BadExample } from "./BadExample";
import content from "./README.md?raw";

export { content };

export const meta = {
  id: "scroll-to-top",
  title: "Scroll to Top Button",
  description:
    "Provide a quick way to return to the top on long scrollable content",
  category: "Navigation",
  tags: ["scroll", "navigation", "button", "accessibility", "ux"],
};

export const BadExamples = [
  { component: BadExample, label: "No button" },
];

export const GoodExamples = [
  { component: GoodExample, label: "With scroll button" },
];
