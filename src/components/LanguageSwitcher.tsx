import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { languages, type Lang } from "@/i18n";
import { useI18n } from "@/hooks/useI18n";

interface LanguageSwitcherProps {
  currentLang: Lang;
  switchUrl: string;
}

const langFlags: Record<Lang, string> = {
  en: "🇬🇧",
  fr: "🇫🇷",
};

export function LanguageSwitcher({ currentLang, switchUrl }: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const otherLang = currentLang === "en" ? "fr" : "en";
  const { t } = useI18n();

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 rounded-md px-2 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        aria-label={t("lang.currentLanguage").replace("{lang}", languages[currentLang])}
        aria-expanded={isOpen}
      >
        <span className="text-base">{langFlags[currentLang]}</span>
        <span className="uppercase">{currentLang}</span>
        <ChevronDown className={`h-3 w-3 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full z-50 mt-1 min-w-[120px] rounded-md border bg-popover p-1 shadow-md">
          {/* Current language - shown as selected */}
          <div className="flex items-center gap-2 rounded-sm px-2 py-1.5 text-sm bg-accent text-accent-foreground">
            <span>{langFlags[currentLang]}</span>
            <span>{languages[currentLang]}</span>
          </div>

          {/* Other language - clickable */}
          <a
            href={switchUrl}
            className="flex items-center gap-2 rounded-sm px-2 py-1.5 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
            onClick={() => setIsOpen(false)}
          >
            <span>{langFlags[otherLang]}</span>
            <span>{languages[otherLang]}</span>
          </a>
        </div>
      )}
    </div>
  );
}
