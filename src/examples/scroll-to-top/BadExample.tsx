import { useRef } from "react";

const FAKE_CONTENT = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  title: `Article ${i + 1}`,
  excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
}));

export function BadExample() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative">
      <div
        ref={containerRef}
        className="h-[400px] overflow-y-auto rounded-lg border bg-background"
      >
        <div className="p-4 space-y-4">
          <h3 className="text-lg font-semibold sticky top-0 bg-background py-2 border-b">
            Blog Articles
          </h3>
          <p className="text-sm text-muted-foreground">
            Scroll down and try to get back to the top...
          </p>
          {FAKE_CONTENT.map((item) => (
            <article
              key={item.id}
              className="rounded-lg border p-4 space-y-2"
            >
              <h4 className="font-medium">{item.title}</h4>
              <p className="text-sm text-muted-foreground">{item.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
      <p className="mt-3 text-center text-xs text-muted-foreground">
        No way to quickly return to the top
      </p>
    </div>
  );
}
