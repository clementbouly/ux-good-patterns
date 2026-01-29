import { GoodExample } from "./GoodExample";
import { BadExample } from "./BadExample";
import content from "./README.md?raw";
import contentFr from "./README.fr.md?raw";

export { content, contentFr };

export const meta = {
  id: "floating-action-button",
  title: "Floating Action Button",
  description: "Keep primary actions accessible with a persistent floating button",
  category: "Navigation",
  tags: ["fab", "button", "navigation", "accessibility", "mobile", "ux"],
  createdAt: "2025-12-27",
  aiSummary:
    "For screens with one dominant action (create post, compose), use a persistent FAB. Implementation: position fixed bottom-right, use shadow for elevation, only ONE FAB per screen, use clear icon (+ for create), add aria-label for accessibility. Consider hiding on scroll down, showing on scroll up. For desktop with sidebars, sidebar placement may be better.",
};

export const BadExamples = [{ component: BadExample, label: "Button scrolls away" }];

export const GoodExamples = [{ component: GoodExample, label: "Persistent FAB" }];
