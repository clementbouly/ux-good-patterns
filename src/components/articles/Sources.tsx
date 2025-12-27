import { useState } from "react";
import { ChevronDown } from "lucide-react";

export type Source = {
  id: number;
  authors: string;
  year: number;
  title: string;
  publication: string;
  url?: string;
};

type SourcesProps = {
  sources: Source[];
};

export function Sources({ sources }: SourcesProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="my-8 border border-neutral-200 dark:border-neutral-700 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 py-3 bg-neutral-50 dark:bg-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors text-left"
      >
        <span className="font-medium text-neutral-900 dark:text-neutral-100">
          Sources ({sources.length})
        </span>
        <ChevronDown
          className={`w-5 h-5 text-neutral-500 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <ol className="list-none p-4 space-y-3 bg-white dark:bg-neutral-900">
          {sources.map((source) => (
            <li
              key={source.id}
              id={`source-${source.id}`}
              className="text-sm text-neutral-600 dark:text-neutral-400 scroll-mt-24"
            >
              <span className="font-medium text-neutral-900 dark:text-neutral-100">
                [{source.id}]
              </span>{" "}
              {source.authors} ({source.year}).{" "}
              <em>"{source.title}"</em>. {source.publication}.
              {source.url && (
                <>
                  {" "}
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Link
                  </a>
                </>
              )}
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}

type SourceRefProps = {
  id: number;
};

export function SourceRef({ id }: SourceRefProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();

    // Find the Sources container by looking for its unique structure
    const sourcesContainer = document.querySelector(
      '[class*="my-8"][class*="border"][class*="rounded-lg"]'
    );

    if (!sourcesContainer) return;

    const button = sourcesContainer.querySelector("button");
    const contentList = sourcesContainer.querySelector("ol");

    // If dropdown is closed (no ol visible), open it
    if (!contentList && button) {
      button.click();
    }

    // Wait for the dropdown to open, then scroll to the source
    setTimeout(() => {
      const element = document.getElementById(`source-${id}`);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
        // Highlight briefly
        element.classList.add("bg-yellow-100", "dark:bg-yellow-900/30");
        setTimeout(() => {
          element.classList.remove("bg-yellow-100", "dark:bg-yellow-900/30");
        }, 2000);
      }
    }, 150);
  };

  return (
    <a
      href={`#source-${id}`}
      className="text-blue-600 dark:text-blue-400 hover:underline text-sm align-super"
      onClick={handleClick}
    >
      [{id}]
    </a>
  );
}
