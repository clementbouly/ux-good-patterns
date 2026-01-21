## Description

Quand les utilisateurs doivent choisir parmi seulement quelques options, montrer tous les choix d'emblée est plus efficace que de les cacher dans un dropdown. Un dropdown pour 3 options signifie : cliquer pour ouvrir, scanner, cliquer pour sélectionner. Des options visibles signifient : scanner, cliquer. Une interaction économisée, zéro charge cognitive ajoutée.

## Pourquoi c'est important

- **Efficacité** : Un clic au lieu de deux
- **Clarté** : Les utilisateurs voient instantanément ce qui est disponible sans interaction
- **Comparaison** : Les options côte à côte sont plus faciles à comparer qu'une liste séquentielle
- **Tactile-friendly** : Zones de toucher plus grandes que les éléments de dropdown

## Choisir le bon pattern

| Pattern                    | Idéal pour                                                        |
| -------------------------- | ----------------------------------------------------------------- |
| **Boutons radio**          | Choix simples, espace compact, contextes de formulaire            |
| **Cartes sélectionnables** | Options avec descriptions, emphase visuelle, sélections autonomes |
| **Contrôle segmenté**      | Choix binaires ou ternaires, UI style barre d'outils              |
| **Dropdown**               | 6+ options, espaces contraints, sélections moins importantes      |

## Quand appliquer

- 2–5 options mutuellement exclusives
- Options courtes et distinctes
- Le choix est assez important pour mériter de l'espace écran
- Les utilisateurs bénéficient de comparer les options visuellement

## Quand ne pas appliquer

- 6+ options (envisagez un dropdown ou combobox)
- Espace horizontal très limité
- La sélection est secondaire par rapport à la tâche principale
- Les options changent fréquemment ou sont pilotées par les données
