import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { motion, AnimatePresence } from "motion/react";

const LOADING_MESSAGES = [
  "Collecting your data...",
  "Analyzing metrics...",
  "Crunching numbers...",
  "Generating insights...",
  "Formatting report...",
  "Almost there...",
];

export function GoodExample() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    if (!isLoading) {
      setMessageIndex(0);
      return;
    }

    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev < LOADING_MESSAGES.length - 1 ? prev + 1 : prev));
    }, 1500);

    return () => clearInterval(interval);
  }, [isLoading]);

  const handleGenerate = () => {
    setIsLoading(true);
    setResult(null);
    setMessageIndex(0);

    // Simulate long API call (AI generation, report, etc.)
    setTimeout(() => {
      setResult("Your report has been generated successfully!");
      setIsLoading(false);
    }, 6000);
  };

  return (
    <div className="space-y-4">
      <div className="text-center space-y-2">
        <h3 className="text-sm font-medium">Generate Monthly Report</h3>
        <p className="text-xs text-muted-foreground">This may take a few seconds</p>
      </div>

      <div className="flex flex-col items-center gap-4">
        <Button onClick={handleGenerate} disabled={isLoading}>
          Generate Report
        </Button>

        {isLoading && (
          <div className="flex flex-col items-center gap-2 text-muted-foreground py-8">
            <Spinner className="size-8" />
            <div className="h-5 flex items-center">
              <AnimatePresence mode="wait">
                <motion.span
                  key={messageIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="text-sm"
                >
                  {LOADING_MESSAGES[messageIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>
        )}

        {result && (
          <div className="text-center p-4 rounded-lg bg-green-50 dark:bg-green-950 text-green-700 dark:text-green-300 text-sm">
            {result}
          </div>
        )}
      </div>
    </div>
  );
}
