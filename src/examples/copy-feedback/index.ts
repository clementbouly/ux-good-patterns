import { GoodExample } from "./GoodExample";
import { GoodExampleShadcn } from "./GoodExampleShadcn";
import { BadExample } from "./BadExample";
import content from "./README.md?raw";
import contentFr from "./README.fr.md?raw";

export { content, contentFr };

export const meta = {
  id: "copy-feedback",
  title: "Copy to clipboard feedback",
  description: "Provide visual feedback when content is copied to clipboard",
  category: "Feedback",
  tags: ["copy", "clipboard", "feedback", "toast"],
  createdAt: "2025-12-06",
  aiSummary:
    "When implementing copy-to-clipboard, show inline feedback next to the button, not a toast. Implementation: swap icon from Copy to Check, optionally show 'Copied!' text, revert after 2s with setTimeout. Use navigator.clipboard.writeText() with try/catch for error handling.",
};

export const BadExamples = [{ component: BadExample, label: "No feedback" }];

export const GoodExamples = [
  { component: GoodExample, label: "Custom" },
  { component: GoodExampleShadcn, label: "Shadcn" },
];
