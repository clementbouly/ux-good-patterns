import { Copy } from "lucide-react";
import { Button } from "@/components/ui/button";

const PROMO_CODE = "SAVE20OFF";

export function BadExample() {
  const handleCopy = async () => {
    await navigator.clipboard.writeText(PROMO_CODE);
  };

  return (
    <div className="space-y-4">
      <div className="rounded-md border p-4 text-center">
        <p className="text-xs text-muted-foreground mb-2">Your promo code:</p>
        <p className="font-mono text-xl font-bold tracking-wider">{PROMO_CODE}</p>
      </div>

      <Button onClick={handleCopy} variant="outline" className="w-full">
        <Copy className="mr-2 h-4 w-4" />
        Copy code
      </Button>
    </div>
  );
}
