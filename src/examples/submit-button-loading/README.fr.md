# Désactiver le bouton pendant le chargement

## Description

Lors de la soumission d'un formulaire, le bouton de validation doit être désactivé et afficher un indicateur de chargement. Cela empêche les utilisateurs de soumettre accidentellement le formulaire plusieurs fois.

## Pourquoi c'est important

- **Évite les doubles soumissions** : Empêche la création de doublons ou les doubles prélèvements
- **Feedback clair** : L'utilisateur sait que son action a été prise en compte
- **Réduit l'anxiété** : Le retour visuel rassure l'utilisateur que quelque chose se passe

## Quand appliquer

- Soumissions de formulaires (connexion, inscription, paiement)
- Toute action déclenchant un appel API
- Traitement de paiements
- Téléchargement de fichiers

## Quand ne pas appliquer

- Actions locales instantanées (cocher une case)
- Actions pouvant être répétées sans risque (bouton actualiser)
