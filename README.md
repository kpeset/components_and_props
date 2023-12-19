# Les states

## Objectif de l'atelier
Lors de ce small group support, nous avons vu comment utiliser le hook `useState` afin de gérer nos les états..

<br>
<br>

# Explication du code
## Préparation en amont

Afin de se concentrer pleinement sur les `states`, j'ai modifié le code de la step_01 afin de ne pas être perturbé par tous les composants.
Nous aurons donc juste un composant parent `Result.jsx` et nous conservons quand même `SummaryCategory.jsx`.

J'ai aussi crée dans `Result` un formulaire qui contient 4 inputs :

```js
        <form>
        <label htmlFor="">Reaction</label>
        <input type="number" />
        <label htmlFor="">Memory</label>
        <input type="number" />
        <label htmlFor="">Verbal</label>
        <input type="number" />
        <label htmlFor="">Visual</label>
        <input type="number" />
      </form>
```

Il nous servira à changer la valeur des notes.

<br>
<br>

## Création de nos states

Avant même de créer nos states, il est important d'importer le hook `useState` de **react** dans notre composant :

```js
import { useState } from "react";
```

Une fois fait, nous pouvons créer nos states. Dans la mesure ou nous avons 4 critères de notation (verbal, visual, memory et reaction), nous allons créer 4 états différents :

```js
  const [reactionRate, setReactionRate] = useState(0);
  const [memoryRate, setMemoryRate] = useState(0);
  const [verbalRate, setVerbalRate] = useState(0);
  const [visualRate, setVisualRate] = useState(0);
```

Chaque état aura pour valeur initial 0. Ici `reactionRate` est notre state et `setReactionRate` sera la fonction à utiliser qui nous permettra de modifier la valeur de notre state.

Nous modifions maintenant notre tableau d'objets de façon à ce que les notes ne soient plus en `dur`. On veut les rendre dynamiques :

```js
  const summaryList = [
    {
      text: "Reaction",
      img: reaction,
      rate: reactionRate,
      color: "red",
    },
    {
      text: "Memory",
      img: memory,
      rate: memoryRate,
      color: "yellow",
    },
    {
      text: "Verbal",
      img: verbal,
      rate: verbalRate,
      color: "green",
    },
    {
      text: "Visual",
      img: visual,
      rate: visualRate,
      color: "blue",
    },
  ];
```

Nous avons donc modifiés les valeurs de `rate` par celles du state concerné.

<br>
<br>

## Changer la valeur de nos states

La dernière étape consiste à remplir le formulaire avec de nos notes et de les enregistrer dans nos states.
Pour **Reaction**, nous avons crée la fonction `handleChangeReaction` qui sera :

```js
  const handleChangeReaction = (event) => {
    setReactionRate(event.target.value);
  };
```

Cette fonction sera exécutée à chaque fois que la valeur de l'input change :

```js
<input type="number" onChange={handleChangeReaction} />
```


Lorsque l'utilisateur modifie la valeur dans cet élément, la fonction est déclenchée par l'événement `onChange`. 

À l'intérieur de la fonction,` setReactionRate(event.target.value)` est appelé pour mettre à jour le state. 

**Rappel:** La propriété value contient la valeur actuelle de l'élément de formulaire. `event.target.value` est la valeur actuelle de l'élément HTML (ici notre input) qui a déclenché un événement (notre changement de valeur).
        
