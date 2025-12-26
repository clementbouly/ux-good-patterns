import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, Bookmark, Link, ThumbsDown, Flag, Check, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function BadExample() {
  const [isOpen, setIsOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleCopyLink = async () => {
    await navigator.clipboard.writeText("https://example.com/post/12345");
    setIsOpen(false);
    setShowToast(true);
  };

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => setShowToast(false), 4000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  return (
    <div className="space-y-2">
      <p className="text-sm text-muted-foreground flex items-center justify-end gap-1 pr-1 mr-5">
        Click the ••• menu and select "Copy link" ?
        <span className="inline-block animate-bounce">👇</span>
      </p>

      {/* Post */}
      <div className="rounded-lg border p-4">
        <div className="flex items-start gap-3">
          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500" />
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-sm">Alex Johnson</p>
                <p className="text-xs text-muted-foreground">2h ago</p>
              </div>
              <Popover open={isOpen} onOpenChange={setIsOpen}>
                <PopoverTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-8 w-8" aria-label="More options">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-48 p-1" align="end">
                  <button
                    className="flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-sm hover:bg-accent"
                    onClick={() => setIsOpen(false)}
                  >
                    <Bookmark className="h-4 w-4" />
                    Save
                  </button>
                  <button
                    className="flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-sm hover:bg-accent"
                    onClick={handleCopyLink}
                  >
                    <Link className="h-4 w-4" />
                    Copy link
                  </button>
                  <button
                    className="flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-sm hover:bg-accent"
                    onClick={() => setIsOpen(false)}
                  >
                    <ThumbsDown className="h-4 w-4" />
                    Not interested
                  </button>
                  <button
                    className="flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-sm text-destructive hover:bg-accent"
                    onClick={() => setIsOpen(false)}
                  >
                    <Flag className="h-4 w-4" />
                    Report
                  </button>
                </PopoverContent>
              </Popover>
            </div>
            <p className="mt-2 text-sm">
              Just shared something interesting that I think you&apos;ll all enjoy! Check it out and
              let me know what you think.
            </p>
          </div>
        </div>
      </div>

      {/* Toast notification - positioned at bottom left */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
            className={cn(
              "fixed bottom-4 left-4 z-50 flex items-center gap-2 rounded-lg px-4 py-3 shadow-lg",
              "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900"
            )}
          >
            <Check className="h-4 w-4 text-green-400 dark:text-green-600" />
            <span className="text-sm font-medium">Link copied!</span>
            <button
              onClick={() => setShowToast(false)}
              className="ml-2 rounded p-0.5 hover:bg-white/10 dark:hover:bg-black/10"
              aria-label="Dismiss"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
