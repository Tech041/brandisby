import { useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
import DynamicNotFound from "../pages/dynamic/DynamicNotFound";
import { useTenantStore } from "../store/tenantSore";
import Spinner from "../components/Spinner";

const DynamicLayout = () => {
  const { tenant } = useParams();
  const { tenants, loading, fetchTenants } = useTenantStore();

  useEffect(() => {
    fetchTenants();
  }, [fetchTenants]);

  if (loading) return <Spinner />;

  if (!tenant || !Array.isArray(tenants) || !tenants.includes(tenant)) {
    return <DynamicNotFound />;
  }

  return <Outlet />;
};

export default DynamicLayout;
