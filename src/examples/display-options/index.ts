import { GoodExample, GoodExampleCards } from "./GoodExample";
import { BadExample } from "./BadExample";
import content from "./README.md?raw";

export { content };

export const meta = {
  id: "display-options",
  title: "Visible options instead of select",
  description:
    "For a small set of options, display them directly instead of hiding them in a select",
  category: "Forms",
  tags: ["form", "select", "input", "accessibility"],
};

export const BadExamples = [
  { component: BadExample, label: "Dropdown with too few options" },
];

export const GoodExamples = [
  { component: GoodExampleCards, label: "Selectable cards" },
  { component: GoodExample, label: "Radio buttons" },
];
