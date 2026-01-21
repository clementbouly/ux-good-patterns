import type { Lang } from "./ui";

/**
 * Translations for demo UI strings in example components
 */
export const demoTranslations: Record<Lang, Record<string, string>> = {
  en: {
    // Common
    "common.tryAgain": "Try again",
    "common.save": "Save",
    "common.cancel": "Cancel",
    "common.delete": "Delete",
    "common.loading": "Loading...",
    "common.email": "Email",
    "common.name": "Name",
    "common.copied": "Copied!",
    "common.verify": "Verify",
    "common.verifying": "Verifying...",
    "common.moreOptions": "More options",

    // auto-submit-code
    "autoSubmit.codeVerified": "Code verified!",
    "autoSubmit.enterCode": "Enter verification code",
    "autoSubmit.invalidCode": "Invalid code. Try again.",
    "autoSubmit.autoValidates": "Code validates automatically when complete",
    "autoSubmit.pressEnter": "Press Enter or click Verify",

    // autofocus-modal
    "autofocus.openModal": "Open modal",
    "autofocus.addNewItem": "Add new item",
    "autofocus.autoFocused": "The input is automatically focused on open.",
    "autofocus.notFocused": "The input is not focused. User must click on it.",
    "autofocus.enterName": "Enter a name...",

    // copy-feedback
    "copy.promoCode": "Your promo code:",
    "copy.copyCode": "Copy code",

    // display-options
    "display.subscriptionPlan": "Subscription plan",
    "display.selectPlan": "Select a subscription plan",
    "display.basic": "Basic",
    "display.standard": "Standard",
    "display.professional": "Professional",
    "display.emails1000": "1000 emails",
    "display.emails5000": "5000 emails",
    "display.emails10000": "10 000 emails",

    // dropdown-usability
    "dropdown.country": "Country",
    "dropdown.selectCountry": "Select a country",
    "dropdown.searchCountry": "Search country...",
    "dropdown.noCountry": "No country found.",

    // floating-action-button
    "fab.user": "User",
    "fab.samplePost":
      "Just shared something interesting! This is a sample post that shows how a social feed might look. What do you think about this topic?",
    "fab.scrollDownAccessible": "Scroll down — the create button stays accessible",
    "fab.createPost": "Create post",
    "fab.createPostPlaceholder": "Create a post...",
    "fab.scrollDownTry": "Scroll down, then try to create a post",
    "fab.fabVisible": "FAB stays visible regardless of scroll position",
    "fab.buttonDisappears": 'The "Create Post" button disappears when scrolling',

    // form-validation-feedback
    "form.messageSent": "Message sent!",
    "form.wellGetBack": "We'll get back to you soon.",
    "form.sendAnother": "Send another message",
    "form.emailPlaceholder": "your@email.com",
    "form.emailRequired": "Email is required",
    "form.emailInvalid": "Please enter a valid email",
    "form.messageRequired": "Message is required",
    "form.messageMinLength": "Message must be at least 10 characters",
    "form.messageLabel": "Message (min 10 characters)",
    "form.messagePlaceholder": "Your message...",
    "form.sendMessage": "Send message",
    "form.fillAllFields": "Please fill all fields correctly to enable the button",

    // input-auto-format
    "input.creditCard": "Credit Card Number",
    "input.creditCardPlaceholder": "4242 4242 4242 4242",
    "input.creditCardInvalid": "Invalid card number format",
    "input.iban": "IBAN",
    "input.ibanPlaceholder": "FR76 3000 6000 0112 3456 7890 189",
    "input.ibanInvalid": "Invalid IBAN format",
    "input.phone": "Phone Number",
    "input.phonePlaceholder": "(202) 555-1234",
    "input.phoneInvalid": "Invalid phone number format",
    "input.enterCard": "Enter card number",
    "input.enterIban": "Enter IBAN",
    "input.enterPhone": "Enter phone number",

    // modal-closing
    "modal.deleteItem": "Delete item",
    "modal.multipleWays": "Multiple ways to close: X button, click outside, or press Escape.",
    "modal.onlyXButton": "Only the X button works. Try clicking outside or pressing Escape.",
    "modal.canBeClosedThreeWays":
      "This modal can be closed in three ways: clicking the X button, clicking outside the modal, or pressing the Escape key. This gives users flexibility and matches their expectations.",
    "modal.onlyXButtonDesc":
      "This modal can only be closed by clicking the X button in the top right corner. Clicking outside the modal or pressing the Escape key won't work.",

    // paste-otp-code
    "paste.pasteFromClipboard": "Paste code from clipboard",
    "paste.pasteCode": "Paste code",
    "paste.clickPaste": "Click the paste button or use Ctrl+V",
    "paste.typeManually": "Type the code manually or use Ctrl+V to paste",

    // progressive-loading-messages
    "progress.collecting": "Collecting your data...",
    "progress.analyzing": "Analyzing metrics...",
    "progress.crunching": "Crunching numbers...",
    "progress.generating": "Generating insights...",
    "progress.formatting": "Formatting report...",
    "progress.almostThere": "Almost there...",
    "progress.generateMonthly": "Generate Monthly Report",
    "progress.mayTakeFewSeconds": "This may take a few seconds",
    "progress.generateReport": "Generate Report",
    "progress.reportGenerated": "Your report has been generated successfully!",

    // scroll-to-top
    "scroll.article": "Article",
    "scroll.loremIpsum":
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
    "scroll.blogArticles": "Blog Articles",
    "scroll.scrollDownUse": "Scroll down and use the button to return to the top",
    "scroll.buttonAppears": "Button appears after scrolling, smooth scroll back to top",
    "scroll.scrollDownTry": "Scroll down and try to get back to the top...",
    "scroll.noWayBack": "No way to quickly return to the top",

    // skeleton-loading
    "skeleton.aliceMartin": "Alice Martin",
    "skeleton.bobJohnson": "Bob Johnson",
    "skeleton.claraDavis": "Clara Davis",
    "skeleton.productDesigner": "Product Designer",
    "skeleton.frontendDeveloper": "Frontend Developer",
    "skeleton.uxResearcher": "UX Researcher",
    "skeleton.teamMembers": "Team Members",
    "skeleton.reloadToTest": "Reload to test",

    // submit-button-loading
    "submit.paymentSuccessful": "Payment successful!",
    "submit.totalPayments": "Total payments:",
    "submit.newPayment": "New payment",
    "submit.amount": "Amount (€)",
    "submit.processing": "Processing payment...",
    "submit.payNow": "Pay now",
    "submit.chargedMultiple": "You were charged {count} times!",

    // toast-vs-inline-feedback
    "toast.clickMenu": 'Click the ••• menu and select "Copy link" ?',
    "toast.alexJohnson": "Alex Johnson",
    "toast.timeAgo": "2h ago",
    "toast.copyLink": "Copy link",
    "toast.notInterested": "Not interested",
    "toast.report": "Report",
    "toast.samplePost":
      "Just shared something interesting that I think you'll all enjoy! Check it out and let me know what you think.",
    "toast.linkCopied": "Link copied!",
    "toast.dismiss": "Dismiss",

    // verification-code-input
    "verification.yourCode": "Your code:",
    "verification.clickToCopy": "Click to copy",
  },
  fr: {
    // Common
    "common.tryAgain": "Réessayer",
    "common.save": "Enregistrer",
    "common.cancel": "Annuler",
    "common.delete": "Supprimer",
    "common.loading": "Chargement...",
    "common.email": "Email",
    "common.name": "Nom",
    "common.copied": "Copié !",
    "common.verify": "Vérifier",
    "common.verifying": "Vérification...",
    "common.moreOptions": "Plus d'options",

    // auto-submit-code
    "autoSubmit.codeVerified": "Code vérifié !",
    "autoSubmit.enterCode": "Entrez le code de vérification",
    "autoSubmit.invalidCode": "Code invalide. Réessayez.",
    "autoSubmit.autoValidates": "Le code se valide automatiquement une fois complet",
    "autoSubmit.pressEnter": "Appuyez sur Entrée ou cliquez sur Vérifier",

    // autofocus-modal
    "autofocus.openModal": "Ouvrir la modale",
    "autofocus.addNewItem": "Ajouter un élément",
    "autofocus.autoFocused": "Le champ est automatiquement focus à l'ouverture.",
    "autofocus.notFocused": "Le champ n'est pas focus. L'utilisateur doit cliquer dessus.",
    "autofocus.enterName": "Entrez un nom...",

    // copy-feedback
    "copy.promoCode": "Votre code promo :",
    "copy.copyCode": "Copier le code",

    // display-options
    "display.subscriptionPlan": "Plan d'abonnement",
    "display.selectPlan": "Sélectionnez un abonnement",
    "display.basic": "Basique",
    "display.standard": "Standard",
    "display.professional": "Professionnel",
    "display.emails1000": "1000 emails",
    "display.emails5000": "5000 emails",
    "display.emails10000": "10 000 emails",

    // dropdown-usability
    "dropdown.country": "Pays",
    "dropdown.selectCountry": "Sélectionnez un pays",
    "dropdown.searchCountry": "Rechercher un pays...",
    "dropdown.noCountry": "Aucun pays trouvé.",

    // floating-action-button
    "fab.user": "Utilisateur",
    "fab.samplePost":
      "Je viens de partager quelque chose d'intéressant ! Voici un exemple de post sur un fil d'actualité. Qu'en pensez-vous ?",
    "fab.scrollDownAccessible": "Scrollez — le bouton reste accessible",
    "fab.createPost": "Créer un post",
    "fab.createPostPlaceholder": "Créer un post...",
    "fab.scrollDownTry": "Scrollez, puis essayez de créer un post",
    "fab.fabVisible": "Le FAB reste visible quelle que soit la position du scroll",
    "fab.buttonDisappears": 'Le bouton "Créer un post" disparaît au scroll',

    // form-validation-feedback
    "form.messageSent": "Message envoyé !",
    "form.wellGetBack": "Nous vous répondrons bientôt.",
    "form.sendAnother": "Envoyer un autre message",
    "form.emailPlaceholder": "votre@email.com",
    "form.emailRequired": "L'email est requis",
    "form.emailInvalid": "Veuillez entrer un email valide",
    "form.messageRequired": "Le message est requis",
    "form.messageMinLength": "Le message doit contenir au moins 10 caractères",
    "form.messageLabel": "Message (min 10 caractères)",
    "form.messagePlaceholder": "Votre message...",
    "form.sendMessage": "Envoyer le message",
    "form.fillAllFields": "Veuillez remplir tous les champs correctement",

    // input-auto-format
    "input.creditCard": "Numéro de carte bancaire",
    "input.creditCardPlaceholder": "4242 4242 4242 4242",
    "input.creditCardInvalid": "Format de carte invalide",
    "input.iban": "IBAN",
    "input.ibanPlaceholder": "FR76 3000 6000 0112 3456 7890 189",
    "input.ibanInvalid": "Format IBAN invalide",
    "input.phone": "Numéro de téléphone",
    "input.phonePlaceholder": "06 12 34 56 78",
    "input.phoneInvalid": "Format de téléphone invalide",
    "input.enterCard": "Entrez le numéro de carte",
    "input.enterIban": "Entrez l'IBAN",
    "input.enterPhone": "Entrez le numéro de téléphone",

    // modal-closing
    "modal.deleteItem": "Supprimer l'élément",
    "modal.multipleWays": "Plusieurs façons de fermer : bouton X, clic extérieur, ou touche Échap.",
    "modal.onlyXButton": "Seul le bouton X fonctionne. Essayez de cliquer à l'extérieur ou Échap.",
    "modal.canBeClosedThreeWays":
      "Cette modale peut être fermée de trois façons : en cliquant sur le bouton X, en cliquant à l'extérieur, ou en appuyant sur Échap. Cela offre de la flexibilité aux utilisateurs.",
    "modal.onlyXButtonDesc":
      "Cette modale ne peut être fermée qu'en cliquant sur le bouton X en haut à droite. Cliquer à l'extérieur ou appuyer sur Échap ne fonctionnera pas.",

    // paste-otp-code
    "paste.pasteFromClipboard": "Coller le code depuis le presse-papier",
    "paste.pasteCode": "Coller le code",
    "paste.clickPaste": "Cliquez sur coller ou utilisez Ctrl+V",
    "paste.typeManually": "Tapez le code manuellement ou utilisez Ctrl+V",

    // progressive-loading-messages
    "progress.collecting": "Collecte de vos données...",
    "progress.analyzing": "Analyse des métriques...",
    "progress.crunching": "Calcul en cours...",
    "progress.generating": "Génération des insights...",
    "progress.formatting": "Mise en forme du rapport...",
    "progress.almostThere": "Presque terminé...",
    "progress.generateMonthly": "Générer le rapport mensuel",
    "progress.mayTakeFewSeconds": "Cela peut prendre quelques secondes",
    "progress.generateReport": "Générer le rapport",
    "progress.reportGenerated": "Votre rapport a été généré avec succès !",

    // scroll-to-top
    "scroll.article": "Article",
    "scroll.loremIpsum":
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
    "scroll.blogArticles": "Articles du blog",
    "scroll.scrollDownUse": "Scrollez et utilisez le bouton pour remonter",
    "scroll.buttonAppears": "Le bouton apparaît au scroll, retour fluide en haut",
    "scroll.scrollDownTry": "Scrollez et essayez de remonter en haut...",
    "scroll.noWayBack": "Pas de moyen rapide pour remonter",

    // skeleton-loading
    "skeleton.aliceMartin": "Alice Martin",
    "skeleton.bobJohnson": "Bob Johnson",
    "skeleton.claraDavis": "Clara Davis",
    "skeleton.productDesigner": "Product Designer",
    "skeleton.frontendDeveloper": "Développeur Frontend",
    "skeleton.uxResearcher": "UX Researcher",
    "skeleton.teamMembers": "Membres de l'équipe",
    "skeleton.reloadToTest": "Recharger pour tester",

    // submit-button-loading
    "submit.paymentSuccessful": "Paiement réussi !",
    "submit.totalPayments": "Total des paiements :",
    "submit.newPayment": "Nouveau paiement",
    "submit.amount": "Montant (€)",
    "submit.processing": "Traitement du paiement...",
    "submit.payNow": "Payer maintenant",
    "submit.chargedMultiple": "Vous avez été débité {count} fois !",

    // toast-vs-inline-feedback
    "toast.clickMenu": 'Cliquez sur le menu ••• et sélectionnez "Copier le lien" ?',
    "toast.alexJohnson": "Alex Johnson",
    "toast.timeAgo": "Il y a 2h",
    "toast.copyLink": "Copier le lien",
    "toast.notInterested": "Pas intéressé",
    "toast.report": "Signaler",
    "toast.samplePost":
      "Je viens de partager quelque chose d'intéressant que vous allez adorer ! Jetez-y un œil et dites-moi ce que vous en pensez.",
    "toast.linkCopied": "Lien copié !",
    "toast.dismiss": "Fermer",

    // verification-code-input
    "verification.yourCode": "Votre code :",
    "verification.clickToCopy": "Cliquez pour copier",
  },
};

/**
 * Get a demo translation with optional parameter replacement
 */
export function getDemoTranslation(
  key: string,
  lang: Lang,
  params?: Record<string, string | number>
): string {
  let text = demoTranslations[lang]?.[key] ?? demoTranslations.en[key] ?? key;

  if (params) {
    Object.entries(params).forEach(([param, value]) => {
      text = text.replace(`{${param}}`, String(value));
    });
  }

  return text;
}
