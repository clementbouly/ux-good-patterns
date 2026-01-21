import { Check, Copy, Download, Link } from "lucide-react";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";
import { useI18n } from "@/hooks/useI18n";

const FILE_URL = "https://uxgoodpatterns.com/ux-rules.md";

export function AiContextActions() {
  const { copied: copiedLink, copy: copyLink } = useCopyToClipboard();
  const { copied: copiedContent, copy: copyToClipboard } = useCopyToClipboard();
  const { t } = useI18n();

  const handleCopyLink = () => copyLink(FILE_URL);

  const handleCopyContent = async () => {
    try {
      const response = await fetch("/ux-rules.md");
      const content = await response.text();
      await copyToClipboard(content);
    } catch (error) {
      console.error("Failed to copy content:", error);
    }
  };

  const downloadFile = () => {
    const link = document.createElement("a");
    link.href = "/ux-rules.md";
    link.download = "ux-rules.md";
    link.click();
  };

  return (
    <div className="mb-8 grid gap-3 sm:grid-cols-3">
      <button
        onClick={handleCopyLink}
        className="flex cursor-pointer items-center justify-center gap-2 rounded-lg border bg-card px-4 py-3 font-medium transition-colors hover:bg-muted/50"
      >
        {copiedLink ? (
          <>
            <Check className="h-4 w-4 text-green-500" />
            <span>{t("common.copied")}</span>
          </>
        ) : (
          <>
            <Link className="h-4 w-4" />
            <span>{t("ai.copyLink")}</span>
          </>
        )}
      </button>

      <button
        onClick={handleCopyContent}
        className="flex cursor-pointer items-center justify-center gap-2 rounded-lg border bg-card px-4 py-3 font-medium transition-colors hover:bg-muted/50"
      >
        {copiedContent ? (
          <>
            <Check className="h-4 w-4 text-green-500" />
            <span>{t("common.copied")}</span>
          </>
        ) : (
          <>
            <Copy className="h-4 w-4" />
            <span>{t("ai.copyContent")}</span>
          </>
        )}
      </button>

      <button
        onClick={downloadFile}
        className="flex cursor-pointer items-center justify-center gap-2 rounded-lg border bg-card px-4 py-3 font-medium transition-colors hover:bg-muted/50"
      >
        <Download className="h-4 w-4" />
        <span>{t("ai.download")}</span>
      </button>
    </div>
  );
}
