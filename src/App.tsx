import { useState } from "react";
import { examples, type Example } from "@/examples";
import { Button } from "@/components/ui/button";

function ExampleCard({ example }: { example: Example }) {
  return (
    <div className="rounded-lg border bg-card p-6">
      <div className="mb-4">
        <span className="text-xs font-medium text-muted-foreground">
          {example.meta.category}
        </span>
        <h2 className="text-xl font-semibold">{example.meta.title}</h2>
        <p className="text-sm text-muted-foreground">
          {example.meta.description}
        </p>
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

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-red-100 text-xs text-red-600">
              X
            </span>
            <h3 className="font-medium text-red-600">Bad example</h3>
          </div>
          <div className="rounded-md border border-red-200 bg-red-50/50 p-4">
            <example.BadExample />
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-xs text-green-600">
              V
            </span>
            <h3 className="font-medium text-green-600">Good example</h3>
          </div>
          <div className="rounded-md border border-green-200 bg-green-50/50 p-4">
            <example.GoodExample />
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = [...new Set(examples.map((e) => e.meta.category))];
  const filteredExamples = selectedCategory
    ? examples.filter((e) => e.meta.category === selectedCategory)
    : examples;

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold">The Good, The Bad and The UX</h1>
          <p className="text-muted-foreground">
            A collection of UX patterns with comparative examples
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
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
      </main>

      <footer className="border-t py-6 text-center text-sm text-muted-foreground">
        <p>
          Open source -{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/clementbouly/ux-good-patterns"
            className="underline hover:text-foreground"
          >
            Contribute on GitHub
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
