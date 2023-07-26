import React from "react";
import InputButtonComponent from "../shared/InputButton";
import human1 from "../../assets/images/human1.png";
import linkedIn from "../../assets/images/linkedIn.png";
import yenibiris from "../../assets/images/yenibiris.png";
import kariyer from "../../assets/images/kariyer.png";

const LinkInput = ({ setLoading, loading }) => {
  return (
    <div className="link-section-wrapper">
      <div className="link-input-hero-section">
        <div className="link-input-left-section">
          <h2>We Help You To Get The Perfect CV</h2>
          <p>
            Copy the link of your profile, paste it in the URL part in the
            cvwizard and run. Finally, you can show your CV.
          </p>
          <InputButtonComponent setLoading={setLoading} loading={loading} />
        </div>
        <div className="link-input-right-section">
          <img src={human1} alt="human1" className="human1" />
        </div>
      </div>
      <div className="link-section-bottom-bar">
        <p>We're Supporting</p>
        <div className="link-section-bottom-bar-brands">
          <img src={yenibiris} alt="yenibiris" />
          <img src={kariyer} alt="kariyer" />
          <img src={linkedIn} alt="linkedIn" />
        </div>
      </div>
    </div>
  );
};

export default LinkInput;
