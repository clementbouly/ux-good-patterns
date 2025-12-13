import { useState, useEffect, type RefObject } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ScrollToTopProps = {
  containerRef?: RefObject<HTMLElement | null>;
  threshold?: number;
  className?: string;
};

export default function ScrollToTop({
  containerRef,
  threshold = 300,
  className,
}: ScrollToTopProps = {}) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const target = containerRef?.current ?? window;

    const toggleVisibility = () => {
      const scrollTop = containerRef?.current
        ? containerRef.current.scrollTop
        : window.scrollY;
      setIsVisible(scrollTop > threshold);
    };

    target.addEventListener("scroll", toggleVisibility);
    return () => target.removeEventListener("scroll", toggleVisibility);
  }, [containerRef, threshold]);

  const scrollToTop = () => {
    const target = containerRef?.current ?? window;
    target.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={cn(
        "rounded-full shadow-lg transition-all duration-300 bg-background! dark:bg-card!",
        containerRef ? "absolute bottom-4 right-4" : "fixed bottom-6 right-6 z-50",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none",
        className
      )}
    >
      <ArrowUp className="h-5 w-5" />
    </Button>
  );
}
