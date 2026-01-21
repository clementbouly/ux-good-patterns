# Autofocus sur les modales

## Description

Quand une modale s'ouvre avec un seul champ de saisie (ou un champ principal), celui-ci doit être automatiquement focus pour permettre à l'utilisateur de commencer à taper immédiatement.

## Pourquoi c'est important

- **Efficacité** : L'utilisateur peut commencer à taper sans action supplémentaire
- **Accessibilité** : Les utilisateurs au clavier n'ont pas besoin de naviguer pour trouver le champ
- **Expérience utilisateur** : Réduit les frictions et accélère les interactions

## Quand appliquer

- Modales avec un seul champ de saisie
- Modales de recherche
- Formulaires simples (ajout rapide d'élément)

## Quand ne pas appliquer

- Modales avec plusieurs champs sans hiérarchie claire
- Modales de confirmation (le focus doit être sur le bouton de confirmation)
- Modales avec du contenu à lire avant l'interaction

## Exemple concret

Voici la modale de recherche de la SNCF — à l'ouverture, le champ n'est pas focus, nécessitant un clic supplémentaire avant de pouvoir taper :

<video src="/videos/BadExampleAutoFocusModal.mp4" controls width="100%"></video>

Un petit détail qui ajoute de la friction à chaque recherche.
