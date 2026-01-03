import { GoodExample } from "./GoodExample";
import { BadExample } from "./BadExample";
import content from "./README.md?raw";

export { content };

export const meta = {
  id: "form-validation-feedback",
  title: "Avoid disabled submit buttons",
  description:
    "A disabled button doesn't tell users what's wrong. Keep it enabled and show clear error messages on submit.",
  category: "Forms",
  tags: ["form", "button", "accessibility", "disabled"],
  createdAt: "2025-12-08",
};

export const BadExamples = [{ component: BadExample, label: "Disabled button" }];

export const GoodExamples = [
  { component: GoodExample, label: "Enabled button with feedback" },
];
