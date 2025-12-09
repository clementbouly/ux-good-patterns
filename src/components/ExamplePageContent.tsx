import { ArrowLeft } from "lucide-react";
import { examples } from "@/examples";
import { ExampleCard } from "@/components/ExampleCard";
import { Button } from "@/components/ui/button";

type ExamplePageContentProps = {
  exampleId: string;
  category?: string;
};

export function ExamplePageContent({ exampleId, category }: ExamplePageContentProps) {
  const example = examples.find((e) => e.meta.id === exampleId);

  if (!example) {
    return <div>Example not found</div>;
  }

  const backUrl = category ? `/?category=${category}` : "/";
  const backLabel = category ? `Back to ${category}` : "Back to all examples";

  return (
    <>
      <Button variant="ghost" size="sm" asChild className="mb-4">
        <a href={backUrl}>
          <ArrowLeft />
          {backLabel}
        </a>
      </Button>

      <ExampleCard example={example} titleAs="h1" linkTitle={false} />
    </>
  );
}
