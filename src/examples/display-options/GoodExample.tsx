import { useState } from "react";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

const PLANS = [
  {
    id: "basic",
    name: "Basic",
    description: "1000 emails, 7 days log retention, support by email",
  },
  {
    id: "standard",
    name: "Standard",
    description: "5000 emails, 30 days log retention, support by email",
  },
  {
    id: "professional",
    name: "Professional",
    description: "10 000 emails, 365 days log retention, personal manager",
  },
];

export function GoodExample() {
  const [selected, setSelected] = useState("basic");

  return (
    <div className="grid gap-3">
      <Label>Subscription plan</Label>

      <div className="grid gap-1">
        {PLANS.map((plan) => (
          <label
            key={plan.id}
            className="flex cursor-pointer items-center gap-3 rounded py-1.5 transition-colors hover:bg-accent/50"
          >
            <input
              type="radio"
              name="plan"
              value={plan.id}
              checked={selected === plan.id}
              onChange={(e) => setSelected(e.target.value)}
              className="h-4 w-4 accent-primary"
            />
            <div>
              <span className="font-medium">{plan.name}</span>
              <span className="text-sm text-muted-foreground"> — {plan.description}</span>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
}

export function GoodExampleCards() {
  const [selected, setSelected] = useState("basic");

  return (
    <div className="grid gap-3">
      <Label>Subscription plan</Label>

      <div className="grid gap-2">
        {PLANS.map((plan) => (
          <button
            key={plan.id}
            type="button"
            onClick={() => setSelected(plan.id)}
            className={cn(
              "flex cursor-pointer items-start gap-3 rounded-lg border p-4 text-left transition-colors hover:bg-accent/50",
              selected === plan.id
                ? "border-primary bg-accent/30 ring-1 ring-primary"
                : "border-input"
            )}
          >
            <div
              className={cn(
                "mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2 transition-colors",
                selected === plan.id
                  ? "border-primary bg-primary"
                  : "border-muted-foreground"
              )}
            >
              {selected === plan.id && (
                <div className="h-1.5 w-1.5 rounded-full bg-white" />
              )}
            </div>
            <div className="grid gap-0.5">
              <span className="font-medium">{plan.name}</span>
              <span className="text-sm text-muted-foreground">
                {plan.description}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
