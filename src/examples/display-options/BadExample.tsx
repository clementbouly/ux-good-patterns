import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

export function BadExample() {
  return (
    <div className="grid gap-2">
      <Label htmlFor="subscription-plan-bad">Subscription plan</Label>

      <Select>
        <SelectTrigger id="subscription-plan-bad">
          <SelectValue placeholder="Select a subscription plan" />
        </SelectTrigger>

        <SelectContent>
          <SelectItem key="basic" value="basic">
            Basic
          </SelectItem>
          <SelectItem key="standard" value="standard">
            Standard
          </SelectItem>
          <SelectItem key="professional" value="professional">
            Professional
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
