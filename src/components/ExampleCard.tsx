import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { X, Check, ArrowRight } from "lucide-react";
import { type Example, type ExampleVariant } from "@/examples";
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

type ExampleCardProps = {
  example: Example;
  titleAs?: "h1" | "h2";
  linkTitle?: boolean;
};

export function ExampleCard({ example, titleAs = "h2", linkTitle = true }: ExampleCardProps) {
  const [badIndex, setBadIndex] = useState(0);
  const [goodIndex, setGoodIndex] = useState(0);

  const CurrentBadExample = example.BadExamples[badIndex]?.component;
  const CurrentGoodExample = example.GoodExamples[goodIndex]?.component;

  const TitleTag = titleAs;
  const titleClassName = titleAs === "h1" ? "text-2xl font-semibold" : "text-xl font-semibold";

  const title = linkTitle ? (
    <Link
      to="/example/$exampleId"
      params={{ exampleId: example.meta.id }}
      className="block hover:underline"
    >
      <TitleTag className={titleClassName}>{example.meta.title}</TitleTag>
    </Link>
  ) : (
    <TitleTag className={titleClassName}>{example.meta.title}</TitleTag>
  );

  const shareUrl =
    typeof window !== "undefined"
      ? `${window.location.origin}/example/${example.meta.id}`
      : `/example/${example.meta.id}`;

  return (
    <div className="group relative rounded-lg border bg-card p-6">
      <ShareButton url={shareUrl} className="absolute right-4 top-4" />

      <div className="mb-4">
        <span className="text-xs font-medium text-muted-foreground">{example.meta.category}</span>
        {title}
        <p className="my-1 text-sm text-muted-foreground">{example.meta.description}</p>
        <div className="mt-2 flex flex-wrap gap-1">
          {example.meta.tags.map((tag) => (
            <span
              key={tag}
              className="rounded bg-secondary px-2 py-0.5 text-xs text-secondary-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 items-stretch">
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-red-100 dark:bg-red-950">
                <X className="h-3 w-3 text-red-600 dark:text-red-400" />
              </span>
              <h3 className="font-medium text-red-600 dark:text-red-400">Bad example</h3>
            </div>
            <VariantSelector
              variants={example.BadExamples}
              currentIndex={badIndex}
              onSelect={setBadIndex}
              color="red"
            />
          </div>
          <div className="flex-1 rounded-md border border-red-200 bg-red-50/50 p-4 dark:border-red-900 dark:bg-red-950/50">
            {CurrentBadExample && <CurrentBadExample />}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-green-100 dark:bg-green-950">
                <Check className="h-3 w-3 text-green-600 dark:text-green-400" />
              </span>
              <h3 className="font-medium text-green-600 dark:text-green-400">Good example</h3>
            </div>
            <VariantSelector
              variants={example.GoodExamples}
              currentIndex={goodIndex}
              onSelect={setGoodIndex}
              color="green"
            />
          </div>
          <div className="flex-1 rounded-md border border-green-200 bg-green-50/50 p-4 dark:border-green-900 dark:bg-green-950/50">
            {CurrentGoodExample && <CurrentGoodExample />}
          </div>
        </div>
      </div>

      {linkTitle && (
        <div className="mt-4 flex justify-center md:opacity-0 md:group-hover:opacity-100 transition-opacity">
          <Link
            to="/example/$exampleId"
            params={{ exampleId: example.meta.id }}
            className="inline-flex w-full md:w-auto items-center justify-center gap-2 rounded-md border px-4 py-2 text-sm font-medium hover:bg-muted transition-colors"
          >
            Learn more
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      )}
    </div>
  );
}
