import { Outlet, useParams } from "react-router-dom";
import NotFound from "../pages/brandisby/NotFound"; 

const validTenants = ["serac", "fleurdevie"];

const DynamicLayout = () => {
  const { tenant } = useParams();

  if (!tenant || !validTenants.includes(tenant)) {
    return <NotFound />;
  }

  return <Outlet />;
};

export default DynamicLayout;
