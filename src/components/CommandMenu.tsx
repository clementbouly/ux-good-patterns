import { useEffect, useState, useRef, useMemo, useCallback } from "react";
import { FileText, Search, BookOpen } from "lucide-react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { getLocalizedExamples, type Example } from "@/examples";
import { articles, type Article } from "@/articles";
import { useI18n } from "@/hooks/useI18n";

type CommandMenuProps = {
  variant?: "full" | "icon";
  /**
   * If true, this instance will render the dialog and listen for keyboard shortcuts.
   * Only one instance should have this set to true.
   */
  withDialog?: boolean;
};

// Global event emitter for opening the command menu
const openCommandMenuEvent = new EventTarget();

export function openCommandMenu() {
  openCommandMenuEvent.dispatchEvent(new Event("open"));
}

export default function CommandMenu({ variant = "full", withDialog = true }: CommandMenuProps) {
  const { t, lang } = useI18n();
  const [open, setOpen] = useState(false);
  const [modifierKey, setModifierKey] = useState("Ctrl");
  const listRef = useRef<HTMLDivElement>(null);

  const langPrefix = lang === "fr" ? "/fr" : "";

  // Get localized examples
  const localizedExamples = useMemo(() => getLocalizedExamples(lang), [lang]);

  const handleSearchChange = () => {
    listRef.current?.scrollTo(0, 0);
  };

  const handleOpen = useCallback(() => {
    setOpen(true);
  }, []);

  useEffect(() => {
    setModifierKey(/Mac|iPhone|iPad/.test(navigator.userAgent) ? "⌘" : "Ctrl");

    // Only register keyboard shortcut and event listener if this instance has the dialog
    if (!withDialog) {
      return;
    }

    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    // Listen for programmatic open events
    openCommandMenuEvent.addEventListener("open", handleOpen);
    document.addEventListener("keydown", down);

    return () => {
      openCommandMenuEvent.removeEventListener("open", handleOpen);
      document.removeEventListener("keydown", down);
    };
  }, [withDialog, handleOpen]);

  const handleSelectExample = (example: Example) => {
    setOpen(false);
    window.location.href = `${langPrefix}/example/${example.meta.id}`;
  };

  const handleSelectArticle = (article: Article) => {
    setOpen(false);
    window.location.href = `${langPrefix}/article/${article.slug}`;
  };

  const handleButtonClick = () => {
    if (withDialog) {
      setOpen(true);
    } else {
      // Trigger the global event to open the dialog in the instance that has it
      openCommandMenu();
    }
  };

  return (
    <>
      {variant === "icon" ? (
        <button
          onClick={handleButtonClick}
          className="inline-flex h-9 w-9 items-center justify-center rounded-md text-white/70 transition-colors hover:bg-white/10 hover:text-white"
          aria-label={t("search.ariaLabel")}
        >
          <Search className="h-5 w-5" />
        </button>
      ) : (
        <button
          onClick={handleButtonClick}
          className="inline-flex w-64 items-center gap-2 rounded-md border border-white/20 bg-white/5 px-3 py-1.5 text-sm text-white/70 transition-colors hover:bg-white/10 hover:text-white"
        >
          <Search className="h-4 w-4" />
          <span className="flex-1 text-left text-white/50">{t("search.placeholder")}</span>
          <kbd className="pointer-events-none hidden h-5 select-none items-center gap-1 rounded border border-white/20 bg-white/10 px-1.5 font-mono text-[10px] font-medium sm:flex">
            <span className="text-xs">{modifierKey}</span> + K
          </kbd>
        </button>
      )}

      {withDialog && (
        <CommandDialog
          open={open}
          onOpenChange={setOpen}
          title={t("search.dialogTitle")}
          description={t("search.dialogDescription")}
        >
          <CommandInput placeholder={t("search.placeholder")} onValueChange={handleSearchChange} />
          <CommandList ref={listRef}>
            <CommandEmpty>{t("search.noResults")}</CommandEmpty>
            <CommandGroup heading={t("search.groupExamples")}>
              {localizedExamples.map((example) => (
                <CommandItem
                  key={example.meta.id}
                  value={`${example.meta.title} ${example.meta.description} ${example.meta.tags.join(" ")}`}
                  onSelect={() => handleSelectExample(example)}
                  className="cursor-pointer"
                >
                  <FileText className="mr-2 h-4 w-4" />
                  <div className="flex flex-col">
                    <span>{example.meta.title}</span>
                    <span className="text-xs text-muted-foreground">
                      {example.meta.category} · {example.meta.tags.slice(0, 3).join(", ")}
                    </span>
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
            <CommandGroup heading={t("search.groupArticles")}>
              {articles.map((article) => (
                <CommandItem
                  key={article.slug}
                  value={`${article.title} ${article.description} ${article.tags.join(" ")}`}
                  onSelect={() => handleSelectArticle(article)}
                  className="cursor-pointer"
                >
                  <BookOpen className="mr-2 h-4 w-4" />
                  <div className="flex flex-col">
                    <span>{article.title}</span>
                    <span className="text-xs text-muted-foreground">
                      {article.tags.slice(0, 3).join(", ")}
                    </span>
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </CommandDialog>
      )}
    </>
  );
}
