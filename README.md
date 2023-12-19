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


**Rappel:** Nous ne pouvons pas directement mettre nos deux composants à l'intérieur du `return`. En effet, dans cette situation, nous ne pouvons pas laisser deux composants sans parents. Nous avons utiliser ici des **fragments** `<> </>` mais nous aurions pu utiliser d'autres balises comme les `<div>` ou encore `<section>`.


### Création de nos composants

Maintenant il est temps d'afficher autre chose qu'un simple `Hello World`. Le composant `ResultDetails` que nous avons codé est pour le moment relativement simple :

```js
export default function ResultDetails() {
  return (
    <section className="global_rate">
      <h1>Your Result</h1>
      <div className="circle_rate">
        <h2>76</h2>
        <p>of 100</p>
      </div>
      <div className="result_text">
        <h3>Great</h3>
        <p>
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
    </section>
  );
}
```

En revanche, `SummaryCategory` se révèle un peu plus complexe. Nous ne voulions pas répéter notre code. C'est pour cette raison que nous avons crée le tableau d'objets `summaryList` :

```js
import memory from "../assets/images/icon-memory.svg";
import reaction from "../assets/images/icon-reaction.svg";
import verbal from "../assets/images/icon-verbal.svg";
import visual from "../assets/images/icon-visual.svg";

const summaryList = [
  {
    text: "Reaction",
    img: reaction,
    rate: "80",
    color: "red",
  },
  {
    text: "Memory",
    img: memory,
    rate: "92",
    color: "yellow",
  },
  {
    text: "Verbal",
    img: verbal,
    rate: "61",
    color: "green",
  },
  {
    text: "Visual",
    img: visual,
    rate: "72",
    color: "blue",
  },
];
```

Et maintenant dans notre allons répéter autant de fois un composant qu'il y a d'élements dans le tableau (pensez bien à créer un composant `SummaryCategory` qui pour le moment retournera simplement un `Hello World` :

```js

export default function Summary() {
  return (
    <section className="details_rate">
      <h2>Summary</h2>
      <ul>
        {summaryList.map((summary, index) => (
          <SummaryCategory />
        ))}
      </ul>
    </section>
  );
}

```
