import { GoodExample } from "./GoodExample";
import { BadExample } from "./BadExample";
import content from "./README.md?raw";
import contentFr from "./README.fr.md?raw";

export { content, contentFr };

export const meta = {
  id: "autofocus-modal",
  title: "Autofocus on Modal input",
  description: "When a modal opens with a single input, it should be automatically focused",
  category: "Modals",
  tags: ["modal", "input", "accessibility", "mobile"],
  createdAt: "2025-12-06",
  aiSummary:
    "When opening a modal with a single input field (search, quick add), autofocus that input so users can type immediately. Implementation: use autoFocus prop or useEffect with inputRef.current?.focus(). Don't autofocus in confirmation modals (focus the confirm button instead) or modals with content to read first.",
};

export const BadExamples = [{ component: BadExample, label: "No autofocus" }];

export const GoodExamples = [{ component: GoodExample, label: "With autofocus" }];
