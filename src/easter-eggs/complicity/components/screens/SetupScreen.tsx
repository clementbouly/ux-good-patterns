import { useState } from "react";
import { colors } from "../../constants/colors";
import { Logo } from "../Logo";
import { useGameStore, type Team } from "../../store/useGameStore";

const MIN_PLAYERS_PER_TEAM = 2;
const MAX_PLAYERS_PER_TEAM = 3;

interface PlayerSlotProps {
  player?: { id: string; name: string };
  isOptional?: boolean;
  onAdd: () => void;
  onRemove?: () => void;
}

function PlayerSlot({ player, isOptional, onAdd, onRemove }: PlayerSlotProps) {
  if (player) {
    return (
      <button
        onClick={onRemove}
        className="flex h-16 w-24 items-center justify-center rounded-xl px-2 text-sm font-medium transition-transform active:scale-95"
        style={{
          backgroundColor: colors.pink,
          color: "white",
        }}
      >
        <span className="truncate">{player.name}</span>
        <span className="ml-1 text-xs opacity-80">✕</span>
      </button>
    );
  }

  return (
    <button
      onClick={onAdd}
      className={`flex h-16 w-24 flex-col items-center justify-center rounded-xl text-xs font-medium transition-transform active:scale-95 ${
        isOptional ? "opacity-50" : ""
      }`}
      style={{
        backgroundColor: "transparent",
        color: colors.lime,
        border: `2px ${isOptional ? "dashed" : "solid"} ${colors.lime}`,
      }}
    >
      <span>ajouter</span>
      <span>joueur</span>
    </button>
  );
}

interface TeamCardProps {
  team: Team;
  teamIndex: number;
  onAddPlayer: (teamId: string) => void;
  onRemovePlayer: (teamId: string, playerId: string) => void;
  hasError?: boolean;
}

function TeamCard({ team, teamIndex, onAddPlayer, onRemovePlayer, hasError }: TeamCardProps) {
  const slots = [];

  for (let i = 0; i < MAX_PLAYERS_PER_TEAM; i++) {
    const player = team.players[i];
    const isOptional = i >= MIN_PLAYERS_PER_TEAM;

    slots.push(
      <PlayerSlot
        key={i}
        player={player}
        isOptional={isOptional && !player}
        onAdd={() => onAddPlayer(team.id)}
        onRemove={player ? () => onRemovePlayer(team.id, player.id) : undefined}
      />
    );
  }

  return (
    <div
      className={`rounded-2xl p-4 ${hasError ? "animate-shake" : ""}`}
      style={{ backgroundColor: colors.navy }}
    >
      <h3 className="mb-3 text-sm font-bold" style={{ color: colors.lime }}>
        Équipe {teamIndex + 1}
      </h3>
      <div className="flex gap-2">{slots}</div>
    </div>
  );
}

interface SetupScreenProps {
  onStart: () => void;
  onBack: () => void;
}

export function SetupScreen({ onStart, onBack }: SetupScreenProps) {
  const { teams, addPlayerToTeam, removePlayerFromTeam } = useGameStore();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [teamsWithError, setTeamsWithError] = useState<string[]>([]);
  const [editingSlot, setEditingSlot] = useState<{
    teamId: string;
    slotIndex: number;
  } | null>(null);
  const [playerName, setPlayerName] = useState("");

  const handleAddPlayer = (teamId: string) => {
    setEditingSlot({ teamId, slotIndex: 0 });
    setPlayerName("");
  };

  const handleConfirmPlayer = () => {
    if (editingSlot && playerName.trim()) {
      addPlayerToTeam(editingSlot.teamId, playerName.trim());
      setEditingSlot(null);
      setPlayerName("");
      setErrorMessage(null);
      setTeamsWithError([]);
    }
  };

  const handleRemovePlayer = (teamId: string, playerId: string) => {
    removePlayerFromTeam(teamId, playerId);
  };

  const handleStart = () => {
    const invalidTeams = teams.filter((team) => team.players.length < MIN_PLAYERS_PER_TEAM);

    if (invalidTeams.length > 0) {
      setErrorMessage(`Minimum ${MIN_PLAYERS_PER_TEAM} joueurs par équipe`);
      setTeamsWithError(invalidTeams.map((t) => t.id));
      // Reset animation after it plays
      setTimeout(() => setTeamsWithError([]), 500);
      return;
    }

    onStart();
  };

  return (
    <>
      {/* Card jaune principale */}
      <div
        className="flex w-full max-w-md flex-col items-center gap-6 rounded-3xl px-6 py-8"
        style={{ backgroundColor: colors.lime }}
      >
        {/* Logo */}
        <Logo width={200} height={42} />

        {/* Teams */}
        <div className="flex w-full flex-col gap-4">
          {teams.map((team, index) => (
            <TeamCard
              key={team.id}
              team={team}
              teamIndex={index}
              onAddPlayer={handleAddPlayer}
              onRemovePlayer={handleRemovePlayer}
              hasError={teamsWithError.includes(team.id)}
            />
          ))}
        </div>

        {/* Error message */}
        {errorMessage && (
          <p className="text-sm font-medium" style={{ color: colors.pink }}>
            {errorMessage}
          </p>
        )}

        {/* Boutons */}
        <div className="flex w-full flex-col items-center gap-3">
          <button
            onClick={handleStart}
            className="w-full rounded-full px-12 py-4 text-lg font-bold transition-transform active:scale-95"
            style={{
              backgroundColor: colors.pink,
              color: "white",
            }}
          >
            Commencer
          </button>

          <button
            onClick={onBack}
            className="text-sm font-medium transition-opacity active:opacity-70"
            style={{ color: colors.navy }}
          >
            ← Retour
          </button>
        </div>
      </div>

      {/* Modal d'ajout de joueur */}
      {editingSlot && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          onClick={() => setEditingSlot(null)}
        >
          <div
            className="w-full max-w-xs rounded-2xl p-6"
            style={{ backgroundColor: colors.lime }}
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="mb-4 text-center text-lg font-bold" style={{ color: colors.navy }}>
              Nom du joueur
            </h3>
            <input
              type="text"
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleConfirmPlayer()}
              placeholder="Ex: Tintin"
              autoFocus
              className="mb-4 w-full rounded-xl px-4 py-3 text-center font-medium outline-none"
              style={{
                backgroundColor: "white",
                color: colors.navy,
                border: `2px solid ${colors.navy}`,
              }}
            />
            <div className="flex gap-2">
              <button
                onClick={() => setEditingSlot(null)}
                className="flex-1 rounded-full py-3 font-medium transition-transform active:scale-95"
                style={{
                  backgroundColor: "transparent",
                  color: colors.navy,
                  border: `2px solid ${colors.navy}`,
                }}
              >
                Annuler
              </button>
              <button
                onClick={handleConfirmPlayer}
                className="flex-1 rounded-full py-3 font-bold transition-transform active:scale-95"
                style={{
                  backgroundColor: colors.pink,
                  color: "white",
                }}
              >
                Ajouter
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
