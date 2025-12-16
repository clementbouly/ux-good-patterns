export type Article = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
};

export const articles: Article[] = [
  {
    slug: "otp-ux-guide",
    title: "The Complete Guide to OTP UX",
    description:
      "Best practices for verification code inputs, from email design to form implementation",
    tags: ["OTP", "Forms", "Verification"],
  },
  {
    slug: "ux-speed-game",
    title: "The UX Speed Challenge",
    description:
      "Experience firsthand how small UX frictions compound into major slowdowns",
    tags: ["Interactive", "Game", "Micro-interactions"],
  },
];
