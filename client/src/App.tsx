import React from "react";
import { Route, Routes } from "react-router-dom";

const Home = React.lazy(() => import("./pages/brandisby/Home"));
const Dashboard = React.lazy(() => import("./pages/brandisby/Dashboard"));
const BrandisbyLayout = React.lazy(() => import("./layouts/BrandisbyLayout"));
const DynamicLayout = React.lazy(() => import("./layouts/DynamicLayout"));
const DynamicHome = React.lazy(() => import("./pages/dynamic/DynamicHome"));
const App = () => {
  return (
    <Routes>
      {/* Brandisby Layout */}
      <Route path="/" element={<BrandisbyLayout />}>
        <Route index element={<Home />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Route>

      {/* Dynamic layout */}
      <Route path="/:tenant" element={<DynamicLayout />}>
        <Route path="home" element={<DynamicHome />} />
        {/* <Route path="about" element={<TenantAbout />} /> */}
      </Route>
    </Routes>
  );
};

export default App;
