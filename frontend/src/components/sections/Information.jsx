import React from "react";
import SolutionCard from "../shared/SolutionCard";
import human2 from "../../assets/images/human2.png";
import rectangle345 from "../../assets/images/rectangle_345.png";

const Information = () => {
  return (
    <div className="information-section-wrapper">
      <p className="info-section-title">Solutions of the perfect CV</p>
      {/* Solution Cards */}
      <div className="solution-cards">
        <SolutionCard
          title="Build CVs easily"
          info="Turn you profile into a CV in a single click."
        />
        <SolutionCard
          title="Templates for everyone"
          info="Choose the most suitable template."
        />
        <SolutionCard
          title="Download and use offline"
          info="You can simply download your CV with a button."
        />
      </div>
      {/* Flow Section */}
    </div>
  );
};

export default Information;
