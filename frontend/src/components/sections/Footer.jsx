import React from "react";
import logo from "../../assets/images/wizard_hat.png";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section">
        <div className="footer-left">
          <div className="logo-brand">
            <img src={logo} alt="logo" className="white-logo" />
            <p>cvwizard</p>
          </div>
          <p>Lets do magic!</p>
        </div>
        <div className="footer-right">
          <div className="footer-about">
            <h4>About Us</h4>
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            <p>Contact</p>
          </div>
          <div className="footer-partners">
            <h4>Partners</h4>
            <p>jotform.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
