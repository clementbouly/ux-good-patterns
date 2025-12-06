import { useState } from "react";
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
            <svg
              className="mr-2 h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            Copied!
          </>
        ) : (
          <>
            <svg
              className="mr-2 h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
            Copy code
          </>
        )}
      </Button>
    </div>
  );
}
