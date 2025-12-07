import { createRoute, Link } from "@tanstack/react-router";
import Markdown from "react-markdown";
import { examples } from "@/examples";
import { ExampleCard } from "@/components/ExampleCard";
import { rootRoute } from "./__root";

export const exampleRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/example/$exampleId",
  component: ExamplePage,
});

function ExamplePage() {
  const { exampleId } = exampleRoute.useParams();

  const example = examples.find((e) => e.meta.id === exampleId);

  if (!example) {
    return (
      <div className="text-center">
        <h2 className="text-2xl font-semibold">Example not found</h2>
        <p className="mt-2 text-muted-foreground">
          The example "{exampleId}" does not exist.
        </p>
        <Link to="/" className="mt-4 inline-block text-primary hover:underline">
          Back to all examples
        </Link>
      </div>
    );
  }

  return (
    <div>
      <Link
        to="/"
        className="mb-4 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
      >
        <span>←</span> Back to all examples
      </Link>

      <ExampleCard example={example} titleAs="h1" linkTitle={false} />

      {(example as { content?: string }).content && (
        <div className="mt-8 rounded-lg border bg-card p-6">
          <div className="prose prose-neutral max-w-none dark:prose-invert">
            <Markdown>{(example as { content?: string }).content}</Markdown>
          </div>
        </div>
      )}
    </div>
  );
}
