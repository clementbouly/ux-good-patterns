import { useEffect, useState } from "react";
import { FileText, Search, BookOpen } from "lucide-react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { examples, type Example } from "@/examples";
import { articles, type Article } from "@/articles";

type CommandMenuProps = {
  variant?: "full" | "icon";
};

export default function CommandMenu({ variant = "full" }: CommandMenuProps) {
  const [open, setOpen] = useState(false);
  const [modifierKey, setModifierKey] = useState("Ctrl");

  useEffect(() => {
    setModifierKey(/Mac|iPhone|iPad/.test(navigator.userAgent) ? "⌘" : "Ctrl");

    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const handleSelectExample = (example: Example) => {
    setOpen(false);
    window.location.href = `/example/${example.meta.id}`;
  };

  const handleSelectArticle = (article: Article) => {
    setOpen(false);
    window.location.href = `/article/${article.slug}`;
  };

  return (
    <>
      {variant === "icon" ? (
        <button
          onClick={() => setOpen(true)}
          className="inline-flex h-9 w-9 items-center justify-center rounded-md text-white/70 transition-colors hover:bg-white/10 hover:text-white"
          aria-label="Search"
        >
          <Search className="h-5 w-5" />
        </button>
      ) : (
        <button
          onClick={() => setOpen(true)}
          className="inline-flex w-64 items-center gap-2 rounded-md border border-white/20 bg-white/5 px-3 py-1.5 text-sm text-white/70 transition-colors hover:bg-white/10 hover:text-white"
        >
          <Search className="h-4 w-4" />
          <span className="flex-1 text-left text-white/50">Search...</span>
          <kbd className="pointer-events-none hidden h-5 select-none items-center gap-1 rounded border border-white/20 bg-white/10 px-1.5 font-mono text-[10px] font-medium sm:flex">
            <span className="text-xs">{modifierKey}</span> + K
          </kbd>
        </button>
      )}

      <CommandDialog
        open={open}
        onOpenChange={setOpen}
        title="Search examples and articles"
        description="Search for UX patterns and examples"
      >
        <CommandInput placeholder="Search examples, articles..." />
        <CommandList>
          <CommandEmpty>No examples found.</CommandEmpty>
          <CommandGroup heading="Examples">
            {examples.map((example) => (
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
          <CommandGroup heading="Articles">
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
    </>
  );
}
