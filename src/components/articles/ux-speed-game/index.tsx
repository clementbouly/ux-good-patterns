import { useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronUp } from "lucide-react";
import { BadUxGame } from "./BadUxGame";
import { GoodUxGame } from "./GoodUxGame";
import { ResultsComparison, FrictionExplanation } from "./ResultsSection";

export function UxSpeedGame() {
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
            <span className="absolute top-3 right-2 text-s font-bold text-red-500 border-2 border-red-500 px-2 py-0.5 rounded rotate-6 opacity-90 uppercase tracking-wide z-20 pointer-events-none">
              Bad UX
            </span>
          )}
          <h3 className="text-center text-base font-semibold text-blue-700 dark:text-blue-300 mb-2">
            Version A
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
            <span className="absolute top-3 right-2 text-s font-bold text-green-500 border-2 border-green-500 px-2 py-0.5 rounded rotate-6 opacity-90 uppercase tracking-wide z-20 pointer-events-none">
              Good UX
            </span>
          )}
          <h3 className="text-center text-base font-semibold text-violet-700 dark:text-violet-300 mb-2">
            Version B
          </h3>
          <GoodUxGame onComplete={setTimeB} />
        </div>
      </div>

      <div className="not-prose flex justify-center">
        <button
          onClick={() => setShowDetails(!showDetails)}
          className="inline-flex items-center justify-center cursor-pointer gap-2 rounded-md border px-4 py-2 text-sm font-medium transition-colors hover:bg-muted"
        >
          {showDetails ? "Hide details" : "See details"}
          {showDetails ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </button>
      </div>

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

          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <hr />

            <h2>Why this matters</h2>

            <p>
              Every extra click, every missing shortcut, every unoptimized interaction adds up. In
              isolation, each friction seems minor. Combined, they create a measurably slower — and
              more frustrating — experience.
            </p>

            <h3>The compound effect</h3>

            <p>
              If each friction adds just <strong>0.5 seconds</strong>:
            </p>

            <table>
              <thead>
                <tr>
                  <th>Frictions</th>
                  <th>Time added</th>
                  <th>Daily impact (100 uses)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>0.5s</td>
                  <td>50 seconds</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>1.5s</td>
                  <td>2.5 minutes</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>2.5s</td>
                  <td>
                    <strong>4+ minutes</strong>
                  </td>
                </tr>
              </tbody>
            </table>

            <p>Now multiply this across your entire user base.</p>

            <h3>The psychological cost</h3>

            <p>Beyond raw time, bad UX creates:</p>

            <ul>
              <li>
                <strong>Cognitive load</strong> — Users must think about <em>how</em> to use the
                interface instead of <em>what</em> they want to do
              </li>
              <li>
                <strong>Frustration</strong> — Small annoyances accumulate into negative brand
                perception
              </li>
              <li>
                <strong>Errors</strong> — More steps = more opportunities for mistakes
              </li>
            </ul>

            <hr />

            <h2>Key takeaways</h2>

            <ol>
              <li>
                <strong>Auto-focus inputs</strong> when a modal opens — users expect to type
                immediately
              </li>
              <li>
                <strong>Support multiple dismissal methods</strong> — X button, click outside,
                Escape key
              </li>
              <li>
                <strong>Provide copy buttons</strong> — don't make users select text manually
              </li>
              <li>
                <strong>Auto-submit when possible</strong> — if you have all the data, why wait for
                a click?
              </li>
            </ol>

            <hr />

            <h2>Learn more</h2>

            <p>Explore the individual patterns demonstrated in this challenge:</p>

            <ul>
              <li>
                <a href="/example/autofocus-modal">Autofocus Modal Input</a>
              </li>
              <li>
                <a href="/example/copy-feedback">Copy Feedback</a>
              </li>
              <li>
                <a href="/example/auto-submit-code">Auto-Submit Code</a>
              </li>
              <li>
                <a href="/example/verification-code-input">Verification Code Input</a>
              </li>
            </ul>
          </div>
        </>
      )}
    </div>
  );
}
