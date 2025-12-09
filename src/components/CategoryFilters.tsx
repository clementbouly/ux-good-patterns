import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

type CategoryFiltersProps = {
  categories: string[];
};

function getInitialCategory() {
  if (typeof window === "undefined") return undefined;
  const params = new URLSearchParams(window.location.search);
  return params.get("category") || undefined;
}

export function CategoryFilters({ categories }: CategoryFiltersProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(
    getInitialCategory
  );

  useEffect(() => {
    // Filter examples based on selected category
    const cards = document.querySelectorAll("[data-example-category]");
    cards.forEach((card) => {
      const cardCategory = card.getAttribute("data-example-category");
      const shouldShow = !selectedCategory || cardCategory === selectedCategory;
      (card as HTMLElement).style.display = shouldShow ? "" : "none";
    });

    // Update links with category param
    const links = document.querySelectorAll("[data-example-link]");
    links.forEach((link) => {
      const baseUrl = link.getAttribute("data-example-link") || "";
      (link as HTMLAnchorElement).href = selectedCategory
        ? `${baseUrl}?category=${selectedCategory}`
        : baseUrl;
    });
  }, [selectedCategory]);

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
  );
}
