import React from "react";
import logo from "../../assets/images/wizard_hat.png";
import language from "../../assets/images/language.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo-brand">
        <img src={logo} alt="logo" />
        <p>pdfwizard</p>
      </div>
      <img src={language} alt="language" />
    </div>
  );
};

export default Navbar;
