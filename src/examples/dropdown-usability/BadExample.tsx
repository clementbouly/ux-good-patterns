import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { COUNTRIES } from "./data";
import { useDemoI18n } from "@/hooks/useI18n";

export function BadExample() {
  const { td } = useDemoI18n();

  return (
    <div className="grid gap-2">
      <Label htmlFor="country-bad" className="text-center">
        {td("dropdown.country")}
      </Label>

      <Select>
        <SelectTrigger id="country-bad" className="mx-auto max-w-xs">
          <SelectValue placeholder={td("dropdown.selectCountry")} />
        </SelectTrigger>

        <SelectContent position="popper" className="max-h-60">
          {COUNTRIES.map((country) => (
            <SelectItem key={country} value={country.toLowerCase().replace(/\s+/g, "-")}>
              {country}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
