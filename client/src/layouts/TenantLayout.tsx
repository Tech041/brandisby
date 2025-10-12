// src/layouts/TenantLayout.js
import { Outlet } from "react-router-dom";
import DynamicFooter from "../components/dynamic/DynamicFooter";
import SharedNavbar from "../components/dynamic/SharedNavbar";


const TenantLayout = () => {
  return (
    <main className="w-full min-h-screen">
      <SharedNavbar />
      <div className="flex-grow min-h-screen">
        <Outlet />
      </div>
      <DynamicFooter />
    </main>
  );
};

export default TenantLayout;