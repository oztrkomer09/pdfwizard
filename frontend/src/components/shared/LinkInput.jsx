import React from "react";
import go from "../../assets/images/go.png";

const LinkInput = () => {
  return (
    <div className="link-input-wrapper">
      <div className="link-input-section">
        <p>Create free PDFs with pdfwizard</p>
        <div className="link-input">
          <input type="text" placeholder="Paste the link and run the wizard" />
          <button onClick={() => console.log("hadouken")}>
            <img src={go} alt="go" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LinkInput;
