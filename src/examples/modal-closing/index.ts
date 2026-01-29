import { GoodExample } from "./GoodExample";
import { BadExample } from "./BadExample";
import content from "./README.md?raw";
import contentFr from "./README.fr.md?raw";

export { content, contentFr };

export const meta = {
  id: "modal-closing",
  title: "Modal closing",
  description:
    "A modal should provide multiple ways to close: X button, click outside, and Escape key",
  category: "Modals",
  tags: ["modal", "accessibility", "keyboard", "ux"],
  createdAt: "2025-12-16",
  aiSummary:
    "Modals should close via X button, click outside overlay, AND Escape key. Implementation: most UI libraries (Radix, Headless UI) support this by default. Return focus to trigger element on close. Exception: for destructive actions or confirmations, disable click-outside but keep explicit Cancel/Confirm buttons.",
};

export const BadExamples = [{ component: BadExample, label: "Only X button works" }];

export const GoodExamples = [{ component: GoodExample, label: "X + click outside + Escape" }];
