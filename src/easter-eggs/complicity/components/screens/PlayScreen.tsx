import { useState, useEffect } from "react";
import { colors } from "../../constants/colors";
import { Logo } from "../Logo";
import { SwipeableCard } from "../SwipeableCard";
import { useGameStore, getCurrentPlayers, getTeamColor } from "../../store/useGameStore";

export function PlayScreen() {
  const {
    teams,
    currentTeamIndex,
    currentGiverIndex,
    currentWord,
    turnDuration,
    drawWord,
    availableWords,
    resetGame,
    onTeamWon,
    onNoOneFound,
  } = useGameStore();

  const [isCardFlipped, setIsCardFlipped] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(turnDuration);

  const currentTeam = teams[currentTeamIndex];
  const { giver, guessers } = getCurrentPlayers(currentTeam, currentGiverIndex);
  const teamColor = getTeamColor(currentTeam?.colorIndex ?? 0);

  // Formater les noms des guessers pour le bouton
  const guessersText = guessers.length === 1
    ? guessers[0].name
    : guessers.map(g => g.name).join(" & ");

  // Timer countdown - ne démarre qu'après le flip de la carte
  useEffect(() => {
    if (!isCardFlipped || timeRemaining <= 0) return;

    const interval = setInterval(() => {
      setTimeRemaining((prev) => Math.max(0, prev - 1));
    }, 1000);

    return () => clearInterval(interval);
  }, [isCardFlipped, timeRemaining]);

  // Format time as MM:SS
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}min et ${secs.toString().padStart(2, "0")}sec`;
  };

  const handleFlipCard = () => setIsCardFlipped(true);

  // Trouver l'équipe adverse
  const opposingTeamIndex = (currentTeamIndex + 1) % teams.length;
  const opposingTeam = teams[opposingTeamIndex];

  if (!giver || guessers.length === 0 || !currentWord) {
    return null;
  }

  return (
    <>
      {/* Card jaune principale */}
      <div
        className="flex w-full max-w-md flex-col items-center gap-4 rounded-3xl px-6 py-6"
        style={{ backgroundColor: colors.lime }}
      >
        {/* Logo */}
        <Logo width={180} height={38} />

        {/* Bandeau "Au tour de X" */}
        <div
          className="w-full rounded-full px-4 py-2 text-center"
          style={{ backgroundColor: colors.navy }}
        >
          <span style={{ color: "white" }}>Au tour de </span>
          <span className="font-bold" style={{ color: teamColor }}>
            {giver.name}
          </span>
        </div>

        {/* Timer avec bordure pointillée */}
        <div
          className="flex items-center gap-2 rounded-full px-4 py-2"
          style={{
            border: `2px dashed ${timeRemaining <= 30 ? colors.pink : colors.navy}`,
          }}
        >
          <span className="text-lg">⏰</span>
          <span
            className="text-sm font-medium"
            style={{ color: timeRemaining <= 30 ? colors.pink : colors.navy }}
          >
            Plus que {formatTime(timeRemaining)}
          </span>
        </div>

        {/* Carte retournable avec swipe */}
        <SwipeableCard
          word={currentWord}
          nextWord={availableWords[availableWords.length - 1]}
          isFlipped={isCardFlipped}
          onFlip={handleFlipCard}
          onSwipe={drawWord}
        />

        {/* Boutons de sélection du gagnant (après flip) */}
        {isCardFlipped && (
          <div className="flex w-full flex-col gap-3">
            <p className="text-center text-sm font-medium mt-2" style={{ color: colors.navy }}>
              Qui a trouvé ?
            </p>

            <div className="flex gap-2">
              {/* Colonne gauche : équipe actuelle + adversaires */}
              <div className="flex flex-1 flex-col gap-2">
                {/* Bouton équipe actuelle */}
                <button
                  onClick={() => onTeamWon(currentTeam.id)}
                  className="rounded-xl px-4 py-3 text-sm font-bold transition-transform duration-100 active:scale-95"
                  style={{
                    backgroundColor: teamColor,
                    color: "white",
                  }}
                >
                  {guessersText} {guessers.length > 1 ? "ont" : "a"} trouvé
                </button>

                {/* Bouton adversaires */}
                <button
                  onClick={() => onTeamWon(opposingTeam.id)}
                  className="rounded-xl px-4 py-3 text-sm font-bold transition-transform duration-100 active:scale-95"
                  style={{
                    backgroundColor: getTeamColor(opposingTeam.colorIndex),
                    color: "white",
                  }}
                >
                  Les adversaires ont trouvé
                </button>
              </div>

              {/* Colonne droite : personne */}
              <button
                onClick={onNoOneFound}
                className="flex h-auto w-20 items-center justify-center rounded-xl px-2 py-3 text-sm font-medium transition-transform duration-100 active:scale-95"
                style={{
                  backgroundColor: "#9CA3AF",
                  color: "white",
                  writingMode: "vertical-lr",
                  transform: "rotate(180deg)",
                }}
              >
                Personne
              </button>
            </div>
          </div>
        )}
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
