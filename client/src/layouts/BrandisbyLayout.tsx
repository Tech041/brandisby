import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const BrandisbyLayout = () => (
  <>
    <Outlet />
    <Footer />
  </>
);

export default BrandisbyLayout;
