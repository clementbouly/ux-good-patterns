import { GameLayout } from "./components/GameLayout";
import { HomeScreen } from "./components/screens/HomeScreen";
import { SetupScreen } from "./components/screens/SetupScreen";
import { PlayerAnnounceScreen } from "./components/screens/PlayerAnnounceScreen";
import { PlayScreen } from "./components/screens/PlayScreen";
import { FinalRankingScreen } from "./components/screens/FinalRankingScreen";
import { useGameStore } from "./store/useGameStore";

export function ComplicityApp() {
  const screen = useGameStore((state) => state.screen);

  return (
    <GameLayout>
      {screen === "home" && <HomeScreen />}
      {screen === "setup" && <SetupScreen />}
      {screen === "playerAnnounce" && <PlayerAnnounceScreen />}
      {screen === "play" && <PlayScreen />}
      {screen === "finalRanking" && <FinalRankingScreen />}
    </GameLayout>
  );
}
