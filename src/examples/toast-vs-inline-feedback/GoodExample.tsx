import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, Bookmark, Link, ThumbsDown, Flag, Check } from "lucide-react";
import { useDemoI18n } from "@/hooks/useI18n";

export function GoodExample() {
  const { td } = useDemoI18n();
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyLink = async () => {
    await navigator.clipboard.writeText("https://example.com/post/12345");
    setCopied(true);
  };

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => {
        setCopied(false);
        setIsOpen(false);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [copied]);

  // Reset copied state when dropdown closes manually
  useEffect(() => {
    if (!isOpen) {
      setCopied(false);
    }
  }, [isOpen]);

  return (
    <div className="space-y-2">
      <p className="text-sm text-muted-foreground flex items-center justify-end gap-1 pr-1 mr-5">
        {td("toast.clickMenu")}
        <span className="inline-block animate-bounce">👇</span>
      </p>

      {/* Post */}
      <div className="rounded-lg border p-4">
        <div className="flex items-start gap-3">
          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500" />
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-sm">{td("toast.alexJohnson")}</p>
                <p className="text-xs text-muted-foreground">{td("toast.timeAgo")}</p>
              </div>
              <Popover open={isOpen} onOpenChange={setIsOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8"
                    aria-label={td("common.moreOptions")}
                  >
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-48 p-1" align="end">
                  <button
                    className="flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-sm hover:bg-accent"
                    onClick={() => setIsOpen(false)}
                  >
                    <Bookmark className="h-4 w-4" />
                    {td("common.save")}
                  </button>
                  <button
                    className="flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-sm hover:bg-accent transition-colors"
                    onClick={handleCopyLink}
                  >
                    <AnimatePresence mode="wait" initial={false}>
                      {copied ? (
                        <motion.span
                          key="copied"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          transition={{ duration: 0.15 }}
                          className="flex items-center gap-2 text-green-600 dark:text-green-400"
                        >
                          <Check className="h-4 w-4" />
                          {td("common.copied")}
                        </motion.span>
                      ) : (
                        <motion.span
                          key="copy"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          transition={{ duration: 0.15 }}
                          className="flex items-center gap-2"
                        >
                          <Link className="h-4 w-4" />
                          {td("toast.copyLink")}
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </button>
                  <button
                    className="flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-sm hover:bg-accent"
                    onClick={() => setIsOpen(false)}
                  >
                    <ThumbsDown className="h-4 w-4" />
                    {td("toast.notInterested")}
                  </button>
                  <button
                    className="flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-sm text-destructive hover:bg-accent"
                    onClick={() => setIsOpen(false)}
                  >
                    <Flag className="h-4 w-4" />
                    {td("toast.report")}
                  </button>
                </PopoverContent>
              </Popover>
            </div>
            <p className="mt-2 text-sm">{td("toast.samplePost")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
