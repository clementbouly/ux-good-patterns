import { CopyButton } from "@/components/ui/shadcn-io/copy-button";

const PROMO_CODE = "SAVE20OFF";

export function GoodExampleShadcn() {
  return (
    <div className="space-y-4">
      <div className="rounded-md border p-4 text-center">
        <p className="text-xs text-muted-foreground mb-2">Your promo code:</p>
        <p className="font-mono text-xl font-bold tracking-wider">{PROMO_CODE}</p>
      </div>

      <div className="flex justify-center">
        <CopyButton content={PROMO_CODE} variant="outline" />
      </div>
    </div>
  );
}
