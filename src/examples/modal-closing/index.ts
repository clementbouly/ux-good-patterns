import { GoodExample } from "./GoodExample";
import { BadExample } from "./BadExample";
import content from "./README.md?raw";

export { content };

export const meta = {
  id: "modal-closing",
  title: "Modal closing",
  description:
    "A modal should provide multiple ways to close: X button, click outside, and Escape key",
  category: "Modals",
  tags: ["modal", "accessibility", "keyboard", "ux"],
};

export const BadExamples = [
  { component: BadExample, label: "Only X button works" },
];

export const GoodExamples = [
  { component: GoodExample, label: "X + click outside + Escape" },
];
