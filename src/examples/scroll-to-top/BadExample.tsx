import { useRef } from "react";
import { useDemoI18n } from "@/hooks/useI18n";

export function BadExample() {
  const { td } = useDemoI18n();
  const containerRef = useRef<HTMLDivElement>(null);

  const FAKE_CONTENT = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    title: `${td("scroll.article")} ${i + 1}`,
    excerpt: td("scroll.loremIpsum"),
  }));

  return (
    <div className="relative">
      <div ref={containerRef} className="h-[400px] overflow-y-auto rounded-lg border bg-background">
        <div className="p-4 space-y-4">
          <h3 className="text-lg font-semibold sticky top-0 bg-background py-2 border-b">
            {td("scroll.blogArticles")}
          </h3>
          <p className="text-sm text-muted-foreground">{td("scroll.scrollDownTry")}</p>
          {FAKE_CONTENT.map((item) => (
            <article key={item.id} className="rounded-lg border p-4 space-y-2">
              <h4 className="font-medium">{item.title}</h4>
              <p className="text-sm text-muted-foreground">{item.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
      <p className="mt-3 text-center text-xs text-muted-foreground">{td("scroll.noWayBack")}</p>
    </div>
  );
}
