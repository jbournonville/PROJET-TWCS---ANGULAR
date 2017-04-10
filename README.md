#Instruction de mise en place

## Installation de NodeJs
Telecharger et installer NodeJs [https://nodejs.org/en/download/current/](https://nodejs.org/en/download/current/)

## Installation de Angular CLI
Dans un terminal utiliser la commande :

```{r, engine='bash', count_lines}
npm install -g @angular/cli
```

## Fichiers sources
Les fichiers se trouve dans le dossier PROJET/PiggyBill

### Installation de l'application
Avant de pouvoir lancer l'application, il faut se rendre de le dossier PiggyBill et lancer la commande :

```{r, engine='bash', count_lines}
npm install
```

### Lancement de l'application
Pour démarrer le server en mode développement se rendre dans le dossier avec le terminal et utiliser la commande :

```{r, engine='bash', count_lines}
ng serve
```

Ensuite, vous pouvez accéder a l'URL [localhost:4200](localhost:4200) pour avoir l'application


### NOTA :
La partie facturation n'est pas finalisée par manque de temps mais l'objectif du projet était de découvrir Angular.
