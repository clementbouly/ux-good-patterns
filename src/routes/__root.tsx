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

      <footer className="border-t py-6 text-center text-sm text-muted-foreground">
        <p>
          Open source -{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/clementbouly/ux-good-patterns"
            className="underline hover:text-foreground"
          >
            Contribute on GitHub
          </a>
        </p>
      </footer>
    </div>
  );
}
