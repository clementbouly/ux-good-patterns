import { GoodExample } from "./GoodExample";
import { BadExample } from "./BadExample";
import content from "./README.md?raw";

export { content };

export const meta = {
  id: "floating-action-button",
  title: "Floating Action Button",
  description:
    "Keep primary actions accessible with a persistent floating button",
  category: "Navigation",
  tags: ["fab", "button", "navigation", "accessibility", "mobile", "ux"],
  createdAt: "2024-12-27",
};

export const BadExamples = [
  { component: BadExample, label: "Button scrolls away" },
];

export const GoodExamples = [
  { component: GoodExample, label: "Persistent FAB" },
];
