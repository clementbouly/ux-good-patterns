import { GoodExample } from "./GoodExample";
import { BadExample } from "./BadExample";
import content from "./README.md?raw";

export { content };

export const meta = {
  id: "form-validation-feedback",
  title: "Form validation with error feedback",
  description:
    "Keep submit buttons enabled and show clear error messages on submit instead of disabling buttons on incomplete forms.",
  category: "Forms",
  tags: ["form", "validation", "error", "button", "accessibility", "feedback"],
};

export const BadExamples = [{ component: BadExample, label: "Disabled button until valid" }];

export const GoodExamples = [
  { component: GoodExample, label: "Enabled button with validation feedback" },
];
