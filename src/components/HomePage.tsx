import { useState } from "react";
import { examples } from "@/examples";
import { Button } from "@/components/ui/button";
import { ExampleCard } from "@/components/ExampleCard";

function getInitialCategory() {
  if (typeof window === "undefined") return undefined;
  const params = new URLSearchParams(window.location.search);
  return params.get("category") || undefined;
}

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState(getInitialCategory);

  const categories = [...new Set(examples.map((e) => e.meta.category))];
  const filteredExamples = selectedCategory
    ? examples.filter((e) => e.meta.category === selectedCategory)
    : examples;

  const handleCategoryChange = (category: string | undefined) => {
    setSelectedCategory(category);

    // Update URL without page reload (for sharing)
    const url = new URL(window.location.href);
    if (category) {
      url.searchParams.set("category", category);
    } else {
      url.searchParams.delete("category");
    }
    window.history.replaceState({}, "", url.toString());
  };

  return (
    <>
      <div className="mb-6 flex flex-wrap gap-2">
        <Button
          variant={!selectedCategory ? "default" : "outline"}
          size="sm"
          onClick={() => handleCategoryChange(undefined)}
        >
          All
        </Button>
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            size="sm"
            onClick={() => handleCategoryChange(category)}
          >
            {category}
          </Button>
        ))}
      </div>

      <div className="grid gap-6">
        {filteredExamples.map((example) => (
          <ExampleCard key={example.meta.id} example={example} category={selectedCategory} />
        ))}
      </div>
    </>
  );
}
