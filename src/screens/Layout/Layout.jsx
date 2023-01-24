import React from "react";
import { Outlet } from "react-router-dom";
import CNavbar from "../../components/cnavbar/CNavbar";

const Layout = () => {
  return (
    <div className="layout">
      <CNavbar />
      <Outlet />
    </div>
  );
};

export default Layout;
