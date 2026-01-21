import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { motion, AnimatePresence } from "motion/react";
import { useDemoI18n } from "@/hooks/useI18n";

export function GoodExample() {
  const { td } = useDemoI18n();
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [messageIndex, setMessageIndex] = useState(0);

  const LOADING_MESSAGES = [
    td("progress.collecting"),
    td("progress.analyzing"),
    td("progress.crunching"),
    td("progress.generating"),
    td("progress.formatting"),
    td("progress.almostThere"),
  ];

  useEffect(() => {
    if (!isLoading) {
      setMessageIndex(0);
      return;
    }

    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev < LOADING_MESSAGES.length - 1 ? prev + 1 : prev));
    }, 1500);

    return () => clearInterval(interval);
  }, [isLoading, LOADING_MESSAGES.length]);

  const handleGenerate = () => {
    setIsLoading(true);
    setResult(null);
    setMessageIndex(0);

    // Simulate long API call (AI generation, report, etc.)
    setTimeout(() => {
      setResult(td("progress.reportGenerated"));
      setIsLoading(false);
    }, 6000);
  };

  return (
    <div className="space-y-4">
      <div className="text-center space-y-2">
        <h3 className="text-sm font-medium">{td("progress.generateMonthly")}</h3>
        <p className="text-xs text-muted-foreground">{td("progress.mayTakeFewSeconds")}</p>
      </div>

      <div className="flex flex-col items-center gap-4">
        <Button onClick={handleGenerate} disabled={isLoading}>
          {td("progress.generateReport")}
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
