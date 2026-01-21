# Toast vs Feedback inline

## Description

Quand les utilisateurs effectuent une action, le feedback devrait apparaître là où ils regardent déjà — pas dans un coin éloigné de l'écran qui nécessite un balayage visuel.

Les notifications toast forcent les utilisateurs à détourner leur attention de leur focus actuel, ce qui viole le principe de Gestalt de proximité et peut être complètement manqué par les utilisateurs avec des loupes d'écran.

## Pourquoi c'est important

- **Charge cognitive** : Le mouvement oculaire diagonal pour trouver le feedback est un travail inutile
- **Accessibilité** : Les utilisateurs avec des loupes d'écran peuvent ne jamais voir les toasts positionnés hors écran
- **Feedback manqué** : Les toasts qui disparaissent automatiquement peuvent s'effacer avant que les utilisateurs les remarquent
- **Anxiété** : Les toasts à durée limitée créent une pression pour lire rapidement

## Le consensus

- **Jakob Nielsen** (Mars 2024) : Qualifie les toasts de "widget GUI brûlé"
- **GitHub Primer** : A officiellement banni les toasts — "Les toasts posent des préoccupations d'accessibilité significatives et ne sont pas recommandés"
- **Adam Silver** : Liste 6 raisons pour lesquelles les toasts sont problématiques

## Quand utiliser le feedback inline

- Confirmations de copie dans le presse-papier
- Validation de champs de formulaire
- Changements d'état de toggle
- Toute action où le focus de l'utilisateur est sur un élément spécifique

## Quand les toasts peuvent encore être acceptables

- Processus en arrière-plan terminés (téléchargement de fichier fini)
- Notifications système sans rapport avec la tâche actuelle
- Information que les utilisateurs ne regretteront pas de manquer

## Exemple concret

Voici comment LinkedIn gère l'action "Copier dans le presse-papier" — le toast apparaît dans le coin bas-gauche, loin de là où l'utilisateur a cliqué :

<video src="/videos/toast-feedback.mp4" controls width="100%"></video>

Ce pattern est courant dans beaucoup d'applications, c'est pourquoi il est précieux de questionner les conventions établies.

## Références

- [Jakob Nielsen - Toast notifications are a burnt GUI widget](https://jakobnielsenphd.substack.com/p/ux-roundup-20240325)
- [GitHub Primer - Toasts accessibility](https://primer.style/accessibility/toasts)
- [Adam Silver - 6 reasons toast messages are a bad idea](https://adamsilver.io/blog/the-problem-with-toast-messages-and-what-to-do-instead/)
