import { GoodExample } from "./GoodExample";
import { GoodExampleShadcn } from "./GoodExampleShadcn";
import { BadExample } from "./BadExample";

export const meta = {
  id: "copy-feedback",
  title: "Copy to clipboard feedback",
  description:
    "Provide visual feedback when content is copied to clipboard",
  category: "Feedback",
  tags: ["copy", "clipboard", "feedback", "toast"],
};

export const BadExamples = [
  { component: BadExample, label: "No feedback" },
];

export const GoodExamples = [
  { component: GoodExample, label: "Custom" },
  { component: GoodExampleShadcn, label: "Shadcn" },
];
