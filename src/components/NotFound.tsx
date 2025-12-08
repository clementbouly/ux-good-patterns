import { Link } from "@tanstack/react-router";
import { Home, SearchX } from "lucide-react";
import { useRandomGif } from "@/hooks/useRandomGif";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

type NotFoundProps = {
  title?: string;
  backTo?: string;
  backSearch?: Record<string, string>;
  backLabel?: string;
};

const funMessages = [
  "This cat looked everywhere. The page is gone.",
  "Even this cat can't find what you're looking for.",
  "404: This cat is as confused as you are.",
  "The page ran away. This cat is judging you.",
  "Lost? This cat knows the feeling.",
  "This cat pushed your page off the table.",
];

function getRandomMessage() {
  return funMessages[Math.floor(Math.random() * funMessages.length)];
}

export function NotFound({
  title = "Page not found",
  backTo = "/",
  backSearch,
  backLabel = "Back to home",
}: NotFoundProps) {
  const displayMessage = getRandomMessage();
  const { gif, isLoading } = useRandomGif();

  return (
    <div className="flex flex-col items-center justify-center py-3 text-center">
      <h1 className="text-4xl font-bold tracking-tight">404</h1>
      <h2 className="mt-2 text-xl font-semibold">{title}</h2>

      <div className="my-6 overflow-hidden rounded-lg">
        {isLoading ? (
          <Skeleton className="h-40 w-56 md:h-64 md:w-80" />
        ) : gif ? (
          <img src={gif} alt="Random funny gif" className="h-40 w-auto md:h-64 rounded-lg" />
        ) : (
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-muted">
            <SearchX className="h-12 w-12 text-muted-foreground" />
          </div>
        )}
      </div>

      <p className="max-w-md text-muted-foreground">{displayMessage}</p>

      <Button asChild className="mt-6">
        <Link to={backTo} search={backSearch}>
          <Home className="mr-2 h-4 w-4" />
          {backLabel}
        </Link>
      </Button>
    </div>
  );
}
