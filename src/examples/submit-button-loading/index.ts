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
};

export const BadExamples = [{ component: BadExample, label: "No disable" }];

export const GoodExamples = [{ component: GoodExample, label: "With spinner" }];
