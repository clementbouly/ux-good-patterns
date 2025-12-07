import { useEffect, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { FileText } from "lucide-react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { examples, type Example } from "@/examples";

export function CommandMenu() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const handleSelect = (example: Example) => {
    setOpen(false);
    navigate({ to: "/example/$exampleId", params: { exampleId: example.meta.id } });
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/5 px-3 py-1.5 text-sm text-white/70 hover:bg-white/10 hover:text-white transition-colors"
      >
        <span>Search...</span>
        <kbd className="pointer-events-none hidden h-5 select-none items-center gap-1 rounded border border-white/20 bg-white/10 px-1.5 font-mono text-[10px] font-medium sm:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </button>

      <CommandDialog
        open={open}
        onOpenChange={setOpen}
        title="Search examples"
        description="Search for UX patterns and examples"
      >
        <CommandInput placeholder="Search examples..." />
        <CommandList>
          <CommandEmpty>No examples found.</CommandEmpty>
          <CommandGroup heading="Examples">
            {examples.map((example) => (
              <CommandItem
                key={example.meta.id}
                value={`${example.meta.title} ${example.meta.description} ${example.meta.tags.join(" ")}`}
                onSelect={() => handleSelect(example)}
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
        </CommandList>
      </CommandDialog>
    </>
  );
}
