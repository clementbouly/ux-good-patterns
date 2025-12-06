import { GoodExample } from "./GoodExample";
import { BadExample } from "./BadExample";

export const meta = {
  id: "verification-code-input",
  title: "Verification code paste support",
  description:
    "Allow users to paste verification codes instead of typing digit by digit",
  category: "Forms",
  tags: ["input", "verification", "paste", "OTP", "mobile"],
};

export const BadExamples = [
  { component: BadExample, label: "No paste" },
];

export const GoodExamples = [
  { component: GoodExample, label: "With paste" },
];
