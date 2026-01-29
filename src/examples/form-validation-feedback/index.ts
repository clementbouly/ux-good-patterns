import { GoodExample } from "./GoodExample";
import { BadExample } from "./BadExample";
import content from "./README.md?raw";
import contentFr from "./README.fr.md?raw";

export { content, contentFr };

export const meta = {
  id: "form-validation-feedback",
  title: "Avoid disabled submit buttons",
  description:
    "A disabled button doesn't tell users what's wrong. Keep it enabled and show clear error messages on submit.",
  category: "Forms",
  tags: ["form", "button", "accessibility", "disabled"],
  createdAt: "2025-12-08",
  aiSummary:
    "Keep submit buttons always enabled, validate on submit. Implementation: show inline error messages next to invalid fields, use red borders and error icons, add aria-invalid and aria-describedby for accessibility. Only disable button DURING submission (to prevent double-submit), not before.",
};

export const BadExamples = [{ component: BadExample, label: "Disabled button" }];

export const GoodExamples = [{ component: GoodExample, label: "Enabled button with feedback" }];
