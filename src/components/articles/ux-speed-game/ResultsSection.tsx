import { ArrowRight } from "lucide-react";
import { formatTime } from "./utils";

const FRICTIONS = [
  {
    title: "Modal input focus",
    bad: "No auto-focus — user must click to type",
    good: "Auto-focus on mount — ready to type immediately",
    link: "/example/autofocus-modal",
  },
  {
    title: "Modal closing",
    bad: "Only the X button works",
    good: "X button + click outside + Escape key",
    link: "/example/modal-closing",
  },
  {
    title: "Code copy",
    bad: "Manual text selection required",
    good: '"Copy" button with visual feedback',
    link: "/example/copy-feedback",
  },
  {
    title: "OTP validation",
    bad: 'Manual "Validate" button click',
    good: "Auto-submit when 6 digits entered",
    link: "/example/auto-submit-code",
  },
];

export function FrictionExplanation() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">The 4 UX frictions explained</h2>
      <p className="text-muted-foreground">
        Each friction adds milliseconds of cognitive load and extra clicks. Combined, they create a
        noticeably slower and more frustrating experience.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {FRICTIONS.map((friction, i) => (
          <div key={friction.title} className="group rounded-lg border p-4 transition-colors hover:bg-muted/50">
            <h3 className="font-semibold mb-3">
              {i + 1}. {friction.title}
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex gap-2">
                <span className="text-red-500 font-medium shrink-0">Bad:</span>
                <span className="text-muted-foreground">{friction.bad}</span>
              </div>
              <div className="flex gap-2">
                <span className="text-green-500 font-medium shrink-0">Good:</span>
                <span className="text-muted-foreground">{friction.good}</span>
              </div>
            </div>
            {friction.link && (
              <div className="mt-4 transition-opacity md:opacity-0 md:group-hover:opacity-100">
                <a
                  href={friction.link}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-md border px-4 py-2 text-sm font-medium transition-colors hover:bg-muted"
                >
                  Learn more
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

export function ResultsComparison({ timeA, timeB }: { timeA: number; timeB: number }) {
  // timeA = Bad UX, timeB = Good UX
  // Expected: timeB < timeA (good UX should be faster)
  const timeDifference = timeA - timeB;
  const improvementPercent = Math.round((timeDifference / timeA) * 100);

  return (
    <div className="rounded-xl border-2 border-border bg-card p-6 text-center space-y-4 shadow-lg">
      <h3 className="text-2xl font-bold tracking-tight">Results</h3>

      <div className="grid grid-cols-2 gap-6 max-w-sm mx-auto">
        <div className="rounded-lg bg-red-50 dark:bg-red-950/50 p-4 border border-red-200 dark:border-red-900">
          <p className="text-xs font-medium text-red-600 dark:text-red-400 uppercase tracking-wide mb-1">Version A</p>
          <p className="text-3xl font-mono font-bold text-red-600 dark:text-red-400">{formatTime(timeA)}</p>
        </div>
        <div className="rounded-lg bg-green-50 dark:bg-green-950/50 p-4 border border-green-200 dark:border-green-900">
          <p className="text-xs font-medium text-green-600 dark:text-green-400 uppercase tracking-wide mb-1">Version B</p>
          <p className="text-3xl font-mono font-bold text-green-600 dark:text-green-400">{formatTime(timeB)}</p>
        </div>
      </div>

      <div className="pt-2">
        {timeDifference > 0 ? (
          <div className="inline-flex items-center gap-2 rounded-full bg-green-100 dark:bg-green-950 px-4 py-2 text-green-700 dark:text-green-300">
            <span className="text-lg font-semibold">
              {formatTime(timeDifference)} faster
            </span>
            <span className="text-sm opacity-80">
              ({improvementPercent}% improvement)
            </span>
          </div>
        ) : (
          <p className="text-muted-foreground">
            Interesting! You completed the bad UX version faster. Try again?
          </p>
        )}
      </div>
    </div>
  );
}
