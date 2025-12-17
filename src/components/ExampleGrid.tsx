import { examples } from "@/examples";
import { ExampleCard } from "./ExampleCard";
import { Button } from "@/components/ui/button";
import { useSearchParam } from "@/hooks/useSearchParam";
import { isNew, sortByDate } from "@/lib/dateUtils";

const NEW_CATEGORY = "New";
const categories = [NEW_CATEGORY, ...new Set(examples.map((e) => e.meta.category))];

// Sort all examples by date (newest first)
const sortedExamples = sortByDate(examples);

export function ExampleGrid() {
  const [selectedCategory, setSelectedCategory] = useSearchParam("category");

  const filteredExamples =
    selectedCategory === NEW_CATEGORY
      ? sortedExamples.filter((e) => isNew(e.meta.createdAt))
      : selectedCategory
        ? sortedExamples.filter((e) => e.meta.category === selectedCategory)
        : sortedExamples;

  // Count new examples for the badge
  const newCount = sortedExamples.filter((e) => isNew(e.meta.createdAt)).length;

  return (
    <>
      <div className="mb-6 flex flex-wrap gap-2">
        <Button
          variant={!selectedCategory ? "default" : "outline"}
          size="sm"
          onClick={() => setSelectedCategory(undefined)}
        >
          All
        </Button>
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCategory(category)}
            className={category === NEW_CATEGORY ? "gap-1.5" : ""}
          >
            {category}
            {category === NEW_CATEGORY && newCount > 0 && (
              <span className="inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1.5 text-xs font-semibold text-white">
                {newCount}
              </span>
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
