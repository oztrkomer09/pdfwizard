import React from "react";
import transfer from "../../assets/images/transfer.png";

const Information = () => {
  return (
    <div className="section-wrapper">
      <div className="information-section">
        <p>Easily transfer your information without filling the form</p>
        <img src={transfer} alt="transfer" />
      </div>
    </div>
  );
};

export default Information;
