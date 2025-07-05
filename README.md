# Open Food Facts - Projet React

## Description
Cette application permet de rechercher des produits alimentaires via l’API publique **Open Food Facts** et d’en consulter les informations principales : image, marque, ingrédients, origine, score nutritionnel etc.

API utilisée :  
🔗 [https://wiki.openfoodfacts.org/API](https://wiki.openfoodfacts.org/API)  
(Open Food Facts API — présente dans la liste proposée par l’enseignant)

---

## Lancement du projet

### Prérequis
- [Node.js](https://nodejs.org/) et [npm](https://www.npmjs.com/) installés (Testé avec Node.js v22.15.1, npm v10.9.2)
- Git (ou décompressez le fichier `.zip`)
- Accès au dépôt Git : **https://github.com/sumtl/openfood** 

### Installation des dépendances
```bash
npm install
```
### Démarrage de l'application
```bash
npm run dev
```
### Accès à l'application
Ouvrez votre navigateur et accédez à l'URL suivante :
```
http://localhost:5173/
```

---
## Fonctionnalités

- Recherche de produits par **nom**, **marque**, **pays** ou **mot-clé**
- Affichage limité aux **50 premiers résultats complets** (avec image, nom et marque renseignés)
- Présentation des résultats sous forme de cartes avec **nom**, **image**, **marque**, **origine**, **quantité**
- Bouton de réinitialisation pour effacer la recherche et les résultats
- Clic sur une carte pour accéder à la **page de détails** du produit
- Affichage des détails : **image**, **marque**, **ingrédients**, **informations nutritionnelles**, **quantité**, **code-barres**, **origine**, **lieu de vente**, **écoscore**, **nutriscore**
- Gestion des erreurs côté client : champ vide, erreur réseau, produit introuvable etc.

