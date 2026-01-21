# Bouton retour en haut

## Description

Sur les pages avec un long contenu défilant, fournissez un bouton flottant qui apparaît après que l'utilisateur ait scrollé, lui permettant de revenir rapidement en haut de la page en un seul clic.

## Pourquoi c'est important

- **Réduction des frictions** : Les utilisateurs n'ont pas à scroller manuellement à travers potentiellement des centaines de pixels de contenu
- **Accessibilité** : Particulièrement utile pour les utilisateurs avec des déficiences motrices ou utilisant des trackpads
- **Mobile-friendly** : Essentiel sur mobile où remonter en scrollant peut être fastidieux, surtout avec la navigation au pouce
- **Gain de temps** : Retour instantané à la navigation, recherche, ou actions du header

## La psychologie derrière

Quand les utilisateurs scrollent vers le bas d'une longue page, ils construisent un modèle mental de la distance parcourue. La perspective de faire le chemin inverse peut sembler décourageante. Un bouton retour en haut supprime cette friction en offrant une "téléportation" instantanée vers le point de départ.

Cela suit le principe de fournir des raccourcis aux utilisateurs expérimentés sans encombrer l'interface pour les autres (le bouton n'apparaît que quand nécessaire).

## Quand appliquer

- Contenu long (articles, documentation, conditions d'utilisation)
- Fils à défilement infini (réseaux sociaux, listes de produits)
- Pages de résultats de recherche
- Toute page où les utilisateurs pourraient scroller plus de 2-3 hauteurs de viewport
- Applications single-page avec chargement dynamique de contenu

## Quand ne pas appliquer

- Pages courtes qui tiennent en 1-2 hauteurs de viewport
- Pages avec navigation sticky offrant une fonctionnalité similaire
- Flux assistant/stepper où la progression linéaire est intentionnelle
- Dialogues modaux ou petits conteneurs scrollables (discutable - dépend de la longueur du contenu)

## Exemple concret

Voici le fil desktop de LinkedIn — le champ "Créer un post" disparaît dès que vous scrollez, forçant les utilisateurs à remonter manuellement pour poster :

<video src="/videos/scroll-to-top.mp4" controls width="100%"></video>

Un bouton retour en haut fournirait un chemin rapide vers l'action principale.

## Conseils d'implémentation

1. **Apparaître après un seuil** : Affichez le bouton seulement après avoir scrollé 300-500px vers le bas
2. **Scroll fluide** : Utilisez `behavior: 'smooth'` pour une animation agréable
3. **Position cohérente** : Le coin bas-droit est la convention (accessible au pouce droit sur mobile)
4. **Entrée subtile** : Faites apparaître le bouton en fondu ou glissé pour éviter une apparition brusque
5. **Affordance claire** : Utilisez une icône flèche vers le haut - universellement comprise
6. **Ne pas obstruer le contenu** : Assurez-vous que le bouton ne couvre pas d'éléments interactifs importants
7. **Penser aux utilisateurs clavier** : Le bouton doit être focusable et activable avec Entrée/Espace
