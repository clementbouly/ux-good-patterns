import { GoodExample } from "./GoodExample";
import { BadExample } from "./BadExample";
import content from "./README.md?raw";
import contentFr from "./README.fr.md?raw";

export { content, contentFr };

export const meta = {
  id: "dont-limit-user-input",
  title: "Don't Limit User Input",
  description:
    "Allow users to exceed character limits and show clear feedback instead of silently blocking their input.",
  category: "Input",
  tags: ["input", "textarea", "character-limit", "validation", "feedback"],
  createdAt: "2026-01-29",
  aiSummary:
    "When inputs have character limits, let users exceed the limit and show visual feedback instead of blocking. Implementation: don't use maxLength attribute, show character counter (can go negative), highlight overflow text in red using overlay technique or rich-textarea library (~3kb). This lets users paste long text and trim it down.",
};

export const BadExamples = [{ component: BadExample, label: "Hard limit blocks input" }];

export const GoodExamples = [{ component: GoodExample, label: "Overflow with feedback" }];
