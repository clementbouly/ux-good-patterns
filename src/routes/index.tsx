import { createRoute } from "@tanstack/react-router";
import { useState } from "react";
import { examples } from "@/examples";
import { Button } from "@/components/ui/button";
import { ExampleCard } from "@/components/ExampleCard";
import { rootRoute } from "./__root";

export const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: IndexPage,
});

function IndexPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = [...new Set(examples.map((e) => e.meta.category))];
  const filteredExamples = selectedCategory
    ? examples.filter((e) => e.meta.category === selectedCategory)
    : examples;

  return (
    <>
      <div className="mb-6 flex flex-wrap gap-2">
        <Button
          variant={selectedCategory === null ? "default" : "outline"}
          size="sm"
          onClick={() => setSelectedCategory(null)}
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
