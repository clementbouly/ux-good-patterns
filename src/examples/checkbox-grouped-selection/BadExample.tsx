import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useDemoI18n } from "@/hooks/useI18n";

const DATA_OPTIONS = [
  "checkbox.accountSettings",
  "checkbox.profileDetails",
  "checkbox.contacts",
  "checkbox.tags",
  "checkbox.filters",
] as const;

export function BadExample() {
  const { td } = useDemoI18n();
  const [selected, setSelected] = useState<Record<string, boolean>>({
    "checkbox.accountSettings": false,
    "checkbox.profileDetails": true,
    "checkbox.contacts": false,
    "checkbox.tags": false,
    "checkbox.filters": false,
  });
  const [exported, setExported] = useState(false);

  const hasSelection = Object.values(selected).some(Boolean);

  const handleExport = () => {
    setExported(true);
    setTimeout(() => setExported(false), 2000);
  };

  return (
    <fieldset className="grid gap-4">
      <legend className="text-sm font-medium mb-4">{td("checkbox.exportData")}</legend>
      <div className="grid gap-3">
        {DATA_OPTIONS.map((key) => (
          <div key={key} className="flex items-center gap-2">
            <Switch
              id={`bad-${key}`}
              checked={selected[key]}
              onCheckedChange={(checked) =>
                setSelected((prev) => ({ ...prev, [key]: checked }))
              }
            />
            <Label htmlFor={`bad-${key}`} className="cursor-pointer">
              {td(key)}
            </Label>
          </div>
        ))}
      </div>
      <Button type="button" size="sm" className="w-fit" disabled={!hasSelection} onClick={handleExport}>
        {exported ? td("checkbox.exported") : td("checkbox.export")}
      </Button>
    </fieldset>
  );
}
