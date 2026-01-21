# Auto-formatage des champs avec clavier mobile

## Le problème

Quand les utilisateurs saisissent des données structurées comme des numéros de carte bancaire, des IBAN ou des numéros de téléphone, ils ont souvent du mal à :

- Relire de longues chaînes de chiffres sans séparations visuelles
- Repérer facilement les fautes de frappe accidentelles
- Devoir changer de clavier sur mobile pour saisir des chiffres

## La solution

1. **Auto-formater à la saisie** : Ajouter des séparateurs visuels (espaces) pour rendre les numéros plus faciles à lire et vérifier
2. **Utiliser `inputmode="numeric"`** : Afficher le clavier numérique sur mobile sans les inconvénients de `type="number"`

## Pourquoi pas `type="number"` ?

- Ajoute des flèches de spinner indésirables
- N'autorise pas les espaces ou caractères de formatage
- Comportement incohérent selon les navigateurs
- Problèmes de notation scientifique avec les grands nombres

## Conseils d'implémentation

- Utilisez `inputmode="numeric"` pour les chiffres purs (cartes bancaires, IBAN)
- Utilisez `type="tel"` pour les numéros de téléphone (inclut +, \*, #)
- Stockez la valeur brute (sans espaces) mais affichez formaté
- Gérez les événements de collage pour nettoyer et formater le contenu collé
- Considérez la longueur maximale selon le format (16 chiffres pour la plupart des cartes, jusqu'à 34 pour les IBAN)
- **Utilisez des placeholders d'exemple** : Montrez le format attendu dans le placeholder (ex: `4242 4242 4242 4242`) au lieu de répéter le label (ex: `Entrez le numéro de carte`). Cela aide les utilisateurs à comprendre le format attendu d'un coup d'œil.

## Accessibilité

- L'affichage formaté aide les utilisateurs avec des handicaps cognitifs à vérifier leur saisie
- `aria-describedby` peut lier à des indications de format
- Les lecteurs d'écran liront la valeur réelle du champ
