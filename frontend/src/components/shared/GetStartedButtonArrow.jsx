import React from "react";
import arrow from "../../assets/images/right_arrow.png";

const GetStartedButtonArrow = () => {
  return (
    <button className="get-started-arrowed">
      Get Started Now!
      <img src={arrow} alt="arrow" className="button-arrow" />
    </button>
  );
};

export default GetStartedButtonArrow;
