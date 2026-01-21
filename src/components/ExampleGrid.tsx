import { examples } from "@/examples";
import { ExampleCard } from "./ExampleCard";
import { Button } from "@/components/ui/button";
import { useSearchParam } from "@/hooks/useSearchParam";
import { isNew, sortByDate } from "@/lib/dateUtils";
import { useI18n } from "@/hooks/useI18n";

const NEW_CATEGORY = "New";
const categories = [NEW_CATEGORY, ...new Set(examples.map((e) => e.meta.category))];

// Sort all examples by date (newest first)
const sortedExamples = sortByDate(examples);

// Count examples per category
const categoryCounts = categories.reduce(
  (acc, category) => {
    acc[category] =
      category === NEW_CATEGORY
        ? sortedExamples.filter((e) => isNew(e.meta.createdAt)).length
        : sortedExamples.filter((e) => e.meta.category === category).length;
    return acc;
  },
  {} as Record<string, number>
);

export function ExampleGrid() {
  const { t } = useI18n();
  const [selectedCategory, setSelectedCategory] = useSearchParam("category");

  const filteredExamples =
    selectedCategory === NEW_CATEGORY
      ? sortedExamples.filter((e) => isNew(e.meta.createdAt))
      : selectedCategory
        ? sortedExamples.filter((e) => e.meta.category === selectedCategory)
        : sortedExamples;

  // Translate the "New" category label
  const getCategoryLabel = (category: string) => {
    if (category === NEW_CATEGORY) return t("common.new");
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
              {category === NEW_CATEGORY && categoryCounts[category] > 0 ? (
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
          <ExampleCard key={example.meta.id} example={example} />
        ))}
      </div>
    </>
  );
}
