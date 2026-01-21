import type { Lang } from "./ui";

type ExampleTranslation = {
  title: string;
  description: string;
  category: string;
};

type ExampleTranslations = {
  [exampleId: string]: ExampleTranslation;
};

const examplesTranslations: Record<Lang, ExampleTranslations> = {
  en: {
    "autofocus-modal": {
      title: "Autofocus on Modal input",
      description: "When a modal opens with a single input, it should be automatically focused",
      category: "Modals",
    },
    "modal-closing": {
      title: "Modal closing interactions",
      description:
        "Allow users to close modals with multiple methods: X button, outside click, and Escape key",
      category: "Modals",
    },
    "submit-button-loading": {
      title: "Submit button loading state",
      description:
        "Show loading state on submit buttons to prevent double submissions and provide feedback",
      category: "Feedback",
    },
    "verification-code-input": {
      title: "Verification code input",
      description:
        "Use separate digit inputs for verification codes to improve clarity and mobile experience",
      category: "Forms",
    },
    "copy-feedback": {
      title: "Copy to clipboard feedback",
      description: "Provide clear visual feedback when content is copied to clipboard",
      category: "Feedback",
    },
    "skeleton-loading": {
      title: "Skeleton loading vs Spinner",
      description: "Show content structure with animated placeholders instead of a generic spinner",
      category: "Feedback",
    },
    "auto-submit-code": {
      title: "Auto-submit verification code",
      description: "Automatically submit verification codes when all digits are entered",
      category: "Forms",
    },
    "progressive-loading-messages": {
      title: "Progressive loading messages",
      description:
        "Show contextual progress messages during long operations to keep users informed",
      category: "Feedback",
    },
    "form-validation-feedback": {
      title: "Form validation feedback",
      description:
        "Show validation errors inline next to the relevant fields instead of generic alerts",
      category: "Forms",
    },
    "input-auto-format": {
      title: "Input auto-formatting",
      description: "Automatically format inputs like phone numbers and credit cards as users type",
      category: "Forms",
    },
    "scroll-to-top": {
      title: "Scroll to top button",
      description: "Show a floating button to scroll back to top on long pages",
      category: "Navigation",
    },
    "floating-action-button": {
      title: "Floating Action Button (FAB)",
      description:
        "Hide FAB when scrolling down and show when scrolling up to reduce visual clutter",
      category: "Navigation",
    },
    "paste-otp-code": {
      title: "Paste OTP code support",
      description: "Allow users to paste verification codes directly into OTP inputs",
      category: "Forms",
    },
    "dropdown-usability": {
      title: "Dropdown usability",
      description: "Replace long dropdowns with searchable select components for better usability",
      category: "Forms",
    },
    "display-options": {
      title: "Display options toggle",
      description: "Use clear visual toggles for display options instead of confusing checkboxes",
      category: "Input",
    },
    "toast-vs-inline-feedback": {
      title: "Toast vs Inline feedback",
      description:
        "Use inline feedback for contextual actions instead of disconnected toast notifications",
      category: "Feedback",
    },
  },
  fr: {
    "autofocus-modal": {
      title: "Autofocus sur l'input d'une modale",
      description:
        "Quand une modale s'ouvre avec un seul champ, il devrait être automatiquement focus",
      category: "Modales",
    },
    "modal-closing": {
      title: "Interactions de fermeture de modale",
      description:
        "Permettre aux utilisateurs de fermer les modales de plusieurs façons : bouton X, clic extérieur, touche Échap",
      category: "Modales",
    },
    "submit-button-loading": {
      title: "État de chargement du bouton",
      description:
        "Afficher un état de chargement sur les boutons de soumission pour éviter les doubles clics",
      category: "Feedback",
    },
    "verification-code-input": {
      title: "Champ de code de vérification",
      description: "Utiliser des inputs séparés pour les codes de vérification pour plus de clarté",
      category: "Formulaires",
    },
    "copy-feedback": {
      title: "Feedback de copie",
      description:
        "Fournir un retour visuel clair quand du contenu est copié dans le presse-papier",
      category: "Feedback",
    },
    "skeleton-loading": {
      title: "Skeleton loading vs Spinner",
      description:
        "Afficher la structure du contenu avec des placeholders animés au lieu d'un spinner générique",
      category: "Feedback",
    },
    "auto-submit-code": {
      title: "Soumission auto du code",
      description:
        "Soumettre automatiquement les codes de vérification quand tous les chiffres sont saisis",
      category: "Formulaires",
    },
    "progressive-loading-messages": {
      title: "Messages de chargement progressifs",
      description:
        "Afficher des messages de progression contextuels pendant les longues opérations",
      category: "Feedback",
    },
    "form-validation-feedback": {
      title: "Feedback de validation de formulaire",
      description:
        "Afficher les erreurs de validation à côté des champs concernés plutôt qu'en alerte générique",
      category: "Formulaires",
    },
    "input-auto-format": {
      title: "Auto-formatage des champs",
      description:
        "Formater automatiquement les numéros de téléphone et cartes bancaires à la saisie",
      category: "Formulaires",
    },
    "scroll-to-top": {
      title: "Bouton retour en haut",
      description: "Afficher un bouton flottant pour remonter en haut sur les pages longues",
      category: "Navigation",
    },
    "floating-action-button": {
      title: "Bouton d'action flottant (FAB)",
      description: "Masquer le FAB au scroll vers le bas et l'afficher au scroll vers le haut",
      category: "Navigation",
    },
    "paste-otp-code": {
      title: "Support du collage de code OTP",
      description: "Permettre aux utilisateurs de coller les codes de vérification directement",
      category: "Formulaires",
    },
    "dropdown-usability": {
      title: "Ergonomie des dropdowns",
      description: "Remplacer les longues listes déroulantes par des sélecteurs avec recherche",
      category: "Formulaires",
    },
    "display-options": {
      title: "Options d'affichage",
      description:
        "Utiliser des toggles visuels clairs pour les options d'affichage au lieu de checkboxes",
      category: "Input",
    },
    "toast-vs-inline-feedback": {
      title: "Toast vs Feedback inline",
      description:
        "Utiliser un feedback inline pour les actions contextuelles plutôt que des toasts déconnectés",
      category: "Feedback",
    },
  },
};

/**
 * Get translated example metadata
 */
export function getExampleTranslation(
  exampleId: string,
  lang: Lang
): ExampleTranslation | undefined {
  return examplesTranslations[lang]?.[exampleId];
}

/**
 * Get all translated categories for a language
 */
export function getTranslatedCategories(lang: Lang): string[] {
  const categories = new Set<string>();
  Object.values(examplesTranslations[lang] || {}).forEach((t) => {
    categories.add(t.category);
  });
  return Array.from(categories);
}
