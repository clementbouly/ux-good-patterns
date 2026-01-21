# Fermeture des modales

## Description

Une modale doit offrir plusieurs moyens de se fermer : cliquer sur le bouton X, cliquer à l'extérieur (sur l'overlay), et appuyer sur la touche Échap. Cela offre de la flexibilité aux utilisateurs et correspond à leurs attentes selon les contextes et préférences.

> **⚠️ Exception** : Ce pattern s'applique aux modales standard. Pour les confirmations critiques, notifications importantes ou actions destructrices, vous devriez **désactiver la fermeture par clic extérieur** pour éviter les rejets accidentels. Voir "Quand ne pas appliquer" ci-dessous.

## Pourquoi c'est important

- **Autonomie utilisateur** : Différents utilisateurs ont différentes préférences d'interaction
- **Accessibilité** : Les utilisateurs au clavier comptent sur la touche Échap, tandis que les utilisateurs souris préfèrent cliquer à l'extérieur
- **Efficacité** : Les utilisateurs avancés peuvent fermer rapidement avec Échap sans déplacer leur souris
- **Mobile-friendly** : Sur les appareils tactiles, taper à l'extérieur est souvent plus naturel que viser un petit bouton X
- **Réduction de la frustration** : Être "coincé" dans une modale avec une seule sortie crée des frictions inutiles

## La psychologie derrière

Quand une modale apparaît, les utilisateurs essaient instinctivement plusieurs méthodes pour la fermer selon leurs expériences passées. Certains atteignent immédiatement la touche Échap, d'autres cliquent à l'extérieur, et certains cherchent le bouton fermer. En supportant les trois méthodes, vous respectez ces comportements appris et créez une expérience fluide.

Restreindre la fermeture à une seule méthode (comme le bouton X) casse les attentes utilisateur et peut rendre l'interface rigide et contrôlante. C'est particulièrement frustrant sur mobile où le bouton X peut être petit et difficile à toucher précisément.

## Quand appliquer

- Modales standard (formulaires, dialogues, lightboxes)
- Pop-ups informatifs
- Panneaux de paramètres
- Galeries d'images et aperçus
- Feuilles d'actions rapides
- La plupart des interactions modales où l'utilisateur pourrait vouloir annuler ou revenir

## Quand ne pas appliquer

- **Confirmations critiques** où une fermeture accidentelle serait problématique (ex: "Supprimer le compte", "Abandonner les modifications non sauvegardées")
- **Notifications importantes** nécessitant un accusé de réception (ex: alertes de sécurité, confirmations de paiement, messages d'erreur nécessitant une action)
- **Assistants multi-étapes** où cliquer à l'extérieur pourrait indiquer une confusion plutôt qu'une intention de fermer
- **États de chargement/traitement** qui ne devraient pas être interrompus en cours d'opération
- **Confirmations d'actions destructrices** où l'utilisateur doit consciemment choisir de continuer ou annuler

Dans ces cas, désactivez la fermeture par clic extérieur, mais **fournissez toujours** des boutons explicites "Annuler" et "Confirmer" comme options de sortie claires.

## Conseils d'implémentation

1. **Comportement par défaut** : La plupart des bibliothèques UI (Radix UI, Headless UI, Material UI) supportent les trois méthodes de fermeture par défaut
2. **Comportement cohérent** : Si vous désactivez une méthode, assurez-vous que les utilisateurs comprennent pourquoi (ex: montrez un message expliquant qu'ils doivent sauvegarder ou annuler)
3. **Feedback visuel** : Lors d'un clic extérieur, envisagez d'ajouter un léger tremblement ou surbrillance à la modale pour indiquer que l'interaction a été enregistrée
4. **Gestion du focus** : Quand la modale se ferme, renvoyez le focus sur l'élément qui l'a ouverte (important pour la navigation au clavier)
5. **Animation** : Assurez-vous que l'animation de fermeture est fluide et cohérente quelle que soit la méthode de fermeture

## Patterns courants

**Dialogue standard** :

- Bouton X ✓
- Clic extérieur ✓
- Touche Échap ✓

**Dialogue de confirmation avec modifications non sauvegardées** :

- Bouton X (affiche "êtes-vous sûr ?")
- Clic extérieur (affiche "êtes-vous sûr ?")
- Touche Échap (affiche "êtes-vous sûr ?")
- Boutons "Annuler" et "Confirmer"

**Modale de chargement** :

- Bouton X ✗
- Clic extérieur ✗
- Touche Échap ✗
- Se ferme automatiquement quand le chargement est terminé
