import { GoodExample } from "./GoodExample";
import { BadExample } from "./BadExample";
import content from "./README.md?raw";

export { content };

export const meta = {
  id: "paste-otp-code",
  title: "Paste button for OTP code",
  description:
    "Add a visible paste button to let users quickly fill the OTP from clipboard",
  category: "Forms",
  tags: ["verification", "otp", "paste", "clipboard", "input", "ux"],
  createdAt: "2025-12-13",
};

export const BadExamples = [
  { component: BadExample, label: "No paste button" },
];

export const GoodExamples = [
  { component: GoodExample, label: "With paste button" },
];
