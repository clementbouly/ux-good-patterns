import { cn } from "@/lib/utils";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";

type CopyableCodeProps = {
  code: string;
  label?: string;
};

export function CopyableCode({ code, label = "Test code:" }: CopyableCodeProps) {
  const { copied, copy } = useCopyToClipboard();

  return (
    <div className="rounded-md bg-muted p-3 text-center cursor-pointer" onClick={() => copy(code)}>
      <p className="text-xs text-muted-foreground mb-1">{label}</p>
      <button
        className="font-mono text-lg font-bold tracking-widest hover:text-primary transition-colors cursor-pointer"
        title="Click to copy"
      >
        {code}
      </button>
      <p
        className={cn(
          "text-xs mt-1 transition-colors",
          copied ? "text-green-600 dark:text-green-400 font-medium" : "text-muted-foreground"
        )}
      >
        {copied ? "Copied!" : "Click to copy"}
      </p>
    </div>
  );
}
