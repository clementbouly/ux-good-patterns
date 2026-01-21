import { useState } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
import { CopyableCode } from "@/components/CopyableCode";
import { useDemoI18n } from "@/hooks/useI18n";

const CODE_TO_COPY = "847291";

export function GoodExample() {
  const { td } = useDemoI18n();
  const [value, setValue] = useState("");
  const [isVerified, setIsVerified] = useState(false);

  const handleOnChange = (newValue: string) => {
    setValue(newValue);
  };

  const handleVerify = () => {
    if (value === CODE_TO_COPY) {
      setIsVerified(true);
    }
  };

  const handleReset = () => {
    setValue("");
    setIsVerified(false);
  };

  if (isVerified) {
    return (
      <div className="space-y-4 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
          <Check className="h-6 w-6 text-green-600 dark:text-green-400" />
        </div>
        <h3 className="text-lg font-semibold">{td("autoSubmit.codeVerified")}</h3>
        <Button variant="outline" onClick={handleReset} className="w-full">
          {td("common.tryAgain")}
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <CopyableCode code={CODE_TO_COPY} label={td("verification.yourCode")} />

      <div className="space-y-2">
        <p className="text-sm text-center text-muted-foreground">{td("autoSubmit.enterCode")}</p>
        <div className="flex justify-center gap-2">
          <InputOTP
            maxLength={6}
            value={value}
            onChange={handleOnChange}
            pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
            onKeyDown={(e) => {
              if (e.key === "Enter" && value.length === 6) {
                handleVerify();
              }
            }}
          >
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
        </div>
      </div>

      <Button onClick={handleVerify} disabled={value.length < 6} className="w-full">
        {td("common.verify")}
      </Button>
    </div>
  );
}
