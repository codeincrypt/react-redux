import React from "react";
import Footer from "./view/include/Footer";
import Header from "./view/include/Header";

const Authlayout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="app-content">{children}</main>
      <Footer />
    </>
  );
};

export default Authlayout;
