import { Link, useMatchRoute } from "@tanstack/react-router";
import { ThemeToggle } from "@/components/ThemeToggle";
import { CommandMenu } from "@/components/CommandMenu";

export function Header() {
  const matchRoute = useMatchRoute();
  const isHome = Boolean(matchRoute({ to: "/" }));

  return (
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
  );
}
