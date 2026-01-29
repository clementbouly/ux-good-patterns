import { GoodExample } from "./GoodExample";
import { BadExample } from "./BadExample";
import content from "./README.md?raw";
import contentFr from "./README.fr.md?raw";

export { content, contentFr };

export const meta = {
  id: "submit-button-loading",
  title: "Disable submit button during loading",
  description: "Prevent double submissions by disabling the button and showing a spinner",
  category: "Forms",
  tags: ["button", "loading", "form", "mobile"],
  createdAt: "2025-12-06",
  aiSummary:
    "When submitting forms, disable the button and show a spinner to prevent double submissions. Implementation: set disabled={isLoading}, replace button text with spinner or show spinner alongside text, re-enable on success or error. Apply to: form submissions, API calls, payments, file uploads.",
};

export const BadExamples = [{ component: BadExample, label: "No disable" }];

export const GoodExamples = [{ component: GoodExample, label: "With spinner" }];
