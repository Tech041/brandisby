import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";

const BrandisbyLayout = () => {
  const location = useLocation();

  // Check if current path includes register or login
  const hideFooter =
    location.pathname.includes("register") ||
    location.pathname.includes("login");

  return (
    <>
      <Outlet />
      {!hideFooter && <Footer />}
    </>
  );
};

export default BrandisbyLayout;
