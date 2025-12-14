export type Resource = {
  title: string;
  description: string;
  url: string;
  category: "Principles" | "Case Studies" | "Tips" | "Tools";
};

export const resources: Resource[] = [
  {
    title: "Laws of UX",
    description:
      "A collection of UX principles backed by psychology research. Essential reading for understanding why certain patterns work.",
    url: "https://lawsofux.com/",
    category: "Principles",
  },
  {
    title: "Growth.Design Case Studies",
    description:
      "Comic-style UX case studies analyzing products like Duolingo, Spotify, and Netflix. Learn from real-world examples.",
    url: "https://growth.design/case-studies",
    category: "Case Studies",
  },
  {
    title: "UI Design Tips",
    description:
      "Practical UI & UX tips by Jim Raptis. Quick, actionable advice for improving your interfaces.",
    url: "https://www.uidesign.tips/ui-tips",
    category: "Tips",
  },
];
