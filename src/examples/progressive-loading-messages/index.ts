import { GoodExample } from "./GoodExample";
import { BadExample } from "./BadExample";
import content from "./README.md?raw";

export { content };

export const meta = {
  id: "progressive-loading-messages",
  title: "Progressive Loading Messages",
  description: "Show evolving status messages during long operations to keep users informed",
  category: "Feedback",
  tags: ["loading", "feedback", "progress", "status", "ux"],
  createdAt: "2025-12-08",
};

export const BadExamples = [{ component: BadExample, label: "Static 'Loading...'" }];

export const GoodExamples = [{ component: GoodExample, label: "Progressive messages" }];
