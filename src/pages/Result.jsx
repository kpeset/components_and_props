import SummaryCategory from "../components/SummaryCategory";

import memory from "../assets/images/icon-memory.svg";
import reaction from "../assets/images/icon-reaction.svg";
import verbal from "../assets/images/icon-verbal.svg";
import visual from "../assets/images/icon-visual.svg";
import { useState } from "react";

export default function Result() {
  const [reactionRate, setReactionRate] = useState(0);
  const [memoryRate, setMemoryRate] = useState(0);
  const [verbalRate, setVerbalRate] = useState(0);
  const [visualRate, setVisualRate] = useState(0);

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

  const handleChangeReaction = (event) => {
    setReactionRate(event.target.value);
  };

  const handleChangeMemory = (event) => {
    setMemoryRate(event.target.value);
  };

  const handleChangeVerbal = (event) => {
    setVerbalRate(event.target.value);
  };

  const handleChangeVisual = (event) => {
    setVisualRate(event.target.value);
  };

  return (
    <>
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
      <section className="details_rate">
        <h2>Summary</h2>
        <ul>
          {summaryList.map((summary, index) => (
            <SummaryCategory key={index} settings={summary} />
          ))}
        </ul>
      </section>

      <form>
        <label htmlFor="">Reaction</label>
        <input type="number" onChange={handleChangeReaction} />
        <label htmlFor="">Memory</label>
        <input type="number" onChange={handleChangeMemory} />
        <label htmlFor="">Verbal</label>
        <input type="number" onChange={handleChangeVerbal} />
        <label htmlFor="">Visual</label>
        <input type="number" onChange={handleChangeVisual} />
      </form>
    </>
  );
}
