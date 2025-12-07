import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Check, Share2 } from "lucide-react";
import { cn } from "@/lib/utils";

type ShareButtonProps = {
  url: string;
  className?: string;
};

export function ShareButton({ url, className }: ShareButtonProps) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
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
        "inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1 text-xs font-medium transition-colors",
        isCopied
          ? "border-green-300 bg-green-50 text-green-700"
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
            Url Copied!
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
            Share
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
