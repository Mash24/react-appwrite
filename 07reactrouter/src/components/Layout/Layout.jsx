import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header.jsx"; // ✅ Correct path
import Footer from "../Footer/Footer.jsx"; // ✅ Correct path


function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
