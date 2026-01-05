import { colors } from "../constants/colors";
import { useGameStore, getTeamColor } from "../store/useGameStore";

interface CardProgressProps {
  className?: string;
}

export function CardProgress({ className }: CardProgressProps) {
  const { totalRounds, roundResults, teams } = useGameStore();

  return (
    <div className={`flex w-full justify-center gap-0.5 ${className ?? ""}`}>
      {Array.from({ length: totalRounds }).map((_, index) => {
        const result = roundResults[index];
        const isPlayed = result !== undefined;
        const winningTeamIndex = result?.winningTeamIndex;

        return (
          <div
            key={index}
            className="relative aspect-[7/10] min-w-0 flex-1 rounded-sm transition-all duration-300"
            style={{
              maxWidth: "28px",
              backgroundColor:
                isPlayed && winningTeamIndex !== null
                  ? getTeamColor(teams[winningTeamIndex]?.colorIndex ?? 0)
                  : colors.navy,
              border: `2px solid ${colors.lime}`,
            }}
          >
            {/* Face cachée - motif dos de carte */}
            {!isPlayed && (
              <div
                className="absolute inset-0.5 rounded-sm"
                style={{
                  background: `repeating-linear-gradient(
                    45deg,
                    ${colors.lime}40,
                    ${colors.lime}40 2px,
                    transparent 2px,
                    transparent 4px
                  )`,
                }}
              />
            )}
            {/* Face révélée - numéro de l'équipe gagnante */}
            {isPlayed && winningTeamIndex !== null && (
              <div className="flex h-full w-full items-center justify-center">
                <span
                  className="text-xs font-bold"
                  style={{ color: "white" }}
                >
                  {winningTeamIndex + 1}
                </span>
              </div>
            )}
            {/* Match nul / personne n'a trouvé */}
            {isPlayed && winningTeamIndex === null && (
              <div className="flex h-full w-full items-center justify-center">
                <span
                  className="text-xs"
                  style={{ color: colors.lime }}
                >
                  -
                </span>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
