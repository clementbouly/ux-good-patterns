import { useState } from "react";
import { Button } from "@/components/ui/button";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";

const CODE_TO_COPY = "847291";

export function GoodExample() {
  const [value, setValue] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [copied, setCopied] = useState(false);

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

  const copyCode = async () => {
    await navigator.clipboard.writeText(CODE_TO_COPY);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (isVerified) {
    return (
      <div className="space-y-4 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
          <svg
            className="h-6 w-6 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-lg font-semibold">Code verified!</h3>
        <Button variant="outline" onClick={handleReset} className="w-full">
          Try again
        </Button>
      </div>
    );
  }

  return (
    
    <div className="space-y-4">
      <div className="rounded-md bg-muted p-3 text-center">
        <p className="text-xs text-muted-foreground mb-1">Your code:</p>
        <button
          onClick={copyCode}
          className="font-mono text-lg font-bold tracking-widest hover:text-primary transition-colors cursor-pointer"
          title="Click to copy"
        >
          {CODE_TO_COPY}
        </button>
        <p className={`text-xs mt-1 transition-colors ${copied ? "text-green-600 font-medium" : "text-muted-foreground"}`}>
          {copied ? "Copied!" : "Click to copy"}
        </p>
      </div>
 

      <div className="space-y-2">
        <p className="text-sm text-center text-muted-foreground">
          Enter verification code
        </p>
      <div className="flex justify-center gap-2">
        <InputOTP
          maxLength={6}
          onChange={handleOnChange}
          pattern={REGEXP_ONLY_DIGITS_AND_CHARS}

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

      <Button
        onClick={handleVerify}
        disabled={value.length < 6}
        className="w-full"
      >
        Verify
      </Button>
    </div>
  );
}
