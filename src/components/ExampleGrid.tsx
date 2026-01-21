import { useMemo } from "react";
import { getLocalizedExamples } from "@/examples";
import { ExampleCard } from "./ExampleCard";
import { Button } from "@/components/ui/button";
import { useSearchParam } from "@/hooks/useSearchParam";
import { isNew, sortByDate } from "@/lib/dateUtils";
import { useTranslations, type Lang } from "@/i18n";

const NEW_CATEGORY_KEY = "New";

type ExampleGridProps = {
  lang: Lang;
};

export function ExampleGrid({ lang }: ExampleGridProps) {
  const t = useTranslations(lang);
  const [selectedCategory, setSelectedCategory] = useSearchParam("category");

  // Get localized examples
  const localizedExamples = useMemo(() => getLocalizedExamples(lang), [lang]);

  // Sort all examples by date (newest first)
  const sortedExamples = useMemo(() => sortByDate(localizedExamples), [localizedExamples]);

  // Get unique categories from localized examples
  const categories = useMemo(() => {
    const cats = new Set(sortedExamples.map((e) => e.meta.category));
    return [NEW_CATEGORY_KEY, ...Array.from(cats)];
  }, [sortedExamples]);

  // Count examples per category
  const categoryCounts = useMemo(() => {
    return categories.reduce(
      (acc, category) => {
        acc[category] =
          category === NEW_CATEGORY_KEY
            ? sortedExamples.filter((e) => isNew(e.meta.createdAt)).length
            : sortedExamples.filter((e) => e.meta.category === category).length;
        return acc;
      },
      {} as Record<string, number>
    );
  }, [categories, sortedExamples]);

  const filteredExamples =
    selectedCategory === NEW_CATEGORY_KEY
      ? sortedExamples.filter((e) => isNew(e.meta.createdAt))
      : selectedCategory
        ? sortedExamples.filter((e) => e.meta.category === selectedCategory)
        : sortedExamples;

  // Translate the "New" category label
  const getCategoryLabel = (category: string) => {
    if (category === NEW_CATEGORY_KEY) return t("common.new");
    return category;
  };

  return (
    <>
      <div className="mb-6 flex flex-wrap gap-2">
        <Button
          variant={!selectedCategory ? "default" : "outline"}
          size="sm"
          onClick={() => setSelectedCategory(undefined)}
          className="gap-1.5"
        >
          {t("common.all")}
          <span className="text-xs text-muted-foreground">{sortedExamples.length}</span>
        </Button>
        {categories
          .filter((category) => categoryCounts[category] > 0)
          .map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className="gap-1.5"
            >
              {getCategoryLabel(category)}
              {category === NEW_CATEGORY_KEY && categoryCounts[category] > 0 ? (
                <span className="inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1.5 text-xs font-semibold text-white">
                  {categoryCounts[category]}
                </span>
              ) : (
                <span className="text-xs text-muted-foreground">{categoryCounts[category]}</span>
              )}
            </Button>
          ))}
      </div>

      <div className="grid gap-6">
        {filteredExamples.map((example) => (
          <ExampleCard key={example.meta.id} example={example} lang={lang} />
        ))}
      </div>
    </>
  );
}
