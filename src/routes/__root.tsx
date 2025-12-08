import { createRootRoute, Outlet } from "@tanstack/react-router";
import { CommandMenuProvider } from "@/components/CommandMenu";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const rootRoute = createRootRoute({
  component: RootLayout,
});

function RootLayout() {
  return (
    <CommandMenuProvider>
      <div className="flex min-h-screen flex-col bg-background bg-dotted dark:bg-dotted">
        <Header />
        <main className="container mx-auto flex-1 px-4 py-8">
          <Outlet />
        </main>
        <Footer />
      </div>
    </CommandMenuProvider>
  );
}
