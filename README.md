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

Pour le moment, nos deux composants vont juste afficher tous les deux un simple **"Hello World"** :

```js
// ResultDetails.jsx

  export default function ResultDetails() {
  return <h1>Hello World</h1>;
}

// Summary.jsx

  export default function ResultDetails() {
  return <h1>Hello World</h1>;
}
```

Après les avoir crée dans notre dossier `components`, nous devons les importer dans notre `Result.jsx` :

```js
import ResultDetails from "../components/ResultDetails";
import Summary from "../components/Summary";
```

**Rappel:** Faites bien attention aux `path` (chemin) que vous utilisez lors de vos imports.

Et maintenant nous pouvons les utiliser dans notre page `Result.jsx`

```js
export default function Result() {
  return (
    <>
      <ResultDetails />
      <Summary />
    </>
  );
}
```


**Rappel:**Nous ne pouvons pas directement mettre nos deux composants à l'intérieur du `return`. En effet, dans cette situation, nous ne pouvons pas laisser deux composants sans parents. Nous avons utiliser ici des **fragments** `<> </>` mais nous aurions pu utiliser d'autres balises comme les `<div>` ou encore `<section>`.
