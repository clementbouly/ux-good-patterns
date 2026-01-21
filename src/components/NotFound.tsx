import { useState, useEffect } from "react";
import { Home, SearchX } from "lucide-react";
import { useRandomGif } from "@/hooks/useRandomGif";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useI18n } from "@/hooks/useI18n";

type NotFoundProps = {
  backTo?: string;
};

export function NotFound({ backTo }: NotFoundProps) {
  const { t, lang } = useI18n();
  const [displayMessage, setDisplayMessage] = useState("");

  const funMessages = [
    t("notFound.message1"),
    t("notFound.message2"),
    t("notFound.message3"),
    t("notFound.message4"),
    t("notFound.message5"),
    t("notFound.message6"),
  ];

  useEffect(() => {
    setDisplayMessage(funMessages[Math.floor(Math.random() * funMessages.length)]);
  }, []);

  const { gif, isLoading } = useRandomGif();

  const homeHref = backTo || (lang === "fr" ? "/fr/" : "/");

  return (
    <div className="flex flex-col items-center justify-center py-3 text-center">
      <h1 className="text-4xl font-bold tracking-tight">404</h1>
      <h2 className="mt-2 text-xl font-semibold">{t("notFound.title")}</h2>

      <div className="my-6 overflow-hidden rounded-lg">
        {isLoading ? (
          <Skeleton className="h-40 w-56 md:h-64 md:w-80" />
        ) : gif ? (
          <img src={gif} alt="Random funny gif" className="h-40 w-auto rounded-lg md:h-64" />
        ) : (
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-muted">
            <SearchX className="h-12 w-12 text-muted-foreground" />
          </div>
        )}
      </div>

      <p className="max-w-md text-muted-foreground">{displayMessage}</p>

      <Button asChild className="mt-6">
        <a href={homeHref}>
          <Home className="mr-2 h-4 w-4" />
          {t("common.backToHome")}
        </a>
      </Button>
    </div>
  );
}
