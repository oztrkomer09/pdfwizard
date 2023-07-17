import React from "react";
import go from "../../assets/images/go.png";

const InputButtonComponent = () => {
  return (
    <div className="link-input">
      <input type="text" placeholder="Paste the link and run the wizard" />
      <button>
        <img src={go} alt="go" />
      </button>
    </div>
  );
};

export default InputButtonComponent;
