import { createRootRoute, Link, Outlet, useMatchRoute } from "@tanstack/react-router";
import { ThemeToggle } from "@/components/ThemeToggle";
import { CommandMenu, CommandMenuProvider } from "@/components/CommandMenu";
import { GithubIcon, LinkedinIcon, PlusIcon } from "@/components/icons";

export const rootRoute = createRootRoute({
  component: RootLayout,
});

function RootLayout() {
  const matchRoute = useMatchRoute();
  const isHome = Boolean(matchRoute({ to: "/" }));

  return (
    <CommandMenuProvider>
      <div className="flex min-h-screen flex-col bg-background bg-dotted dark:bg-dotted">
        <header className="border-b bg-[#0a0a0a] text-white">
          {/* Mobile sticky nav */}
          <div className="sticky top-0 z-50 flex items-center justify-end gap-2 bg-[#0a0a0a] px-4 py-2 md:hidden">
            <CommandMenu variant="icon" />
            <ThemeToggle />
          </div>

          <div className="container mx-auto flex items-start justify-between px-4 py-6 pt-2 md:pt-6">
            <div>
              <Link to="/" className={isHome ? "" : "hover:opacity-80"} disabled={isHome}>
                <h1 className="text-3xl font-bold md:text-5xl">The Good, The Bad and The UX</h1>
              </Link>
              <p className="mt-3 text-lg text-white/70 md:mt-5 md:text-2xl">
                A collection of UX patterns with comparative examples
              </p>
            </div>
            {/* Desktop controls */}
            <div className="hidden items-center gap-3 md:flex">
              <CommandMenu />
              <ThemeToggle />
            </div>
          </div>
        </header>

        <main className="container mx-auto flex-1 px-4 py-8">
          <Outlet />
        </main>

        <footer className="bg-[#0a0a0a] border-t py-8 text-center text-sm text-muted-foreground">
          <p className="mb-2">Open source project - Want to contribute?</p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/clementbouly/ux-good-patterns"
              className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/5 px-4 py-2 hover:bg-white/10 transition-colors"
            >
              <GithubIcon className="h-4 w-4" />
              Contribute on GitHub
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/clementbouly/ux-good-patterns/issues"
              className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/5 px-4 py-2 hover:bg-white/10 transition-colors"
            >
              <PlusIcon className="h-4 w-4" />
              Suggest a pattern
            </a>
          </div>
          <div className="mt-4 flex items-center justify-center gap-3">
            <span>Made by Clément Bouly</span>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/clementbouly"
              className="hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="h-5 w-5" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/clément-bouly-2720a3150/"
              className="hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="h-5 w-5" />
            </a>
          </div>
        </footer>
      </div>
    </CommandMenuProvider>
  );
}
