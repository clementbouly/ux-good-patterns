import { useState } from "react";
import { HomeScreen } from "./components/screens/HomeScreen";
import type { Screen } from "./types";

export function ComplicityApp() {
  const [screen, setScreen] = useState<Screen>("home");

  const handlePlay = () => {
    setScreen("setup");
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {screen === "home" && <HomeScreen onPlay={handlePlay} />}
      {screen === "setup" && (
        <div className="flex min-h-screen items-center justify-center">
          <p className="text-muted-foreground">Setup screen - Coming soon</p>
        </div>
      )}
    </div>
  );
}
