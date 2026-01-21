const EXAMPLE_NEW_THRESHOLD_DAYS = 14; // 2 weeks
const ARTICLE_NEW_THRESHOLD_DAYS = 28; // 4 weeks

function isWithinDays(dateString: string, days: number): boolean {
  const date = new Date(dateString);
  const now = new Date();
  const diffTime = now.getTime() - date.getTime();
  const diffDays = diffTime / (1000 * 60 * 60 * 24);
  return diffDays <= days;
}

/**
 * Check if an example is considered "new" (within the last 2 weeks)
 */
export function isNew(dateString: string): boolean {
  return isWithinDays(dateString, EXAMPLE_NEW_THRESHOLD_DAYS);
}

/**
 * Check if an article is considered "new" (within the last 4 weeks)
 */
export function isArticleNew(dateString: string): boolean {
  return isWithinDays(dateString, ARTICLE_NEW_THRESHOLD_DAYS);
}

/**
 * Sort items by createdAt date (newest first)
 */
export function sortByDate<T extends { meta: { createdAt: string } }>(items: T[]): T[] {
  return [...items].sort((a, b) => {
    return new Date(b.meta.createdAt).getTime() - new Date(a.meta.createdAt).getTime();
  });
}

/**
 * Format a date string to a readable format (e.g., "Dec 17, 2025")
 */
export function formatDate(dateString: string, locale: string = "en"): string {
  const date = new Date(dateString);
  const localeCode = locale === "fr" ? "fr-FR" : "en-US";
  return date.toLocaleDateString(localeCode, {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}
