import SummaryCategory from "./SummaryCategory";

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

export default function Summary() {
  return (
    <section className="details_rate">
      <h2>Summary</h2>
      <ul>
        {summaryList.map((summary, index) => (
          <SummaryCategory key={index} settings={summary} />
        ))}
      </ul>
    </section>
  );
}
