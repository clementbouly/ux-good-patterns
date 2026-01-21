import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CopyButton } from "@/components/ui/shadcn-io/copy-button";
import { useDemoI18n } from "@/hooks/useI18n";

const CARD_MAX_DIGITS = 16;
const IBAN_MAX_CHARS = 34;
const PHONE_MAX_DIGITS = 10;

const TEST_CARD = "4242424242424242";
const TEST_IBAN = "FR7630006000011234567890189";
const TEST_PHONE = "2025551234";

// Format credit card: 4242 4242 4242 4242
function formatCardNumber(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, CARD_MAX_DIGITS);
  const groups = digits.match(/.{1,4}/g);
  return groups ? groups.join(" ") : "";
}

// Format IBAN: FR76 3000 6000 0112 3456 7890 189
function formatIban(value: string): string {
  const clean = value
    .replace(/[^a-zA-Z0-9]/g, "")
    .toUpperCase()
    .slice(0, IBAN_MAX_CHARS);
  const groups = clean.match(/.{1,4}/g);
  return groups ? groups.join(" ") : "";
}

// Extract raw value without spaces
function getRawValue(value: string): string {
  return value.replace(/\s/g, "");
}

// Validate credit card (16 digits only)
function isValidCard(value: string): boolean {
  const raw = getRawValue(value);
  return /^\d{16}$/.test(raw);
}

// Validate IBAN format (2 letters + 2 check digits + BBAN, 15-34 chars total)
function isValidIban(value: string): boolean {
  const raw = getRawValue(value);
  return /^[A-Z]{2}\d{2}[A-Z0-9]{11,30}$/.test(raw);
}

// Format US phone: (202) 555-1234
function formatPhone(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, PHONE_MAX_DIGITS);
  if (digits.length <= 3) return digits;
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

// Validate US phone (10 digits)
function isValidPhone(value: string): boolean {
  const raw = getRawValue(value);
  return /^\d{10}$/.test(raw);
}

export function GoodExample() {
  const { td } = useDemoI18n();
  const [cardNumber, setCardNumber] = useState("");
  const [iban, setIban] = useState("");
  const [phone, setPhone] = useState("");

  const handleCardChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCardNumber(e.target.value);
    setCardNumber(formatted);
  };

  const handleIbanChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatIban(e.target.value);
    setIban(formatted);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value);
    setPhone(formatted);
  };

  const cardRaw = getRawValue(cardNumber);
  const ibanRaw = getRawValue(iban);
  const phoneRaw = getRawValue(phone);

  return (
    <div className="space-y-4">
      <div className="grid gap-2">
        <div className="flex items-center gap-2">
          <Label htmlFor="card-good">{td("input.creditCard")}</Label>
          <CopyButton content={TEST_CARD} variant="ghost" size="sm" />
        </div>
        <Input
          id="card-good"
          type="text"
          inputMode="numeric"
          placeholder={td("input.creditCardPlaceholder")}
          value={cardNumber}
          onChange={handleCardChange}
          autoComplete="cc-number"
        />
        {cardRaw.length === CARD_MAX_DIGITS && !isValidCard(cardNumber) && (
          <p className="text-xs text-destructive">{td("input.creditCardInvalid")}</p>
        )}
      </div>

      <div className="grid gap-2">
        <div className="flex items-center gap-2">
          <Label htmlFor="iban-good">{td("input.iban")}</Label>
          <CopyButton content={TEST_IBAN} variant="ghost" size="sm" />
        </div>
        <Input
          id="iban-good"
          type="text"
          inputMode="text"
          placeholder={td("input.ibanPlaceholder")}
          value={iban}
          onChange={handleIbanChange}
          autoComplete="off"
        />
        {ibanRaw.length >= 15 && !isValidIban(iban) && (
          <p className="text-xs text-destructive">{td("input.ibanInvalid")}</p>
        )}
      </div>

      <div className="grid gap-2">
        <div className="flex items-center gap-2">
          <Label htmlFor="phone-good">{td("input.phone")}</Label>
          <CopyButton content={TEST_PHONE} variant="ghost" size="sm" />
        </div>
        <Input
          id="phone-good"
          type="tel"
          inputMode="tel"
          placeholder={td("input.phonePlaceholder")}
          value={phone}
          onChange={handlePhoneChange}
          autoComplete="tel"
        />
        {phoneRaw.length === PHONE_MAX_DIGITS && !isValidPhone(phone) && (
          <p className="text-xs text-destructive">{td("input.phoneInvalid")}</p>
        )}
      </div>
    </div>
  );
}
