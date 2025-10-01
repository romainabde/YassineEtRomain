## Binôme
- Romain Abdelouahed
- Yassine Matrouf

## Description courte
Ce projet est une application de gestion de tâches en JavaScript avec tests automatisés via Jest et intégration continue sur GitHub Actions.  
Le but était de mettre en pratique le versionning Git, les workflows et la résolution de conflits.

## Commandes

- switch / checkout
  - `git switch <branche>` : change de branche
  - `git checkout <branche>` : change de branche ou revient à une version spécifique
  > Différence : `switch` est plus clair pour changer de branche uniquement, `checkout` peut faire plusieurs choses à la fois.

- pull / fetch  
  - `git fetch` : récupère les commits distants sans les intégrer automatiquement  
  - `git pull` : récupère les commits distants et les merge/rebase automatiquement  
  > Différence : fetch = voir les changements, pull = voir + appliquer

- rebase / revert  
  - `git rebase <branche>` : applique les commits de la branche courante au-dessus d’une autre branche
  - `git revert <commit>` : crée un nouveau commit qui annule un commit précédent  
  > Différence : rebase = réorganise l’historique, revert = annule sans toucher à l’historique

- tag : `git tag v1.0` → marque une version stable dans l’historique  
- stash : `git stash` → met de côté les modifications en cours pour revenir à un état propre  
- release : lié aux tags et à GitHub Releases pour distribuer une version stable

## Lien du dépot

- Dépôt GitHub : https://github.com/romainabde/YassineEtRomain
