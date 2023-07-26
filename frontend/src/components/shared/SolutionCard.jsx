import React from "react";

const SolutionCard = (props) => {
  return (
    <div className="solution-card">
      <img src={props.img} alt="rectangle" className="rectangle" />
      <h2>{props.title}</h2>
      <p>{props.info}</p>
    </div>
  );
};

export default SolutionCard;
