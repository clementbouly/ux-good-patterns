import { GoodExample } from "./GoodExample";
import { BadExample } from "./BadExample";
import content from "./README.md?raw";
import contentFr from "./README.fr.md?raw";

export { content, contentFr };

export const meta = {
  id: "dropdown-usability",
  title: "Searchable select for long lists",
  description: "When a select has many options, add search to help users find their choice quickly",
  category: "Forms",
  tags: ["form", "select", "input", "accessibility", "mobile"],
  createdAt: "2025-12-17",
  aiSummary:
    "For selects with 10+ options (countries, languages, timezones), use a searchable combobox. Implementation: let users type to filter, show 'No results' message when empty, clear search on close, preserve full selected value display (not search text). Standard dropdown is fine for <7 options.",
};

export const BadExamples = [{ component: BadExample, label: "Dropdown with too many options" }];

export const GoodExamples = [{ component: GoodExample, label: "Dropdown with auto-complete" }];
