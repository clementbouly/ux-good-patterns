import { createRootRoute, Link, Outlet } from "@tanstack/react-router";

export const rootRoute = createRootRoute({
  component: RootLayout,
});

function RootLayout() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4 py-6">
          <Link to="/" className="hover:opacity-80">
            <h1 className="text-3xl font-bold">The Good, The Bad and The UX</h1>
          </Link>
          <p className="text-muted-foreground">
            A collection of UX patterns with comparative examples
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Outlet />
      </main>

      <footer className="border-t py-8 text-center text-sm text-muted-foreground">
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
