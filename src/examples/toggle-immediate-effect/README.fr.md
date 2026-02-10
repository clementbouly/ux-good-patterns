# Toggle switches pour les réglages à effet immédiat

## Description

Quand des réglages prennent effet immédiatement et sont indépendants les uns des autres, utilisez des toggle switches plutôt que des checkboxes. Les toggles communiquent une action instantanée — comme un interrupteur — tandis que les checkboxes impliquent une sélection différée nécessitant une confirmation.

## Pourquoi c'est important

- **Modèle mental** : les toggles imitent les interrupteurs physiques — l'utilisateur s'attend à un effet immédiat
- **Pas de confusion** : avec des checkboxes + un bouton Save, l'utilisateur se demande "est-ce que le changement est déjà appliqué ou non ?"
- **Moins de friction** : pas d'étape de confirmation supplémentaire pour des réglages indépendants

## Quand appliquer

- Préférences d'application (mode sombre, notifications, lecture automatique)
- Feature toggles à effet instantané
- Tout réglage on/off indépendant qui ne nécessite pas de traitement par lot

## Quand ne pas appliquer

- Sélections groupées devant être soumises ensemble (utiliser des checkboxes)
- Options hiérarchiques avec relations parent/enfant (utiliser des checkboxes)
- Champs de formulaire faisant partie d'un workflow de soumission plus large
