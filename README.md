# Optimiser ses states

## Objectif de l'atelier
Lors de ce small group support, nous avons vu comment optimiser les states afin de rendre le code plus 'simple' et maintenable.

<br>
<br>

# Explication du code
## Refactoriser le code

Pour le moment nous avons 4 states différents pour gérer nos notes :

```js
  const [reactionRate, setReactionRate] = useState(0);
  const [memoryRate, setMemoryRate] = useState(0);
  const [verbalRate, setVerbalRate] = useState(0);
  const [visualRate, setVisualRate] = useState(0);
```

Bien que ce ne soit pas vraiment la catastrophe, il est important de savoir tout mettre dans un state. 
Pourquoi ? Imaginons que vous avez un formulaire pour créer une annonce de voiture sur un site comme **leboncoin**. Votre formulaire contiendra plusieurs champs tels que :
- Titre de l'annonce
- Prix
- Kilometrage
- Motorisation
- Ville
- Chevaux
- Marque
- Et beaucoup plus encore...

Vous imaginez si il faut un state pour gérer chacun de ses champs ? Et en plus il faut que chaque state utilise sa propre fonction. C'est difficilement maintenable et très peu écologique comme code.
Nous pouvons alors mettre nos 4 states dans un un seul et même state. Ce state sera un objet qui contiendra nos différentes notes :

```js
  const [rates, setRates] = useState({
    memory: 0,
    reaction: 0,
    verbal: 0,
    visual: 0,
  });
```

Maintenant nous devons modifier `summaryList` en conséquence :

```js
  const summaryList = [
    {
      text: "Reaction",
      img: reaction,
      rate: rates.reaction,
      color: "red",
    },
    {
      text: "Memory",
      img: memory,
      rate: rates.memory,
      color: "yellow",
    },
    {
      text: "Verbal",
      img: verbal,
      rate: rates.verbal,
      color: "green",
    },
    {
      text: "Visual",
      img: visual,
      rate: rates.visual,
      color: "blue",
    },
  ];
```

Dans la propriété `rate`, nous voulons maintenant que sa valeur soit celle qui est dans `rates` (qui je le rappelle est un objet qui a 4 propriétés - `memory`, `visual`, `verbal`, `reaction`).
