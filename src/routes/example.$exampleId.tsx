import { createRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import Markdown from "react-markdown";
import { examples } from "@/examples";
import { ExampleCard } from "@/components/ExampleCard";
import { NotFound } from "@/components/NotFound";
import { RelatedExamples } from "@/components/RelatedExamples";
import { Button } from "@/components/ui/button";
import { rootRoute } from "./__root";

type SearchParams = {
  category?: string;
};

export const exampleRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/example/$exampleId",
  component: ExamplePage,
  validateSearch: (search: Record<string, unknown>): SearchParams => {
    return {
      category: typeof search.category === "string" ? search.category : undefined,
    };
  },
});

function ExamplePage() {
  const { exampleId } = exampleRoute.useParams();
  const { category } = exampleRoute.useSearch();

  const example = examples.find((e) => e.meta.id === exampleId);
  const backSearch = category ? { category } : undefined;
  const backLabel = category ? `Back to ${category}` : "Back to all examples";

  if (!example) {
    return <NotFound title="Example not found" backSearch={backSearch} backLabel={backLabel} />;
  }

  return (
    <div>
      <Button variant="ghost" size="sm" asChild className="mb-4">
        <Link to="/" search={backSearch}>
          <ArrowLeft />
          {backLabel}
        </Link>
      </Button>

      <ExampleCard example={example} titleAs="h1" linkTitle={false} />

      {(example as { content?: string }).content && (
        <div className="mt-8 rounded-lg border bg-card p-6">
          <div className="prose prose-neutral max-w-none dark:prose-invert">
            <Markdown>{(example as { content?: string }).content}</Markdown>
          </div>
        </div>
      )}

      <RelatedExamples
        currentExampleId={example.meta.id}
        currentCategory={example.meta.category}
        searchCategory={category}
      />
    </div>
  );
}
