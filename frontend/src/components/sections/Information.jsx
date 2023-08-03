import React from "react";
import SolutionCard from "../shared/SolutionCard";
import GetStartedButton from "../shared/GetStartedButton";
import solution1 from "../../assets/images/solution1.png";
import solution3 from "../../assets/images/solution3.png";
import flowad1 from "../../assets/images/flowad1.png";
import flowad3 from "../../assets/images/flowad3.png";
import TemplateSlider from "../shared/TemplateSlider";
import HumanSlider from "../shared/HumanSlider";

const Information = () => {
  return (
    <div>
      <div className="information-section-wrapper">
        <p className="info-section-title">Solutions of the perfect CV</p>
        {/* Solution Cards */}
        <div className="solution-cards">
          <SolutionCard
            img={solution1}
            title="Build CVs easily"
            info="Turn you profile into a CV in a single click."
          />
          <SolutionCard
            title="Templates for everyone"
            info="Choose the most suitable template."
          />
          <SolutionCard
            img={solution3}
            title="Download and use offline"
            info="You can simply download your CV with a button."
          />
        </div>
        {/* Flow Section */}
        <div className="flow-section">
          <div className="flow-1">
            <div className="flow-1-left">
              <img src={flowad1} alt="flowad1" />
            </div>
            <div className="flow-1-right">
              <p className="flow-1-right-title">
                Build with only one link easily
              </p>
              <p className="flow-1-right-info">
                You can build a CV with only one link with the information on
                the business platforms of yourself or the person whose CV you
                want to view.
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
            <div className="flow-3-a4">
              <TemplateSlider />
            </div>

            <HumanSlider />
          </div>
          <div className="flow-4">
            <div className="flow-4-left">
              <p className="flow-4-title">
                Download in a single click and use everywhere
              </p>
              <p className="flow-4-info">
                You can get the CV you have just by clicking a button, without
                any additional processing, and use it on online or offline
                platforms.
              </p>
              <GetStartedButton />
            </div>
            <div className="flow-4-right">
              <img src={flowad3} alt="flowad3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
