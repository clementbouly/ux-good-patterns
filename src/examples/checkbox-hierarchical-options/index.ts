import { GoodExample } from "./GoodExample";
import { BadExample } from "./BadExample";
import content from "./README.md?raw";
import contentFr from "./README.fr.md?raw";

export { content, contentFr };

export const meta = {
  id: "checkbox-hierarchical-options",
  title: "Checkboxes for hierarchical selection",
  description:
    "Use checkboxes with indeterminate state for parent-child option hierarchies. Toggles have no way to express partial selection.",
  category: "Forms",
  tags: ["checkbox", "toggle", "hierarchy", "indeterminate", "form"],
  createdAt: "2026-02-10",
  aiSummary:
    "Use checkboxes (not toggles) for hierarchical parent-child selections. Checkboxes support an indeterminate (mixed) state showing 'some but not all' children are selected. Toggle switches only support on/off, making partial selection invisible.",
};

export const BadExamples = [{ component: BadExample, label: "Toggle switches" }];
export const GoodExamples = [{ component: GoodExample, label: "Checkboxes" }];
