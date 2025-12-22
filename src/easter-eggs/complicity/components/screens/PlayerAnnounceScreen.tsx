import { colors } from "../../constants/colors";
import { Logo } from "../Logo";
import { CardProgress } from "../CardProgress";
import {
  useGameStore,
  getCurrentPlayers,
  getTeamColor,
} from "../../store/useGameStore";

interface PlayerAnnounceScreenProps {
  onContinue: () => void;
}

export function PlayerAnnounceScreen({ onContinue }: PlayerAnnounceScreenProps) {
  const { teams, currentTeamIndex, currentGiverIndex } = useGameStore();

  const currentTeam = teams[currentTeamIndex];
  const { giver, guesser } = getCurrentPlayers(currentTeam, currentGiverIndex);
  const teamColor = getTeamColor(currentTeam?.colorIndex ?? 0);

  if (!giver || !guesser) {
    return null;
  }

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
          className="flex h-36 w-36 flex-col items-center justify-center rounded-full"
          style={{
            border: `4px solid ${teamColor}`,
            backgroundColor: "white",
          }}
        >
          <span
            className="text-2xl font-bold"
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
        <p className="text-sm" style={{ color: colors.navy }}>
          Équipe {currentTeamIndex + 1} - {guesser.name} devine
        </p>

        {/* CTA */}
        <button
          onClick={onContinue}
          className="w-full rounded-full px-12 py-4 text-lg font-bold transition-transform active:scale-95"
          style={{
            backgroundColor: colors.pink,
            color: "white",
          }}
        >
          Continuer
        </button>
      </div>
    </>
  );
}
