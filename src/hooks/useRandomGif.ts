import { useEffect, useState } from "react";

// Using cataas.com - a free public API for cat images/gifs (no API key needed)
export function useRandomGif() {
  const [gif, setGif] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Add timestamp to prevent caching and get a different cat each time
    const url = `https://cataas.com/cat/gif?${Date.now()}`;

    // Preload the image to handle loading state properly
    const img = new Image();
    img.onload = () => {
      setGif(url);
      setIsLoading(false);
    };
    img.onerror = () => {
      setIsLoading(false);
    };
    img.src = url;
  }, []);

  return { gif, isLoading };
}
