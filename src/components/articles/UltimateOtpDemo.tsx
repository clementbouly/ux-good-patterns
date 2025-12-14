import { useState } from "react";
import { Button } from "@/components/ui/button";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import { Check, Loader2, ClipboardPaste } from "lucide-react";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";

const VALID_CODE = "582461";

export function UltimateOtpDemo() {
  const [value, setValue] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [error, setError] = useState(false);
  const { copied, copy } = useCopyToClipboard();

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

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      const digits = text.replace(/\D/g, "").slice(0, 6);
      if (digits.length > 0) {
        handleChange(digits);
      }
    } catch {
      console.log("Clipboard access denied");
    }
  };

  const handleReset = () => {
    setValue("");
    setIsVerified(false);
    setError(false);
  };

  if (isVerified) {
    return (
      <div className="rounded-md border border-green-200 bg-green-50/50 p-6 dark:border-green-900 dark:bg-green-950/50">
        <div className="space-y-4 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-100 dark:bg-green-950">
            <Check className="h-7 w-7 text-green-600 dark:text-green-400" />
          </div>
          <div>
            <p className="font-semibold text-lg">Verified!</p>
            <p className="text-sm text-muted-foreground">That's the ultimate OTP experience</p>
          </div>
          <Button variant="outline" size="sm" onClick={handleReset}>
            Try again
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-md border border-green-200 bg-green-50/50 p-4 dark:border-green-900 dark:bg-green-950/50 space-y-4">
      <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
        <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-green-100 dark:bg-green-950">
          <Check className="h-3 w-3" />
        </span>
        <span className="font-medium">Good example</span>
      </div>

      <div className="space-y-3">
        <p className="text-sm text-center text-muted-foreground">
          Copy code :{" "}
          <button
            onClick={() => copy(VALID_CODE)}
            className="font-mono font-semibold text-foreground hover:text-primary cursor-pointer transition-colors"
            title="Click to copy"
          >
            {copied ? "Copied!" : VALID_CODE}
          </button>
        </p>
        <div className="flex justify-center gap-2 items-center">
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
          <Button
            variant="outline"
            size="icon"
            onClick={handlePaste}
            disabled={isVerifying}
            aria-label="Paste code from clipboard"
            title="Paste code"
          >
            <ClipboardPaste className="h-4 w-4" />
          </Button>
        </div>
        {isVerifying && (
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Loader2 className="h-4 w-4 animate-spin" />
            Verifying...
          </div>
        )}
        {error && <p className="text-sm text-center text-red-500">Invalid code. Try again.</p>}
      </div>

      <div className="flex flex-wrap justify-center gap-2 text-xs text-muted-foreground">
        <span className="rounded-full bg-muted px-2 py-1">Paste support</span>
        <span className="rounded-full bg-muted px-2 py-1">Auto-submit</span>
        <span className="rounded-full bg-muted px-2 py-1">Paste button</span>
      </div>
    </div>
  );
}
