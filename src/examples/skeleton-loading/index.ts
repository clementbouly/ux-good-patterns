import { GoodExample } from "./GoodExample";
import { BadExample } from "./BadExample";
import content from "./README.md?raw";
import contentFr from "./README.fr.md?raw";

export { content, contentFr };

export const meta = {
  id: "skeleton-loading",
  title: "Skeleton loading vs Spinner",
  description: "Show content structure with animated placeholders instead of a generic spinner",
  category: "Feedback",
  tags: ["loading", "skeleton", "spinner", "placeholder", "ux"],
  createdAt: "2025-12-07",
  aiSummary:
    "When loading content with predictable structure (lists, cards, profiles), show skeleton placeholders instead of a spinner. Implementation: match skeleton shapes to actual content dimensions, use CSS animate-pulse, show 3-5 skeleton items max, keep visible minimum 300ms to avoid flashing, fade transition to real content.",
};

export const BadExamples = [{ component: BadExample, label: "Spinner" }];

export const GoodExamples = [{ component: GoodExample, label: "Skeleton" }];
