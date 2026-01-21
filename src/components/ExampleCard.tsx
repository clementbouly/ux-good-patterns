import { useState, useEffect } from "react";
import { X, Check, ArrowRight } from "lucide-react";
import { type Example, type ExampleVariant } from "@/examples";
import { ShareButton } from "./ShareButton";
import { useSearchParam } from "@/hooks/useSearchParam";
import { isNew } from "@/lib/dateUtils";
import { useI18n } from "@/hooks/useI18n";

function VariantSelector({
  variants,
  currentIndex,
  onSelect,
  color,
  multipleGoodLabel,
}: {
  variants: ExampleVariant[];
  currentIndex: number;
  onSelect: (index: number) => void;
  color: "red" | "green";
  multipleGoodLabel: string;
}) {
  if (variants.length <= 1) return null;

  const colorClasses = {
    red: "border-red-300 bg-red-50 text-red-700 hover:bg-red-100 data-[active=true]:bg-red-600 data-[active=true]:text-white dark:border-red-800 dark:bg-red-950 dark:text-red-400 dark:hover:bg-red-900 dark:data-[active=true]:bg-red-700",
    green:
      "border-green-300 bg-green-50 text-green-700 hover:bg-green-100 data-[active=true]:bg-green-600 data-[active=true]:text-white dark:border-green-800 dark:bg-green-950 dark:text-green-400 dark:hover:bg-green-900 dark:data-[active=true]:bg-green-700",
  };

  return (
    <div className="flex items-center gap-2">
      {color === "green" && (
        <div className="group/dot relative hidden md:block">
          <span className="relative flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
          </span>
          <div className="pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2 opacity-0 transition-opacity duration-300 group-hover/dot:opacity-100">
            <div className="whitespace-nowrap rounded bg-foreground px-2 py-1 text-xs text-background">
              {multipleGoodLabel}
            </div>
            <div className="absolute left-1/2 top-full -translate-x-1/2 border-4 border-transparent border-t-foreground"></div>
          </div>
        </div>
      )}
      <div className="flex gap-1">
        {variants.map((variant, index) => (
          <button
            key={index}
            onClick={() => onSelect(index)}
            data-active={currentIndex === index}
            className={`cursor-pointer rounded-md border px-2 py-1 text-xs font-medium transition-colors ${colorClasses[color]}`}
          >
            {variant.label}
          </button>
        ))}
      </div>
    </div>
  );
}

type ExampleCardProps = {
  example: Example;
  titleAs?: "h1" | "h2";
  linkTitle?: boolean;
};

export function ExampleCard({ example, titleAs = "h2", linkTitle = true }: ExampleCardProps) {
  const { t, lang } = useI18n();
  const [badIndex, setBadIndex] = useState(0);
  const [goodIndex, setGoodIndex] = useState(0);
  const [category] = useSearchParam("category");

  const CurrentBadExample = example.BadExamples[badIndex]?.component;
  const CurrentGoodExample = example.GoodExamples[goodIndex]?.component;

  const TitleTag = titleAs;
  const titleClassName = titleAs === "h1" ? "text-2xl font-semibold" : "text-xl font-semibold";

  const langPrefix = lang === "fr" ? "/fr" : "";
  const exampleUrl = `${langPrefix}/example/${example.meta.id}${category ? `?category=${category}` : ""}`;

  const title = linkTitle ? (
    <a href={exampleUrl} className="block hover:underline">
      <TitleTag className={titleClassName}>{example.meta.title}</TitleTag>
    </a>
  ) : (
    <TitleTag className={titleClassName}>{example.meta.title}</TitleTag>
  );

  // Build share URL after hydration to avoid SSR mismatch
  const [shareUrl, setShareUrl] = useState(`/example/${example.meta.id}`);
  useEffect(() => {
    setShareUrl(`${window.location.origin}${langPrefix}/example/${example.meta.id}`);
  }, [example.meta.id, langPrefix]);

  return (
    <div className="group relative rounded-lg border bg-card p-6">
      <ShareButton url={shareUrl} className="absolute right-4 top-4" />

      <div className="mb-4">
        <div className="flex items-center gap-2">
          <span className="text-xs font-medium text-muted-foreground">{example.meta.category}</span>
          {isNew(example.meta.createdAt) && (
            <span className="inline-flex items-center rounded-full bg-red-500 px-2 py-0.5 text-xs font-semibold text-white">
              {t("common.new")}
            </span>
          )}
        </div>
        {title}
        <p className="my-3 text-sm text-muted-foreground">{example.meta.description}</p>
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

      <div className="grid items-stretch gap-6 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <div className="flex flex-col items-start justify-between gap-2 md:flex-row md:items-center">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-red-100 dark:bg-red-950">
                <X className="h-3 w-3 text-red-600 dark:text-red-400" />
              </span>
              <h3 className="font-medium text-red-600 dark:text-red-400">{t("example.bad")}</h3>
            </div>
            <VariantSelector
              variants={example.BadExamples}
              currentIndex={badIndex}
              onSelect={setBadIndex}
              color="red"
              multipleGoodLabel={t("example.multipleGood")}
            />
          </div>
          <div className="flex-1 rounded-md border border-red-200 bg-red-50/50 p-4 dark:border-red-900 dark:bg-red-950/50">
            {CurrentBadExample && <CurrentBadExample />}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex flex-col items-start justify-between gap-2 md:flex-row md:items-center">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-green-100 dark:bg-green-950">
                <Check className="h-3 w-3 text-green-600 dark:text-green-400" />
              </span>
              <h3 className="font-medium text-green-600 dark:text-green-400">
                {t("example.good")}
              </h3>
            </div>
            <VariantSelector
              variants={example.GoodExamples}
              currentIndex={goodIndex}
              onSelect={setGoodIndex}
              color="green"
              multipleGoodLabel={t("example.multipleGood")}
            />
          </div>
          <div className="flex-1 rounded-md border border-green-200 bg-green-50/50 p-4 dark:border-green-900 dark:bg-green-950/50">
            {CurrentGoodExample && <CurrentGoodExample />}
          </div>
        </div>
      </div>

      {linkTitle && (
        <div className="mt-4 flex justify-center transition-opacity md:opacity-0 md:group-hover:opacity-100">
          <a
            href={exampleUrl}
            className="inline-flex w-full items-center justify-center gap-2 rounded-md border px-4 py-2 text-sm font-medium transition-colors hover:bg-muted md:w-auto"
          >
            {t("common.learnMore")}
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      )}
    </div>
  );
}
