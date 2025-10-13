// src/layouts/TenantLayout.js
import { Outlet } from "react-router-dom";
import SharedNavbar from "../components/dynamic/SharedNavbar";
import SharedFooter from "../components/dynamic/SharedFooter";

const TenantLayout = () => {
  return (
    <main className="w-full min-h-screen">
      <SharedNavbar />
      <div className="flex-grow min-h-screen">
        <Outlet />
      </div>
      <SharedFooter />
    </main>
  );
};

export default TenantLayout;
