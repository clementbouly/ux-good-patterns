import { useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useDemoI18n } from "@/hooks/useI18n";
import { BadUxGame } from "./BadUxGame";
import { GoodUxGame } from "./GoodUxGame";
import { ResultsComparison, FrictionExplanation } from "./ResultsSection";

type UxSpeedGameProps = {
  children?: React.ReactNode;
};

export function UxSpeedGame({ children }: UxSpeedGameProps) {
  const { td } = useDemoI18n();
  const [timeA, setTimeA] = useState<number | null>(null);
  const [timeB, setTimeB] = useState<number | null>(null);
  const [showDetails, setShowDetails] = useState(false);

  const bothCompleted = timeA !== null && timeB !== null;
  const showBottomSection = bothCompleted || showDetails;

  return (
    <div className="space-y-8">
      <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-4">
        <div
          className={cn(
            "relative rounded-lg border-2 p-4 bg-blue-50/50 dark:bg-blue-950/30",
            timeA !== null
              ? "border-blue-300 dark:border-blue-800"
              : "border-blue-400 dark:border-blue-700"
          )}
        >
          {bothCompleted && (
            <span className="absolute top-3 right-2 font-bold text-red-500 border-2 border-red-500 px-2 py-0.5 rounded rotate-6 opacity-90 uppercase tracking-wide z-20 pointer-events-none">
              {td("speedGame.badUx")}
            </span>
          )}
          <h3 className="text-center text-base font-semibold text-blue-700 dark:text-blue-300 mb-2">
            {td("speedGame.versionA")}
          </h3>
          <BadUxGame onComplete={setTimeA} />
        </div>

        <div
          className={cn(
            "relative rounded-lg border-2 p-4 bg-violet-50/50 dark:bg-violet-950/30",
            timeB !== null
              ? "border-violet-300 dark:border-violet-800"
              : "border-violet-400 dark:border-violet-700"
          )}
        >
          {bothCompleted && (
            <span className="absolute top-3 right-2 font-bold text-green-500 border-2 border-green-500 px-2 py-0.5 rounded rotate-6 opacity-90 uppercase tracking-wide z-20 pointer-events-none">
              {td("speedGame.goodUx")}
            </span>
          )}
          <h3 className="text-center text-base font-semibold text-violet-700 dark:text-violet-300 mb-2">
            {td("speedGame.versionB")}
          </h3>
          <GoodUxGame onComplete={setTimeB} />
        </div>
      </div>

      {!bothCompleted && (
        <div className="not-prose flex justify-center">
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="inline-flex items-center justify-center cursor-pointer gap-2 rounded-md border px-4 py-2 text-sm font-medium transition-colors hover:bg-muted"
          >
            {showDetails ? td("speedGame.hideDetails") : td("speedGame.seeDetails")}
            {showDetails ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </button>
        </div>
      )}

      {showBottomSection && (
        <>
          {bothCompleted && (
            <div className="not-prose">
              <ResultsComparison timeA={timeA} timeB={timeB} />
            </div>
          )}
          <div className={cn("not-prose", bothCompleted && "border-t pt-8")}>
            <FrictionExplanation />
          </div>

          {children && (
            <div className="prose prose-neutral dark:prose-invert max-w-none">{children}</div>
          )}
        </>
      )}
    </div>
  );
}
