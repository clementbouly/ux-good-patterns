import { GithubIcon, LinkedinIcon, PlusIcon } from "@/components/icons";

export function Footer() {
  return (
    <footer className="border-t bg-[#0a0a0a] py-8 text-center text-sm text-muted-foreground">
      <p className="mb-2">Open source project - Want to contribute?</p>
      <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
        <a
          target="_blank"
          rel="noopener"
          href="https://github.com/clementbouly/ux-good-patterns"
          className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/5 px-4 py-2 transition-colors hover:bg-white/10"
        >
          <GithubIcon className="h-4 w-4" />
          Contribute on GitHub
        </a>
        <a
          target="_blank"
          rel="noopener"
          href="https://github.com/clementbouly/ux-good-patterns/issues"
          className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/5 px-4 py-2 transition-colors hover:bg-white/10"
        >
          <PlusIcon className="h-4 w-4" />
          Suggest a pattern
        </a>
      </div>
      <div className="mt-4 flex items-center justify-center gap-3">
        <span>Made by Clément Bouly</span>
        <a
          target="_blank"
          rel="noopener"
          href="https://github.com/clementbouly"
          className="transition-colors hover:text-foreground"
          aria-label="GitHub"
        >
          <GithubIcon className="h-5 w-5" />
        </a>
        <a
          target="_blank"
          rel="noopener"
          href="https://www.linkedin.com/in/clément-bouly-2720a3150/"
          className="transition-colors hover:text-foreground"
          aria-label="LinkedIn"
        >
          <LinkedinIcon className="h-5 w-5" />
        </a>
      </div>
    </footer>
  );
}
