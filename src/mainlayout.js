import React from "react";

const MainLayout = ({ children }) => {
  return (
    <>
      <main className="app-content">{children}</main>
    </>
  );
};

export default MainLayout;
