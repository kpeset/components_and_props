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







