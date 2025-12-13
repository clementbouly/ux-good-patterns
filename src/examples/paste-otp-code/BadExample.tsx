import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import { Check, Loader2 } from "lucide-react";
import { CopyableCode } from "@/components/CopyableCode";

const VALID_CODE = "847293";

export function BadExample() {
  const [value, setValue] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [error, setError] = useState(false);

  const handleVerify = (code: string) => {
    setIsVerifying(true);
    setError(false);

    setTimeout(() => {
      if (code === VALID_CODE) {
        setIsVerified(true);
      } else {
        setError(true);
        setValue("");
      }
      setIsVerifying(false);
    }, 500);
  };

  const handleChange = (newValue: string) => {
    setValue(newValue);
    setError(false);

    if (newValue.length === 6) {
      handleVerify(newValue);
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
            onChange={handleChange}
            pattern={REGEXP_ONLY_DIGITS}
            disabled={isVerifying}
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
        {isVerifying && (
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Loader2 className="h-4 w-4 animate-spin" />
            Verifying...
          </div>
        )}
        {error && (
          <p className="text-sm text-center text-red-500">
            Invalid code. Try again.
          </p>
        )}
      </div>

      <p className="text-xs text-center text-muted-foreground">
        Type the code manually or use Ctrl+V to paste
      </p>
    </div>
  );
}
