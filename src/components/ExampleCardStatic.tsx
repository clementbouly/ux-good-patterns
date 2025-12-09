import { useState } from "react";
import { X, Check, ArrowRight } from "lucide-react";
import { examples, type ExampleMeta, type ExampleVariant } from "@/examples";
import { ShareButton } from "./ShareButton";

function VariantSelector({
  variants,
  currentIndex,
  onSelect,
  color,
}: {
  variants: ExampleVariant[];
  currentIndex: number;
  onSelect: (index: number) => void;
  color: "red" | "green";
}) {
  if (variants.length <= 1) return null;

  const colorClasses = {
    red: "border-red-300 bg-red-50 text-red-700 hover:bg-red-100 data-[active=true]:bg-red-600 data-[active=true]:text-white dark:border-red-800 dark:bg-red-950 dark:text-red-400 dark:hover:bg-red-900 dark:data-[active=true]:bg-red-700",
    green:
      "border-green-300 bg-green-50 text-green-700 hover:bg-green-100 data-[active=true]:bg-green-600 data-[active=true]:text-white dark:border-green-800 dark:bg-green-950 dark:text-green-400 dark:hover:bg-green-900 dark:data-[active=true]:bg-green-700",
  };

  return (
    <div className="flex gap-1">
      {variants.map((variant, index) => (
        <button
          key={index}
          onClick={() => onSelect(index)}
          data-active={currentIndex === index}
          className={`rounded-md border px-2 py-1 text-xs font-medium transition-colors ${colorClasses[color]}`}
        >
          {variant.label}
        </button>
      ))}
    </div>
  );
}

type ExampleCardStaticProps = {
  exampleId: string;
  meta: ExampleMeta;
};

export function ExampleCardStatic({ exampleId, meta }: ExampleCardStaticProps) {
  const [badIndex, setBadIndex] = useState(0);
  const [goodIndex, setGoodIndex] = useState(0);

  // Find the example to get the components
  const example = examples.find((e) => e.meta.id === exampleId);
  if (!example) return null;

  const CurrentBadExample = example.BadExamples[badIndex]?.component;
  const CurrentGoodExample = example.GoodExamples[goodIndex]?.component;

  const exampleUrl = `/example/${meta.id}`;

  const shareUrl =
    typeof window !== "undefined"
      ? `${window.location.origin}/example/${meta.id}`
      : `/example/${meta.id}`;

  return (
    <div
      className="group relative rounded-lg border bg-card p-6"
      data-example-category={meta.category}
    >
      <ShareButton url={shareUrl} className="absolute right-4 top-4" />

      <div className="mb-4">
        <span className="text-xs font-medium text-muted-foreground">
          {meta.category}
        </span>
        <a
          href={exampleUrl}
          data-example-link={exampleUrl}
          className="block hover:underline"
        >
          <h2 className="text-xl font-semibold">{meta.title}</h2>
        </a>
        <p className="my-1 text-sm text-muted-foreground">{meta.description}</p>
        <div className="mt-2 flex flex-wrap gap-1">
          {meta.tags.map((tag) => (
            <span
              key={tag}
              className="rounded bg-secondary px-2 py-0.5 text-xs text-secondary-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="grid items-stretch gap-6 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-red-100 dark:bg-red-950">
                <X className="h-3 w-3 text-red-600 dark:text-red-400" />
              </span>
              <h3 className="font-medium text-red-600 dark:text-red-400">
                Bad example
              </h3>
            </div>
            <VariantSelector
              variants={example.BadExamples}
              currentIndex={badIndex}
              onSelect={setBadIndex}
              color="red"
            />
          </div>
          <div className="min-h-[120px] flex-1 rounded-md border border-red-200 bg-red-50/50 p-4 dark:border-red-900 dark:bg-red-950/50">
            {CurrentBadExample && <CurrentBadExample />}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-green-100 dark:bg-green-950">
                <Check className="h-3 w-3 text-green-600 dark:text-green-400" />
              </span>
              <h3 className="font-medium text-green-600 dark:text-green-400">
                Good example
              </h3>
            </div>
            <VariantSelector
              variants={example.GoodExamples}
              currentIndex={goodIndex}
              onSelect={setGoodIndex}
              color="green"
            />
          </div>
          <div className="min-h-[120px] flex-1 rounded-md border border-green-200 bg-green-50/50 p-4 dark:border-green-900 dark:bg-green-950/50">
            {CurrentGoodExample && <CurrentGoodExample />}
          </div>
        </div>
      </div>

      <div className="mt-4 flex justify-center transition-opacity md:opacity-0 md:group-hover:opacity-100">
        <a
          href={exampleUrl}
          data-example-link={exampleUrl}
          className="inline-flex w-full items-center justify-center gap-2 rounded-md border px-4 py-2 text-sm font-medium transition-colors hover:bg-muted md:w-auto"
        >
          Learn more
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}
