import { GoodExample } from "./GoodExample";
import { BadExample } from "./BadExample";
import content from "./README.md?raw";
import contentFr from "./README.fr.md?raw";

export { content, contentFr };

export const meta = {
  id: "toast-vs-inline-feedback",
  title: "Toast vs Inline feedback",
  description: "Show feedback where the user is looking, not in a distant corner",
  category: "Feedback",
  tags: ["toast", "feedback", "copy", "clipboard", "accessibility"],
  createdAt: "2025-12-26",
  aiSummary:
    "Show action feedback inline (next to the triggering element), not in distant toasts. Toasts violate proximity principle and are inaccessible to screen magnifier users. Implementation: for copy buttons show checkmark inline, for form fields show validation next to field. Reserve toasts only for background processes (file upload complete) or system notifications.",
};

export const BadExamples = [{ component: BadExample, label: "Toast" }];

export const GoodExamples = [{ component: GoodExample, label: "Inline" }];
