import { Check, Copy } from "lucide-react";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";

type CopyableUrlProps = {
  url: string;
};

export function CopyableUrl({ url }: CopyableUrlProps) {
  const { copied, copy } = useCopyToClipboard();

  return (
    <div className="flex items-center gap-2 rounded-lg bg-muted/50 p-4">
      <code className="flex-1 break-all font-mono text-sm">{url}</code>
      <button
        onClick={() => copy(url)}
        className="flex h-8 w-8 shrink-0 cursor-pointer items-center justify-center rounded-md transition-colors hover:bg-muted"
        aria-label={copied ? "Copied!" : "Copy URL"}
      >
        {copied ? (
          <Check className="h-4 w-4 text-green-500" />
        ) : (
          <Copy className="h-4 w-4 text-muted-foreground" />
        )}
      </button>
    </div>
  );
}
