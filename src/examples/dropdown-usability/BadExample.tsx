import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { COUNTRIES } from "./data";

export function BadExample() {
  return (
    <div className="grid gap-2">
      <Label htmlFor="country-bad" className="text-center">Country</Label>

      <Select>
        <SelectTrigger id="country-bad" className="mx-auto max-w-xs">
          <SelectValue placeholder="Select a country" />
        </SelectTrigger>

        <SelectContent>
          {COUNTRIES.map((country) => (
            <SelectItem
              key={country}
              value={country.toLowerCase().replace(/\s+/g, "-")}
            >
              {country}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
