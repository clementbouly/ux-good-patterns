import { GoodExample } from "./GoodExample";
import { BadExample } from "./BadExample";
import content from "./README.md?raw";
import contentFr from "./README.fr.md?raw";

export { content, contentFr };

export const meta = {
  id: "progressive-loading-messages",
  title: "Progressive Loading Messages",
  description: "Show evolving status messages during long operations to keep users informed",
  category: "Feedback",
  tags: ["loading", "feedback", "progress", "status", "ux"],
  createdAt: "2025-12-08",
  aiSummary:
    "For long operations (>3s like AI generation, report building), show evolving status messages. Implementation: array of messages relevant to task, cycle every 1-2s with setInterval, don't loop (stay on last message if operation takes longer), end with 'Finalizing...' or 'Almost done...', animate transitions between messages.",
};

export const BadExamples = [{ component: BadExample, label: "Static 'Loading...'" }];

export const GoodExamples = [{ component: GoodExample, label: "Progressive messages" }];
