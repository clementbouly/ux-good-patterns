import { GoodExample } from "./GoodExample";
import { BadExample } from "./BadExample";
import content from "./README.md?raw";

export { content };

export const meta = {
  id: "skeleton-loading",
  title: "Skeleton loading vs Spinner",
  description:
    "Show content structure with animated placeholders instead of a generic spinner",
  category: "Feedback",
  tags: ["loading", "skeleton", "spinner", "placeholder", "ux"],
};

export const BadExamples = [
  { component: BadExample, label: "Spinner" },
];

export const GoodExamples = [
  { component: GoodExample, label: "Skeleton" },
];
