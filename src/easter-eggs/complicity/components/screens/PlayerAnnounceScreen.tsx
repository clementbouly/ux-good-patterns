import { colors } from "../../constants/colors";
import { Logo } from "../Logo";
import { CardProgress } from "../CardProgress";
import { TeamScoreBars } from "../TeamScoreBars";
import {
  useGameStore,
  getCurrentPlayers,
  getTeamColor,
} from "../../store/useGameStore";

export function PlayerAnnounceScreen() {
  const { teams, currentTeamIndex, currentGiverIndex, startTurn, resetGame } = useGameStore();

  const currentTeam = teams[currentTeamIndex];
  const { giver, guessers } = getCurrentPlayers(currentTeam, currentGiverIndex);
  const teamColor = getTeamColor(currentTeam?.colorIndex ?? 0);

  if (!giver || guessers.length === 0) {
    return null;
  }

  // Formater les noms des guessers : "A et B" ou "A, B et C"
  const guessersText = guessers.length === 1
    ? guessers[0].name
    : guessers.slice(0, -1).map(g => g.name).join(", ") + " et " + guessers[guessers.length - 1].name;

  return (
    <>
      {/* Card jaune principale */}
      <div
        className="flex w-full max-w-md flex-col items-center gap-6 rounded-3xl px-6 py-8"
        style={{ backgroundColor: colors.lime }}
      >
        {/* Logo */}
        <Logo width={200} height={42} />

        {/* Barre de progression en cartes */}
        <CardProgress />

        {/* Cercle avec le joueur */}
        <div
          className="flex h-36 w-36 flex-col items-center justify-center rounded-full px-3"
          style={{
            border: `4px solid ${teamColor}`,
            backgroundColor: "white",
          }}
        >
          <span
            className="max-w-full truncate text-2xl font-bold"
            style={{ color: teamColor }}
          >
            {giver.name}
          </span>
          <span
            className="mt-1 text-sm"
            style={{ color: colors.navy }}
          >
            doit faire deviner
          </span>
        </div>

        {/* Info équipe */}
        <p className="max-w-full text-center text-sm" style={{ color: colors.navy }}>
          Équipe {currentTeamIndex + 1} — {guessersText} {guessers.length > 1 ? "devinent" : "devine"}
        </p>

        {/* CTA */}
        <button
          onClick={startTurn}
          className="w-full rounded-full px-12 py-4 text-lg font-bold transition-transform active:scale-95"
          style={{
            backgroundColor: colors.pink,
            color: "white",
          }}
        >
          Continuer
        </button>
      </div>

      {/* Card jaune secondaire - Classement */}
      <div
        className="mt-4 flex w-full max-w-md flex-col gap-3 rounded-3xl px-6 py-5"
        style={{ backgroundColor: colors.lime }}
      >
        <h3
          className="text-center text-sm font-bold"
          style={{ color: colors.navy }}
        >
          Classement
        </h3>
        <TeamScoreBars />
      </div>

      {/* Bouton quitter */}
      <button
        onClick={resetGame}
        className="mt-4 text-sm font-medium opacity-60 transition-opacity hover:opacity-100"
        style={{ color: colors.lime }}
      >
        Quitter la partie
      </button>
    </>
  );
}
