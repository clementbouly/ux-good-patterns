import { HomeScreen } from "./components/screens/HomeScreen";
import { useGameStore } from "./store/useGameStore";
import { colors } from "./constants/colors";

export function ComplicityApp() {
  const { screen, setScreen } = useGameStore();

  const handlePlay = () => {
    setScreen("mode");
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: colors.navy }}>
      {screen === "home" && <HomeScreen onPlay={handlePlay} />}

      {screen === "mode" && (
        <div className="flex min-h-screen items-center justify-center">
          <p style={{ color: colors.lime }}>Mode selection - Coming soon</p>
        </div>
      )}

      {screen === "setup" && (
        <div className="flex min-h-screen items-center justify-center">
          <p style={{ color: colors.lime }}>Setup screen - Coming soon</p>
        </div>
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
    </div>
  );
}
