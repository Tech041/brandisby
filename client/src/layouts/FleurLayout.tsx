import React from "react";
import FleurFooter from "../components/fleur/FleurFooter";
import { Outlet } from "react-router-dom";

const FleurLayout = () => (
  <>
    <Outlet />
    <FleurFooter />
  </>
);

export default FleurLayout;
