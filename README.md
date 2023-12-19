# Composants et props

## Objectif de l'atelier
Lors de ce small group support, nous avons vu comment créer une page et transmettre des props à des composants.

## Explication du code
### Organisation de l'application

Voici comment sera organisée notre application pour le moment :

- **main.jxs** : Fichier parent de notre application, là où nous importons et utilisons `App.jsx` et nos différents fichiers **CSS**
- **App.jsx** : Ce composant affichera notre composant `Result.jsx`. 
- **Result.jsx** : Composant dans lequel nous allons afficher les deux composants enfants (note & summary)

<br>
<br>

### Création de notre page Result

Notre page `Result.jsx` affichera deux composants que nous allons créer ensuite :
- ResultDetails.jsx
- Summary.jsx

Après les avoir crée dans notre dossier `components`, nous devons les importer dans notre `Result.jsx` :

```js
import ResultDetails from "../components/ResultDetails";
import Summary from "../components/Summary";
```

**Rappel:** Faites bien attention aux `path` (chemin) que vous utilisez lors de vos imports.
