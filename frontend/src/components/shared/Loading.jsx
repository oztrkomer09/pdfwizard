import React from "react";
import jotformLogo from "../../assets/images/jotform_logo.png";

const Loading = () => {
  return (
    <div className="loading">
      <img src={jotformLogo} alt="logo" className="loading-logo" />
    </div>
  );
};

export default Loading;
