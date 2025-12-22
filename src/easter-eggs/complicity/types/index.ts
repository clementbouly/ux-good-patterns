export type Screen = "home" | "setup" | "ready" | "play" | "roundEnd" | "gameEnd";

export interface GameConfig {
  teams: string[];
  categories: string[];
  turnDuration: number; // in seconds
}

export interface GameState {
  screen: Screen;
  config: GameConfig | null;
}
