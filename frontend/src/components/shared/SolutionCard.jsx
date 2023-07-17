import React from "react";
import rectangle from "../../assets/images/empty_rectangle.png";

const SolutionCard = (props) => {
  return (
    <div className="solution-card">
      <img src={rectangle} alt="rectangle" className="rectangle" />
      <h2>{props.title}</h2>
      <p>{props.info}</p>
    </div>
  );
};

export default SolutionCard;
