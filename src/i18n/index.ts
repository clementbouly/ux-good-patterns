import { ui, defaultLang, type Lang } from "./ui";

/**
 * Create a translation function for a specific language
 * This is still needed for UI strings as Astro doesn't provide this
 */
export function useTranslations(lang: Lang) {
  return function t(
    key: keyof (typeof ui)[typeof defaultLang],
    params?: Record<string, string>
  ): string {
    let text: string = ui[lang][key] ?? ui[defaultLang][key] ?? key;

    // Replace {param} placeholders
    if (params) {
      Object.entries(params).forEach(([param, value]) => {
        text = text.replace(`{${param}}`, value);
      });
    }

    return text;
  };
}

/**
 * Get Lang type from Astro.currentLocale (which returns string | undefined)
 */
export function getLangFromLocale(locale: string | undefined): Lang {
  if (locale && locale in ui) return locale as Lang;
  return defaultLang;
}

export { ui, defaultLang, languages } from "./ui";
export type { Lang } from "./ui";
