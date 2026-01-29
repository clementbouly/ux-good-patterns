import { GoodExample } from "./GoodExample";
import { BadExample } from "./BadExample";
import content from "./README.md?raw";
import contentFr from "./README.fr.md?raw";

export { content, contentFr };

export const meta = {
  id: "auto-submit-code",
  title: "Auto-submit verification code",
  description:
    "Automatically validate the code when all digits are entered instead of requiring manual submission",
  category: "Forms",
  tags: ["verification", "otp", "auto-submit", "input", "ux"],
  createdAt: "2025-12-07",
  aiSummary:
    "When building OTP/verification code inputs, trigger validation automatically when value.length === maxLength. Implementation: show spinner immediately after auto-submit, disable input during verification, on error clear input and refocus for retry, ensure verification is fast (<1s ideally).",
};

export const BadExamples = [{ component: BadExample, label: "Manual submit" }];

export const GoodExamples = [{ component: GoodExample, label: "Auto-submit" }];
