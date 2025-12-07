import { GoodExample } from "./GoodExample";
import { BadExample } from "./BadExample";
import content from "./README.md?raw";

export { content };

export const meta = {
  id: "submit-button-loading",
  title: "Disable submit button during loading",
  description:
    "Prevent double submissions by disabling the button and showing a spinner",
  category: "Forms",
  tags: ["button", "loading", "form", "mobile"],
};

export const BadExamples = [
  { component: BadExample, label: "No disable" },
];

export const GoodExamples = [
  { component: GoodExample, label: "With spinner" },
];
