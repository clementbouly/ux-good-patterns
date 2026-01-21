import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Check, Share2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { useI18n } from "@/hooks/useI18n";

type ShareButtonProps = {
  url: string;
  className?: string;
};

export function ShareButton({ url, className }: ShareButtonProps) {
  const { t } = useI18n();
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isCopied) return;

    try {
      await navigator.clipboard.writeText(url);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy URL", error);
    }
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={handleCopy}
      className={cn(
        "inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1 text-xs font-medium transition-colors cursor-pointer",
        isCopied
          ? "border-green-500/50 bg-green-500/10 text-green-600 dark:border-green-400/50 dark:bg-green-400/10 dark:text-green-400"
          : "border-border bg-background text-muted-foreground hover:bg-accent hover:text-accent-foreground",
        className
      )}
    >
      <AnimatePresence mode="wait">
        {isCopied ? (
          <motion.span
            key="copied"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.15 }}
            className="flex items-center gap-1.5"
          >
            <Check className="h-3 w-3" />
            {t("common.copied")}
          </motion.span>
        ) : (
          <motion.span
            key="share"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.15 }}
            className="flex items-center gap-1.5"
          >
            <Share2 className="h-3 w-3" />
            {t("common.share")}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
