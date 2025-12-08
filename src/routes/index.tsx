import { createRoute, useNavigate } from "@tanstack/react-router";
import { examples } from "@/examples";
import { Button } from "@/components/ui/button";
import { ExampleCard } from "@/components/ExampleCard";
import { rootRoute } from "./__root";

type SearchParams = {
  category?: string;
};

export const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: IndexPage,
  validateSearch: (search: Record<string, unknown>): SearchParams => {
    return {
      category: typeof search.category === "string" ? search.category : undefined,
    };
  },
});

function IndexPage() {
  const { category: selectedCategory } = indexRoute.useSearch();
  const navigate = useNavigate();

  const categories = [...new Set(examples.map((e) => e.meta.category))];
  const filteredExamples = selectedCategory
    ? examples.filter((e) => e.meta.category === selectedCategory)
    : examples;

  const setSelectedCategory = (category: string | undefined) => {
    navigate({
      to: "/",
      search: category ? { category } : {},
    });
  };

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
          >
            {category}
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
