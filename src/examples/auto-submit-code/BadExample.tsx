import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import { Check } from "lucide-react";
import { CopyableCode } from "@/components/CopyableCode";

const VALID_CODE = "123456";

export function BadExample() {
  const [value, setValue] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [error, setError] = useState(false);

  const handleVerify = () => {
    if (value === VALID_CODE) {
      setIsVerified(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  const handleReset = () => {
    setValue("");
    setIsVerified(false);
    setError(false);
  };

  if (isVerified) {
    return (
      <div className="space-y-4 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
          <Check className="h-6 w-6 text-green-600 dark:text-green-400" />
        </div>
        <p className="font-medium">Code verified!</p>
        <Button variant="outline" size="sm" onClick={handleReset}>
          Try again
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <CopyableCode code={VALID_CODE} />

      <div className="space-y-2">
        <p className="text-sm text-center text-muted-foreground">
          Enter verification code
        </p>
        <div className="flex justify-center">
          <InputOTP
            maxLength={6}
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
              setError(false);
            }}
            pattern={REGEXP_ONLY_DIGITS}
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
        {error && (
          <p className="text-sm text-center text-red-500">
            Invalid code. Try again.
          </p>
        )}
      </div>

      <Button
        onClick={handleVerify}
        disabled={value.length < 6}
        className="w-full"
      >
        Verify
      </Button>
      <p className="text-xs text-center text-muted-foreground">
        Press Enter or click Verify
      </p>
    </div>
  );
}
