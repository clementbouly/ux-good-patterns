import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useDemoI18n } from "@/hooks/useI18n";

const CURRENT_YEAR = new Date().getFullYear();
const MIN_YEAR = 1900;
const DAYS = Array.from({ length: 31 }, (_, i) => i + 1);
const YEARS = Array.from({ length: CURRENT_YEAR - MIN_YEAR + 1 }, (_, i) => CURRENT_YEAR - i);
const MONTH_INDEXES = Array.from({ length: 12 }, (_, i) => i);

export function BadExampleDropdowns() {
  const { td, lang } = useDemoI18n();
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const monthName = (idx: number) =>
    new Date(2024, idx, 1).toLocaleDateString(lang, { month: "long" });

  return (
    <div className="space-y-2">
      <Label>{td("dob.label")}</Label>
      <div className="flex flex-wrap gap-1">
        <Select value={day} onValueChange={setDay}>
          <SelectTrigger className="w-20 px-2">
            <SelectValue placeholder={td("dob.day")} />
          </SelectTrigger>
          <SelectContent position="popper" className="max-h-60">
            {DAYS.map((d) => (
              <SelectItem key={d} value={String(d)}>
                {d}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={month} onValueChange={setMonth}>
          <SelectTrigger className="w-20 px-2">
            <SelectValue placeholder={td("dob.month")} />
          </SelectTrigger>
          <SelectContent position="popper" className="max-h-60">
            {MONTH_INDEXES.map((idx) => (
              <SelectItem key={idx} value={String(idx + 1)}>
                {monthName(idx)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={year} onValueChange={setYear}>
          <SelectTrigger className="w-[88px] px-2">
            <SelectValue placeholder={td("dob.year")} />
          </SelectTrigger>
          <SelectContent position="popper" className="max-h-60">
            {YEARS.map((y) => (
              <SelectItem key={y} value={String(y)}>
                {y}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
