import type { Lang } from "./ui";

type ResourceTranslation = {
  title: string;
  description: string;
  category: string;
};

type ResourceTranslations = {
  [url: string]: ResourceTranslation;
};

// We use URL as the key since resources don't have slugs
const resourcesTranslations: Record<Lang, ResourceTranslations> = {
  en: {
    "https://lawsofux.com/": {
      title: "Laws of UX",
      description:
        "A collection of UX principles backed by psychology research. Essential reading for understanding why certain patterns work.",
      category: "Principles",
    },
    "https://growth.design/case-studies": {
      title: "Growth.Design Case Studies",
      description:
        "Comic-style UX case studies analyzing products like Duolingo, Spotify, and Netflix. Learn from real-world examples.",
      category: "Case Studies",
    },
    "https://www.uidesign.tips/ui-tips": {
      title: "UI Design Tips",
      description:
        "Practical UI & UX tips by Jim Raptis. Quick, actionable advice for improving your interfaces.",
      category: "Tips",
    },
  },
  fr: {
    "https://lawsofux.com/": {
      title: "Laws of UX",
      description:
        "Une collection de principes UX basés sur la recherche en psychologie. Lecture essentielle pour comprendre pourquoi certains patterns fonctionnent.",
      category: "Principes",
    },
    "https://growth.design/case-studies": {
      title: "Growth.Design Case Studies",
      description:
        "Des études de cas UX en style BD analysant des produits comme Duolingo, Spotify et Netflix. Apprenez à partir d'exemples concrets.",
      category: "Études de cas",
    },
    "https://www.uidesign.tips/ui-tips": {
      title: "UI Design Tips",
      description:
        "Conseils pratiques UI & UX par Jim Raptis. Des astuces rapides et actionnables pour améliorer vos interfaces.",
      category: "Astuces",
    },
  },
};

// Category translations for the filter
export const categoryTranslations: Record<Lang, Record<string, string>> = {
  en: {
    Principles: "Principles",
    "Case Studies": "Case Studies",
    Tips: "Tips",
    Tools: "Tools",
  },
  fr: {
    Principles: "Principes",
    "Case Studies": "Études de cas",
    Tips: "Astuces",
    Tools: "Outils",
  },
};

/**
 * Get translated resource metadata
 */
export function getResourceTranslation(url: string, lang: Lang): ResourceTranslation | undefined {
  return resourcesTranslations[lang]?.[url];
}

/**
 * Get translated category name
 */
export function getTranslatedCategory(category: string, lang: Lang): string {
  return categoryTranslations[lang]?.[category] || category;
}

/**
 * Get all translated categories for a language
 */
export function getTranslatedCategories(lang: Lang): string[] {
  return Object.values(categoryTranslations[lang] || {});
}
