import { ArrowRight } from "lucide-react";
import { useDemoI18n } from "@/hooks/useI18n";
import { formatTime } from "./utils";

export function FrictionExplanation() {
  const { td, lang } = useDemoI18n();

  const frictions = [
    {
      title: td("speedGame.friction1.title"),
      bad: td("speedGame.friction1.bad"),
      good: td("speedGame.friction1.good"),
      link: `/${lang === "fr" ? "fr/" : ""}example/autofocus-modal`,
    },
    {
      title: td("speedGame.friction2.title"),
      bad: td("speedGame.friction2.bad"),
      good: td("speedGame.friction2.good"),
      link: `/${lang === "fr" ? "fr/" : ""}example/modal-closing`,
    },
    {
      title: td("speedGame.friction3.title"),
      bad: td("speedGame.friction3.bad"),
      good: td("speedGame.friction3.good"),
      link: `/${lang === "fr" ? "fr/" : ""}example/copy-feedback`,
    },
    {
      title: td("speedGame.friction4.title"),
      bad: td("speedGame.friction4.bad"),
      good: td("speedGame.friction4.good"),
      link: `/${lang === "fr" ? "fr/" : ""}example/auto-submit-code`,
    },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">{td("speedGame.frictionsTitle")}</h2>
      <p className="text-muted-foreground">{td("speedGame.frictionsIntro")}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {frictions.map((friction, i) => (
          <div
            key={i}
            className="group rounded-lg border p-4 transition-colors hover:bg-muted/50"
          >
            <h3 className="font-semibold mb-3">
              {i + 1}. {friction.title}
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex gap-2">
                <span className="text-red-500 font-medium shrink-0">
                  {td("speedGame.bad")}
                </span>
                <span className="text-muted-foreground">{friction.bad}</span>
              </div>
              <div className="flex gap-2">
                <span className="text-green-500 font-medium shrink-0">
                  {td("speedGame.good")}
                </span>
                <span className="text-muted-foreground">{friction.good}</span>
              </div>
            </div>
            {friction.link && (
              <div className="mt-4 transition-opacity md:opacity-0 md:group-hover:opacity-100">
                <a
                  href={friction.link}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-md border px-4 py-2 text-sm font-medium transition-colors hover:bg-muted"
                >
                  {td("speedGame.learnMore")}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export function ResultsComparison({
  timeA,
  timeB,
}: {
  timeA: number;
  timeB: number;
}) {
  const { td } = useDemoI18n();
  // timeA = Bad UX, timeB = Good UX
  // Expected: timeB < timeA (good UX should be faster)
  const timeDifference = timeA - timeB;
  const improvementPercent = Math.round((timeDifference / timeA) * 100);

  return (
    <div className="rounded-xl border-2 border-border bg-card p-6 text-center space-y-4 shadow-lg">
      <h3 className="text-2xl font-bold tracking-tight">
        {td("speedGame.results")}
      </h3>

      <div className="grid grid-cols-2 gap-6 max-w-sm mx-auto">
        <div className="rounded-lg bg-red-50 dark:bg-red-950/50 p-4 border border-red-200 dark:border-red-900">
          <p className="text-xs font-medium text-red-600 dark:text-red-400 uppercase tracking-wide mb-1">
            {td("speedGame.versionA")}
          </p>
          <p className="text-3xl font-mono font-bold text-red-600 dark:text-red-400">
            {formatTime(timeA)}
          </p>
        </div>
        <div className="rounded-lg bg-green-50 dark:bg-green-950/50 p-4 border border-green-200 dark:border-green-900">
          <p className="text-xs font-medium text-green-600 dark:text-green-400 uppercase tracking-wide mb-1">
            {td("speedGame.versionB")}
          </p>
          <p className="text-3xl font-mono font-bold text-green-600 dark:text-green-400">
            {formatTime(timeB)}
          </p>
        </div>
      </div>

      <div className="pt-2">
        {timeDifference > 0 ? (
          <div className="inline-flex items-center gap-2 rounded-full bg-green-100 dark:bg-green-950 px-4 py-2 text-green-700 dark:text-green-300">
            <span className="text-lg font-semibold">
              {td("speedGame.faster", { time: formatTime(timeDifference) })}
            </span>
            <span className="text-sm opacity-80">
              {td("speedGame.improvement", { percent: improvementPercent })}
            </span>
          </div>
        ) : (
          <p className="text-muted-foreground">
            {td("speedGame.unexpectedResult")}
          </p>
        )}
      </div>
    </div>
  );
}
