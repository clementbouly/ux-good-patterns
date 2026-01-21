import { languages, type Lang } from "@/i18n";

interface LanguageSwitcherProps {
  currentLang: Lang;
  switchUrl: string;
}

export function LanguageSwitcher({ currentLang, switchUrl }: LanguageSwitcherProps) {
  const otherLang = currentLang === "en" ? "fr" : "en";

  return (
    <a
      href={switchUrl}
      className="flex items-center gap-1.5 rounded-md px-2 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
      aria-label={`Switch to ${languages[otherLang]}`}
    >
      <span className="text-base">{otherLang === "fr" ? "🇫🇷" : "🇬🇧"}</span>
      <span className="hidden sm:inline">{languages[otherLang]}</span>
    </a>
  );
}
