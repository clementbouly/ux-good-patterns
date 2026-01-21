import { ArrowRight } from "lucide-react";
import { examples, getLocalizedExamples, type Example } from "@/examples";
import { useSearchParam } from "@/hooks/useSearchParam";
import { useI18n } from "@/hooks/useI18n";

type RelatedExamplesProps = {
  currentExampleId: string;
  currentCategory: string;
  currentTags: string[];
};

function getRelatedExamplesFiltered(
  currentId: string,
  currentCategory: string,
  currentTags: string[],
  localizedExamples: Example[],
  count = 3
): Example[] {
  const otherExamples = localizedExamples.filter((e) => e.meta.id !== currentId);

  // Score examples by relevance: shared tags + same category bonus
  const scored = otherExamples.map((example) => {
    const sharedTags = example.meta.tags.filter((tag) => currentTags.includes(tag)).length;
    const categoryBonus = example.meta.category === currentCategory ? 2 : 0;
    return { example, score: sharedTags + categoryBonus };
  });

  // Sort by score (desc), then by id for deterministic order (avoids SSR mismatch)
  scored.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    return a.example.meta.id.localeCompare(b.example.meta.id);
  });

  return scored.slice(0, count).map((s) => s.example);
}

export function RelatedExamples({
  currentExampleId,
  currentCategory,
  currentTags,
}: RelatedExamplesProps) {
  const { t, lang } = useI18n();
  const localizedExamples = getLocalizedExamples(lang);
  const related = getRelatedExamplesFiltered(
    currentExampleId,
    currentCategory,
    currentTags,
    localizedExamples
  );
  const [searchCategory] = useSearchParam("category");

  if (related.length === 0) return null;

  const langPrefix = lang === "fr" ? "/fr" : "";
  const buildUrl = (exampleId: string) =>
    `${langPrefix}/example/${exampleId}${searchCategory ? `?category=${searchCategory}` : ""}`;

  return (
    <section className="mt-12">
      <h2 className="mb-4 text-lg font-semibold">{t("example.exploreMore")}</h2>
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
            <div className="mt-2 flex flex-wrap gap-1">
              {example.meta.tags.slice(0, 4).map((tag) => (
                <span
                  key={tag}
                  className="rounded bg-secondary px-2 py-0.5 text-xs text-secondary-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-3 flex items-center gap-1 text-sm font-medium text-muted-foreground group-hover:text-foreground">
              {t("example.viewExample")}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
