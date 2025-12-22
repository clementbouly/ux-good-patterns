import { GoodExample } from "./GoodExample";
import { BadExample } from "./BadExample";
import content from "./README.md";

export { content };

export const meta = {
  id: "visible-label",
  title: "Floating labels instead of placeholders",
  description:
    "Avoid confusion about which field is which by using visible labels",
  category: "Forms",
  tags: ["accessibility", "forms", "labels", "placeholders"],
  createdAt: "2025-12-22",
};

export const BadExamples = [
  { component: BadExample, label: "Label in placeholder" },
];

export const GoodExamples = [
  { component: GoodExample, label: "Label above input" },
];
