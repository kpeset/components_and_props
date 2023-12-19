import { useState } from "react";

import SummaryCategory from "../components/SummaryCategory";

import memory from "../assets/images/icon-memory.svg";
import reaction from "../assets/images/icon-reaction.svg";
import verbal from "../assets/images/icon-verbal.svg";
import visual from "../assets/images/icon-visual.svg";

export default function Result() {
  const [rates, setRates] = useState({
    memory: 72,
    reaction: 34,
    verbal: 13,
    visual: 75,
  });

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

  const handleChangeRates = (event) => {
    setRates({
      ...rates,
      [event.target.name]: event.target.value,
    });
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
        <label>Reaction</label>
        <input name="reaction" type="number" onChange={handleChangeRates} />
        <label>Memory</label>
        <input name="memory" type="number" onChange={handleChangeRates} />
        <label>Verbal</label>
        <input name="verbal" type="number" onChange={handleChangeRates} />
        <label>Visual</label>
        <input name="visual" type="number" onChange={handleChangeRates} />
      </form>
    </>
  );
}
