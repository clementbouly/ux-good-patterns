# Checkboxes pour la sélection groupée avec confirmation

## Description

Quand les utilisateurs doivent choisir une ou plusieurs options liées dans une liste avant de confirmer avec un bouton d'action, utilisez des checkboxes — pas des toggle switches. Les checkboxes communiquent "sélectionner puis confirmer", tandis que les toggles impliquent que chaque option prend effet immédiatement.

## Pourquoi c'est important

- **Attentes claires** : les checkboxes indiquent à l'utilisateur "rien ne se passe tant que vous n'avez pas appuyé sur le bouton"
- **Pas de fausse immédiateté** : les toggles impliquent une activation instantanée, ce qui est trompeur quand une étape de confirmation est nécessaire
- **Traitement par lot** : les checkboxes sont le choix naturel pour les actions traitées ensemble (export, filtre, appliquer)

## Quand appliquer

- Dialogues d'export où l'utilisateur choisit quelles données inclure
- Panneaux de filtres avec un bouton "Appliquer"
- Formulaires de sélection multiple soumis en lot
- Toute sélection groupée suivie d'une action de confirmation

## Quand ne pas appliquer

- Réglages indépendants qui prennent effet immédiatement (utiliser des toggle switches)
- Options oui/non uniques avec effet instantané (utiliser un toggle switch)
