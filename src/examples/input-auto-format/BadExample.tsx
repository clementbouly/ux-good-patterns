import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CopyButton } from "@/components/ui/shadcn-io/copy-button";
import { useDemoI18n } from "@/hooks/useI18n";

const TEST_CARD = "4242424242424242";
const TEST_IBAN = "FR7630006000011234567890189";
const TEST_PHONE = "2025551234";

export function BadExample() {
  const { td } = useDemoI18n();
  const [cardNumber, setCardNumber] = useState("");
  const [iban, setIban] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <div className="space-y-4">
      <div className="grid gap-2">
        <div className="flex items-center gap-2">
          <Label htmlFor="card-bad">{td("input.creditCard")}</Label>
          <CopyButton content={TEST_CARD} variant="ghost" size="sm" />
        </div>
        <Input
          id="card-bad"
          type="text"
          placeholder={td("input.enterCard")}
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          maxLength={16}
        />
      </div>

      <div className="grid gap-2">
        <div className="flex items-center gap-2">
          <Label htmlFor="iban-bad">{td("input.iban")}</Label>
          <CopyButton content={TEST_IBAN} variant="ghost" size="sm" />
        </div>
        <Input
          id="iban-bad"
          type="text"
          placeholder={td("input.enterIban")}
          value={iban}
          onChange={(e) => setIban(e.target.value.toUpperCase())}
          maxLength={34}
        />
      </div>

      <div className="grid gap-2">
        <div className="flex items-center gap-2">
          <Label htmlFor="phone-bad">{td("input.phone")}</Label>
          <CopyButton content={TEST_PHONE} variant="ghost" size="sm" />
        </div>
        <Input
          id="phone-bad"
          type="text"
          placeholder={td("input.enterPhone")}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          maxLength={10}
        />
      </div>
    </div>
  );
}
