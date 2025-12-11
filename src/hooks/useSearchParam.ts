import { useState, useEffect, useCallback } from "react";

const URL_CHANGE_EVENT = "urlchange";

type SearchParamKey = "category";

function getSearchParam(key: SearchParamKey): string | undefined {
  if (typeof window === "undefined") return undefined;
  return new URLSearchParams(window.location.search).get(key) || undefined;
}

/**
 * Hook to read and update a URL search parameter.
 * Syncs state with the URL and listens for changes from other components.
 */
export function useSearchParam(key: SearchParamKey) {
  const [value, setValue] = useState<string | undefined>(undefined);

  // Read URL param after hydration and listen for changes
  useEffect(() => {
    const updateValue = () => setValue(getSearchParam(key));
    updateValue();
    window.addEventListener(URL_CHANGE_EVENT, updateValue);
    return () => window.removeEventListener(URL_CHANGE_EVENT, updateValue);
  }, [key]);

  const setParam = useCallback(
    (newValue: string | undefined) => {
      setValue(newValue);

      const url = new URL(window.location.href);
      if (newValue) {
        url.searchParams.set(key, newValue);
      } else {
        url.searchParams.delete(key);
      }
      window.history.replaceState({}, "", url.toString());

      // Notify other components
      window.dispatchEvent(new Event(URL_CHANGE_EVENT));
    },
    [key]
  );

  return [value, setParam] as const;
}
