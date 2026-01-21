import { GoodExample } from "./GoodExample";
import { BadExample } from "./BadExample";
import content from "./README.md?raw";
import contentFr from "./README.fr.md?raw";

export { content, contentFr };

export const meta = {
  id: "input-auto-format",
  title: "Auto-format inputs with mobile keyboard",
  description:
    "Automatically format structured inputs (credit card, IBAN, phone) with proper spacing and show the appropriate mobile keyboard.",
  category: "Forms",
  tags: ["form", "input", "format", "mobile", "keyboard", "iban", "credit-card", "accessibility"],
  createdAt: "2025-12-08",
};

export const BadExamples = [{ component: BadExample, label: "Plain text input" }];

export const GoodExamples = [
  { component: GoodExample, label: "Auto-formatted with numeric keyboard" },
];
