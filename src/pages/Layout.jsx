import React from "react";
import { Outlet } from "react-router-dom";
import ScrollToTop from "../Components/ScrollToTop";
import Navbar from "../Navbar";

const Layout = () => {
  return (
    <>
      <ScrollToTop>
        <Navbar />
        <Outlet />
      </ScrollToTop>
    </>
  );
};

export default Layout;