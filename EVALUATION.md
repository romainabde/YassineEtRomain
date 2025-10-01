# Évaluation – Git, GitHub, CI

Pour ce projet, nous avons travaillé en binôme sur plusieurs branches (`main`, `branche1`, `branche2`, `branche3`).  
Nous avons simulé un conflit volontaire sur `lib/tasks.js` entre `branche1` et `branche2`.  
Le conflit concernait la ligne `module.exports` et a été résolu manuellement en combinant les exports nécessaires.  
La méthode de résolution a consisté à éditer le fichier, ajouter les modifications résolues (`git add`) puis finaliser le merge (`git commit`).  
Tous les tests ont été exécutés via GitHub Actions pour vérifier le bon fonctionnement après merge.  
Les liens des PR :  
- PR 1 : https://github.com/MaDesOcr/gitcidevA/pull/1
- PR 2 : https://github.com/MaDesOcr/gitcidevA/pull/5
- PR 3 : https://github.com/MaDesOcr/gitcidevA/pull/6
  
Le workflow est configuré pour lancer les tests automatiquement sur toutes les branches principales et vérifier l’intégrité du code.  
Ce projet nous a permis de maîtriser la gestion de conflits, les merges, et la mise en place d’une CI fonctionnelle.
