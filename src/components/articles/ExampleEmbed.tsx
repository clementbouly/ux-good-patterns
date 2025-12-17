import { examples } from "@/examples";
import { ExampleCard } from "@/components/ExampleCard";

type ExampleEmbedProps = {
  id: string;
};

export function ExampleEmbed({ id }: ExampleEmbedProps) {
  const example = examples.find((e) => e.meta.id === id);

  if (!example) {
    return (
      <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-red-600 dark:border-red-900 dark:bg-red-950 dark:text-red-400">
        Example "{id}" not found
      </div>
    );
  }

  return (
    <div className="not-prose">
      <ExampleCard example={example} titleAs="h2" linkTitle={true} />
    </div>
  );
}
