import { useMemo } from "react";
import { ArrowLeft } from "lucide-react";
import { getLocalizedExamples } from "@/examples";
import { ExampleCard } from "@/components/ExampleCard";
import { Button } from "@/components/ui/button";
import { useSearchParam } from "@/hooks/useSearchParam";
import { useI18n } from "@/hooks/useI18n";

type ExamplePageContentProps = {
  exampleId: string;
};

export function ExamplePageContent({ exampleId }: ExamplePageContentProps) {
  const { t, lang } = useI18n();
  const [category] = useSearchParam("category");

  // Get localized examples and find the current one
  const localizedExamples = useMemo(() => getLocalizedExamples(lang), [lang]);
  const example = localizedExamples.find((e) => e.meta.id === exampleId);

  if (!example) {
    return <div>{t("example.notFound")}</div>;
  }

  const langPrefix = lang === "fr" ? "/fr" : "";
  const backUrl = category ? `${langPrefix}/?category=${category}` : `${langPrefix}/`;
  const backLabel = category ? t("example.backToCategory", { category }) : t("example.backToAll");

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
