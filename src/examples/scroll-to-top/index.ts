import { GoodExample } from "./GoodExample";
import { BadExample } from "./BadExample";
import content from "./README.md?raw";
import contentFr from "./README.fr.md?raw";

export { content, contentFr };

export const meta = {
  id: "scroll-to-top",
  title: "Scroll to Top Button",
  description: "Provide a quick way to return to the top on long scrollable content",
  category: "Navigation",
  tags: ["scroll", "navigation", "button", "accessibility", "ux"],
  createdAt: "2025-12-13",
  aiSummary:
    "On long pages (>2 viewport heights), add a floating scroll-to-top button. Implementation: show after scrolling 300-500px (use scroll event listener), position fixed bottom-right, use window.scrollTo({ top: 0, behavior: 'smooth' }), fade in/out animation, use upward arrow icon, ensure keyboard accessible.",
};

export const BadExamples = [{ component: BadExample, label: "No button" }];

export const GoodExamples = [{ component: GoodExample, label: "With scroll button" }];
