import { useState, useEffect } from "react";
import { colors } from "../constants/colors";
import { useGameStore, getTeamColor } from "../store/useGameStore";

export function TeamScoreBars() {
  const { teams, totalRounds, roundResults } = useGameStore();

  // Trouver l'équipe gagnante de la dernière manche
  const lastWinner = roundResults[roundResults.length - 1]?.winningTeamIndex ?? null;

  // Initialiser avec les scores AVANT la dernière manche (pour animer)
  const [animatedScores, setAnimatedScores] = useState<number[]>(() =>
    teams.map((t, i) =>
      i === lastWinner ? Math.max(0, t.score - 1) : t.score
    )
  );

  // Animer vers les scores actuels après un court délai
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedScores(teams.map((t) => t.score));
    }, 150);
    return () => clearTimeout(timer);
  }, [teams]);

  // Constantes pour le calcul de largeur
  const MIN_WIDTH = 15;
  const MAX_WIDTH = 100;

  return (
    <div className="flex w-full flex-col gap-2">
      {teams.map((team, index) => {
        const teamColor = getTeamColor(team.colorIndex);
        const displayScore = animatedScores[index] ?? 0;
        // Largeur proportionnelle au score sur totalRounds (12 manches = 100%)
        const widthPercent = displayScore > 0
          ? MIN_WIDTH + ((displayScore / totalRounds) * (MAX_WIDTH - MIN_WIDTH))
          : MIN_WIDTH;

        return (
          <div key={team.id} className="flex items-center gap-2">
            {/* Nom de l'équipe */}
            <span
              className="w-16 shrink-0 text-xs font-medium"
              style={{ color: colors.navy }}
            >
              Équipe {index + 1}
            </span>

            {/* Barre de score */}
            <div
              className="relative flex h-8 items-center justify-end rounded-full px-3 transition-all duration-700 ease-out"
              style={{
                backgroundColor: teamColor,
                width: `${widthPercent}%`,
                minWidth: "40px",
              }}
            >
              {/* Score */}
              <span
                className="text-sm font-bold"
                style={{ color: "white" }}
              >
                {team.score}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
