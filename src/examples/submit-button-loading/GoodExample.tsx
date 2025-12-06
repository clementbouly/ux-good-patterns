import { useState } from "react";
import { Button } from "@/components/ui/button";

export function GoodExample() {
  const [isLoading, setIsLoading] = useState(false);
  const [submitCount, setSubmitCount] = useState(0);

  const handleSubmit = () => {
    if (isLoading) return;

    setIsLoading(true);
    setSubmitCount((c) => c + 1);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="space-y-4">
      <Button onClick={handleSubmit} disabled={isLoading}>
        {isLoading ? (
          <>
            <svg
              className="mr-2 h-4 w-4 animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Submitting...
          </>
        ) : (
          "Submit"
        )}
      </Button>

      <p className="text-sm text-muted-foreground">
        Form submitted: <span className="font-mono font-bold">{submitCount}</span> time(s)
      </p>
    </div>
  );
}
