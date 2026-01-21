# Skeleton Loading vs Spinner

## Description

Lors du chargement de contenu, affichez des formes animées qui reproduisent la structure du contenu réel au lieu d'un spinner générique. Cette technique s'appelle "skeleton loading" ou "placeholder de contenu".

## Pourquoi c'est important

- **Performance perçue** : Les skeletons donnent l'impression que l'app est plus rapide car les utilisateurs voient un feedback visuel immédiat correspondant à la structure attendue
- **Charge cognitive réduite** : Les utilisateurs comprennent quel type de contenu arrive, réduisant la surprise et le temps de réorientation
- **Moins brutal** : Le contenu remplace doucement le skeleton vs. un saut soudain du spinner au contenu complet
- **Stabilité de la mise en page** : La structure de la page est établie immédiatement, évitant les décalages de layout (CLS)

## La psychologie derrière

Les spinners communiquent "attendez, quelque chose se passe" mais ne donnent aucun contexte. Les skeletons communiquent "voici ce que vous allez voir" - ce changement subtil transforme la perception utilisateur d'une attente passive à une anticipation active.

Des études montrent que les écrans skeleton peuvent réduire le temps d'attente perçu de 10-20% par rapport aux spinners traditionnels.

## Quand appliquer

- Listes d'éléments (utilisateurs, produits, posts)
- Cartes avec contenu structuré
- Pages de profil avec avatar, nom, bio
- Tableaux de bord avec plusieurs sections de données
- Tout contenu avec une structure prévisible

## Quand ne pas appliquer

- Temps de chargement très courts (< 300ms) - n'affichez rien
- Structure de contenu imprévisible
- Chargements initiaux de page complète (préférez un écran de démarrage de marque)
- Rafraîchissements de données en arrière-plan quand le contenu est déjà visible

## Exemple concret

Voici LinkedIn chargeant du contenu avec un simple spinner — vous ne voyez rien sauf un cercle qui tourne jusqu'à ce que le contenu apparaisse :

<video src="/videos/spinner-loading.mp4" controls width="100%"></video>

Un écran skeleton montrerait la structure du contenu à venir, réduisant le temps d'attente perçu.

## Conseils d'implémentation

1. **Correspondre à la mise en page** : Les formes skeleton doivent correspondre étroitement aux dimensions du contenu réel
2. **Animation subtile** : Un effet de pulsation ou de miroitement léger indique l'activité
3. **Afficher 3-5 éléments** : N'affichez pas trop d'éléments skeleton, ça paraît artificiel
4. **Transition douce** : Animez la transition du skeleton au contenu réel avec un fondu
5. **Timing cohérent** : Gardez le skeleton visible au moins 300ms pour éviter les flashs
