import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { getMotsByCategories, categoriesRecommandees } from "../data/mots_complet";
import { teamColors } from "../constants/colors";

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
  colorIndex: number; // Index dans teamColors
}

// Résultat d'une manche
export interface RoundResult {
  roundNumber: number;
  winningTeamIndex: number | null; // null si personne n'a trouvé
}

export type Screen =
  | "home"
  | "setup"
  | "playerAnnounce"
  | "play"
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
  currentGiverIndex: number; // Index du joueur qui donne l'indice dans son équipe
  roundResults: RoundResult[]; // Historique des manches

  // Mots
  availableWords: string[];
  currentWord: string | null;
  usedWords: string[];
}

// Helper pour obtenir la couleur d'une équipe
export const getTeamColor = (colorIndex: number): string => {
  return teamColors[colorIndex % teamColors.length];
};

// Helper pour obtenir le joueur qui donne l'indice et ceux qui devinent
export const getCurrentPlayers = (
  team: Team,
  giverIndex: number
): { giver: Player | null; guessers: Player[] } => {
  if (team.players.length < 2) {
    return { giver: null, guessers: [] };
  }
  const actualGiverIndex = giverIndex % team.players.length;
  const giver = team.players[actualGiverIndex];
  // Tous les autres joueurs devinent
  const guessers = team.players.filter((_, i) => i !== actualGiverIndex);
  return { giver, guessers };
};

interface GameActions {
  // Navigation
  setScreen: (screen: Screen) => void;

  // Setup
  addTeam: (name: string) => void;
  removeTeam: (teamId: string) => void;
  addPlayerToTeam: (teamId: string, playerName: string) => void;
  removePlayerFromTeam: (teamId: string, playerId: string) => void;
  setTotalRounds: (rounds: number) => void;

  // Jeu
  startGame: (categories: string[]) => void;
  startTurn: () => void;
  drawWord: () => void;
  skipWord: () => void;
  wordFound: (winningTeamId: string) => void;
  wordNotFound: () => void;
  nextTurn: () => void;
  onTeamWon: (teamId: string) => void;
  onNoOneFound: () => void;

  // Scores
  addScore: (teamId: string, points: number) => void;

  // Reset
  resetGame: () => void;
}

const generateId = (): string => {
  // Fallback pour les navigateurs qui ne supportent pas crypto.randomUUID (HTTP, anciens mobiles)
  if (typeof crypto !== "undefined" && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  // Fallback avec Math.random
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

const shuffleArray = <T>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const TOTAL_ROUNDS = 12;

const initialState: GameState = {
  screen: "home",
  teams: [
    { id: generateId(), name: "Équipe 1", players: [], score: 0, colorIndex: 0 },
    { id: generateId(), name: "Équipe 2", players: [], score: 0, colorIndex: 1 },
  ],
  turnDuration: 120,
  totalRounds: TOTAL_ROUNDS,
  currentRound: 1,
  currentTeamIndex: 0,
  currentGiverIndex: 0,
  roundResults: [],
  availableWords: [],
  currentWord: null,
  usedWords: [],
};

export const useGameStore = create<GameState & GameActions>()(
  persist(
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
          colorIndex: state.teams.length, // Assigner la couleur suivante
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

    setTotalRounds: (rounds) =>
      set((state) => {
        state.totalRounds = rounds;
      }),

    // Jeu
    startGame: (categories) =>
      set((state) => {
        // Utiliser les catégories recommandées par défaut (exclut les expressions françaises)
        const categoriesToUse = categories.length > 0 ? categories : categoriesRecommandees;
        const words = getMotsByCategories(categoriesToUse);
        state.availableWords = shuffleArray(words);
        state.usedWords = [];
        state.currentWord = null;
        state.currentRound = 1;
        state.currentTeamIndex = 0;
        state.currentGiverIndex = 0;
        state.roundResults = [];
        // Reset scores
        state.teams.forEach((team) => {
          team.score = 0;
        });
        state.screen = "playerAnnounce";
      }),

    startTurn: () => {
      get().drawWord();
      set((state) => {
        state.screen = "play";
      });
    },

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
          const winningTeamIndex = state.teams.findIndex((t) => t.id === winningTeamId);
          const team = state.teams[winningTeamIndex];
          if (team) {
            team.score += 1;
          }
          // Enregistrer le résultat de la manche
          state.roundResults.push({
            roundNumber: state.currentRound,
            winningTeamIndex: winningTeamIndex >= 0 ? winningTeamIndex : null,
          });
          state.currentWord = null;
          // Ne pas changer l'écran ici, laisser nextTurn() gérer
        }
      }),

    wordNotFound: () =>
      set((state) => {
        if (state.currentWord) {
          state.usedWords.push(state.currentWord);
          // Enregistrer la manche sans gagnant
          state.roundResults.push({
            roundNumber: state.currentRound,
            winningTeamIndex: null,
          });
          state.currentWord = null;
          // Ne pas changer l'écran ici, laisser nextTurn() gérer
        }
      }),

    nextTurn: () =>
      set((state) => {
        const { teams, currentRound, totalRounds } = state;

        // Logique de rotation :
        // Manche 1: Équipe 0, joueur 0 donne -> joueur 1 devine
        // Manche 2: Équipe 1, joueur 0 donne -> joueur 1 devine
        // Manche 3: Équipe 0, joueur 1 donne -> joueur 0 devine
        // Manche 4: Équipe 1, joueur 1 donne -> joueur 0 devine
        // etc.

        // Passer à l'équipe suivante
        const nextTeamIndex = (state.currentTeamIndex + 1) % teams.length;

        // Si on revient à l'équipe 0, on change le giver
        let nextGiverIndex = state.currentGiverIndex;
        if (nextTeamIndex === 0) {
          // On a fait le tour des équipes, on passe au giver suivant
          const maxPlayers = Math.max(...teams.map((t) => t.players.length));
          nextGiverIndex = (state.currentGiverIndex + 1) % maxPlayers;
        }

        state.currentTeamIndex = nextTeamIndex;
        state.currentGiverIndex = nextGiverIndex;

        // Vérifier si la partie est terminée
        if (currentRound >= totalRounds) {
          state.screen = "finalRanking";
        } else {
          state.currentRound = currentRound + 1;
          state.screen = "playerAnnounce";
        }
      }),

    onTeamWon: (teamId) => {
      get().wordFound(teamId);
      get().nextTurn();
    },

    onNoOneFound: () => {
      get().wordNotFound();
      get().nextTurn();
    },

    // Scores
    addScore: (teamId, points) =>
      set((state) => {
        const team = state.teams.find((t) => t.id === teamId);
        if (team) {
          team.score += points;
        }
      }),

    // Reset (conserve les équipes et joueurs)
    resetGame: () =>
      set((state) => {
        state.screen = "home";
        state.currentRound = 1;
        state.currentTeamIndex = 0;
        state.currentGiverIndex = 0;
        state.roundResults = [];
        state.availableWords = [];
        state.currentWord = null;
        state.usedWords = [];
        state.teams.forEach((team) => {
          team.score = 0;
        });
      }),
    })),
    {
      name: "complicity-game",
      // Ne persister que les équipes avec leurs joueurs
      partialize: (state) => ({
        teams: state.teams.map((team) => ({
          id: team.id,
          name: team.name,
          players: team.players,
          score: 0, // Toujours reset le score
          colorIndex: team.colorIndex,
        })),
      }),
    }
  )
);
