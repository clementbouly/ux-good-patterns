import { useRef, useState } from "react";
import { Calendar } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useDemoI18n } from "@/hooks/useI18n";

export function BadExample() {
  const { td } = useDemoI18n();
  const [value, setValue] = useState("");
  const hiddenDateRef = useRef<HTMLInputElement>(null);

  const openCalendar = () => {
    hiddenDateRef.current?.showPicker?.();
  };

  const handleCalendarPick = (e: React.ChangeEvent<HTMLInputElement>) => {
    const [y, m, d] = e.target.value.split("-");
    if (!y || !m || !d) return;
    setValue(`${d}/${m}/${y}`);
  };

  return (
    <div className="grid gap-2">
      <Label htmlFor="dob-bad-free">{td("dob.label")}</Label>
      <div className="relative">
        <Input
          id="dob-bad-free"
          type="text"
          placeholder={td("dob.badPlaceholder")}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="pr-10"
        />
        <button
          type="button"
          onClick={openCalendar}
          aria-label={td("dob.openCalendar")}
          className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
        >
          <Calendar className="h-4 w-4" />
        </button>
        <input
          ref={hiddenDateRef}
          type="date"
          onChange={handleCalendarPick}
          className="sr-only"
          tabIndex={-1}
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
