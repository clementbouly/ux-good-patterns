import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { useDemoI18n } from "@/hooks/useI18n";

export function BadExample() {
  const { td } = useDemoI18n();
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const handleGenerate = () => {
    setIsLoading(true);
    setResult(null);

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
            <span className="text-sm">{td("common.loading")}</span>
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
