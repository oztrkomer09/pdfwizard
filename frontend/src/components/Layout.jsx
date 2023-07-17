import React from "react";
import Navbar from "./sections/Navbar";
import Footer from "./sections/Footer";

const Layout = ({ children }) => {
  return (
    <div className="wrapper-layout">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
