import { GoodExample } from "./GoodExample";
import { BadExample } from "./BadExample";
import content from "./README.md?raw";
import contentFr from "./README.fr.md?raw";

export { content, contentFr };

export const meta = {
  id: "checkbox-grouped-selection",
  title: "Checkboxes for grouped selection with submit",
  description:
    "Use checkboxes when users select from a group of options that require explicit confirmation before taking effect.",
  category: "Forms",
  tags: ["checkbox", "toggle", "form", "selection", "submit"],
  createdAt: "2026-02-10",
  aiSummary:
    "Use checkboxes (not toggles) when selection requires explicit confirmation via a submit/action button. Checkboxes communicate deferred action: select then confirm. Toggles imply immediate effect, creating confusion when a submit step is needed.",
};

export const BadExamples = [{ component: BadExample, label: "Toggle switches" }];
export const GoodExamples = [{ component: GoodExample, label: "Checkboxes" }];
