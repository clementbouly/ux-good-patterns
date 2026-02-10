import { GoodExample } from "./GoodExample";
import { BadExample } from "./BadExample";
import content from "./README.md?raw";
import contentFr from "./README.fr.md?raw";

export { content, contentFr };

export const meta = {
  id: "toggle-immediate-effect",
  title: "Toggle switches for immediate settings",
  description:
    "Use toggle switches for independent settings that take effect immediately, not checkboxes that imply deferred action.",
  category: "Forms",
  tags: ["toggle", "checkbox", "switch", "settings", "form"],
  createdAt: "2026-02-10",
  aiSummary:
    "Use toggle switches (not checkboxes) for independent settings that take immediate effect. Toggles communicate instant action like a light switch — no submit button needed. Checkboxes imply grouped selection with a deferred submit step.",
};

export const BadExamples = [{ component: BadExample, label: "Checkboxes + Save" }];
export const GoodExamples = [{ component: GoodExample, label: "Toggle switches" }];
