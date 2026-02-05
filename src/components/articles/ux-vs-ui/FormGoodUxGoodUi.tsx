import { useState, useRef, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { countries } from "./countries";
import { EMAIL_REGEX, type Translations } from "./types";

type HighlightedTextareaProps = {
  id: string;
  value: string;
  onChange: (value: string) => void;
  maxLength: number;
  placeholder?: string;
  rows?: number;
};

function HighlightedTextarea({
  id,
  value,
  onChange,
  maxLength,
  placeholder,
  rows = 3,
}: HighlightedTextareaProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const highlightRef = useRef<HTMLDivElement>(null);
  const isOverLimit = value.length > maxLength;
  const validText = value.slice(0, maxLength);
  const overflowText = value.slice(maxLength);

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
          "pointer-events-none absolute inset-0 overflow-hidden whitespace-pre-wrap break-words rounded-md border border-transparent px-3 py-2 text-base md:text-sm",
          isOverLimit && "border-destructive"
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
        rows={rows}
        aria-invalid={isOverLimit}
        className={cn(
          "placeholder:text-muted-foreground dark:bg-input/30 border-input w-full rounded-md border bg-transparent px-3 py-2 text-base text-transparent caret-foreground shadow-xs transition-[color,box-shadow] outline-none md:text-sm",
          "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          "resize-none"
        )}
      />
    </div>
  );
}

type Props = {
  translations: Translations;
  lang: "en" | "fr";
};

export function FormGoodUxGoodUi({ translations: t, lang }: Props) {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [country, setCountry] = useState("");
  const [countryError, setCountryError] = useState("");
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const [motivation, setMotivation] = useState("");
  const [motivationError, setMotivationError] = useState("");

  const maxChars = 35;
  const charCount = motivation.length;
  const isOverLimit = charCount > maxChars;

  const validateEmail = (value: string) => {
    if (!value) {
      setEmailError(t.emailRequired);
      return false;
    }
    if (!EMAIL_REGEX.test(value)) {
      setEmailError(t.emailError);
      return false;
    }
    setEmailError("");
    return true;
  };

  const handleEmailBlur = () => {
    // Good UX: validate only on blur
    if (email) validateEmail(email);
  };

  const selectedCountry = countries.find((c) => c.code === country);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate all fields
    const isEmailValid = validateEmail(email);

    const isCountryValid = !!country;
    if (!isCountryValid) {
      setCountryError(t.countryRequired);
    } else {
      setCountryError("");
    }

    const isMotivationValid = !isOverLimit;
    if (!isMotivationValid) {
      setMotivationError(t.motivationTooLong);
    } else {
      setMotivationError("");
    }

    if (isEmailValid && isCountryValid && isMotivationValid) {
      alert(t.submitSuccess);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email-good-good">{t.email} <span className="text-destructive">*</span></Label>
        <Input
          id="email-good-good"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={handleEmailBlur}
          placeholder={t.emailPlaceholder}
          aria-invalid={!!emailError}
        />
        {emailError && (
          <p className="text-sm text-destructive">{emailError}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label>{t.country} <span className="text-destructive">*</span></Label>
        {/* Good UX: searchable combobox */}
        <Popover open={isCountryOpen} onOpenChange={setIsCountryOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={isCountryOpen}
              className="w-full justify-between font-normal bg-transparent"
            >
              {selectedCountry
                ? lang === "fr"
                  ? selectedCountry.nameFr
                  : selectedCountry.name
                : t.countryPlaceholder}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[--radix-popover-trigger-width] p-0">
            <Command>
              <CommandInput placeholder={t.countrySearch} />
              <CommandList>
                <CommandEmpty>{t.countryNoResults}</CommandEmpty>
                <CommandGroup>
                  {countries.map((c) => (
                    <CommandItem
                      key={c.code}
                      value={lang === "fr" ? c.nameFr : c.name}
                      onSelect={() => {
                        setCountry(c.code);
                        setIsCountryOpen(false);
                      }}
                    >
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          country === c.code ? "opacity-100" : "opacity-0"
                        )}
                      />
                      {lang === "fr" ? c.nameFr : c.name}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
        {countryError && (
          <p className="text-sm text-destructive">{countryError}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="motivation-good-good">{t.motivationLabel}</Label>
        {/* Good UX: highlight overflow text */}
        <HighlightedTextarea
          id="motivation-good-good"
          value={motivation}
          onChange={setMotivation}
          maxLength={maxChars}
          placeholder={t.motivationPlaceholderGoodUx}
          rows={3}
        />
        <div
          className={cn(
            "text-xs text-right",
            isOverLimit ? "text-destructive" : "text-muted-foreground"
          )}
        >
          {charCount}/{maxChars}
        </div>
        {motivationError && (
          <p className="text-sm text-destructive">{motivationError}</p>
        )}
      </div>

      {/* Good UX: clear visual hierarchy, primary action on the right */}
      <div className="flex justify-end gap-2">
        <Button type="button" variant="outline">
          {t.cancel}
        </Button>
        <Button type="submit">{t.submit}</Button>
      </div>
    </form>
  );
}
