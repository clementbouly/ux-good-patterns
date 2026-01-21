import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useDemoI18n } from "@/hooks/useI18n";

export function BadExample() {
  const { td } = useDemoI18n();

  return (
    <div className="h-full">
      <Label htmlFor="subscription-plan-bad">{td("display.subscriptionPlan")}</Label>

      <div className="flex h-full items-center justify-center">
        <Select>
          <SelectTrigger id="subscription-plan-bad">
            <SelectValue placeholder={td("display.selectPlan")} />
          </SelectTrigger>

          <SelectContent>
            <SelectItem key="basic" value="basic">
              {td("display.basic")}
            </SelectItem>
            <SelectItem key="standard" value="standard">
              {td("display.standard")}
            </SelectItem>
            <SelectItem key="professional" value="professional">
              {td("display.professional")}
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
