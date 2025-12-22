import { GameLayout } from "./components/GameLayout";
import { HomeScreen } from "./components/screens/HomeScreen";
import { SetupScreen } from "./components/screens/SetupScreen";
import { useGameStore } from "./store/useGameStore";
import { colors } from "./constants/colors";

export function ComplicityApp() {
  const { screen, setScreen, startGame } = useGameStore();

  const handlePlay = () => {
    setScreen("setup");
  };

  const handleStartGame = () => {
    startGame([]); // Start with all categories for now
  };

  const handleBackToHome = () => {
    setScreen("home");
  };

  return (
    <GameLayout>
      {screen === "home" && <HomeScreen onPlay={handlePlay} />}

      {screen === "setup" && (
        <SetupScreen onStart={handleStartGame} onBack={handleBackToHome} />
      )}

      {screen === "playerAnnounce" && (
        <div className="flex min-h-screen items-center justify-center">
          <p style={{ color: colors.lime }}>Player announce - Coming soon</p>
        </div>
      )}

      {screen === "play" && (
        <div className="flex min-h-screen items-center justify-center">
          <p style={{ color: colors.lime }}>Play screen - Coming soon</p>
        </div>
      )}

      {screen === "selectWinner" && (
        <div className="flex min-h-screen items-center justify-center">
          <p style={{ color: colors.lime }}>Select winner - Coming soon</p>
        </div>
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
