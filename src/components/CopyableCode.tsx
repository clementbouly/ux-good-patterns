import { useState } from "react";

type CopyableCodeProps = {
  code: string;
  label?: string;
};

export function CopyableCode({ code, label = "Test code:" }: CopyableCodeProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-md bg-muted p-3 text-center">
      <p className="text-xs text-muted-foreground mb-1">{label}</p>
      <button
        onClick={handleCopy}
        className="font-mono text-lg font-bold tracking-widest hover:text-primary transition-colors cursor-pointer"
        title="Click to copy"
      >
        {code}
      </button>
      <p
        className={`text-xs mt-1 transition-colors ${
          copied ? "text-green-600 font-medium" : "text-muted-foreground"
        }`}
      >
        {copied ? "Copied!" : "Click to copy"}
      </p>
    </div>
  );
}
