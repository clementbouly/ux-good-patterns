import { useState } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useDemoI18n } from "@/hooks/useI18n";

export function BadExample() {
  const { td } = useDemoI18n();
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitCount, setSubmitCount] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // No protection against multiple clicks!
    setSubmitCount((c) => c + 1);

    // Simulate API call
    setTimeout(() => {
      setIsSuccess(true);
    }, 2000);
  };

  const handleNewPayment = () => {
    setIsSuccess(false);
    setSubmitCount(0);
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
        {submitCount > 1 && (
          <p className="text-sm text-red-500 font-medium">
            {td("submit.chargedMultiple", { count: submitCount })}
          </p>
        )}
        <Button variant="outline" onClick={handleNewPayment} className="w-full">
          {td("submit.newPayment")}
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-2">
        <Label htmlFor="email-bad">{td("common.email")}</Label>
        <Input id="email-bad" type="email" defaultValue="john@example.com" />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="amount-bad">{td("submit.amount")}</Label>
        <Input id="amount-bad" type="number" defaultValue={99} />
      </div>

      <Button type="submit" className="w-full">
        {td("submit.payNow")}
      </Button>
    </form>
  );
}
