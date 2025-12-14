export type NavLink = {
  href: string;
  label: string;
  active: boolean;
  highlight?: boolean;
};

type NavConfig = {
  href: string;
  label: string;
  segments: string[];
  highlight?: boolean;
};

const NAV_CONFIG: NavConfig[] = [
  { href: "/", label: "Examples", segments: ["", "example"] },
  { href: "/articles", label: "Articles", segments: ["article", "articles"] },
  { href: "/resources", label: "Resources", segments: ["resources"] },
  { href: "/ai", label: "AI Context", segments: ["ai"], highlight: true },
];

/**
 * Get navigation links with active state based on current path
 */
export function getNavLinks(pathname: string): NavLink[] {
  // Normalize path and get first segment
  const path = pathname.replace(/\/$/, "") || "/";
  const segment = path.split("/")[1] || "";

  return NAV_CONFIG.map((config) => ({
    href: config.href,
    label: config.label,
    active: config.segments.includes(segment),
    highlight: config.highlight,
  }));
}
