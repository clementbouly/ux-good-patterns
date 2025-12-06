import { useState, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const CODE_TO_COPY = "847291";

export function BadExample() {
  const [values, setValues] = useState(["", "", "", "", "", ""]);
  const [copied, setCopied] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;

    const newValues = [...values];
    newValues[index] = value.slice(-1);
    setValues(newValues);

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !values[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerify = () => {
    const code = values.join("");
    if (code === CODE_TO_COPY) {
      setIsVerified(true);
    }
  };

  const handleReset = () => {
    setValues(["", "", "", "", "", ""]);
    setIsVerified(false);
    inputRefs.current[0]?.focus();
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
          {values.map((value, index) => (
            <Input
              key={index}
              ref={(el) => {
                inputRefs.current[index] = el;
              }}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={value}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className="h-9 w-10 text-center text-lg font-mono"
            />
          ))}
        </div>
      </div>

      <Button
        onClick={handleVerify}
        disabled={values.some((v) => !v)}
        className="w-full"
      >
        Verify
      </Button>
    </div>
  );
}
