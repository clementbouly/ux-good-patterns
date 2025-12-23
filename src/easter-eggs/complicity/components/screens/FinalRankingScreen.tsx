import { useEffect, useState } from "react";
import { colors } from "../../constants/colors";
import { Logo } from "../Logo";
import { useGameStore, getTeamColor } from "../../store/useGameStore";

// Composant confetti
function Confetti() {
  const [confettis] = useState(() =>
    Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 3,
      duration: 2 + Math.random() * 2,
      color: [colors.pink, colors.lime, "#FFD700", "#FF6B6B", "#4ECDC4"][
        Math.floor(Math.random() * 5)
      ],
      size: 8 + Math.random() * 8,
      rotation: Math.random() * 360,
    }))
  );

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      {confettis.map((c) => (
        <div
          key={c.id}
          className="absolute animate-confetti"
          style={{
            left: `${c.left}%`,
            top: "-20px",
            width: `${c.size}px`,
            height: `${c.size}px`,
            backgroundColor: c.color,
            borderRadius: Math.random() > 0.5 ? "50%" : "2px",
            transform: `rotate(${c.rotation}deg)`,
            animationDelay: `${c.delay}s`,
            animationDuration: `${c.duration}s`,
          }}
        />
      ))}
      <style>{`
        @keyframes confetti-fall {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
          }
        }
        .animate-confetti {
          animation: confetti-fall linear infinite;
        }
      `}</style>
    </div>
  );
}

// Composant pour le podium
function PodiumPlace({
  rank,
  displayRank,
  playerNames,
  score,
  color,
  isWinner,
}: {
  rank: number; // Position pour l'ordre d'affichage (1, 2, 3)
  displayRank: number; // Rang affiché (peut être le même en cas d'égalité)
  playerNames: string[];
  score: number;
  color: string;
  isWinner: boolean;
}) {
  const heights = { 1: "h-32", 2: "h-24", 3: "h-16" };
  const positions = { 1: "order-2", 2: "order-1", 3: "order-3" };

  return (
    <div
      className={`flex flex-col items-center ${positions[rank as 1 | 2 | 3]}`}
    >
      {/* Trophée/médaille pour le gagnant */}
      {isWinner && (
        <div className="mb-2 animate-bounce text-4xl">🏆</div>
      )}

      {/* Noms des joueurs */}
      <div
        className="mb-2 flex flex-col items-center rounded-2xl px-3 py-2 text-center"
        style={{ backgroundColor: color, color: "white" }}
      >
        {playerNames.map((name, i) => (
          <span key={i} className="text-sm font-bold leading-tight">
            {name}
          </span>
        ))}
      </div>

      {/* Score */}
      <div
        className="mb-1 text-2xl font-bold"
        style={{ color: colors.navy }}
      >
        {score} pts
      </div>

      {/* Podium - hauteur basée sur le rang affiché */}
      <div
        className={`flex w-24 items-end justify-center rounded-t-lg ${
          heights[displayRank as 1 | 2 | 3] || "h-16"
        }`}
        style={{ backgroundColor: color }}
      >
        <span
          className="mb-2 text-3xl font-bold"
          style={{ color: "white" }}
        >
          {displayRank}
        </span>
      </div>
    </div>
  );
}

export function FinalRankingScreen() {
  const { teams, totalRounds, resetGame } = useGameStore();
  const [showConfetti, setShowConfetti] = useState(true);

  // Trier les équipes par score décroissant
  const sortedTeams = [...teams].sort((a, b) => b.score - a.score);
  const winner = sortedTeams[0];
  const topScore = winner?.score ?? 0;
  const isTie = sortedTeams.length > 1 && sortedTeams[0].score === sortedTeams[1].score;

  // Calculer le pourcentage de réussite pour adapter les messages
  const winRate = totalRounds > 0 ? topScore / totalRounds : 0;

  // Calculer le rang réel de chaque équipe (égalité = même rang)
  const getRank = (index: number): number => {
    if (index === 0) return 1;
    // Si même score que l'équipe précédente, même rang
    if (sortedTeams[index].score === sortedTeams[index - 1].score) {
      return getRank(index - 1);
    }
    // Sinon, rang = nombre d'équipes avec un meilleur score + 1
    return sortedTeams.filter((t) => t.score > sortedTeams[index].score).length + 1;
  };

  // Arrêter les confettis après quelques secondes
  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(false), 8000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showConfetti && <Confetti />}

      {/* Card jaune principale */}
      <div
        className="flex w-full max-w-md flex-col items-center gap-6 rounded-3xl px-6 py-8"
        style={{ backgroundColor: colors.lime }}
      >
        {/* Logo */}
        <Logo width={180} height={38} />

        {/* Titre */}
        <div className="text-center">
          <h1
            className="text-2xl font-bold"
            style={{ color: colors.navy }}
          >
            {isTie ? "Égalité !" : "Partie terminée !"}
          </h1>
          {!isTie && (
            <p
              className="mt-1 px-4 text-lg"
              style={{ color: colors.navy }}
            >
              <span
                className="font-bold"
                style={{ color: getTeamColor(winner.colorIndex) }}
              >
                {winner.name}
              </span>{" "}
              remporte la victoire !
            </p>
          )}
        </div>

        {/* Podium (pour 2+ équipes) */}
        {sortedTeams.length >= 2 && (
          <div className="flex items-end justify-center gap-2 pt-4">
            {sortedTeams.slice(0, Math.min(3, sortedTeams.length)).map((team, index) => {
              const displayRank = getRank(index);
              const isWinner = team.score === topScore;
              return (
                <PodiumPlace
                  key={team.id}
                  rank={index + 1}
                  displayRank={displayRank}
                  playerNames={team.players.map((p) => p.name)}
                  score={team.score}
                  color={getTeamColor(team.colorIndex)}
                  isWinner={isWinner}
                />
              );
            })}
          </div>
        )}

        {/* Message d'encouragement */}
        <div
          className="rounded-2xl px-4 py-3 text-center"
          style={{ backgroundColor: colors.navy }}
        >
          <p className="text-sm" style={{ color: colors.lime }}>
            {isTie
              ? "🤝 Match nul, revanche obligatoire !"
              : winRate >= 0.7
              ? "🔥 Performance exceptionnelle !"
              : winRate >= 0.5
              ? "👏 Bien joué !"
              : winRate >= 0.3
              ? "💪 C'était serré !"
              : "🎲 La prochaine sera la bonne !"}
          </p>
        </div>

        {/* Bouton rejouer */}
        <button
          onClick={resetGame}
          className="w-full rounded-full px-12 py-4 text-lg font-bold transition-transform active:scale-95"
          style={{
            backgroundColor: colors.pink,
            color: "white",
          }}
        >
          🔄 Rejouer
        </button>
      </div>
    </>
  );
}
