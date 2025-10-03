
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const BrandisbyLayout = () => (
  <>
    <Navbar />
    <Outlet />
    <Footer />
  </>
);

export default BrandisbyLayout;