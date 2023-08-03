import React from "react";
import TemplateSlider from "../shared/TemplateSlider";

const SolutionCard = (props) => {
  return (
    <div className="solution-card">
      {props.img ? (
        <img src={props.img} alt="rectangle" className="rectangle" />
      ) : (
        <div className="solution-template-slider-wrapper">
          <div className="solution-template-slider">
            <TemplateSlider />
          </div>
        </div>
      )}
      <h2>{props.title}</h2>
      <p>{props.info}</p>
    </div>
  );
};

export default SolutionCard;
