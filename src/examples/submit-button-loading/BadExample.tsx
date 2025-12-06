import { useState } from "react";
import { Button } from "@/components/ui/button";

export function BadExample() {
  const [_isLoading, setIsLoading] = useState(false);
  const [submitCount, setSubmitCount] = useState(0);

  const handleSubmit = () => {
    // No protection against multiple clicks!
    setIsLoading(true);
    setSubmitCount((c) => c + 1);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="space-y-4">
      <Button onClick={handleSubmit}>Submit</Button>

      <p className="text-sm text-muted-foreground">
        Form submitted: <span className="font-mono font-bold">{submitCount}</span> time(s)
      </p>
      {submitCount > 1 && (
        <p className="text-sm text-red-500">
          Multiple submissions detected!
        </p>
      )}
    </div>
  );
}
