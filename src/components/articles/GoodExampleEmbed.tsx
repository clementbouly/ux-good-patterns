import { Check } from "lucide-react";
import { examples } from "@/examples";

type GoodExampleEmbedProps = {
  id: string;
};

export function GoodExampleEmbed({ id }: GoodExampleEmbedProps) {
  const example = examples.find((e) => e.meta.id === id);

  if (!example) {
    return (
      <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-red-600 dark:border-red-900 dark:bg-red-950 dark:text-red-400">
        Example "{id}" not found
      </div>
    );
  }

  const GoodExample = example.GoodExamples[0]?.component;

  if (!GoodExample) {
    return null;
  }

  return (
    <div className="not-prose rounded-md border border-green-200 bg-green-50/50 p-4 dark:border-green-900 dark:bg-green-950/50">
      <div className="flex items-center gap-2 mb-4">
        <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-green-100 dark:bg-green-950">
          <Check className="h-3 w-3 text-green-600 dark:text-green-400" />
        </span>
        <span className="font-medium text-green-600 dark:text-green-400">Good example</span>
      </div>
      <GoodExample />
    </div>
  );
}
