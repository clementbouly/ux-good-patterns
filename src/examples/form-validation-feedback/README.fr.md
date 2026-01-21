# Éviter les boutons de soumission désactivés

## Description

Gardez les boutons de soumission activés et affichez des messages d'erreur clairs quand l'utilisateur tente de soumettre un formulaire incomplet ou invalide.

## Pourquoi c'est important

- **Clarté** : Les utilisateurs comprennent exactement ce qui ne va pas et comment le corriger
- **Découvrabilité** : Un bouton désactivé sans explication laisse les utilisateurs perplexes
- **Accessibilité** : Les lecteurs d'écran peuvent annoncer les messages d'erreur, tandis qu'un bouton désactivé ne fournit aucun contexte
- **Contrôle utilisateur** : Les utilisateurs peuvent tenter la soumission et apprendre du feedback

## Le problème avec les boutons désactivés

Quand vous désactivez un bouton de soumission jusqu'à ce que le formulaire soit valide :

- Les utilisateurs ne savent pas **pourquoi** le bouton est désactivé
- Ils ne réalisent peut-être pas quel champ est incomplet ou invalide
- Ça peut donner l'impression que l'interface est cassée
- Il n'y a pas d'opportunité de fournir des conseils utiles

## Meilleure approche

1. Gardez le bouton de soumission toujours activé
2. Validez à la soumission
3. Affichez des messages d'erreur clairs et inline à côté des champs invalides
4. Utilisez des indices visuels (bordures rouges, icônes) pour attirer l'attention
5. Incluez des attributs ARIA pour l'accessibilité (`aria-invalid`, `aria-describedby`)

## Quand les boutons désactivés sont acceptables

- Pendant la soumission du formulaire (pour éviter les doubles soumissions)
- Quand une action préalable est vraiment requise (ex: accepter les conditions)
- Formulaires de type assistant où les étapes précédentes doivent être complétées
