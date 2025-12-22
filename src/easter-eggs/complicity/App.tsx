import { GameLayout } from "./components/GameLayout";
import { HomeScreen } from "./components/screens/HomeScreen";
import { SetupScreen } from "./components/screens/SetupScreen";
import { PlayerAnnounceScreen } from "./components/screens/PlayerAnnounceScreen";
import { PlayScreen } from "./components/screens/PlayScreen";
import { useGameStore } from "./store/useGameStore";
import { colors } from "./constants/colors";

export function ComplicityApp() {
  const { screen, setScreen, startGame, drawWord, wordFound, wordNotFound, nextTurn } =
    useGameStore();

  const handlePlay = () => {
    setScreen("setup");
  };

  const handleStartGame = () => {
    startGame([]); // Start with all categories for now
  };

  const handleBackToHome = () => {
    setScreen("home");
  };

  const handleContinueToPlay = () => {
    drawWord();
    setScreen("play");
  };

  const handleTeamWon = (teamId: string) => {
    wordFound(teamId);
    nextTurn();
  };

  const handleNoOneFound = () => {
    wordNotFound();
    nextTurn();
  };

  return (
    <GameLayout>
      {screen === "home" && <HomeScreen onPlay={handlePlay} />}

      {screen === "setup" && (
        <SetupScreen onStart={handleStartGame} onBack={handleBackToHome} />
      )}

      {screen === "playerAnnounce" && (
        <PlayerAnnounceScreen onContinue={handleContinueToPlay} />
      )}

      {screen === "play" && (
        <PlayScreen onTeamWon={handleTeamWon} onNoOneFound={handleNoOneFound} />
      )}

      {screen === "ranking" && (
        <div className="flex min-h-screen items-center justify-center">
          <p style={{ color: colors.lime }}>Ranking - Coming soon</p>
        </div>
      )}

      {screen === "finalRanking" && (
        <div className="flex min-h-screen items-center justify-center">
          <p style={{ color: colors.lime }}>Final ranking - Coming soon</p>
        </div>
      )}
    </GameLayout>
  );
}
