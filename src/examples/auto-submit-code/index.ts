import { GoodExample } from "./GoodExample";
import { BadExample } from "./BadExample";
import content from "./README.md?raw";

export { content };

export const meta = {
  id: "auto-submit-code",
  title: "Auto-submit verification code",
  description:
    "Automatically validate the code when all digits are entered instead of requiring manual submission",
  category: "Forms",
  tags: ["verification", "otp", "auto-submit", "input", "ux"],
  createdAt: "2025-12-07",
};

export const BadExamples = [
  { component: BadExample, label: "Manual submit" },
];

export const GoodExamples = [
  { component: GoodExample, label: "Auto-submit" },
];
