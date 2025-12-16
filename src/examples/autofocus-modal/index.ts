import { GoodExample } from "./GoodExample";
import { BadExample } from "./BadExample";
import content from "./README.md?raw";

export { content };

export const meta = {
  id: "autofocus-modal",
  title: "Autofocus on Modal input",
  description:
    "When a modal opens with a single input, it should be automatically focused",
  category: "Modals",
  tags: ["modal", "input", "accessibility", "mobile"],
};

export const BadExamples = [
  { component: BadExample, label: "No autofocus" },
];

export const GoodExamples = [
  { component: GoodExample, label: "With autofocus" },
];
