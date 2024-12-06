
# Check It

Check It est un projet éducatif visant à sensibiliser les utilisateurs sur la désinformation, en offrant des outils et ressources pour mieux comprendre et contrer ce phénomène.

Ce projet répond aux exigeances de la v1 de la maquette du projet référencée ici: https://www.figma.com/design/3fThNwXC9msNNy2VZwuncJ/Campagne-solution?node-id=123-225&node-type=

## Prérequis

Avant de commencer, assurez-vous d’avoir les éléments suivants installés sur votre machine :
- [Node.js](https://nodejs.org/) (version 14 ou supérieure)
- Un gestionnaire de paquets comme npm ou yarn
- [Git](https://git-scm.com/)

## Installation

1. **Clonez le dépôt** :
   ```bash
   git clone https://github.com/Joulelone/check_it.git
   cd check_it
   ```

2. **Installez les dépendances** :
   Avec npm :
   ```bash
   npm install
   ```
   Ou avec yarn :
   ```bash
   yarn install
   ```

## Déploiement local

1. **Démarrez le serveur de développement** :
   ```bash
   npm run dev
   ```
   Ou avec yarn :
   ```bash
   yarn dev
   ```

2. **Accédez à l’application** :
   Ouvrez votre navigateur et allez à l’adresse suivante : [http://localhost:4173](http://localhost:4173).

## Déploiement en production

Pour un déploiement sur un serveur, générez les fichiers statiques :

```bash
npm run build
```
Cela crée un dossier `dist` contenant les fichiers prêts pour la production. Vous pouvez ensuite les déployer sur un serveur ou un service d’hébergement (par exemple Netlify ou Vercel).

## Fonctionnalités principales

- Sensibilisation sur la désinformation via des articles et des astuces.
- Interfaces simples construites avec [Alpine.js](https://alpinejs.dev/).
- Formulaire d'abonnement à une newsletter.

## Contribution

Les contributions sont les bienvenues ! Veuillez :
1. Forker ce dépôt.
2. Créer une branche pour votre fonctionnalité ou correctif :
   ```bash
   git checkout -b feature/nom-de-votre-branche
   ```
3. Faire une pull request une fois vos modifications terminées.

---

Pour plus de détails, vous pouvez consulter le dépôt directement : [Check It - GitHub](https://github.com/Joulelone/check_it).
