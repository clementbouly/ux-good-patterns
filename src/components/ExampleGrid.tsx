import { examples, type Example } from "@/examples";
import { ExampleCard } from "./ExampleCard";
import { Button } from "@/components/ui/button";
import { useSearchParam } from "@/hooks/useSearchParam";

const categories = [...new Set(examples.map((e) => e.meta.category))];

export function ExampleGrid() {
  const [selectedCategory, setSelectedCategory] = useSearchParam("category");

  const filteredExamples = selectedCategory
    ? examples.filter((e) => e.meta.category === selectedCategory)
    : examples;

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
