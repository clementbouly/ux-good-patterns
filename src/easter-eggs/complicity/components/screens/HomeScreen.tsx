interface HomeScreenProps {
  onPlay: () => void;
}

export function HomeScreen({ onPlay }: HomeScreenProps) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 p-4">
      <div className="text-center">
        <h1 className="text-5xl font-bold tracking-tight">Complicity</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Fais deviner des mots à ton partenaire
        </p>
      </div>

      <button
        onClick={onPlay}
        className="rounded-full bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground transition-transform hover:scale-105 active:scale-95"
      >
        Jouer
      </button>
    </div>
  );
}
