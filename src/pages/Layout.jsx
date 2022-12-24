import React from "react";
import { Outlet } from "react-router-dom";
import ScrollToTop from "../Components/ScrollToTop";
import Navbar from "../Navbar";

const Layout = () => {
  return (
    <div className="bg-light">
      <ScrollToTop>
        <Navbar />
        <Outlet />
      </ScrollToTop>
    </div>
  );
};

export default Layout;