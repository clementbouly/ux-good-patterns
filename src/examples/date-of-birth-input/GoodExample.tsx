import { useRef, useState } from "react";
import { Check } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useDemoI18n } from "@/hooks/useI18n";

const CURRENT_YEAR = new Date().getFullYear();
const MIN_YEAR = 1900;

function daysInMonth(month: number, year: number): number {
  if ([4, 6, 9, 11].includes(month)) return 30;
  if (month === 2) {
    const isLeap = year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
    return isLeap ? 29 : 28;
  }
  return 31;
}

type FieldError = "day" | "month" | "year" | null;

function validateDate(day: string, month: string, year: string): FieldError {
  if (!day || !month || year.length !== 4) return null;
  const d = parseInt(day, 10);
  const m = parseInt(month, 10);
  const y = parseInt(year, 10);
  if (m < 1 || m > 12) return "month";
  if (y < MIN_YEAR || y > CURRENT_YEAR) return "year";
  if (d < 1 || d > daysInMonth(m, y)) return "day";
  return null;
}

export function GoodExample() {
  const { td } = useDemoI18n();
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const dayRef = useRef<HTMLInputElement>(null);
  const monthRef = useRef<HTMLInputElement>(null);
  const yearRef = useRef<HTMLInputElement>(null);

  const handleDayChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const digits = e.target.value.replace(/\D/g, "").slice(0, 2);
    setDay(digits);
    // Auto-advance: 2 digits filled, or first digit can only be a single-digit day (4-9)
    if (digits.length === 2 || (digits.length === 1 && parseInt(digits, 10) >= 4)) {
      monthRef.current?.focus();
    }
  };

  const handleMonthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const digits = e.target.value.replace(/\D/g, "").slice(0, 2);
    setMonth(digits);
    if (digits.length === 2 || (digits.length === 1 && parseInt(digits, 10) >= 2)) {
      yearRef.current?.focus();
    }
  };

  const handleYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const digits = e.target.value.replace(/\D/g, "").slice(0, 4);
    setYear(digits);
  };

  const handleBackspace = (
    field: "day" | "month" | "year",
    e: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (e.key !== "Backspace" || e.currentTarget.value !== "") return;
    if (field === "month") dayRef.current?.focus();
    if (field === "year") monthRef.current?.focus();
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const text = e.clipboardData.getData("text").trim();
    const match = text.match(/^(\d{1,2})[/\-.\s]?(\d{1,2})[/\-.\s]?(\d{4})$/);
    if (!match) return;
    e.preventDefault();
    setDay(match[1].padStart(2, "0"));
    setMonth(match[2].padStart(2, "0"));
    setYear(match[3]);
    yearRef.current?.focus();
  };

  const error = validateDate(day, month, year);
  const isComplete = day.length >= 1 && month.length >= 1 && year.length === 4;
  const isValid = isComplete && error === null;

  return (
    <div className="grid gap-2">
      <Label htmlFor="dob-day-good">{td("dob.label")}</Label>
      <div className="flex items-center gap-1">
        <Input
          id="dob-day-good"
          ref={dayRef}
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          placeholder={td("dob.dayPlaceholder")}
          value={day}
          onChange={handleDayChange}
          onKeyDown={(e) => handleBackspace("day", e)}
          onPaste={handlePaste}
          autoComplete="bday-day"
          maxLength={2}
          aria-label={td("dob.day")}
          aria-invalid={error === "day"}
          className="w-14 text-center"
        />
<Input
          ref={monthRef}
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          placeholder={td("dob.monthPlaceholder")}
          value={month}
          onChange={handleMonthChange}
          onKeyDown={(e) => handleBackspace("month", e)}
          onPaste={handlePaste}
          autoComplete="bday-month"
          maxLength={2}
          aria-label={td("dob.month")}
          aria-invalid={error === "month"}
          className="w-14 text-center"
        />
<Input
          ref={yearRef}
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          placeholder={td("dob.yearPlaceholder")}
          value={year}
          onChange={handleYearChange}
          onKeyDown={(e) => handleBackspace("year", e)}
          onPaste={handlePaste}
          autoComplete="bday-year"
          maxLength={4}
          aria-label={td("dob.year")}
          aria-invalid={error === "year"}
          className="w-20 text-center"
        />
      </div>

      {error === "day" && (
        <p className="text-xs text-destructive">{td("dob.invalidDay")}</p>
      )}
      {error === "month" && (
        <p className="text-xs text-destructive">{td("dob.invalidMonth")}</p>
      )}
      {error === "year" && (
        <p className="text-xs text-destructive">{td("dob.invalidYear")}</p>
      )}

      {isValid && (
        <p className="flex items-center gap-1.5 text-xs text-green-600 dark:text-green-500">
          <Check className="h-3.5 w-3.5" />
          {td("dob.valid")}
        </p>
      )}
    </div>
  );
}
