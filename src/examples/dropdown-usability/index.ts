import { GoodExample } from "./GoodExample";
import { BadExample } from "./BadExample";
import content from "./README.md?raw";

export { content };

export const meta = {
  id: "dropdown-usability",
  title: "Dropdown usability",
  description:
    "A dropdown should only be used when the list of options is small and easy to scan",
  category: "Modals",
  tags: ["form", "input", "accessibility", "mobile"],
};

export const BadExamples = [
  { component: BadExample, label: "Dropdown with too many options" },
];

export const GoodExamples = [
  { component: GoodExample, label: "Dropdown with auto-complete" },
];
