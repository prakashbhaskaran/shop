import React from "react";
import { Div } from "../styles/global";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const Layout = ({ children }) => {
  return (
    <Div>
      <Navbar />
      {children}
      <Footer />
    </Div>
  );
};

export default Layout;
