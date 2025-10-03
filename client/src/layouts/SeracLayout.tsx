import React from "react";
import SeracNavbar from "../components/serac/SeracNavbar";
import SeracFooter from "../components/serac/SeracFooter";
import { Outlet } from "react-router-dom";

const SeracLayout = () => (
  <>
    <SeracNavbar />
    <Outlet />
    <SeracFooter />
  </>
);

export default SeracLayout;
