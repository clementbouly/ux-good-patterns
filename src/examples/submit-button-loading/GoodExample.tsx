import { useState } from "react";
import { Check, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function GoodExample() {
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
        <h3 className="text-lg font-semibold">Payment successful!</h3>
        <p className="text-sm text-muted-foreground">
          Total payments: <span className="font-mono font-bold">{submitCount}</span>
        </p>
        <Button variant="outline" onClick={handleNewPayment} className="w-full">
          New payment
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-2">
        <Label htmlFor="email-good">Email</Label>
        <Input id="email-good" type="email" defaultValue="john@example.com" disabled={isLoading} />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="amount-good">Amount (€)</Label>
        <Input id="amount-good" type="number" defaultValue={99} disabled={isLoading} />
      </div>

      <Button type="submit" disabled={isLoading} className="w-full">
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Processing payment...
          </>
        ) : (
          "Pay now"
        )}
      </Button>
    </form>
  );
}
