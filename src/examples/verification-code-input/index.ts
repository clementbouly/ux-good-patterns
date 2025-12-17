import { GoodExample } from "./GoodExample";
import { BadExample } from "./BadExample";
import content from "./README.md?raw";

export { content };

export const meta = {
  id: "verification-code-input",
  title: "Verification code paste support",
  description:
    "Allow users to paste verification codes instead of typing digit by digit",
  category: "Forms",
  tags: ["input", "verification", "paste", "OTP", "mobile"],
  createdAt: "2025-12-06",
};

export const BadExamples = [
  { component: BadExample, label: "No paste" },
];

export const GoodExamples = [
  { component: GoodExample, label: "With paste" },
];
