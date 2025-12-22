import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { getAllMots, getMotsByCategories } from "../data/mots_complet";

// Types
export interface Player {
  id: string;
  name: string;
}

export interface Team {
  id: string;
  name: string;
  players: Player[];
  score: number;
}

export type Screen =
  | "home"
  | "setup"
  | "playerAnnounce"
  | "play"
  | "selectWinner"
  | "ranking"
  | "finalRanking";

interface GameState {
  // Navigation
  screen: Screen;

  // Configuration
  teams: Team[];
  turnDuration: number; // en secondes
  totalRounds: number;

  // Partie en cours
  currentRound: number;
  currentTeamIndex: number;
  currentPlayerIndex: number;

  // Mots
  availableWords: string[];
  currentWord: string | null;
  usedWords: string[];
}

interface GameActions {
  // Navigation
  setScreen: (screen: Screen) => void;

  // Setup
  addTeam: (name: string) => void;
  removeTeam: (teamId: string) => void;
  addPlayerToTeam: (teamId: string, playerName: string) => void;
  removePlayerFromTeam: (teamId: string, playerId: string) => void;

  // Jeu
  startGame: (categories: string[]) => void;
  drawWord: () => void;
  skipWord: () => void;
  wordFound: (winningTeamId: string) => void;
  wordNotFound: () => void;
  nextTurn: () => void;

  // Scores
  addScore: (teamId: string, points: number) => void;

  // Reset
  resetGame: () => void;
}

const generateId = () => crypto.randomUUID();

const shuffleArray = <T>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const initialState: GameState = {
  screen: "home",
  teams: [
    { id: generateId(), name: "Équipe 1", players: [], score: 0 },
    { id: generateId(), name: "Équipe 2", players: [], score: 0 },
  ],
  turnDuration: 120,
  totalRounds: 12,
  currentRound: 1,
  currentTeamIndex: 0,
  currentPlayerIndex: 0,
  availableWords: [],
  currentWord: null,
  usedWords: [],
};

export const useGameStore = create<GameState & GameActions>()(
  immer((set, get) => ({
    ...initialState,

    // Navigation
    setScreen: (screen) =>
      set((state) => {
        state.screen = screen;
      }),

    // Setup
    addTeam: (name) =>
      set((state) => {
        state.teams.push({
          id: generateId(),
          name,
          players: [],
          score: 0,
        });
      }),

    removeTeam: (teamId) =>
      set((state) => {
        state.teams = state.teams.filter((t) => t.id !== teamId);
      }),

    addPlayerToTeam: (teamId, playerName) =>
      set((state) => {
        const team = state.teams.find((t) => t.id === teamId);
        if (team) {
          team.players.push({
            id: generateId(),
            name: playerName,
          });
        }
      }),

    removePlayerFromTeam: (teamId, playerId) =>
      set((state) => {
        const team = state.teams.find((t) => t.id === teamId);
        if (team) {
          team.players = team.players.filter((p) => p.id !== playerId);
        }
      }),

    // Jeu
    startGame: (categories) =>
      set((state) => {
        const words =
          categories.length > 0
            ? getMotsByCategories(categories)
            : getAllMots();
        state.availableWords = shuffleArray(words);
        state.usedWords = [];
        state.currentWord = null;
        state.currentRound = 1;
        state.currentTeamIndex = 0;
        state.currentPlayerIndex = 0;
        // Reset scores
        state.teams.forEach((team) => {
          team.score = 0;
        });
        state.screen = "playerAnnounce";
      }),

    drawWord: () =>
      set((state) => {
        if (state.availableWords.length > 0) {
          const word = state.availableWords.pop()!;
          state.currentWord = word;
        }
      }),

    skipWord: () =>
      set((state) => {
        if (state.currentWord) {
          // Remettre le mot dans la pile (au début pour qu'il ressorte plus tard)
          state.availableWords.unshift(state.currentWord);
          state.currentWord = null;
        }
      }),

    wordFound: (winningTeamId) =>
      set((state) => {
        if (state.currentWord) {
          state.usedWords.push(state.currentWord);
          const team = state.teams.find((t) => t.id === winningTeamId);
          if (team) {
            team.score += 1;
          }
          state.currentWord = null;
          state.screen = "selectWinner";
        }
      }),

    wordNotFound: () =>
      set((state) => {
        if (state.currentWord) {
          state.usedWords.push(state.currentWord);
          state.currentWord = null;
          state.screen = "selectWinner";
        }
      }),

    nextTurn: () =>
      set((state) => {
        const { teams, currentRound, totalRounds } = state;

        // Calculer le prochain joueur/équipe
        let nextTeamIndex = state.currentTeamIndex;
        let nextPlayerIndex = state.currentPlayerIndex;

        // Passer au joueur suivant dans la même équipe ou à l'équipe suivante
        const currentTeam = teams[nextTeamIndex];
        if (currentTeam && nextPlayerIndex < currentTeam.players.length - 1) {
          nextPlayerIndex++;
        } else {
          nextPlayerIndex = 0;
          nextTeamIndex = (nextTeamIndex + 1) % teams.length;
        }

        state.currentTeamIndex = nextTeamIndex;
        state.currentPlayerIndex = nextPlayerIndex;

        // Vérifier si la partie est terminée
        if (currentRound >= totalRounds && state.availableWords.length === 0) {
          state.screen = "finalRanking";
        } else {
          state.currentRound = currentRound + 1;
          state.screen = "playerAnnounce";
        }
      }),

    // Scores
    addScore: (teamId, points) =>
      set((state) => {
        const team = state.teams.find((t) => t.id === teamId);
        if (team) {
          team.score += points;
        }
      }),

    // Reset
    resetGame: () =>
      set((state) => {
        Object.assign(state, {
          ...initialState,
          teams: [
            { id: generateId(), name: "Équipe 1", players: [], score: 0 },
            { id: generateId(), name: "Équipe 2", players: [], score: 0 },
          ],
        });
      }),
  }))
);
