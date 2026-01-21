import type { Lang } from "./ui";

type ArticleTranslation = {
  title: string;
  description: string;
  tags: string[];
};

type ArticleTranslations = {
  [slug: string]: ArticleTranslation;
};

const articlesTranslations: Record<Lang, ArticleTranslations> = {
  en: {
    "linkedin-ux-mistakes": {
      title: "5 UX Mistakes Even LinkedIn Makes",
      description:
        "A deep dive into friction points on one of the world's largest platforms, and what they teach us about UX best practices",
      tags: ["Case Study", "Feedback", "Loading", "Navigation"],
    },
    "otp-ux-guide": {
      title: "The Complete Guide to OTP UX",
      description:
        "Best practices for verification code inputs, from email design to form implementation",
      tags: ["OTP", "Forms", "Verification"],
    },
    "ux-speed-game": {
      title: "The UX Speed Challenge",
      description: "Experience firsthand how small UX frictions compound into major slowdowns",
      tags: ["Interactive", "Game", "Micro-interactions"],
    },
  },
  fr: {
    "linkedin-ux-mistakes": {
      title: "5 erreurs UX que même LinkedIn commet",
      description:
        "Une analyse des points de friction sur l'une des plus grandes plateformes au monde, et ce qu'ils nous apprennent sur les bonnes pratiques UX",
      tags: ["Étude de cas", "Feedback", "Chargement", "Navigation"],
    },
    "otp-ux-guide": {
      title: "Le guide complet de l'UX des codes OTP",
      description:
        "Bonnes pratiques pour les champs de code de vérification, du design des emails à l'implémentation des formulaires",
      tags: ["OTP", "Formulaires", "Vérification"],
    },
    "ux-speed-game": {
      title: "Le défi UX contre-la-montre",
      description:
        "Découvrez comment les petites frictions UX s'accumulent en ralentissements majeurs",
      tags: ["Interactif", "Jeu", "Micro-interactions"],
    },
  },
};

/**
 * Get translated article metadata
 */
export function getArticleTranslation(slug: string, lang: Lang): ArticleTranslation | undefined {
  return articlesTranslations[lang]?.[slug];
}

/**
 * Get all translated tags for a language
 */
export function getTranslatedTags(lang: Lang): string[] {
  const tags = new Set<string>();
  Object.values(articlesTranslations[lang] || {}).forEach((t) => {
    t.tags.forEach((tag) => tags.add(tag));
  });
  return Array.from(tags);
}
