const NEW_THRESHOLD_DAYS = 3;

/**
 * Check if a date string is considered "new" (within the last 3 days)
 */
export function isNew(dateString: string): boolean {
  const date = new Date(dateString);
  const now = new Date();
  const diffTime = now.getTime() - date.getTime();
  const diffDays = diffTime / (1000 * 60 * 60 * 24);
  return diffDays <= NEW_THRESHOLD_DAYS;
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
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}
