// Couleurs VERBAM officielles
export const colors = {
  navy: "#073752",
  lime: "#CDD522",
  pink: "#DF3890",
  blue: "#3B82F6",
} as const;

// Couleurs assignées aux équipes
export const teamColors = [colors.pink, colors.blue] as const;

export type ColorKey = keyof typeof colors;
