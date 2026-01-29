import { GoodExample } from "./GoodExample";
import { BadExample } from "./BadExample";
import content from "./README.md?raw";
import contentFr from "./README.fr.md?raw";

export { content, contentFr };

export const meta = {
  id: "paste-otp-code",
  title: "Paste button for OTP code",
  description: "Add a visible paste button to let users quickly fill the OTP from clipboard",
  category: "Forms",
  tags: ["verification", "otp", "paste", "clipboard", "input", "ux"],
  createdAt: "2025-12-13",
  aiSummary:
    "Add a visible 'Paste' button next to OTP inputs for discoverability. Implementation: use navigator.clipboard.readText() (requires HTTPS), handle permission/errors gracefully with try/catch, extract only digits from pasted content, combine with auto-submit for fastest flow. Keep Ctrl+V working as fallback.",
};

export const BadExamples = [{ component: BadExample, label: "No paste button" }];

export const GoodExamples = [{ component: GoodExample, label: "With paste button" }];
