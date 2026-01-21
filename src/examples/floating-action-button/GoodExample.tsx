import { PenSquare, Heart, MessageCircle, Share2 } from "lucide-react";
import { useDemoI18n } from "@/hooks/useI18n";

export function GoodExample() {
  const { td } = useDemoI18n();

  const FAKE_POSTS = Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    author: `${td("fab.user")} ${i + 1}`,
    content: td("fab.samplePost"),
    likes: 42 + i * 7,
    comments: 5 + i * 2,
  }));

  return (
    <div className="relative">
      <div className="h-[400px] overflow-y-auto rounded-lg border bg-background">
        <div className="p-4 space-y-4">
          <p className="text-xs text-muted-foreground text-center">
            {td("fab.scrollDownAccessible")}
          </p>

          {/* Feed */}
          {FAKE_POSTS.map((post) => (
            <article key={post.id} className="rounded-lg border p-4 space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-xs font-medium">
                  {post.author.charAt(0)}
                </div>
                <span className="font-medium text-sm">{post.author}</span>
              </div>
              <p className="text-sm">{post.content}</p>
              <div className="flex items-center gap-4 text-muted-foreground">
                <button className="flex items-center gap-1 text-xs hover:text-foreground transition-colors">
                  <Heart className="w-4 h-4" />
                  {post.likes}
                </button>
                <button className="flex items-center gap-1 text-xs hover:text-foreground transition-colors">
                  <MessageCircle className="w-4 h-4" />
                  {post.comments}
                </button>
                <button className="flex items-center gap-1 text-xs hover:text-foreground transition-colors">
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Floating Action Button - always visible */}
        <button
          className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 transition-all hover:scale-105 flex items-center justify-center"
          aria-label={td("fab.createPost")}
        >
          <PenSquare className="w-5 h-5" />
        </button>
      </div>
      <p className="mt-3 text-center text-xs text-muted-foreground">{td("fab.fabVisible")}</p>
    </div>
  );
}
