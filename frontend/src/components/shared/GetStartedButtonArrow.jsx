import React from "react";
import arrow from "../../assets/images/right_arrow.png";

const GetStartedButtonArrow = () => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <button onClick={scrollTop} className="get-started-arrowed">
      Get Started Now!
      <img src={arrow} alt="arrow" className="button-arrow" />
    </button>
  );
};

export default GetStartedButtonArrow;
