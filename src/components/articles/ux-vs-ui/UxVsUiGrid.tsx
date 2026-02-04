import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { FormBadUxBadUi } from "./FormBadUxBadUi";
import { FormBadUxGoodUi } from "./FormBadUxGoodUi";
import { FormGoodUxBadUi } from "./FormGoodUxBadUi";
import { FormGoodUxGoodUi } from "./FormGoodUxGoodUi";
import { enTranslations, frTranslations } from "./types";

type Props = {
  lang?: "en" | "fr";
  children?: React.ReactNode;
};

type CellProps = {
  label: string;
  children: React.ReactNode;
  highlight?: "best" | "worst" | "mixed";
};

function GridCell({ label, children, highlight }: CellProps) {
  const bgClass =
    highlight === "best"
      ? "bg-green-50 dark:bg-green-950/30 border-green-200 dark:border-green-800"
      : highlight === "worst"
        ? "bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-800"
        : "bg-muted/30 border-border";

  const bannerBgClass =
    highlight === "best"
      ? "bg-green-600 dark:bg-green-700"
      : highlight === "worst"
        ? "bg-red-600 dark:bg-red-700"
        : "bg-muted-foreground/80";

  return (
    <div className={`group relative rounded-lg border px-5 md:px-6 pb-5 pt-10 ${bgClass}`}>
      <div
        className={`absolute inset-x-0 top-0 rounded-t-lg px-3 py-1.5 text-xs font-medium text-center text-white md:opacity-0 transition-opacity md:group-hover:opacity-100 ${bannerBgClass}`}
      >
        {label}
      </div>
      {children}
    </div>
  );
}

export function UxVsUiGrid({ lang = "en", children }: Props) {
  const t = lang === "fr" ? frTranslations : enTranslations;
  const [showDetails, setShowDetails] = useState(false);

  const detailsButtonLabel = lang === "fr"
    ? (showDetails ? "Masquer les détails" : "Voir les détails")
    : (showDetails ? "Hide details" : "See details");

  const labels = {
    badBad: `${t.badUx} · ${t.badUi}`,
    badGood: `${t.badUx} · ${t.goodUi}`,
    goodBad: `${t.goodUx} · ${t.badUi}`,
    goodGood: `${t.goodUx} · ${t.goodUi}`,
  };

  return (
    <div className="space-y-6">
      <div className="not-prose rounded-lg border bg-card p-4 md:p-6">
        {/* Header row - visible on desktop */}
        <div className="hidden md:grid md:grid-cols-[40px_1fr_1fr] gap-4 mb-4">
          <div /> {/* Empty corner */}
          <div className="text-center font-semibold text-muted-foreground">❌ {t.badUi}</div>
          <div className="text-center font-semibold text-muted-foreground">✅ {t.goodUi}</div>
        </div>

        {/* Grid content */}
        <div className="grid grid-cols-1 md:grid-cols-[40px_1fr_1fr] gap-4">
          {/* Bad UX row */}
          <div className="hidden md:flex items-center justify-center">
            <span className="font-semibold text-muted-foreground -rotate-90 whitespace-nowrap text-sm">
              ❌ {t.badUx}
            </span>
          </div>
          <GridCell label={labels.badBad} highlight="worst">
            <FormBadUxBadUi translations={t} lang={lang} />
          </GridCell>
          <GridCell label={labels.badGood} highlight="mixed">
            <FormBadUxGoodUi translations={t} lang={lang} />
          </GridCell>

          {/* Good UX row */}
          <div className="hidden md:flex items-center justify-center">
            <span className="font-semibold text-muted-foreground -rotate-90 whitespace-nowrap text-sm">
              ✅ {t.goodUx}
            </span>
          </div>
          <GridCell label={labels.goodBad} highlight="mixed">
            <FormGoodUxBadUi translations={t} lang={lang} />
          </GridCell>
          <GridCell label={labels.goodGood} highlight="best">
            <FormGoodUxGoodUi translations={t} lang={lang} />
          </GridCell>
        </div>
      </div>

      {children && (
        <>
          <div className="not-prose flex justify-center">
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="inline-flex items-center justify-center cursor-pointer gap-2 rounded-md border px-4 py-2 text-sm font-medium transition-colors hover:bg-muted"
            >
              {detailsButtonLabel}
              {showDetails ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </button>
          </div>

          {showDetails && (
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              {children}
            </div>
          )}
        </>
      )}
    </div>
  );
}
