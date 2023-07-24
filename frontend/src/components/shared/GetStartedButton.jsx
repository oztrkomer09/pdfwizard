import React from "react";

const GetStartedButton = () => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <button onClick={scrollTop} className="get-started">
      Get Started Now!
    </button>
  );
};

export default GetStartedButton;
