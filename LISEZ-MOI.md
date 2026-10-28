# Site Carnet (https://spdyn1.github.io/carnet/)

- `carnet/index.html` : page d'installation de l'appli + liste « À regarder dans le navigateur ».
- `carnet/Carnet.apk`, `carnet/version.json` : dernière version de l'appli (voir le dépôt carnet).
- `carnet/editeur.html` : l'éditeur pour l'ordinateur, copié depuis le dépôt privé carnet-desktop
  par son script `publier` (ne pas le modifier ici).
- `carnet/pages/` : pages à consulter dans le navigateur ; `carnet/pages.json` en est la liste.
- `carnet/exemples/` : notes d'exemple de l'appli (menu ⋮ → Notes d'exemple…), une note par `.carnet` ;
  `carnet/exemples.json` en est la liste. Ajouter ou mettre à jour : `./ajouter-exemple note.carnet`
  (la description se règle dans `exemples.json`, puis `./ajouter-exemple` sans argument).

## Ajouter une page

1. Dans le `<head>` de la page : `<title>` (obligatoire), et si possible
   `<meta name="description" content="…">` et `<meta name="carnet-icone" content="📜">`.
   La page doit être autonome (un seul fichier .html, pas de fichiers à côté).
2. `./ajouter-page chemin/vers/page.html` : copie dans `carnet/pages/`, refait `pages.json`,
   commite et pousse. La page apparaît sur l'accueil d'ici une à deux minutes.

Mettre à jour une page : même commande. Supprimer ou renommer : le faire dans `carnet/pages/`,
puis `./ajouter-page` sans argument. Ordre : déplacer les entrées dans `pages.json`, puis
`./ajouter-page`. Essai sans publier : `--sans-envoi`.
