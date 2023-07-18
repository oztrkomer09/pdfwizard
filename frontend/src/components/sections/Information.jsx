import React from "react";
import SolutionCard from "../shared/SolutionCard";
import human2 from "../../assets/images/human2.png";
import human3 from "../../assets/images/human3.png";
import human4 from "../../assets/images/human4.png";
import human5 from "../../assets/images/human5.png";

import rectangle345 from "../../assets/images/rectangle_345.png";
import GetStartedButton from "../shared/GetStartedButton";

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
            <p className="flow-1-right-title">
              Build with only one link easily
            </p>
            <p className="flow-1-right-info">
              You can build a CV with only one link with the information on the
              business platforms of yourself or the person whose CV you want to
              view.
            </p>
            <GetStartedButton />
          </div>
        </div>
        <div className="flow-2">
          <p className="flow-2-title">
            Reflect yourself with customized templates
          </p>
          <p className="flow-2-info">
            You can come up with one among the job applications that find the
            most suitable templates.
          </p>
          <GetStartedButton />
        </div>
        <div className="flow-3">
          <img src={human3} alt="human3" className="flow-3-human3" />
          <img src={human4} alt="human4" className="flow-3-human4" />
          <img src={human5} alt="human5" className="flow-3-human5" />
        </div>
      </div>
    </div>
  );
};

export default Information;
