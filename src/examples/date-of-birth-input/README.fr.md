# Saisie de la date de naissance

## Description

La date de naissance est l'un des champs les plus courants des formulaires, et pourtant presque toujours mal implémenté. Les date pickers natifs et les longs dropdowns imposent à l'utilisateur des interactions lentes et frustrantes pour saisir une valeur qu'il connaît par cœur. Trois simples champs texte avec auto-advance sont plus rapides, plus naturels, et bien meilleurs sur mobile.

## Pourquoi c'est important

- **Rapidité** : Taper "23061986" avec auto-advance prend ~1,5s. Naviguer dans un calendar picker jusqu'en 1986 demande 10+ tapotements. Un dropdown année avec 100+ entrées est un marathon de scroll.
- **Modèle mental familier** : L'utilisateur pense déjà sa date de naissance comme trois nombres (JJ, MM, AAAA). Refléter cette structure directement colle à son intention.
- **Clavier mobile** : `inputmode="numeric"` affiche le pavé numérique, sans changement de clavier et avec moins de fautes de frappe.
- **Autofill navigateur** : Avec `autocomplete="bday-day" / "bday-month" / "bday-year"`, le navigateur peut remplir la date de naissance enregistrée en un clic.
- **Validation inline** : Chaque champ a des contraintes claires (max 31 / max 12 / 4 chiffres pour l'année) qui permettent de remonter des erreurs précises.

## Conseils d'implémentation

- Utilisez `type="text"` avec `inputmode="numeric"` et `pattern="[0-9]*"`, pas `type="number"` (qui ajoute des spinners, supprime les zéros en tête, casse `maxLength`).
- Auto-advance au champ suivant quand le champ courant est rempli. Bonus : avancer dès le premier chiffre quand il ne peut être qu'un chiffre seul (jour ≥ 4, mois ≥ 2).
- Gérez le backspace : si le champ est vide, revenir au précédent pour corriger naturellement.
- Supportez le collage : si l'utilisateur colle "23/06/1986" (ou "23-06-1986", "23.06.1986", "23061986"), parser et remplir les trois champs.
- Validez contre le vrai calendrier : 31 jours max ne suffit pas. Vérifiez le nombre de jours par mois et les années bissextiles.
- Adaptez l'ordre à la locale : JJ/MM/AAAA pour la plupart des pays, MM/JJ/AAAA pour en-US.
- Ajoutez `autocomplete="bday-day" / "bday-month" / "bday-year"` pour l'autofill.
- Affichez des placeholders (JJ, MM, AAAA) en plus des labels pour que le format attendu reste visible.

## À éviter

- **`<input type="date">` natif** : ouvre le picker OS sur mobile, qui force une navigation mois par mois à travers des décennies. Même sur desktop, le picker démarre au mois courant, demandant des centaines de clics pour atteindre une année de naissance.
- **Trois dropdowns** : le dropdown année avec 100+ options est pénible à scroller sur mobile, et plus lent que la saisie clavier sur desktop.
- **Un seul champ texte avec masque** : mieux que les options ci-dessus, mais perd la validation par champ et le rythme naturel de la saisie à travers trois champs séparés.

## Quand l'appliquer

- Date de naissance sur n'importe quel formulaire d'inscription, KYC ou profil.
- Toute date historique connue précisément (anniversaire, date d'expiration, etc.).

## Quand ne pas l'appliquer

- Choisir une date future proche (rendez-vous, livraison, réservation). Un calendar picker est vraiment plus rapide ici.
- Choisir une plage de dates : utilisez un date range picker.
