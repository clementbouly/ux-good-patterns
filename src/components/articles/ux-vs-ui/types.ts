export type FormVariant = {
  goodUx: boolean;
  goodUi: boolean;
};

export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export type Translations = {
  email: string;
  emailPlaceholder: string;
  emailError: string;
  emailRequired: string;
  country: string;
  countryPlaceholder: string;
  countrySearch: string;
  countryNoResults: string;
  countryRequired: string;
  motivation: string;
  motivationPlaceholder: string;
  motivationMaxChars: string;
  motivationTooLong: string;
  submit: string;
  cancel: string;
  submitSuccess: string;
  badUx: string;
  goodUx: string;
  badUi: string;
  goodUi: string;
};

export const enTranslations: Translations = {
  email: "Email",
  emailPlaceholder: "your@email.com",
  emailError: "Invalid email format",
  emailRequired: "Email is required",
  country: "Country",
  countryPlaceholder: "Select a country...",
  countrySearch: "Search country...",
  countryNoResults: "No country found.",
  countryRequired: "Please select a country",
  motivation: "Motivation",
  motivationPlaceholder: "Why do you want to join?",
  motivationMaxChars: "max 20 chars",
  motivationTooLong: "Text is too long",
  submit: "Submit",
  cancel: "Cancel",
  submitSuccess: "Form submitted successfully!",
  badUx: "Bad UX",
  goodUx: "Good UX",
  badUi: "Bad UI",
  goodUi: "Good UI",
};

export const frTranslations: Translations = {
  email: "Email",
  emailPlaceholder: "votre@email.com",
  emailError: "Format d'email invalide",
  emailRequired: "L'email est requis",
  country: "Pays",
  countryPlaceholder: "Sélectionnez un pays...",
  countrySearch: "Rechercher un pays...",
  countryNoResults: "Aucun pays trouvé.",
  countryRequired: "Veuillez sélectionner un pays",
  motivation: "Motivation",
  motivationPlaceholder: "Pourquoi voulez-vous nous rejoindre ?",
  motivationMaxChars: "max 20 car.",
  motivationTooLong: "Le texte est trop long",
  submit: "Envoyer",
  cancel: "Annuler",
  submitSuccess: "Formulaire envoyé avec succès !",
  badUx: "Mauvaise UX",
  goodUx: "Bonne UX",
  badUi: "Mauvaise UI",
  goodUi: "Bonne UI",
};
