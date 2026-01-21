import type { Lang } from "@/i18n";
import { useTranslations } from "@/i18n";

export type NavLink = {
  href: string;
  label: string;
  active: boolean;
  highlight?: boolean;
};

type NavConfig = {
  basePath: string;
  labelKey: "nav.examples" | "nav.articles" | "nav.resources" | "nav.aiContext";
  segments: string[];
  highlight?: boolean;
};

const NAV_CONFIG: NavConfig[] = [
  { basePath: "/", labelKey: "nav.examples", segments: ["", "example", "fr"] },
  {
    basePath: "/articles",
    labelKey: "nav.articles",
    segments: ["article", "articles"],
  },
  { basePath: "/resources", labelKey: "nav.resources", segments: ["resources"] },
  {
    basePath: "/ai",
    labelKey: "nav.aiContext",
    segments: ["ai"],
    highlight: true,
  },
];

/**
 * Get navigation links with active state based on current path
 */
export function getNavLinks(pathname: string, lang: Lang = "en"): NavLink[] {
  const t = useTranslations(lang);

  // Normalize path and get segments
  const path = pathname.replace(/\/$/, "") || "/";
  const segments = path.split("/").filter(Boolean);

  // Remove lang prefix if present to get the actual segment
  const actualSegments = segments[0] === "fr" ? segments.slice(1) : segments;
  const currentSegment = actualSegments[0] || "";

  // Determine the lang prefix for hrefs
  const langPrefix = lang === "fr" ? "/fr" : "";

  return NAV_CONFIG.map((config) => ({
    href: config.basePath === "/" ? `${langPrefix}/` : `${langPrefix}${config.basePath}`,
    label: t(config.labelKey),
    active: config.segments.includes(currentSegment),
    highlight: config.highlight,
  }));
}
