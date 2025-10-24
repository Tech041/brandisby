import { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import DynamicNotFound from "../pages/dynamic/DynamicNotFound";
import { useTenantStore } from "../store/tenantSore";
import Spinner from "../components/Spinner";

const DynamicLayout = () => {
  const { tenant: slug } = useParams();
  const { resolveTenantFromSlug, tenantLoading } = useTenantStore();
  const [validTenant, setValidTenant] = useState<boolean | null>(null);

  useEffect(() => {
    const validateTenant = async () => {
      if (slug) {
        const isValid = await resolveTenantFromSlug(slug);
        setValidTenant(isValid);
      } else {
        setValidTenant(false);
      }
    };

    validateTenant();
  }, [slug]);

  if (tenantLoading|| validTenant === null) return <Spinner />;
  if (!validTenant) return <DynamicNotFound />;

  return <Outlet />;
};

export default DynamicLayout;
