import { GoodExample, GoodExampleCards } from "./GoodExample";
import { BadExample } from "./BadExample";
import content from "./README.md?raw";
import contentFr from "./README.fr.md?raw";

export { content, contentFr };

export const meta = {
  id: "display-options",
  title: "Visible options instead of select",
  description:
    "For a small set of options, display them directly instead of hiding them in a select",
  category: "Forms",
  tags: ["form", "select", "input", "accessibility"],
  createdAt: "2025-12-17",
  aiSummary:
    "For 2-5 mutually exclusive options, show them visibly instead of hiding in a dropdown. Implementation: use radio buttons for simple choices in forms, selectable cards for options needing descriptions, segmented control for binary/ternary toolbar-style choices. Reserve dropdowns for 6+ options or space-constrained layouts.",
};

export const BadExamples = [{ component: BadExample, label: "Dropdown with too few options" }];

export const GoodExamples = [
  { component: GoodExampleCards, label: "Selectable cards" },
  { component: GoodExample, label: "Radio buttons" },
];
