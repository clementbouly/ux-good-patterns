import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";

const PROMO_CODE = "SAVE20OFF";

export function GoodExample() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(PROMO_CODE);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-4">
      <div className="rounded-md border p-4 text-center">
        <p className="text-xs text-muted-foreground mb-2">Your promo code:</p>
        <p className="font-mono text-xl font-bold tracking-wider">{PROMO_CODE}</p>
      </div>

      <Button
        onClick={handleCopy}
        variant={copied ? "default" : "outline"}
        className="w-full transition-all"
      >
        {copied ? (
          <>
            <Check className="mr-2 h-4 w-4" />
            Copied!
          </>
        ) : (
          <>
            <Copy className="mr-2 h-4 w-4" />
            Copy code
          </>
        )}
      </Button>
    </div>
  );
}
