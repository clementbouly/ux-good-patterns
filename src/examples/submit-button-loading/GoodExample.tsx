import { useState } from "react";
import { Check, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useDemoI18n } from "@/hooks/useI18n";

export function GoodExample() {
  const { td } = useDemoI18n();
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitCount, setSubmitCount] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLoading) return;

    setIsLoading(true);
    setSubmitCount((c) => c + 1);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
    }, 2000);
  };

  const handleNewPayment = () => {
    setIsSuccess(false);
  };

  if (isSuccess) {
    return (
      <div className="space-y-4 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
          <Check className="h-6 w-6 text-green-600 dark:text-green-400" />
        </div>
        <h3 className="text-lg font-semibold">{td("submit.paymentSuccessful")}</h3>
        <p className="text-sm text-muted-foreground">
          {td("submit.totalPayments")} <span className="font-mono font-bold">{submitCount}</span>
        </p>
        <Button variant="outline" onClick={handleNewPayment} className="w-full">
          {td("submit.newPayment")}
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-2">
        <Label htmlFor="email-good">{td("common.email")}</Label>
        <Input id="email-good" type="email" defaultValue="john@example.com" disabled={isLoading} />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="amount-good">{td("submit.amount")}</Label>
        <Input id="amount-good" type="number" defaultValue={99} disabled={isLoading} />
      </div>

      <Button type="submit" disabled={isLoading} className="w-full">
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            {td("submit.processing")}
          </>
        ) : (
          td("submit.payNow")
        )}
      </Button>
    </form>
  );
}
