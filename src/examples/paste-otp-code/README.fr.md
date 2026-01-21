# Bouton Coller pour code OTP

## Description

Ajoutez un bouton "Coller" visible à côté des champs de saisie OTP, permettant aux utilisateurs de remplir rapidement le code depuis leur presse-papier en un seul clic au lieu de compter sur les raccourcis clavier.

## Pourquoi c'est important

- **Découvrabilité** : Tous les utilisateurs ne connaissent pas Ctrl+V/Cmd+V, surtout sur mobile ou pour les utilisateurs moins technophiles
- **Mobile-friendly** : Sur mobile, le raccourci clavier de collage est moins intuitif ; un bouton est plus facile à toucher
- **Alternative aux fonctionnalités natives** : WebOTP et `autocomplete="one-time-code"` ne fonctionnent pas toujours (codes email, différentes apps, limitations navigateur)
- **Réduction des frictions** : Un clic vs. focuser le champ + raccourci clavier

## La psychologie derrière

Les utilisateurs recevant un OTP l'ont souvent déjà dans leur presse-papier (depuis l'app email, SMS, gestionnaire de mots de passe). Montrer une action de collage visible réduit la charge cognitive — ils n'ont pas à se souvenir ou découvrir le raccourci de collage.

Cela suit le principe de "reconnaissance plutôt que rappel" des heuristiques de Nielsen.

## Permission navigateur : est-ce un problème UX ?

L'API Clipboard (`navigator.clipboard.readText()`) déclenche une demande de permission navigateur à la première utilisation. **Ce n'est pas rédhibitoire**, voici pourquoi :

### Pourquoi la permission est acceptable

1. **Une seule fois** : Une fois accordée, la permission persiste pour le site. Les utilisateurs ne reverront pas la demande.
2. **Contextuellement appropriée** : La demande apparaît juste après avoir cliqué sur "Coller" — c'est attendu, pas intrusif.
3. **Toujours plus rapide** : Même avec l'étape de permission, le flux est : clic → accepter (une fois) → code rempli. C'est 2 clics vs taper 6 caractères manuellement.
4. **Couvre des cas réels** : WebOTP et `autocomplete="one-time-code"` sont principalement pour mobile/SMS. Sur desktop avec codes email, le bouton coller reste précieux.

### Le compromis

- **Desktop** : Le bouton coller est très utile (codes email, gestionnaires de mots de passe)
- **Mobile** : Préférez `autocomplete="one-time-code"` qui n'a pas de friction de permission

### Exigences techniques

- HTTPS (ou localhost)
- Interaction utilisateur (le clic sur le bouton satisfait cette condition)
- Accord de permission (le navigateur demandera à la première utilisation)

C'est intentionnel pour la sécurité — les sites web ne devraient pas lire silencieusement le contenu du presse-papier.

## Quand appliquer

- Champs de saisie OTP/code de vérification
- Tout champ de formulaire où les utilisateurs collent couramment du contenu
- Applications desktop et mobile
- Codes de vérification par email (où WebOTP n'aide pas)

## Quand ne pas appliquer

- Champs de mot de passe (préoccupations de sécurité avec l'affichage d'un bouton coller)
- Champs où le collage est rarement utilisé
- Quand l'espace est extrêmement contraint

## Conseils d'implémentation

1. **Gérer la permission gracieusement** : La lecture du presse-papier peut échouer ; ne cassez pas le flux
2. **Filtrer le contenu collé** : N'extrayez que les chiffres pour OTP, validez le format
3. **Positionner clairement** : Placez le bouton à côté du champ, pas loin
4. **Iconographie claire** : L'icône presse-papier/coller est universellement comprise
5. **Combiner avec auto-submit** : Coller + validation immédiate = flux le plus rapide
6. **Garder Ctrl+V fonctionnel** : Le bouton est un ajout, pas un remplacement

## Patterns liés

- [Champ de code de vérification](/example/verification-code-input) - Design champs séparés vs unique
- [Soumission auto du code](/example/auto-submit-code) - Validation automatique à la complétion
