import React from "react";
import Navbar from "./shared/Navbar";

const Layout = ({ children }) => {
  return (
    <div className="wrapper-layout">
      <Navbar />
      <main>{children}</main>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
