# Checkboxes pour la sélection hiérarchique

## Description

Quand les options forment une hiérarchie parent-enfant, utilisez des checkboxes. Les checkboxes supportent un état indéterminé (mixte) qui communique "certains enfants sont sélectionnés, mais pas tous". Les toggle switches ne supportent que on/off, rendant la sélection partielle invisible.

## Pourquoi c'est important

- **État indéterminé** : une checkbox parente peut afficher un tiret quand seuls certains enfants sont sélectionnés — les toggles ne le peuvent pas
- **Hiérarchie visuelle** : les checkboxes avec indentation communiquent clairement la relation parent-enfant
- **Représentation exacte de l'état** : les utilisateurs voient instantanément si tous, certains ou aucun enfant sont sélectionnés

## Quand appliquer

- Systèmes de permissions avec des périmètres imbriqués
- Arbres de catégories avec sous-catégories sélectionnables
- Réglages groupés sous une option parent "tout sélectionner"
- Toute structure de sélection multiple imbriquée

## Quand ne pas appliquer

- Réglages indépendants sans relation entre eux (utiliser des toggle switches)
- Options on/off binaires avec effet immédiat (utiliser un toggle switch)
