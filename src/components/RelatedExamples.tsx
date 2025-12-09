import { ArrowRight } from "lucide-react";
import { examples, type Example } from "@/examples";

type RelatedExamplesProps = {
  currentExampleId: string;
  currentCategory: string;
  searchCategory?: string;
};

function getRelatedExamples(currentId: string, currentCategory: string, count = 3): Example[] {
  const sameCategory = examples.filter(
    (e) => e.meta.id !== currentId && e.meta.category === currentCategory
  );

  const others = examples.filter(
    (e) => e.meta.id !== currentId && e.meta.category !== currentCategory
  );

  const shuffledOthers = [...others].sort(() => Math.random() - 0.5);

  return [...sameCategory, ...shuffledOthers].slice(0, count);
}

export function RelatedExamples({
  currentExampleId,
  currentCategory,
  searchCategory,
}: RelatedExamplesProps) {
  const related = getRelatedExamples(currentExampleId, currentCategory);

  if (related.length === 0) return null;

  const buildUrl = (exampleId: string) =>
    `/example/${exampleId}${searchCategory ? `?category=${searchCategory}` : ""}`;

  return (
    <section className="mt-12">
      <h2 className="mb-4 text-lg font-semibold">Explore more examples</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {related.map((example) => (
          <a
            key={example.meta.id}
            href={buildUrl(example.meta.id)}
            className="group rounded-lg border bg-card p-4 transition-colors hover:border-foreground/20 hover:bg-muted/50"
          >
            <span className="text-xs font-medium text-muted-foreground">
              {example.meta.category}
            </span>
            <h3 className="font-medium group-hover:underline">{example.meta.title}</h3>
            <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
              {example.meta.description}
            </p>
            <div className="mt-3 flex items-center gap-1 text-sm font-medium text-muted-foreground group-hover:text-foreground">
              View example
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
