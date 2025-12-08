import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";

export function BadExample() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const handleGenerate = () => {
    setIsLoading(true);
    setResult(null);

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
            <span className="text-sm">Loading...</span>
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
