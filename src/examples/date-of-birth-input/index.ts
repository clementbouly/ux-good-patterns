import { GoodExample } from "./GoodExample";
import { BadExample } from "./BadExample";
import { BadExampleDropdowns } from "./BadExampleDropdowns";
import content from "./README.md?raw";
import contentFr from "./README.fr.md?raw";

export { content, contentFr };

export const meta = {
  id: "date-of-birth-input",
  title: "Date of birth input",
  description:
    "Use three text fields (day, month, year) with auto-advance instead of native date pickers or long dropdowns for date of birth.",
  category: "Forms",
  tags: ["form", "input", "date", "birthday", "mobile", "accessibility"],
  createdAt: "2026-05-12",
  aiSummary:
    "For date of birth, avoid native <input type='date'> (calendar picker forces month-by-month navigation back to 1986) and avoid 3 dropdowns (year dropdown with 100+ options is painful on mobile). Instead, use 3 text inputs (DD/MM/YYYY) with: inputmode='numeric', autocomplete='bday-day'/'bday-month'/'bday-year', auto-advance to next field when full, smart auto-advance when first digit can only be a single-digit value (day >=4, month >=2), backspace returns to previous empty field, paste support that parses '23/06/1986', and validation against actual calendar (leap years, days per month).",
};

export const BadExamples = [
  { component: BadExampleDropdowns, label: "3 dropdowns" },
  { component: BadExample, label: "Text + calendar" },
];

export const GoodExamples = [
  { component: GoodExample, label: "3 inputs" },
];
