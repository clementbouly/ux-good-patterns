import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useDemoI18n } from "@/hooks/useI18n";

const COUNTRIES = [
  "checkbox.usa",
  "checkbox.mexico",
  "checkbox.canada",
  "checkbox.guatemala",
  "checkbox.haiti",
  "checkbox.cuba",
] as const;

export function BadExample() {
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
  const parentChecked = allChecked ? true : noneChecked ? false : true;

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
      <legend className="text-sm font-medium">{td("checkbox.selectCountries")}</legend>
      <div className="grid gap-3">
        <div className="flex items-center gap-2">
          <Switch
            id="bad-parent-na"
            checked={parentChecked}
            onCheckedChange={handleParentChange}
          />
          <Label htmlFor="bad-parent-na" className="cursor-pointer font-medium">
            {td("checkbox.northAmerica")}
          </Label>
        </div>
        <div className="ml-6 grid gap-3">
          {COUNTRIES.map((key) => (
            <div key={key} className="flex items-center gap-2">
              <Switch
                id={`bad-${key}`}
                checked={countries[key]}
                onCheckedChange={(checked) => handleChildChange(key, checked)}
              />
              <Label htmlFor={`bad-${key}`} className="cursor-pointer">
                {td(key)}
              </Label>
            </div>
          ))}
        </div>
      </div>
    </fieldset>
  );
}
