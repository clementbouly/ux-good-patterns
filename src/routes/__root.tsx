import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { ThemeToggle } from "@/components/ThemeToggle";

export const rootRoute = createRootRoute({
  component: RootLayout,
});

function RootLayout() {
  return (
    <div className="min-h-screen bg-background bg-dotted dark:bg-dotted">
      <header className="border-b bg-[#0a0a0a] text-white">
        <div className="container mx-auto flex items-start justify-between px-4 py-6">
          <div>
            <Link to="/" className="hover:opacity-80">
              <h1 className="text-5xl font-bold">The Good, The Bad and The UX</h1>
            </Link>
            <p className="mt-5 text-2xl text-white/70">
              A collection of UX patterns with comparative examples
            </p>
          </div>
          <ThemeToggle />
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Outlet />
      </main>

      <footer className="bg-[#0a0a0a] border-t py-8 text-center text-sm text-muted-foreground">
        <p className="mb-2">Open source project - Want to contribute?</p>
        <div className="flex flex-col items-center gap-2 sm:flex-row sm:justify-center sm:gap-4">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/clementbouly/ux-good-patterns"
            className="underline hover:text-foreground"
          >
            Contribute code on GitHub
          </a>
          <span className="hidden text-border sm:inline">|</span>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/clementbouly/ux-good-patterns/issues"
            className="underline hover:text-foreground"
          >
            Suggest a pattern (no code required)
          </a>
        </div>
      </footer>
    </div>
  );
}
