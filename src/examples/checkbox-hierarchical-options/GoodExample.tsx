import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { MinusIcon, CheckIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useDemoI18n } from "@/hooks/useI18n";

const COUNTRIES = [
  "checkbox.usa",
  "checkbox.mexico",
  "checkbox.canada",
  "checkbox.guatemala",
  "checkbox.haiti",
  "checkbox.cuba",
] as const;

function IndeterminateCheckbox({
  id,
  checked,
  onCheckedChange,
}: {
  id: string;
  checked: boolean | "indeterminate";
  onCheckedChange: (checked: boolean) => void;
}) {
  return (
    <button
      type="button"
      id={id}
      role="checkbox"
      aria-checked={checked === "indeterminate" ? "mixed" : checked}
      onClick={() => onCheckedChange(checked !== true)}
      className={cn(
        "peer border-input dark:bg-input/30 focus-visible:border-ring focus-visible:ring-ring/50 size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 grid place-content-center",
        (checked === true || checked === "indeterminate") && "bg-primary text-primary-foreground border-primary"
      )}
    >
      {checked === true && <CheckIcon className="size-3.5" />}
      {checked === "indeterminate" && <MinusIcon className="size-3.5" />}
    </button>
  );
}

export function GoodExample() {
  const { td } = useDemoI18n();
  const [countries, setCountries] = useState<Record<string, boolean>>({
    "checkbox.usa": true,
    "checkbox.mexico": false,
    "checkbox.canada": false,
    "checkbox.guatemala": false,
    "checkbox.haiti": false,
    "checkbox.cuba": false,
  });

  const allChecked = COUNTRIES.every((c) => countries[c]);
  const noneChecked = COUNTRIES.every((c) => !countries[c]);
  const parentState: boolean | "indeterminate" = allChecked
    ? true
    : noneChecked
      ? false
      : "indeterminate";

  const handleParentChange = (checked: boolean) => {
    const newState: Record<string, boolean> = {};
    COUNTRIES.forEach((c) => {
      newState[c] = checked;
    });
    setCountries(newState);
  };

  const handleChildChange = (key: string, checked: boolean) => {
    setCountries((prev) => ({ ...prev, [key]: checked }));
  };

  return (
    <fieldset className="grid gap-4">
      <legend className="text-sm font-medium mb-4">{td("checkbox.selectCountries")}</legend>
      <div className="grid gap-3">
        <div className="flex items-center gap-2">
          <IndeterminateCheckbox
            id="good-parent-na"
            checked={parentState}
            onCheckedChange={handleParentChange}
          />
          <Label htmlFor="good-parent-na" className="cursor-pointer font-medium">
            {td("checkbox.northAmerica")}
          </Label>
        </div>
        <div className="ml-6 grid gap-3">
          {COUNTRIES.map((key) => (
            <div key={key} className="flex items-center gap-2">
              <Checkbox
                id={`good-${key}`}
                checked={countries[key]}
                onCheckedChange={(checked) => handleChildChange(key, checked === true)}
              />
              <Label htmlFor={`good-${key}`} className="cursor-pointer">
                {td(key)}
              </Label>
            </div>
          ))}
        </div>
      </div>
    </fieldset>
  );
}
