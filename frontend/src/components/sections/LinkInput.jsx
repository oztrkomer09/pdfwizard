import React from "react";
import InputButtonComponent from "../shared/InputButton";
import human1 from "../../assets/images/human1.png";
import linkedIn from "../../assets/images/linkedIn.png";

const LinkInput = () => {
  return (
    <div className="link-section-wrapper">
      <div className="link-input-hero-section">
        <div className="link-input-left-section">
          <h2>We Help You To Get The Perfect CV</h2>
          <p>
            Copy the link of your profile, paste it in the URL part in the
            cvwizard and run. Finally, you can show your CV.
          </p>
          <InputButtonComponent />
        </div>
        <div className="link-input-right-section">
          <img src={human1} alt="human1" className="human1" />
        </div>
      </div>
      <div className="link-section-bottom-bar">
        <p>We're Supporting</p>
        <img src={linkedIn} alt="linkedIn" />
      </div>
    </div>
  );
};

export default LinkInput;
