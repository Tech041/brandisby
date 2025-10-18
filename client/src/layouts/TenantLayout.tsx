// src/layouts/TenantLayout.js
import { Outlet, useLocation } from "react-router-dom";
import SharedNavbar from "../components/dynamic/SharedNavbar";
import SharedFooter from "../components/dynamic/SharedFooter";

const TenantLayout = () => {
  const location = useLocation();

  const hideCartPaths: string[] = ["sign-in", "sign-up"];
  const hideNavbarAndFooter = hideCartPaths.some((path) =>
    location.pathname.includes(path)
  );

  return (
    <main className="w-full min-h-screen">
      {!hideNavbarAndFooter && <SharedNavbar />}{" "}
      <div className="flex-grow min-h-screen">
        <Outlet />
      </div>
      {!hideNavbarAndFooter && <SharedFooter />}{" "}
    </main>
  );
};

export default TenantLayout;
