## Description

Utiliser un dropdown/select standard avec trop d'options rend difficile pour les utilisateurs de trouver et sélectionner la valeur souhaitée efficacement. Un combobox avec recherche permet aux utilisateurs de taper pour filtrer, réduisant drastiquement le temps de sélection.

## Pourquoi c'est important

- **Efficacité** : Taper "fra" pour trouver France est plus rapide que scroller à travers 200+ pays
- **Charge cognitive** : Les utilisateurs n'ont pas besoin de scanner et comparer des dizaines d'options similaires
- **Taux d'erreur** : Filtrer réduit les options visibles, rendant les erreurs de clic moins probables
- **Accessibilité** : Les utilisateurs clavier peuvent taper au lieu d'appuyer sur les flèches répétitivement
- **Expérience mobile** : Les selects natifs avec beaucoup d'options nécessitent un scroll excessif

## Le point de bascule

Autour de **10-15 options**, un dropdown standard commence à devenir pénible. À **30+ options**, c'est presque inutilisable sans recherche. Considérez :

- 5 options → un dropdown standard suffit
- 15 options → limite, dépend de la familiarité des utilisateurs avec les options
- 50+ options → un combobox avec recherche est essentiel

## Quand appliquer

Utilisez un **dropdown standard** quand :

- Petit ensemble fixe d'options (≈ 7–10 max)
- Les options sont bien connues et faciles à scanner (statut, priorité, catégorie)
- Les utilisateurs ont besoin de voir toutes les options pour décider

Utilisez un **combobox avec recherche** quand :

- Grandes listes (pays, devises, fuseaux horaires)
- Les utilisateurs savent déjà ce qu'ils cherchent
- Les options ont des préfixes similaires (états, villes)
- Listes pilotées par les données ou évolutives

## Exemple concret

Voici le sélecteur de langue de LinkedIn avec environ 45 options — pour trouver votre langue, vous devez scroller à travers toute la liste triée alphabétiquement :

<video src="/videos/language-selector.mp4" controls width="100%"></video>

Un dropdown avec recherche transformerait une tâche de 15 secondes en une tâche de 2 secondes.

## Conseils d'implémentation

1. **Préserver l'affichage de la valeur sélectionnée** : Montrez la valeur complète sélectionnée, pas juste ce que l'utilisateur a tapé
2. **Effacer la recherche à la fermeture** : Réinitialisez le filtre quand le dropdown se ferme
3. **Gérer l'absence de résultats** : Montrez un message clair "Aucun résultat trouvé"
4. **Considérer récent/populaire** : Pour les très grandes listes, montrez d'abord les options récemment utilisées ou populaires
