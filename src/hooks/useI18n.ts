import { useMemo } from "react";
import { ui, defaultLang, type Lang } from "@/i18n/ui";
import { demoTranslations } from "@/i18n/demos";

/**
 * Get the current language from the browser URL (client-side)
 */
export function getLangFromPathname(pathname: string): Lang {
  const [, lang] = pathname.split("/");
  if (lang && lang in ui) return lang as Lang;
  return defaultLang;
}

/**
 * Hook to get the current language and translation function
 * For use in React components
 */
export function useI18n() {
  const lang = useMemo(() => {
    if (typeof window === "undefined") return defaultLang;
    return getLangFromPathname(window.location.pathname);
  }, []);

  const t = useMemo(() => {
    return function translate(
      key: keyof (typeof ui)[typeof defaultLang],
      params?: Record<string, string>
    ): string {
      let text: string = ui[lang][key] ?? ui[defaultLang][key] ?? key;

      if (params) {
        Object.entries(params).forEach(([param, value]) => {
          text = text.replace(`{${param}}`, value);
        });
      }

      return text;
    };
  }, [lang]);

  return { lang, t };
}

/**
 * Hook to get demo translations for example components
 */
export function useDemoI18n() {
  const lang = useMemo(() => {
    if (typeof window === "undefined") return defaultLang;
    return getLangFromPathname(window.location.pathname);
  }, []);

  const td = useMemo(() => {
    return function translateDemo(key: string, params?: Record<string, string | number>): string {
      let text: string = demoTranslations[lang]?.[key] ?? demoTranslations.en[key] ?? key;

      if (params) {
        Object.entries(params).forEach(([param, value]) => {
          text = text.replace(`{${param}}`, String(value));
        });
      }

      return text;
    };
  }, [lang]);

  return { lang, td };
}
