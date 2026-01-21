# Support du collage pour les codes de vérification

## Description

Quand les utilisateurs doivent saisir un code de vérification (OTP, 2FA), ils devraient pouvoir coller le code entier d'un coup au lieu de taper chaque chiffre individuellement.

## Pourquoi c'est important

- **Rapidité** : Les utilisateurs reçoivent souvent les codes par SMS ou email et veulent les copier-coller rapidement
- **Réduction des erreurs** : La saisie chiffre par chiffre est sujette aux fautes de frappe
- **Expérience mobile** : Coller est beaucoup plus facile que de changer de clavier et taper sur un petit écran
- **Accessibilité** : Certains utilisateurs ont des difficultés avec la frappe précise

## Quand appliquer

- Champs d'authentification à deux facteurs (2FA)
- Codes de vérification email/téléphone
- Mots de passe à usage unique (OTP)
- Toute saisie de code à plusieurs chiffres

## Quand ne pas appliquer

- Codes PIN que les utilisateurs devraient mémoriser (considération de sécurité)
- Cas où vous voulez explicitement ralentir la saisie (scénarios type CAPTCHA)
