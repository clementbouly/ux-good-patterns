import { Label } from "@/components/ui/label";
import { useDemoI18n } from "@/hooks/useI18n";
import { cn } from "@/lib/utils";
import { AlertTriangle } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const TITLE_MAX_LENGTH = 15;
const DESCRIPTION_MAX_LENGTH = 100;

type HighlightedInputProps = {
  id: string;
  value: string;
  onChange: (value: string) => void;
  maxLength: number;
  placeholder?: string;
};

/**
 * Input with overflow highlighting using the overlay technique:
 * - A visible div renders the text with overflow styled in red
 * - The actual input sits on top with transparent text but visible caret
 * - pointer-events-none prevents the overlay from intercepting clicks
 */
function HighlightedInput({
  id,
  value,
  onChange,
  maxLength,
  placeholder,
}: HighlightedInputProps) {
  const isOverLimit = value.length > maxLength;
  const validText = value.slice(0, maxLength);
  const overflowText = value.slice(maxLength);

  return (
    <div className="relative">
      {/* Visible text layer - shows styled overflow */}
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-0 flex items-center overflow-hidden rounded-md border border-transparent px-3 py-1",
          isOverLimit && "border-destructive"
        )}
      >
        <span className="truncate text-base md:text-sm">
          <span>{validText}</span>
          {overflowText && (
            <span className="bg-destructive/30">{overflowText}</span>
          )}
        </span>
      </div>

      {/* Actual input - transparent text, visible caret */}
      <input
        id={id}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        aria-invalid={isOverLimit}
        className={cn(
          "placeholder:text-muted-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base text-transparent caret-foreground shadow-xs transition-[color,box-shadow] outline-none md:text-sm",
          "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive"
        )}
      />
    </div>
  );
}

type HighlightedTextareaProps = {
  id: string;
  value: string;
  onChange: (value: string) => void;
  maxLength: number;
  placeholder?: string;
  className?: string;
};

/**
 * Textarea with overflow highlighting using the overlay technique.
 * Same principle as HighlightedInput, plus scroll synchronization
 * to keep the highlight layer aligned when content overflows.
 */
function HighlightedTextarea({
  id,
  value,
  onChange,
  maxLength,
  placeholder,
  className,
}: HighlightedTextareaProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const highlightRef = useRef<HTMLDivElement>(null);
  const isOverLimit = value.length > maxLength;
  const validText = value.slice(0, maxLength);
  const overflowText = value.slice(maxLength);

  // Keep highlight layer scroll position in sync with textarea
  useEffect(() => {
    const textarea = textareaRef.current;
    const highlight = highlightRef.current;
    if (!textarea || !highlight) return;

    const handleScroll = () => {
      highlight.scrollTop = textarea.scrollTop;
    };

    textarea.addEventListener("scroll", handleScroll);
    return () => textarea.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative">
      {/* Visible text layer - shows styled overflow */}
      <div
        ref={highlightRef}
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-0 overflow-hidden whitespace-pre-wrap wrap-break-word rounded-md border border-transparent px-3 py-2 text-base md:text-sm",
          isOverLimit && "border-destructive",
          className
        )}
      >
        <span>{validText}</span>
        {overflowText && (
          <span className="bg-destructive/30">{overflowText}</span>
        )}
      </div>

      {/* Actual textarea - transparent text, visible caret */}
      <textarea
        ref={textareaRef}
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        aria-invalid={isOverLimit}
        className={cn(
          "placeholder:text-muted-foreground dark:bg-input/30 border-input w-full rounded-md border bg-transparent px-3 py-2 text-base text-transparent caret-foreground shadow-xs transition-[color,box-shadow] outline-none md:text-sm",
          "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          className
        )}
      />
    </div>
  );
}

export function GoodExample() {
  const { td } = useDemoI18n();
  const [title, setTitle] = useState(() => td("inputLimit.defaultTitle"));
  const [description, setDescription] = useState(() =>
    td("inputLimit.defaultDescription")
  );

  const isTitleOverLimit = title.length > TITLE_MAX_LENGTH;
  const titleOverCount = title.length - TITLE_MAX_LENGTH;
  const isDescriptionOverLimit = description.length > DESCRIPTION_MAX_LENGTH;
  const descriptionOverCount = description.length - DESCRIPTION_MAX_LENGTH;

  return (
    <div className="space-y-4">
      <div className="grid gap-2">
        <Label htmlFor="title-good">
          {td("inputLimit.articleTitle")}{" "}
          <span className="font-normal text-muted-foreground">
            ({td("inputLimit.maxCharsLabel", { max: TITLE_MAX_LENGTH })})
          </span>
        </Label>
        <HighlightedInput
          id="title-good"
          value={title}
          onChange={setTitle}
          maxLength={TITLE_MAX_LENGTH}
          placeholder={td("inputLimit.titlePlaceholder")}
        />
        {/* invisible (not hidden) reserves space to prevent layout shift */}
        <p
          className={cn(
            "flex items-center gap-1 text-sm text-destructive",
            !isTitleOverLimit && "invisible"
          )}
        >
          <AlertTriangle className="h-4 w-4" />
          {isTitleOverLimit
            ? td("inputLimit.charsOverLimit", {
                over: titleOverCount,
                current: title.length,
                max: TITLE_MAX_LENGTH,
              })
            : "\u00A0"}
        </p>
      </div>

      <div className="grid gap-2">
        <Label htmlFor="description-good">
          {td("inputLimit.description")}{" "}
          <span className="font-normal text-muted-foreground">
            ({td("inputLimit.maxCharsLabel", { max: DESCRIPTION_MAX_LENGTH })})
          </span>
        </Label>
        <HighlightedTextarea
          id="description-good"
          value={description}
          onChange={setDescription}
          maxLength={DESCRIPTION_MAX_LENGTH}
          placeholder={td("inputLimit.descriptionPlaceholder")}
          className="min-h-[120px]"
        />
        <p
          className={cn(
            "flex items-center gap-1 text-sm text-destructive",
            !isDescriptionOverLimit && "invisible"
          )}
        >
          <AlertTriangle className="h-4 w-4" />
          {isDescriptionOverLimit
            ? td("inputLimit.charsOverLimit", {
                over: descriptionOverCount,
                current: description.length,
                max: DESCRIPTION_MAX_LENGTH,
              })
            : "\u00A0"}
        </p>
      </div>
    </div>
  );
}
