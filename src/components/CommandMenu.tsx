import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { useNavigate } from "@tanstack/react-router";
import { FileText, Search } from "lucide-react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { examples, type Example } from "@/examples";

// Context to share command menu state across all triggers
const CommandMenuContext = createContext<{
  open: boolean;
  setOpen: (open: boolean) => void;
} | null>(null);

export function CommandMenuProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  // Single global keyboard listener
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
    <CommandMenuContext.Provider value={{ open, setOpen }}>
      {children}
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
    </CommandMenuContext.Provider>
  );
}

type CommandMenuTriggerProps = {
  variant?: "full" | "icon";
};

const getModifierKey = () => {
  if (typeof navigator === "undefined") return "Ctrl";
  return /Mac|iPhone|iPad/.test(navigator.userAgent) ? "⌘" : "Ctrl";
};

export function CommandMenu({ variant = "full" }: CommandMenuTriggerProps) {
  const context = useContext(CommandMenuContext);

  if (!context) {
    throw new Error("CommandMenu must be used within CommandMenuProvider");
  }

  const { setOpen } = context;

  if (variant === "icon") {
    return (
      <button
        onClick={() => setOpen(true)}
        className="inline-flex h-9 w-9 items-center justify-center rounded-md text-white/70 hover:bg-white/10 hover:text-white transition-colors"
        aria-label="Search"
      >
        <Search className="h-5 w-5" />
      </button>
    );
  }

  return (
    <button
      onClick={() => setOpen(true)}
      className="inline-flex w-64 items-center gap-2 rounded-md border border-white/20 bg-white/5 px-3 py-1.5 text-sm text-white/70 hover:bg-white/10 hover:text-white transition-colors"
    >
      <Search className="h-4 w-4" />
      <span className="flex-1 text-left text-white/50">Search...</span>
      <kbd className="pointer-events-none hidden h-5 select-none items-center gap-1 rounded border border-white/20 bg-white/10 px-1.5 font-mono text-[10px] font-medium sm:flex">
        <span className="text-xs">{getModifierKey()}</span> + K
      </kbd>
    </button>
  );
}
