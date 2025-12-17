import { GoodExample } from "./GoodExample";
import { BadExample } from "./BadExample";
import content from "./README.md?raw";

export { content };

export const meta = {
  id: "display-options",
  title: "Display options",
  description:
    "When users need to make a choice from a small set of options, displaying them directly reduces unnecessary clicks and improves clarity",
  category: "Forms",
  tags: ["form", "input", "accessibility"],
};

export const BadExamples = [
  { component: BadExample, label: "Dropdown with too few options" },
];

export const GoodExamples = [
  { component: GoodExample, label: "Radio button" },
];
