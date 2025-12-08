/**
 * Sets a different favicon in development mode
 * to easily distinguish dev from production tabs
 */
export function setDevFavicon() {
  if (import.meta.env.DEV) {
    const link = document.querySelector<HTMLLinkElement>("link[rel~='icon']");
    if (link) {
      link.href = "/logo-dev.png";
    }
  }
}
