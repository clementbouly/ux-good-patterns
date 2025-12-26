import { GoodExample } from "./GoodExample";
import { BadExample } from "./BadExample";
import content from "./README.md?raw";

export { content };

export const meta = {
  id: "toast-vs-inline-feedback",
  title: "Toast vs Inline feedback",
  description:
    "Show feedback where the user is looking, not in a distant corner",
  category: "Feedback",
  tags: ["toast", "feedback", "copy", "clipboard", "accessibility"],
  createdAt: "2025-12-26",
};

export const BadExamples = [{ component: BadExample, label: "Toast" }];

export const GoodExamples = [{ component: GoodExample, label: "Inline" }];
