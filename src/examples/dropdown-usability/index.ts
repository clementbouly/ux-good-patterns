import { GoodExample } from "./GoodExample";
import { BadExample } from "./BadExample";
import content from "./README.md?raw";

export { content };

export const meta = {
  id: "dropdown-usability",
  title: "Searchable select for long lists",
  description:
    "When a select has many options, add search to help users find their choice quickly",
  category: "Forms",
  tags: ["form", "select", "input", "accessibility", "mobile"],
};

export const BadExamples = [
  { component: BadExample, label: "Dropdown with too many options" },
];

export const GoodExamples = [
  { component: GoodExample, label: "Dropdown with auto-complete" },
];
