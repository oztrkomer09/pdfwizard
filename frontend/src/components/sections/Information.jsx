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
      <div className="flow-section">
        <div className="flow-1">
          <div className="flow-1-left">
            <img src={human2} alt="human2" className="flow-1-left-human" />
            <img
              src={rectangle345}
              alt="rectangle345"
              className="flow-1-left-rectangle"
            />
          </div>
          <div className="flow-1-right">
            <h2 className="flow-1-right-title">
              Build with only one link easily
            </h2>
            <p className="flow-1-right-info">
              You can build a CV with only one link with the information on the
              business platforms of yourself or the person whose CV you want to
              view.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
