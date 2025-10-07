import React from "react";
import { Route, Routes } from "react-router-dom";

const Home = React.lazy(() => import("./pages/brandisby/Home"));
const Dashboard = React.lazy(() => import("./pages/brandisby/Dashboard"));
const BrandisbyLayout = React.lazy(() => import("./layouts/BrandisbyLayout"));
const DynamicLayout = React.lazy(() => import("./layouts/DynamicLayout"));
const DynamicHome = React.lazy(() => import("./pages/dynamic/DynamicHome"));
const Register = React.lazy(() => import("./pages/dynamic/Register"));
const DynamicNotFound = React.lazy(
  () => import("./pages/dynamic/DynamicNotFound")
);
const NotFound = React.lazy(() => import("./pages/brandisby/NotFound"));

const App = () => {
  return (
    <Routes>
      {/* Brandisby Layout */}
      <Route path="/" element={<BrandisbyLayout />}>
        <Route index element={<Home />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Route>

      {/* Dynamic layout */}
      <Route path="/:tenant/*" element={<DynamicLayout />}>
        <Route path="" element={<DynamicHome />} />
        <Route path="sign-up" element={<Register />} />
        <Route path="*" element={<DynamicNotFound />} />
      </Route>
      
    </Routes>
  );
};

export default App;
