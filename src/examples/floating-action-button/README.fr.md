# Bouton d'action flottant (FAB)

## Exemple concret : LinkedIn

L'interface desktop de LinkedIn place le champ "Créer un post" en haut du fil. Quand les utilisateurs scrollent pour lire du contenu, cette action principale disparaît complètement. Pour créer un post, les utilisateurs doivent remonter tout en haut.

<video src="/videos/scroll-to-top.mp4" autoplay loop muted playsinline style="width: 100%; border-radius: 8px; margin: 1rem 0;"></video>

Comparez avec X (Twitter), qui garde le bouton de composition visible en permanence dans la barre latérale gauche — une bien meilleure implémentation des actions principales persistantes.

## Description

Un bouton d'action flottant est un bouton persistant et circulaire qui flotte au-dessus de l'interface, généralement dans le coin bas-droit. Il fournit un accès instantané à l'action principale d'un écran, quelle que soit la position de scroll.

## Pourquoi c'est important

- **Toujours accessible** : L'action principale n'est jamais cachée, peu importe combien l'utilisateur scrolle
- **Charge cognitive réduite** : Les utilisateurs n'ont pas besoin de se souvenir où se trouve l'action ou de remonter pour la trouver
- **Complétion de tâche plus rapide** : À un tap de l'action la plus importante à tout moment
- **Mobile-first** : Parfaitement positionné pour la portée du pouce sur mobile
- **Hiérarchie visuelle** : Signale clairement l'action la plus importante de l'écran

## La psychologie derrière

Quand une action principale disparaît pendant le scroll, les utilisateurs vivent un flux interrompu entre l'intention et l'action. Au moment où l'inspiration frappe ("Je veux poster quelque chose !"), toute friction — même remonter en scrollant — peut faire s'estomper cette impulsion.

Un FAB suit la loi de Fitts : le temps pour atteindre une cible est fonction de la distance et de la taille. En gardant le bouton proche et visible, vous minimisez l'effort requis pour agir sur l'intention de l'utilisateur.

## Quand appliquer

- Fils de réseaux sociaux (créer un post, composer un tweet)
- Clients email (composer un nouveau message)
- Apps de prise de notes (créer une nouvelle note)
- Gestionnaires de tâches (ajouter une nouvelle tâche)
- Tout écran avec une action dominante unique qui devrait toujours être accessible
- Pages riches en contenu où l'action principale scrollerait hors de vue

## Quand ne pas appliquer

- Pages avec plusieurs actions également importantes (le FAB devrait représenter UNE action principale)
- Interfaces desktop avec barres latérales persistantes (le placement en sidebar peut être meilleur)
- Écrans où l'action principale nécessite du contexte du haut de la page
- Formulaires ou assistants où le flux linéaire est important
- Pages avec peu de scroll où l'action reste naturellement visible

## Conseils d'implémentation

1. **Un FAB par écran** : Plusieurs FAB diluent leur importance et confondent les utilisateurs
2. **Placement bas-droit** : Convention pour les droitiers ; considérez bas-gauche pour les langues RTL
3. **Positionnement cohérent** : Gardez le FAB au même endroit dans toute votre app
4. **Iconographie claire** : Utilisez des icônes universellement comprises (+ pour créer, crayon pour composer)
5. **Élévation appropriée** : Utilisez une ombre pour le faire "flotter" au-dessus du contenu
6. **Ne pas obstruer le contenu** : Assurez-vous qu'il ne couvre pas d'informations critiques ou d'autres éléments interactifs
7. **Considérer le FAB étendu** : Pour les actions complexes, un FAB étendu avec du texte peut améliorer la clarté
8. **Comportement responsive** : Sur les grands écrans, envisagez de transitionner vers un placement en sidebar ou header
9. **Animation au scroll** : Une animation subtile optionnelle (cacher au scroll vers le bas, montrer au scroll vers le haut) peut réduire le bruit visuel

## Considérations d'accessibilité

- Assurez un contraste de couleur suffisant (WCAG AA minimum)
- Fournissez un label accessible (`aria-label`) décrivant l'action
- Assurez-vous qu'il est focusable et activable au clavier
- Considérez les utilisateurs qui peuvent trouver les éléments flottants distrayants
