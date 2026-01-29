# Ne pas limiter la saisie utilisateur

## Description

Quand les utilisateurs tapent dans un champ avec une limite de caractères, ne bloquez pas silencieusement leur saisie à la limite. Laissez-les continuer à taper et affichez un feedback visuel clair indiquant qu'ils ont dépassé la longueur autorisée — idéalement en surlignant le texte en trop en rouge.

## Pourquoi c'est important

- **Contrôle utilisateur** : Les utilisateurs peuvent voir leur pensée complète avant de décider quoi supprimer
- **Transparence** : Un feedback clair explique pourquoi leur saisie est invalide
- **Moins de frustration** : Les utilisateurs comprennent la contrainte au lieu de se demander pourquoi ils ne peuvent plus taper
- **Meilleure édition** : Les utilisateurs peuvent coller un texte long et le raccourcir, plutôt que d'être bloqués en plein copier-coller

## Quand appliquer

- Champs texte avec limites de caractères (titres, noms d'utilisateur, bios)
- Zones de texte avec restrictions de longueur (descriptions, commentaires, messages)
- Tout champ de formulaire où les utilisateurs pourraient naturellement dépasser la limite

## Quand ne pas appliquer

- Champs techniques où le dépassement pourrait causer des problèmes (ex: dépassement de champ en base de données)
- Systèmes temps réel où des données invalides ne devraient jamais être saisies
- Champs avec des limites très courtes où le dépassement est improbable (ex: saisie à 2 chiffres)

## Implémentation

Les éléments natifs `<input>` et `<textarea>` ne permettent pas de styliser certains caractères. Deux options :

1. **Technique d'overlay** — Superposer un div stylisé derrière un textarea transparent
2. **Utiliser une lib** — [rich-textarea](https://github.com/inokawa/rich-textarea) (~3kb) gère les cas limites

## Ressources

- [rich-textarea](https://github.com/inokawa/rich-textarea) — Composant React léger pour les textareas stylisés
- [CSS-Tricks: Syntax Highlighting in Textarea](https://css-tricks.com/creating-an-editable-textarea-that-supports-syntax-highlighted-code/) — Article détaillé sur la technique d'overlay
