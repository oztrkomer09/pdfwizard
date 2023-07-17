import React from "react";
import transfer from "../../assets/images/transfer.png";

const ReversedInformation = () => {
  return (
    <div className="section-wrapper">
      <div className="reversed-information-section">
        <img src={transfer} alt="transfer" />
        <p>Easily transfer your information without filling the form</p>
      </div>
    </div>
  );
};

export default ReversedInformation;
