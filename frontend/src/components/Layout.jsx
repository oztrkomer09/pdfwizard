import React from "react";
import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";

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
