import React from "react";
import { Route, Routes } from "react-router-dom";
import BrandisbyLayout from "./layouts/BrandisbyLayout";
import SeracLayout from "./layouts/SeracLayout";
import FleurLayout from "./layouts/FleurLayout";

const Home = React.lazy(() => import("./pages/brandisby/Home"));
const Dashboard = React.lazy(() => import("./pages/brandisby/Dashboard"));
const SeracHome = React.lazy(() => import("./pages/serac/SeracHome"));
const FleurHome = React.lazy(() => import("./pages/fleur/FleurHome"));
const FleurAbout = React.lazy(() => import("./pages/fleur/FleurAbout"));
const SeracAbout = React.lazy(() => import("./pages/serac/SeracAbout"));

const App = () => {
  return (
    <Routes>
      {/* Brandisby Layout */}
      <Route path="/" element={<BrandisbyLayout />}>
        <Route index element={<Home />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Route>

      {/* Serac Layout */}
      <Route path="/serac" element={<SeracLayout />}>
        <Route path="home" element={<SeracHome />} />
        <Route path="about" element={<SeracAbout />} />
      </Route>

      {/* Fleur Layout */}
      <Route path="/fleurdevie" element={<FleurLayout />}>
        <Route path="home" element={<FleurHome />} />
        <Route path="about" element={<FleurAbout />} />
      </Route>
    </Routes>
  );
};

export default App;
