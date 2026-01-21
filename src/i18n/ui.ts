export const languages = {
  en: "English",
  fr: "Français",
} as const;

export const defaultLang = "en" as const;

export type Lang = keyof typeof languages;

export const ui = {
  en: {
    // Navigation
    "nav.examples": "Examples",
    "nav.articles": "Articles",
    "nav.resources": "Resources",
    "nav.aiContext": "AI Context",

    // Header
    "header.title": "The Good, The Bad and The UX",
    "header.tagline": "A collection of UX patterns with comparative examples",
    "header.githubAriaLabel": "View on GitHub",

    // Footer
    "footer.openSource": "Open source project - Want to contribute?",
    "footer.contributeGithub": "Contribute on GitHub",
    "footer.suggestPattern": "Suggest a pattern",
    "footer.madeBy": "Made by Clément Bouly",

    // Common
    "common.new": "New",
    "common.all": "All",
    "common.share": "Share",
    "common.copied": "Copied!",
    "common.learnMore": "Learn more",
    "common.backToHome": "Back to home",
    "common.search": "Search",

    // Examples
    "example.bad": "Bad example",
    "example.good": "Good example",
    "example.multipleGood": "Multiple good examples!",
    "example.notFound": "Example not found",
    "example.backToAll": "Back to all examples",
    "example.backToCategory": "Back to {category}",
    "example.publishedOn": "Published on",
    "example.exploreMore": "Explore more examples",
    "example.viewExample": "View example",

    // Search / Command Menu
    "search.placeholder": "Search examples, articles...",
    "search.ariaLabel": "Search",
    "search.dialogTitle": "Search examples and articles",
    "search.dialogDescription": "Search for UX patterns and examples",
    "search.noResults": "No examples found.",
    "search.groupExamples": "Examples",
    "search.groupArticles": "Articles",

    // 404
    "notFound.title": "Page not found",
    "notFound.message1": "This cat looked everywhere. The page is gone.",
    "notFound.message2": "Even our best algorithms couldn't find this page.",
    "notFound.message3": "This page went on vacation. Without leaving a forwarding address.",
    "notFound.message4": "404: Page playing hide and seek. It's winning.",
    "notFound.message5": "The page you're looking for is in another castle.",
    "notFound.message6": "Oops! This page got mass layoff'd.",

    // Theme
    "theme.switchToDark": "Switch to dark mode",
    "theme.switchToLight": "Switch to light mode",

    // Articles page
    "articles.title": "Articles",
    "articles.description": "In-depth guides combining multiple UX patterns",
    "articles.readArticle": "Read article",
    "articles.empty": "No articles yet. Check back soon!",

    // Resources page
    "resources.title": "Resources",
    "resources.description": "Curated collection of UX resources to level up your skills",
    "resources.empty": "No resources yet. Check back soon!",

    // AI page
    "ai.title": "AI Context",
    "ai.whatIsThis": "What is this?",
    "ai.howToUse": "How to use",
    "ai.copyLink": "Copy Link",
    "ai.copyContent": "Copy Content",
    "ai.download": "Download",

    // Language
    "lang.switchTo": "Switch to {lang}",
  },
  fr: {
    // Navigation
    "nav.examples": "Exemples",
    "nav.articles": "Articles",
    "nav.resources": "Ressources",
    "nav.aiContext": "Contexte IA",

    // Header
    "header.title": "The Good, The Bad and The UX",
    "header.tagline": "Une collection de patterns UX avec des exemples comparatifs",
    "header.githubAriaLabel": "Voir sur GitHub",

    // Footer
    "footer.openSource": "Projet open source - Envie de contribuer ?",
    "footer.contributeGithub": "Contribuer sur GitHub",
    "footer.suggestPattern": "Suggérer un pattern",
    "footer.madeBy": "Créé par Clément Bouly",

    // Common
    "common.new": "Nouveau",
    "common.all": "Tout",
    "common.share": "Partager",
    "common.copied": "Copié !",
    "common.learnMore": "En savoir plus",
    "common.backToHome": "Retour à l'accueil",
    "common.search": "Rechercher",

    // Examples
    "example.bad": "Mauvais exemple",
    "example.good": "Bon exemple",
    "example.multipleGood": "Plusieurs bons exemples !",
    "example.notFound": "Exemple non trouvé",
    "example.backToAll": "Retour aux exemples",
    "example.backToCategory": "Retour à {category}",
    "example.publishedOn": "Publié le",
    "example.exploreMore": "Découvrir d'autres exemples",
    "example.viewExample": "Voir l'exemple",

    // Search / Command Menu
    "search.placeholder": "Rechercher exemples, articles...",
    "search.ariaLabel": "Rechercher",
    "search.dialogTitle": "Rechercher exemples et articles",
    "search.dialogDescription": "Rechercher des patterns et exemples UX",
    "search.noResults": "Aucun exemple trouvé.",
    "search.groupExamples": "Exemples",
    "search.groupArticles": "Articles",

    // 404
    "notFound.title": "Page non trouvée",
    "notFound.message1": "Ce chat a cherché partout. La page a disparu.",
    "notFound.message2": "Même nos meilleurs algorithmes n'ont pas trouvé cette page.",
    "notFound.message3": "Cette page est partie en vacances. Sans laisser d'adresse.",
    "notFound.message4": "404 : La page joue à cache-cache. Elle gagne.",
    "notFound.message5": "La page que vous cherchez est dans un autre château.",
    "notFound.message6": "Oups ! Cette page a été licenciée.",

    // Theme
    "theme.switchToDark": "Passer en mode sombre",
    "theme.switchToLight": "Passer en mode clair",

    // Articles page
    "articles.title": "Articles",
    "articles.description": "Guides approfondis combinant plusieurs patterns UX",
    "articles.readArticle": "Lire l'article",
    "articles.empty": "Pas encore d'articles. Revenez bientôt !",

    // Resources page
    "resources.title": "Ressources",
    "resources.description": "Collection de ressources UX pour améliorer vos compétences",
    "resources.empty": "Pas encore de ressources. Revenez bientôt !",

    // AI page
    "ai.title": "Contexte IA",
    "ai.whatIsThis": "Qu'est-ce que c'est ?",
    "ai.howToUse": "Comment utiliser",
    "ai.copyLink": "Copier le lien",
    "ai.copyContent": "Copier le contenu",
    "ai.download": "Télécharger",

    // Language
    "lang.switchTo": "Passer en {lang}",
  },
} as const;
